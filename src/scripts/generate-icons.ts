import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import os from 'node:os';
import path from 'node:path';

import {FontAssetType, generateFonts} from 'fantasticon';

import {
  allocateCodepoints,
  resolveCoverage,
  validateAssetName,
  type Inventory,
  type IconMapping,
} from './icon-theme.ts';

const read = async (file: string) => JSON.parse(await fs.readFile(file, 'utf8'));
const inventory: Inventory = await read('src/icons/vscode-inventory.json');
const mapping: IconMapping = await read('src/icons/mapping.json');
const coverage = resolveCoverage(inventory, mapping);
const assets = [...new Set(coverage.flatMap((row) => (row.asset ? [row.asset] : [])))].sort();
const codepoints = allocateCodepoints(assets);
const require = createRequire(import.meta.url);
const packageDir = path.dirname(require.resolve('@fluentui/svg-icons/package.json'));
const fluent = await read(path.join(packageDir, 'package.json'));
const workspacePackage = await read('package.json');
assert.equal(
  fluent.version,
  workspacePackage.devDependencies['@fluentui/svg-icons'],
  'Pin the Fluent source version exactly'
);
const temporary = await fs.mkdtemp(path.join(os.tmpdir(), 'fullmetal-icons-'));
const inputDir = path.join(temporary, 'svg');
const outputDir = path.join(temporary, 'font');
await fs.mkdir(inputDir);
await fs.mkdir(outputDir);
try {
  const assetDetails: Record<string, {sha256: string; codepoint: number}> = {};
  for (const asset of assets) {
    validateAssetName(asset);
    const svg = await fs.readFile(path.join(packageDir, 'icons', asset), 'utf8');
    const canvas = /viewBox="([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)"/.exec(svg);
    assert(
      canvas && canvas[1] === '0' && canvas[2] === '0' && canvas[3] === canvas[4],
      `Select a square Fluent canvas: ${asset}`
    );
    // Plain path-based regular/filled icons only. Never silently flatten colors or raster artwork.
    assert(
      !/<(?:image|text|linearGradient|radialGradient|mask|clipPath)\b/i.test(svg),
      `Unsupported SVG content: ${asset}`
    );
    assetDetails[asset] = {sha256: createHash('sha256').update(svg).digest('hex'), codepoint: codepoints[asset]};
    await fs.writeFile(path.join(inputDir, asset), svg);
  }
  const fontCodepoints = Object.fromEntries(assets.map((asset) => [asset.slice(0, -4), codepoints[asset]]));
  const generated = await generateFonts(
    {
      inputDir,
      outputDir,
      name: 'fullmetal-fluent',
      fontTypes: [FontAssetType.WOFF],
      assetTypes: [],
      codepoints: fontCodepoints,
      getIconId: ({basename}) => basename,
      fontHeight: 1024,
      descent: 0,
      normalize: true,
      formatOptions: {
        ttf: {ts: 0},
        svg: {
          fontId: 'fullmetal-fluent',
          round: 1e12,
          usePathBounds: false,
          centerHorizontally: false,
          fixedWidth: true,
          metadata: 'Fluent System Icons — Microsoft Corporation, MIT License',
        },
      },
    },
    false
  );
  assert.deepEqual(
    Object.keys(generated.assetsIn).sort(),
    Object.keys(fontCodepoints).sort(),
    'Font contains precisely the selected assets'
  );
  const font = generated.assetsOut.woff;
  assert(font && typeof font !== 'string');
  assert.equal(font.subarray(0, 4).toString(), 'wOFF');
  const iconDefinitions = Object.fromEntries(
    Object.entries(mapping.mappings)
      .sort(([a], [b]) => a.localeCompare(b, 'en'))
      .map(([id, asset]) => [id, {fontCharacter: `\\${codepoints[asset].toString(16)}`}])
  );
  const theme = {
    fonts: [
      {
        id: 'fullmetal-fluent',
        src: [{path: './fullmetal-fluent.woff', format: 'woff'}],
        weight: 'normal',
        style: 'normal',
      },
    ],
    iconDefinitions,
  };
  const count = (status: string) => coverage.filter((row) => row.status === status).length;
  const summary = {
    vscode: inventory.source,
    fluent: {package: fluent.name, version: fluent.version},
    total: coverage.length,
    mapped: count('mapped'),
    inherited: count('inherited'),
    default: count('default'),
    glyphs: assets.length,
    fontBytes: font.length,
    fontSha256: createHash('sha256').update(font).digest('hex'),
  };
  const outputs: Record<string, string | Buffer> = {
    'fullmetal-fluent.woff': font,
    'fullmetal-product-icon-theme.json': `${JSON.stringify(theme, null, 2)}\n`,
    'coverage.json': `${JSON.stringify({summary, assets: assetDetails, icons: coverage}, null, 2)}\n`,
  };
  const check = process.argv.includes('--check');
  const buildDir = 'build/product-icons';
  if (!check) await fs.mkdir(buildDir, {recursive: true});
  for (const [name, value] of Object.entries(outputs)) {
    const file = path.join(buildDir, name);
    if (check)
      assert.deepEqual(
        await fs.readFile(file),
        Buffer.from(value),
        `Generated file is stale: ${file}. Run pnpm generate-icons.`
      );
    else await fs.writeFile(file, value);
  }
  console.log(JSON.stringify(summary, null, 2));
} finally {
  await fs.rm(temporary, {recursive: true, force: true});
}
