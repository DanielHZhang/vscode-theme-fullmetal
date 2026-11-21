export interface InventoryIcon {
  id: string;
  default: string | null;
  codepoint?: number;
  description?: string;
  sources: string[];
  alternateDefaults?: string[];
}

export interface Inventory {
  source: {repository: string; version: string; commit: string; scope: string};
  icons: InventoryIcon[];
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
  const icons = new Map(inventory.icons.map((icon) => [icon.id, icon]));
  if (icons.size !== inventory.icons.length) throw new Error('Duplicate inventory ID');
  for (const id of [...Object.keys(mapping.mappings), ...Object.keys(mapping.keep)]) {
    if (!icons.has(id)) throw new Error(`Unknown mapped VS Code ID: ${id}`);
    if (id in mapping.mappings && id in mapping.keep) throw new Error(`Conflicting decision: ${id}`);
  }
  const resolve = (id: string, seen = new Set<string>()): Coverage => {
    if (seen.has(id)) throw new Error(`Cyclic icon defaults: ${id}`);
    seen.add(id);
    const icon = icons.get(id);
    if (!icon) throw new Error(`Unknown icon default: ${id}`);
    if (mapping.mappings[id]) return {id, status: 'mapped', via: id, asset: mapping.mappings[id]};
    if (mapping.keep[id]) return {id, status: 'default', via: id, reason: mapping.keep[id]};
    if (icon.alternateDefaults?.length) throw new Error(`Ambiguous defaults require an explicit decision: ${id}`);
    if (icon.default) {
      const parent = resolve(icon.default, seen);
      return {...parent, id, status: parent.asset ? 'inherited' : 'default'};
    }
    throw new Error(`Unreviewed icon: ${id}`);
  };
  const coverage = inventory.icons.map((icon) => resolve(icon.id));
  // A default glyph is never isolated from replacements further down its chain.
  for (const row of coverage.filter((row) => row.status === 'default')) {
    let icon = icons.get(row.id)!;
    const seen = new Set<string>();
    while (icon.default) {
      if (seen.has(icon.id)) throw new Error(`Cyclic icon defaults: ${icon.id}`);
      seen.add(icon.id);
      if (mapping.mappings[icon.default]) throw new Error(`Cannot keep ${row.id}: ${icon.default} is overridden`);
      const next = icons.get(icon.default);
      if (!next) throw new Error(`Unknown icon default: ${icon.default}`);
      icon = next;
    }
  }
  return coverage;
}

export function validateAssetName(asset: string): void {
  if (!/^[a-z0-9_]+_(12|16|20|24|28|32|48)_(regular|filled)\.svg$/.test(asset)) {
    throw new Error(`Invalid monochrome Fluent asset: ${asset}`);
  }
}

export function allocateCodepoints(assets: string[], previous: Record<string, number>): Record<string, number> {
  const used = new Set<number>();
  for (const [asset, codepoint] of Object.entries(previous)) {
    validateAssetName(asset);
    if (!Number.isInteger(codepoint) || codepoint < 0xe000 || codepoint > 0xf8ff || used.has(codepoint)) {
      throw new Error(`Invalid or duplicate private-use codepoint for ${asset}`);
    }
    used.add(codepoint);
  }
  const result = {...previous};
  let next = 0xe000;
  for (const asset of [...new Set(assets)].sort()) {
    validateAssetName(asset);
    if (result[asset] !== undefined) continue;
    while (used.has(next)) next++;
    if (next > 0xf8ff) throw new Error('Private-use codepoint space exhausted');
    result[asset] = next;
    used.add(next);
  }
  return Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b, 'en')));
}
