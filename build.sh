#!/bin/sh
DIR="docs"
bun run next build
git add .
git commit -m "build"
git push
git subtree push --prefix $DIR origin gh-pages
