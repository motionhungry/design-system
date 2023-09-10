#!/bin/sh

rimraf ./dist
copyfiles ./fonts/* ./dist/
tsc && tsc-alias
rimraf ./dist/**/*.css.d.ts*
