var config = require('../../config/config');

exports.config = {
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: [ './**/*.test.js' ],

  baseUrl: config.baseUrl,

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  capabilities: {
    browserName: 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path
  }
};