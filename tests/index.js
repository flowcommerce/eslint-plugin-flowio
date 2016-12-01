const plugin = require('..');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ruleFiles = fs.readdirSync(path.resolve(__dirname, '../lib/rules'))
  .map(file => path.basename(file, '.js'));

describe('all rule files should be exported by the plugin', () => {
  ruleFiles.forEach((ruleName) => {
    it(`should export ${ruleName}`, () => {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      assert.equal(plugin.rules[ruleName], require(`../lib/rules/${ruleName}`));
    });
  });
});
