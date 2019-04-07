module.exports = {
  root: true,
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    strict: 0,

    ['lines-around-comment']: [
      'error', {
        beforeLineComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],

    // Otherwise there is syntax errors, without newest babel.
    ['comma-dangle']: [
      'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    'function-paren-newline': 0,

    'import/no-extraneous-dependencies': ["error", { "devDependencies": true }]
  },
  globals: {},
};
