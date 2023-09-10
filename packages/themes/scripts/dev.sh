#!/bin/sh

rimraf ./dist
copyfiles ./fonts/* ./dist/
tsc && (concurrently "tsc -w" "tsc-alias -w")
