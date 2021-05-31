module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'space-in-parens': ['off'],
    quotes: ['error', 'single'],
    'no-undef': ['off'],
    'computed-property-spacing': ['off'],
    'linebreak-style': ['off'],
    'brace-style': [2, '1tbs', { allowSingleLine: false }],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    semi: ['error', 'always'],
    camelcase: ['error', { properties: 'always' }],
    'function-paren-newline': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'prefer-allow-callback': ['off'],
    'arrow-body-style': ['off'],
    'no-return-assign': ['off'],
    'array-callback-return': ['off'],
    'prefer-destructing': ['off'],
    'no-tabs': ['off'],
    'no-mixed-spaces-and-tabs': ['off'],
    'class-methods-use-this': ['off'],
    'no-useless-escape': ['off'],
    radix: ['error', 'as-needed'],
    'import/no-cycle': ['off'],
    indent: [
      'error', 2,
      { ignoredNodes: ['TemplateLiteral'] }
    ],
    'template-curly-spacing': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true,
      }
    }
  ]
};
