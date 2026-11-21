# Fullmetal Fluent product icons

Select **Preferences: Product Icon Theme → Fullmetal Fluent**. The color theme and
product icon theme can be selected independently; installing Fullmetal does not
change your chosen icon theme. The old Fluent Icons extension is not required.

## Source and packaging

`@fluentui/svg-icons` is an exactly pinned development dependency. Its selected
monochrome SVGs are converted to a WOFF with `fantasticon`. The VSIX contains the
WOFF, product icon theme JSON, existing Fullmetal files, and license notices.
It contains neither the SVG package nor the font-generation dependencies.
There is no Figma step, React dependency, or runtime icon conversion.

The font's input is the **unique set of assets referenced by applicable mappings**,
not a copy of Microsoft's entire catalog. Each size/style combination is one
glyph, even when many VS Code IDs use it. The selection generally prefers the
native 16px Regular artwork, with selected larger variants where necessary.
Filled variants are used for filled states. The upstream canvas and whitespace
are preserved; every selected icon must have a square canvas and a square advance.

## Inventory and coverage

- `src/icons/vscode-inventory.json`: snapshot of recognized IDs and default-icon
  relationships. It records the upstream revision and lets builds validate the
  mapping without fetching a VS Code source checkout.
- `src/icons/mapping.json`: explicit VS Code ID → exact Fluent filename mappings,
  plus explicit decisions and reasons for retaining native glyphs.

The build writes the font, theme definition, and coverage report to
`build/product-icons/`. The report records how each VS Code ID is resolved,
along with the source versions, SVG hashes, and glyph codepoints. The generator
assigns private-use codepoints in sorted asset order and builds the font and
theme definition together.

The initial inventory is pinned to **VS Code 1.140.0**, matching the extension's
minimum supported version. It includes all production `src` icon registrations
and built-in extension manifest icon contributions, not tests or arbitrary
third-party extensions. Some source registrations are conditional or lazy; this
is a source inventory of supported IDs, not a list of icons currently on screen.

Workbench registry defaults form an inheritance chain: overriding `close` also
covers `widget-close`, unless there is a more specific theme override. Conversely,
Codicon's own string aliases are resolved to character codes at registration time;
they need explicit theme entries. The inventory distinguishes these cases.
Duplicate upstream registrations with different defaults require an explicit
decision rather than assuming a module loading order.

Brand/provider/platform logos, mascot artwork, and debugger-specific breakpoint
and stack-frame states retain the native artwork. A small number of other symbols
also retain their defaults where no suitable Fluent replacement was selected.
Every such decision is visible in the coverage report. Installed extensions using
the mapped theme IDs can inherit replacements; custom image assets are outside
product icon theming. Additional IDs introduced by later VS Code versions continue
to use their registered defaults until the inventory is refreshed.

## Build and review

Use Node.js 24+ and pnpm (as in the existing release workflow):

```sh
pnpm install --frozen-lockfile
pnpm generate-icons
pnpm check-icons
pnpm test-icons
pnpm preview-icons
pnpm exec vsce package --no-dependencies
```

Open `build/icon-preview.html` to inspect every generated glyph at 12, 16, 20, 24,
and 32 pixels, with a searchable list of all affected VS Code IDs. This preview is
local build output. `check-icons` compares a fresh generation against the files
in `build/product-icons/` byte for byte. Font timestamps are fixed for
reproducibility. Packaging builds the font and theme automatically and includes
both files in the VSIX.

`pnpm smoke-icons` downloads the pinned VS Code version and opens an isolated
development host, selects the theme, then checks the actual renderer CSS, WOFF
loading, alias inheritance, retained GitHub artwork, and 16px glyph advance.
On headless Linux run `xvfb-run -a pnpm smoke-icons`. A local existing VS Code
executable can be supplied with `VSCODE_EXECUTABLE_PATH`; use
`VSCODE_TEST_VERSION` to test another release. No user settings or extensions are
used by the smoke host.

## Updating

1. Check out a clean Microsoft VS Code release tag (or a specific commit). Run
   `pnpm update-icon-inventory /absolute/path/to/vscode`. The checkout needs both
   `src` and `extensions` available. Review the recorded version/commit and diff.
2. Review new IDs. Map new native roots to suitable Fluent assets or add an
   explicit native-default decision. New workbench aliases inherit existing
   decisions automatically. Remove decisions for deleted IDs. An unreviewed root,
   unknown ID/default, or ambiguous default fails the build.
3. To update Fluent, install an exact new `@fluentui/svg-icons` version. Review the
   upstream artwork changes, then regenerate. Missing or unsupported assets fail
   the build rather than being silently substituted.
4. Run the checks above and inspect the preview and a development host. Commit
   changes to the inventory, mapping, and dependency lockfile as applicable.

The existing **Fullmetal: Save Built-in VSCode Theme Schemas** command also exports
`icons.json` from the running editor. This is useful for comparing a particular
installation's registered IDs (including its installed extensions) with the
committed source inventory. It does not replace the source inventory's default
relationships.

Upstream sources: [Fluent SVG package](https://github.com/microsoft/fluentui-system-icons/tree/main/packages/svg-icons),
[VS Code icon registry](https://github.com/microsoft/vscode/blob/main/src/vs/platform/theme/common/iconRegistry.ts),
[product icon resolution](https://github.com/microsoft/vscode/blob/main/src/vs/workbench/services/themes/browser/productIconThemeData.ts).
