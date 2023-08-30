import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { peerDependencies } from './package.json';

export default defineConfig((configEnv) => ({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
  plugins: [
    react(),
    vanillaExtractPlugin({ identifiers: 'short' }),
    dts({
      include: ['src/**/'],
    }),
  ],
}));
