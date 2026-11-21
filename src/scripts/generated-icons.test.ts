import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {test} from 'node:test';
import {inflateSync} from 'node:zlib';

await test('the WOFF character map contains exactly the referenced subset, with square advances', async () => {
  const font = await fs.readFile('themes/fullmetal-fluent.woff');
  const coverage = JSON.parse(await fs.readFile('src/icons/coverage.json', 'utf8'));
  const codepoints = JSON.parse(await fs.readFile('src/icons/codepoints.json', 'utf8'));
  assert.equal(font.toString('ascii', 0, 4), 'wOFF');
  assert.equal(font.readUInt32BE(8), font.length);
  const tables = new Map<string, Buffer>();
  for (let i = 0; i < font.readUInt16BE(12); i++) {
    const position = 44 + i * 20;
    const name = font.toString('ascii', position, position + 4);
    const offset = font.readUInt32BE(position + 4);
    const length = font.readUInt32BE(position + 8);
    const original = font.readUInt32BE(position + 12);
    const bytes = font.subarray(offset, offset + length);
    const table = length === original ? bytes : inflateSync(bytes);
    assert.equal(table.length, original);
    tables.set(name, table);
  }
  const cmap = tables.get('cmap')!;
  const characters = new Set<number>();
  let found = false;
  for (let i = 0; i < cmap.readUInt16BE(2); i++) {
    const record = 4 + i * 8;
    const offset = cmap.readUInt32BE(record + 4);
    if (cmap.readUInt16BE(record) !== 3 || cmap.readUInt16BE(offset) !== 4) continue;
    found = true;
    const segments = cmap.readUInt16BE(offset + 6) / 2;
    const ends = offset + 14;
    const starts = ends + segments * 2 + 2;
    const deltas = starts + segments * 2;
    const ranges = deltas + segments * 2;
    for (let segment = 0; segment < segments; segment++) {
      const end = cmap.readUInt16BE(ends + segment * 2);
      const start = cmap.readUInt16BE(starts + segment * 2);
      const delta = cmap.readInt16BE(deltas + segment * 2);
      const range = cmap.readUInt16BE(ranges + segment * 2);
      for (let codepoint = start; codepoint <= end && codepoint < 0xffff; codepoint++) {
        const raw = range ? cmap.readUInt16BE(ranges + segment * 2 + range + (codepoint - start) * 2) : codepoint;
        const glyph = range && raw === 0 ? 0 : (raw + delta) & 0xffff;
        if (glyph) characters.add(codepoint);
      }
    }
  }
  assert(found, 'Windows BMP character map exists');
  assert.deepEqual(
    [...characters].sort((a, b) => a - b),
    Object.keys(coverage.assets)
      .map((asset) => codepoints[asset])
      .sort((a: number, b: number) => a - b)
  );
  const units = tables.get('head')!.readUInt16BE(18);
  const metricCount = tables.get('hhea')!.readUInt16BE(34);
  const metrics = tables.get('hmtx')!;
  for (let i = 1; i < metricCount; i++)
    assert.equal(metrics.readUInt16BE(i * 4), units, 'Every icon has a square advance');
});
