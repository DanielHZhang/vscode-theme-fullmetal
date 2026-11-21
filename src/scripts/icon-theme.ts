export interface Inventory {
  source: {repository: string; version: string; commit: string; scope: string};
  // null is a native glyph, a string is an alias, and an array records competing defaults.
  icons: Record<string, string | null | string[]>;
}

export interface IconMapping {
  // Exact filenames inside @fluentui/svg-icons/icons, including size and style.
  mappings: Record<string, string>;
  keep: Record<string, string>;
}

export interface Coverage {
  id: string;
  status: 'mapped' | 'inherited' | 'default';
  via: string;
  asset?: string;
  reason?: string;
}

export function resolveCoverage(inventory: Inventory, mapping: IconMapping): Coverage[] {
  const icons = new Map(Object.entries(inventory.icons));
  for (const id of [...Object.keys(mapping.mappings), ...Object.keys(mapping.keep)]) {
    if (!icons.has(id)) throw new Error(`Unknown mapped VS Code ID: ${id}`);
    if (id in mapping.mappings && id in mapping.keep) throw new Error(`Conflicting decision: ${id}`);
  }
  const resolve = (id: string, seen = new Set<string>()): Coverage => {
    if (seen.has(id)) throw new Error(`Cyclic icon defaults: ${id}`);
    seen.add(id);
    const fallback = icons.get(id);
    if (fallback === undefined) throw new Error(`Unknown icon default: ${id}`);
    if (mapping.mappings[id]) return {id, status: 'mapped', via: id, asset: mapping.mappings[id]};
    if (mapping.keep[id]) return {id, status: 'default', via: id, reason: mapping.keep[id]};
    if (Array.isArray(fallback)) throw new Error(`Ambiguous defaults require an explicit decision: ${id}`);
    if (fallback) {
      const parent = resolve(fallback, seen);
      return {...parent, id, status: parent.asset ? 'inherited' : 'default'};
    }
    throw new Error(`Unreviewed icon: ${id}`);
  };
  const coverage = [...icons.keys()].map((id) => resolve(id));
  // A default glyph is never isolated from replacements further down its chain.
  for (const row of coverage.filter((row) => row.status === 'default')) {
    const pending = [row.id];
    const seen = new Set<string>();
    while (pending.length) {
      const id = pending.pop()!;
      if (seen.has(id)) continue;
      seen.add(id);
      if (mapping.mappings[id]) throw new Error(`Cannot keep ${row.id}: ${id} is overridden`);
      const fallback = icons.get(id);
      if (fallback === undefined) throw new Error(`Unknown icon default: ${id}`);
      if (fallback) pending.push(...(Array.isArray(fallback) ? fallback : [fallback]));
    }
  }
  return coverage;
}

export function validateAssetName(asset: string): void {
  if (!/^[a-z0-9_]+_(12|16|20|24|28|32|48)_(regular|filled)\.svg$/.test(asset)) {
    throw new Error(`Invalid monochrome Fluent asset: ${asset}`);
  }
}

export function allocateCodepoints(assets: string[]): Record<string, number> {
  const sorted = [...new Set(assets)].sort();
  if (sorted.length > 0x1900) throw new Error('Private-use codepoint space exhausted');
  return Object.fromEntries(sorted.map((asset, index) => [asset, 0xe000 + index]));
}
