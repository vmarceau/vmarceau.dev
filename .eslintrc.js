module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react/recommended', 'prettier'],
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'off',
  },
};
