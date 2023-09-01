import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import { peerDependencies } from './package.json';

export default defineConfig(() => ({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies as Record<string, string>),
    },
  },
  plugins: [
    react(),
    vanillaExtractPlugin({ identifiers: 'short' }),
    dts({
      include: ['src/**/'],
    }),
    tsconfigPaths(),
  ],
}));
