const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:81/',
    env: {
      hideCredentials: true,
      requestMode: true,
      snapshotOnly: true,
    },
  },
  fixturesFolder: false,
  video: false,
})
