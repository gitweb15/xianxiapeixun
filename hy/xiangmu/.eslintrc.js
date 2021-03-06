module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	'vue/no-parsing-error':'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-mixed-spaces-and-tabs': 'warn',
    'vue/no-parsing-error': [2, {
      "x-invalid-end-tag": false
    }]
  }
}
