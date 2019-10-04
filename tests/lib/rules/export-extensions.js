const { RuleTester } = require('eslint');

const rule = require('../../../lib/rules/export-extensions');

const ruleTester = new RuleTester();

ruleTester.run('export-extensions', rule, {
  valid: [{
    code: 'export { default } from "./foo.jsx";',
    options: ['always'],
    parser: require.resolve('babel-eslint'),
  }, {
    code: 'export { default } from "./foo";',
    options: ['never'],
    parser: require.resolve('babel-eslint'),
  }],
  invalid: [{
    code: 'export { default } from "./foo";',
    options: ['always'],
    parser: require.resolve('babel-eslint'),
    errors: [{
      message: 'Missing use of file extension for "./foo"',
    }],
  }, {
    code: 'export { default } from "./foo.jsx";',
    options: ['never'],
    parser: require.resolve('babel-eslint'),
    errors: [{
      message: 'Unexpected use of file extension "jsx" for "./foo.jsx"',
    }],
  }],
});
