#!/bin/sh

rimraf ./dist
copyfiles ./fonts/* ./dist/
TSCONFIG=tsconfig.build.json
tsc --project $TSCONFIG -w
#rimraf ./dist/**/*.css.d.ts*
