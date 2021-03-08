module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    allowImportExportEverywhere: true,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    semi: [2, 'never'],
    'no-unused-vars': 'off',
    'no-cond-assign': 'error',
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-caller': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-with': 'error',
    'no-catch-shadow': 'error',
    'react/no-unescaped-entities': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': 'error',
  },
}
