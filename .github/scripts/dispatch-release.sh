#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo 'Usage: pnpm release <version> (for example, pnpm release 2.0.0)' >&2
  exit 1
fi

VERSION="$1" node .github/scripts/validate-version.mjs >/dev/null
gh workflow run publish.yaml --ref main --field "version=$1"
