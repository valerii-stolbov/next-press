import { defineConfig } from 'oxfmt';

const config = defineConfig({
  printWidth: 120,
  singleQuote: true,
  sortImports: {
    customGroups: [
      { groupName: 'react', elementNamePattern: ['react', 'react-dom', 'react-dom/**'] },
      { groupName: 'next', elementNamePattern: ['next', 'next/**'] },
      { groupName: 'monorepo', elementNamePattern: ['@next-press/**'] },
    ],
    groups: [
      'side_effect',
      'builtin',
      'react',
      'next',
      'external',
      'monorepo',
      'internal',
      ['parent', 'sibling', 'index'],
      'side_effect_style',
      'style',
      'unknown',
    ],
  },
  sortTailwindcss: {
    stylesheet: './src/app/globals.css',
    functions: ['clsx', 'cn', 'cva', 'cx'],
  },
  overrides: [
    {
      files: ['*.css'],
      options: {
        singleQuote: false,
      },
    },
  ],
});

export default config;
