module.exports = {
    'extends': ['eslint-config-alloy/typescript'],
    'env': {
      'jest': true
    },
    'rules': {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          flatTernaryExpressions: true
        }
      ],
      'no-throw-literal': 'off',
      'prefer-promise-reject-errors': 'off',
      'indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          flatTernaryExpressions: true
        }
      ]
    }
  };