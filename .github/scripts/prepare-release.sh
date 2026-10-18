#!/usr/bin/env bash
set -euo pipefail

if [[ "$(node .github/scripts/validate-version.mjs)" != "$VERSION" ]]; then
  npm version "$VERSION" --no-git-tag-version
fi

pnpm run vscode:prepublish
git add package.json themes/fullmetal-theme-vscode.json

if ! git diff --cached --quiet; then
  git config user.name 'github-actions[bot]'
  git config user.email '41898282+github-actions[bot]@users.noreply.github.com'
  git commit -m "release: v${VERSION}"
  git push origin HEAD:main
fi
