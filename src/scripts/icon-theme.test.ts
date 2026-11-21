import assert from 'node:assert/strict';
import {test} from 'node:test';

import {allocateCodepoints, resolveCoverage, validateAssetName, type Inventory} from './icon-theme.ts';

const inventory: Inventory = {
  source: {repository: 'fixture', version: '1', commit: 'fixture', scope: 'unit test'},
  icons: [
    {id: 'close', default: null, codepoint: 0xea76, sources: []},
    {id: 'widget-close', default: 'close', sources: []},
    {id: 'panel-close', default: 'widget-close', sources: []},
    {id: 'brand', default: null, codepoint: 0xea84, sources: []},
  ],
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
  assert.throws(() => resolveCoverage({...inventory, icons: [{id: 'a', default: 'a', sources: []}]}, base), /Cyclic/);
  assert.throws(
    () =>
      resolveCoverage({...inventory, icons: [{id: 'a', default: 'missing', sources: []}]}, {mappings: {}, keep: {}}),
    /Unknown icon default/
  );
  assert.throws(
    () =>
      resolveCoverage(
        {...inventory, icons: [{id: 'a', default: 'close', alternateDefaults: ['brand'], sources: []}]},
        {mappings: {}, keep: {}}
      ),
    /Ambiguous/
  );
});
await test('codepoints stay stable across additions, reordering and retired assets', () => {
  const previous = {'search_16_regular.svg': 0xe001, 'retired_16_regular.svg': 0xe000};
  const assigned = allocateCodepoints(['search_16_regular.svg', 'add_16_regular.svg'], previous);
  assert.equal(assigned['search_16_regular.svg'], 0xe001);
  assert.equal(assigned['add_16_regular.svg'], 0xe002);
  assert.equal(assigned['retired_16_regular.svg'], 0xe000);
  assert.throws(() => allocateCodepoints([], {'a_16_regular.svg': 0xe000, 'b_16_regular.svg': 0xe000}), /duplicate/);
});
await test('only monochrome, flat package filenames are accepted', () => {
  for (const asset of ['../search_16_regular.svg', 'search_16_color.svg', 'search.svg']) {
    assert.throws(() => validateAssetName(asset), /Invalid/);
  }
});
