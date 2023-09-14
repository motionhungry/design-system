#!/bin/sh

rimraf ./dist
TSCONFIG=tsconfig.json
tsc --project $TSCONFIG && (concurrently "tsc --project $TSCONFIG -w" "tsc-alias -p $TSCONFIG -w")
#pnpm rimraf ./dist/**/*.css.d.ts*

