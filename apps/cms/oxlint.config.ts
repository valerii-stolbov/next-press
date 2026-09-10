import { defineConfig } from 'oxlint';

import nextConfig from '@next-press/oxlint-config/next';

const config = defineConfig({
  extends: [nextConfig],
  ignorePatterns: ['next-env.d.ts'],
});

export default config;
