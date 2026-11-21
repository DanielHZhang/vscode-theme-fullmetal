import {execFileSync} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

import ts from 'typescript-compiler';

// Run against a clean, pinned VS Code checkout. Normal builds use the committed snapshot.
const source = path.resolve(process.argv[2] ?? '');
if (!process.argv[2]) throw new Error('Usage: pnpm update-icon-inventory /path/to/vscode');
const git = (...args: string[]) =>
  execFileSync('git', ['-C', source, ...args], {encoding: 'utf8', maxBuffer: 32 * 1024 * 1024}).trim();
if (git('status', '--porcelain', '--untracked-files=no')) throw new Error('VS Code checkout must be clean');
const files = git('ls-files', 'src', 'extensions')
  .split('\n')
  .filter((file) => !/(?:^|\/)(?:test|tests|fixtures)(?:\/|\.)/.test(file));
type Icon = {
  id: string;
  default: string | null;
  codepoint?: number;
  alternateDefaults?: string[];
};
const icons = new Map<string, Icon>();
const codicons = new Map<string, string>();
const symbols = new Map<string, string>();
const pending: {file: string; node: ts.CallExpression; id: string}[] = [];
const imports = new Map<string, Map<string, string>>();
const string = (n: ts.Node | undefined): string | undefined =>
  n && (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) ? n.text : undefined;
const add = (icon: Icon) => {
  const previous = icons.get(icon.id);
  if (previous) {
    if (
      previous.codepoint === undefined &&
      (previous.default !== icon.default || previous.codepoint !== icon.codepoint)
    ) {
      previous.alternateDefaults ??= [];
      if (icon.default && !previous.alternateDefaults.includes(icon.default))
        previous.alternateDefaults.push(icon.default);
    }
  } else icons.set(icon.id, icon);
};

for (const file of files
  .filter((file) => file.startsWith('src/') && file.endsWith('.ts') && !file.endsWith('.d.ts'))
  .sort((a, b) => {
    const rank = (f: string) => (f.endsWith('/codiconsLibrary.ts') ? 0 : f.endsWith('/codicons.ts') ? 1 : 2);
    return rank(a) - rank(b) || a.localeCompare(b, 'en');
  })) {
  const text = await fs.readFile(path.join(source, file), 'utf8');
  if (!text.includes('registerIcon') && !/codicons(?:Library)?\.ts$/.test(file)) continue;
  const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
  const bindings = new Map<string, string>();
  imports.set(file, bindings);
  for (const statement of ast.statements) {
    if (
      !ts.isImportDeclaration(statement) ||
      !statement.importClause?.namedBindings ||
      !ts.isNamedImports(statement.importClause.namedBindings)
    )
      continue;
    const module = string(statement.moduleSpecifier);
    if (!module?.startsWith('.')) continue;
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(file), module.replace(/\.js$/, '.ts')));
    for (const binding of statement.importClause.namedBindings.elements) {
      bindings.set(binding.name.text, `${target}:${binding.propertyName?.text ?? binding.name.text}`);
    }
  }
  const visit = (node: ts.Node) => {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      (node.expression.text === 'registerIcon' ||
        (node.expression.text === 'register' && /codicons(?:Library)?\.ts$/.test(file)))
    ) {
      const id = string(node.arguments[0]);
      if (!id) throw new Error(`Nonliteral icon ID in ${file}: ${node.getText(ast)}`);
      if (ts.isPropertyAssignment(node.parent)) codicons.set(node.parent.name.getText(ast), id);
      if (ts.isVariableDeclaration(node.parent)) symbols.set(`${file}:${node.parent.name.getText(ast)}`, id);
      pending.push({file, node, id});
    }
    ts.forEachChild(node, visit);
  };
  visit(ast);
}

for (const item of pending) {
  const value = item.node.arguments[1];
  let fallback = string(value);
  let codepoint: number | undefined;
  if (value && ts.isNumericLiteral(value)) codepoint = Number(value.text);
  else if (value && ts.isPropertyAccessExpression(value) && value.expression.getText() === 'Codicon') {
    fallback = codicons.get(value.name.text);
  } else if (value && ts.isIdentifier(value)) {
    fallback = symbols.get(`${item.file}:${value.text}`) ?? symbols.get(imports.get(item.file)?.get(value.text) ?? '');
  } else if (value && ts.isObjectLiteralExpression(value)) {
    const property = value.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText() === 'fontCharacter');
    if (property && ts.isPropertyAssignment(property)) {
      const character = string(property.initializer);
      if (character)
        codepoint = character.startsWith('\\') ? parseInt(character.slice(1), 16) : character.codePointAt(0);
    }
  }
  if (!fallback && codepoint === undefined) throw new Error(`Unresolved default for ${item.id}: ${value?.getText()}`);
  // codiconsUtil resolves its string references to a character immediately; these are not registry aliases.
  if (item.node.expression.getText() === 'register' && fallback) {
    codepoint = icons.get(fallback)?.codepoint;
    if (codepoint === undefined) throw new Error(`Unknown Codicon character ${fallback}`);
    fallback = undefined;
  }
  if (item.node.expression.getText() === 'register' && icons.has(item.id)) {
    const previous = icons.get(item.id)!;
    previous.codepoint = codepoint;
    continue;
  }
  add({
    id: item.id,
    default: fallback ?? null,
    ...(codepoint === undefined ? {} : {codepoint}),
  });
}

// Built-in extension manifests can register both aliases and their own font glyphs.
for (const file of files.filter((file) => /^extensions\/[^/]+\/package\.json$/.test(file))) {
  const manifest = JSON.parse(await fs.readFile(path.join(source, file), 'utf8'));
  for (const [id, value] of Object.entries(manifest.contributes?.icons ?? {}) as [
    string,
    {default: string | {fontCharacter: string}},
  ][]) {
    const defaults = value.default;
    add({
      id,
      default: typeof defaults === 'string' ? defaults : null,
      ...(typeof defaults === 'string'
        ? {}
        : {
            codepoint: defaults.fontCharacter.startsWith('\\')
              ? parseInt(defaults.fontCharacter.slice(1), 16)
              : defaults.fontCharacter.codePointAt(0),
          }),
    });
  }
}
for (const icon of icons.values()) {
  const seen = new Set<string>();
  let current = icon;
  while (current.default) {
    if (seen.has(current.id)) throw new Error(`Cyclic default: ${icon.id}`);
    seen.add(current.id);
    const next = icons.get(current.default);
    if (!next) throw new Error(`Unknown default ${current.default} for ${current.id}`);
    current = next;
  }
}
const pkg = JSON.parse(await fs.readFile(path.join(source, 'package.json'), 'utf8'));
const inventory = {
  source: {
    repository: 'microsoft/vscode',
    version: pkg.version,
    commit: git('rev-parse', 'HEAD'),
    scope:
      'Production src registrations and built-in extension icon contributions; excludes tests and third-party extensions',
  },
  icons: Object.fromEntries(
    [...icons.values()]
      .sort((a, b) => a.id.localeCompare(b.id, 'en'))
      .map((icon) => [
        icon.id,
        icon.default && icon.alternateDefaults?.length ? [icon.default, ...icon.alternateDefaults] : icon.default,
      ])
  ),
};
await fs.mkdir('src/icons', {recursive: true});
await fs.writeFile('src/icons/vscode-inventory.json', `${JSON.stringify(inventory, null, 2)}\n`);
console.log(`Inventoried ${icons.size} VS Code ${pkg.version} icon IDs.`);
