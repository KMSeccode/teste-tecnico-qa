const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/commands.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    screenshotOnRunFailure: true
  },
  env: {
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
  },
});