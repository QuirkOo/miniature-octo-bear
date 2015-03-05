exports.config = {
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: [ './**/*.test.js' ],

  baseUrl: 'http://localhost:3000/',

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