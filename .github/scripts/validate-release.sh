#!/usr/bin/env bash
set -euo pipefail

if [[ "$GITHUB_REF" != refs/heads/main ]]; then
  echo 'Run this workflow from main.' >&2
  exit 1
fi

current=$(node .github/scripts/validate-version.mjs)
if gh release view "v${VERSION}" >/dev/null 2>&1; then
  echo "Release v${VERSION} already exists." >&2
  exit 1
fi

tag=$(git ls-remote --tags origin "refs/tags/v${VERSION}")
if [[ -n "$tag" ]]; then
  if [[ "$current" != "$VERSION" ]]; then
    echo "Tag v${VERSION} already exists for a different package version." >&2
    exit 1
  fi
  git fetch origin "refs/tags/v${VERSION}"
  if [[ "$(git rev-list -n 1 "v${VERSION}")" != "$(git rev-parse HEAD)" ]]; then
    echo "Tag v${VERSION} does not point to main." >&2
    exit 1
  fi
fi
