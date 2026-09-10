import { defineConfig } from 'oxlint';
import baseConfig from './base.js';

export default defineConfig({
  categories: {
    correctness: 'error',
  },
  extends: [baseConfig],
  plugins: ['react', 'nextjs', 'import', 'jsx-a11y'],
  rules: {
    'react/exhaustive-deps': 'warn',
    'react/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowArray: true,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],
    'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
  },
  settings: {
    react: {
      linkComponents: [
        {
          name: 'Link',
          linkAttribute: 'href',
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
