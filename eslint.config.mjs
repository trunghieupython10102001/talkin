// eslint.config.mjs
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Helper to handle __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Example rule: turn off explicit function return type
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': ['error', {
      endOfLine: 'auto',
      singleQuote: true,
      printWidth: 80,
      tabWidth: 2,
      trailingComma: 'all',
      semi: true,
    }],
  },
  env: {
    node: true,
    es2020: true,
  }
};
