import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, UserConfigExport } from 'vite';

const config: UserConfigExport = defineConfig(() => ({
  plugins: [react(), vanillaExtractPlugin({ identifiers: 'debug' })],
}));

export default config;
