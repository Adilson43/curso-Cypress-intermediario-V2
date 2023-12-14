const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:81/',
  },

  fixturesFolder: false,
  video: false,
});

module.exports = {
  e2e: {
    supportFile: 'cypress/support/e2e.js',
  },
  component: {
    supportFile: 'cypress/support/component.js',
  },
};