import assert from 'node:assert/strict';
import {test} from 'node:test';

import {allocateCodepoints, resolveCoverage, validateAssetName, type Inventory} from './icon-theme.ts';

const inventory: Inventory = {
  source: {repository: 'fixture', version: '1', commit: 'fixture', scope: 'unit test'},
  icons: {'close': null, 'widget-close': 'close', 'panel-close': 'widget-close', 'brand': null},
};
await test('workbench aliases resolve transitively and share one Fluent asset', () => {
  const rows = resolveCoverage(inventory, {
    mappings: {close: 'dismiss_16_regular.svg'},
    keep: {brand: 'Brand identity'},
  });
  assert.equal(rows.find((row) => row.id === 'panel-close')?.status, 'inherited');
  assert.equal(rows.find((row) => row.id === 'panel-close')?.via, 'close');
  assert.deepEqual([...new Set(rows.flatMap((row) => (row.asset ? [row.asset] : [])))], ['dismiss_16_regular.svg']);
});
await test('a semantic override takes precedence over the inherited glyph', () => {
  const rows = resolveCoverage(inventory, {
    mappings: {'close': 'dismiss_16_regular.svg', 'widget-close': 'subtract_16_regular.svg'},
    keep: {brand: 'Brand identity'},
  });
  assert.equal(rows.find((row) => row.id === 'panel-close')?.asset, 'subtract_16_regular.svg');
});
await test('new roots, stale IDs, conflicting decisions and impossible keep decisions fail', () => {
  assert.throws(() => resolveCoverage(inventory, {mappings: {}, keep: {}}), /Unreviewed/);
  assert.throws(
    () => resolveCoverage(inventory, {mappings: {typo: 'dismiss_16_regular.svg'}, keep: {}}),
    /Unknown mapped/
  );
  assert.throws(
    () => resolveCoverage(inventory, {mappings: {close: 'dismiss_16_regular.svg'}, keep: {close: 'Conflict'}}),
    /Conflicting/
  );
  assert.throws(
    () =>
      resolveCoverage(inventory, {
        mappings: {close: 'dismiss_16_regular.svg'},
        keep: {'widget-close': 'Keep', 'brand': 'Brand'},
      }),
    /Cannot keep/
  );
});
await test('cycles, missing defaults and ambiguous upstream registrations fail', () => {
  const base = {mappings: {}, keep: {}};
  assert.throws(() => resolveCoverage({...inventory, icons: {a: 'a'}}, base), /Cyclic/);
  assert.throws(() => resolveCoverage({...inventory, icons: {a: 'missing'}}, base), /Unknown icon default/);
  assert.throws(() => resolveCoverage({...inventory, icons: {a: ['close', 'brand']}}, base), /Ambiguous/);
});
await test('codepoints are deterministic and shared by repeated assets', () => {
  const expected = {'add_16_regular.svg': 0xe000, 'search_16_regular.svg': 0xe001};
  assert.deepEqual(allocateCodepoints(['search_16_regular.svg', 'add_16_regular.svg']), expected);
  assert.deepEqual(allocateCodepoints(['add_16_regular.svg', 'search_16_regular.svg', 'add_16_regular.svg']), expected);
});
await test('only monochrome, flat package filenames are accepted', () => {
  for (const asset of ['../search_16_regular.svg', 'search_16_color.svg', 'search.svg']) {
    assert.throws(() => validateAssetName(asset), /Invalid/);
  }
});
