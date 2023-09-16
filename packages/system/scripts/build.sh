#!/bin/sh

rimraf ./dist
TSCONFIG=tsconfig.build.json
tsc --project $TSCONFIG && tsc-alias -p $TSCONFIG
mv ./dist/style/contract.css.d.ts ./dist/style/contract._css.d.ts
mv ./dist/style/contract.css.d.ts.map ./dist/style/contract._css.d.ts.map
rimraf ./dist/**/*.css.d.ts*
mv ./dist/style/contract._css.d.ts ./dist/style/contract.css.d.ts
mv ./dist/style/contract._css.d.ts.map ./dist/style/contract.css.d.ts.map
