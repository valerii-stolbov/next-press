import { defineConfig } from 'oxlint';
import baseConfig from './base.js';

export default defineConfig({
  categories: {
    correctness: 'error',
  },
  extends: [baseConfig],
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'react/rules-of-hooks': 'error',
    'react/exhaustive-deps': 'warn',
    'react/only-export-components': ['warn', { allowConstantExport: true }],
  },
  settings: {
    react: {
      linkComponents: [
        {
          name: 'Link',
          linkAttribute: ['href', 'to'],
        },
      ],
    },
    'jsx-a11y': {
      components: {
        Link: 'a',
      },
    },
  },
});
