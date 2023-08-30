const { resolve } = require('path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  extends: [
    require.resolve('@motionhungry/style-policy/eslint/browser'),
    require.resolve('@motionhungry/style-policy/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};
