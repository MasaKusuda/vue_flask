// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    //'plugin:vue/essential',
    //'standard',
    //'eslint:recommended',
    //'plugin:prettier/recommended',
    'vue',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
};
