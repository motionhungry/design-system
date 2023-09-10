#!/bin/sh

rimraf ./dist
TSCONFIG=tsconfig.build.json
tsc --project $TSCONFIG && (concurrently "tsc --project $TSCONFIG -w" "tsc-alias -p $TSCONFIG -w")
