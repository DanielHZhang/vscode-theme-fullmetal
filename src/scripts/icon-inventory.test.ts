import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {test} from 'node:test';

await test('source inventory distinguishes Codicon character aliases from workbench inheritance', async () => {
  const temporary = await fs.mkdtemp(path.join(os.tmpdir(), 'fullmetal-inventory-test-'));
  try {
    const source = path.join(temporary, 'source');
    const output = path.join(temporary, 'output');
    await fs.mkdir(source);
    await fs.mkdir(output);
    const files: Record<string, string> = {
      'package.json': JSON.stringify({version: 'fixture'}),
      'src/vs/base/common/codiconsLibrary.ts': `export const library = { close: register('close', 0xe001), add: register('add', 0xe002) };`,
      'src/vs/base/common/codicons.ts': `export const derived = { dialogClose: register('dialog-close', 'close'), add: register('add', 0xe003) };`,
      'src/widget.ts': `export const widgetClose = registerIcon(
        'widget-close', Codicon.close, localize('widgetClose', 'Close widget'));
        export const deeper = registerIcon('deeper', widgetClose, localize('deeper', 'Nested widget'));
        export const first = registerIcon('ambiguous', Codicon.close);
        export const second = registerIcon('ambiguous', Codicon.add);`,
      'src/other.ts': `import {widgetClose as imported} from './widget.js';
        export const another = registerIcon('imported-close', imported);`,
      'src/test/ignored.ts': `registerIcon('test-only', Codicon.close);`,
      'extensions/builtin/package.json': JSON.stringify({
        contributes: {
          icons: {
            'extension-alias': {default: 'add'},
            'extension-font': {default: {fontCharacter: '\\e004'}},
          },
        },
      }),
    };
    for (const [file, text] of Object.entries(files)) {
      await fs.mkdir(path.dirname(path.join(source, file)), {recursive: true});
      await fs.writeFile(path.join(source, file), text);
    }
    const git = (...args: string[]) => execFileSync('git', ['-C', source, ...args], {stdio: 'ignore'});
    git('init');
    git('add', '.');
    git('-c', 'user.name=Inventory Test', '-c', 'user.email=inventory@example.invalid', 'commit', '-m', 'Fixture');
    const run = () =>
      execFileSync(process.execPath, [path.resolve('src/scripts/update-icon-inventory.ts'), source], {
        cwd: output,
        encoding: 'utf8',
      });
    run();
    const result = JSON.parse(await fs.readFile(path.join(output, 'src/icons/vscode-inventory.json'), 'utf8'));
    const get = (id: string) => result.icons.find((icon: {id: string}) => icon.id === id);
    assert.equal(result.icons.length, 9);
    assert.equal(get('add').codepoint, 0xe003, 'Derived Codicon registration replaces the base character');
    assert.equal(get('dialog-close').default, null);
    assert.equal(get('dialog-close').codepoint, get('close').codepoint);
    assert.equal(get('widget-close').default, 'close');
    assert.equal(get('deeper').default, 'widget-close');
    assert.equal(get('imported-close').default, 'widget-close');
    assert.deepEqual(get('ambiguous').alternateDefaults, ['add']);
    assert.equal(get('extension-alias').default, 'add');
    assert.equal(get('extension-font').codepoint, 0xe004);
    assert(!get('test-only'));
    const before = await fs.readFile(path.join(output, 'src/icons/vscode-inventory.json'));
    run();
    assert.deepEqual(await fs.readFile(path.join(output, 'src/icons/vscode-inventory.json')), before);
  } finally {
    await fs.rm(temporary, {recursive: true, force: true});
  }
});
