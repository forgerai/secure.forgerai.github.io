#!/bin/sh

set -euo pipefail

DIR="docs"
bun run next build
git add .
git commit -m "build"
git push
git subtree push --force --prefix $DIR origin gh-pages
