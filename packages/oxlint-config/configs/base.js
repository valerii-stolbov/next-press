import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'error',
  },
  plugins: ['typescript', 'unicorn', 'oxc'],
  rules: {
    'typescript/no-explicit-any': 'error',
    'typescript/no-non-null-assertion': 'warn',
    'typescript/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
});
