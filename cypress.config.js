const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  projectId: 'yoxtu4',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-multi-reporters',
  failOnStatusCode: false,
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: 'https://sharing-nakdan-pro.netlify.app/',
    LIVE_URL: 'https://nakdanpro.dicta.org.il/',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('./dicta-shared/videoCleanup')(on)
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://sharing-nakdan-pro.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
