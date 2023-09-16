#!/bin/sh

rimraf ./dist
TSCONFIG=tsconfig.build.json
tsc --project $TSCONFIG && tsc-alias -p $TSCONFIG
