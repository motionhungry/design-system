const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@motionhungry/ui', '@motionhungry/ui-themes'],
};

module.exports = withVanillaExtract(nextConfig);
