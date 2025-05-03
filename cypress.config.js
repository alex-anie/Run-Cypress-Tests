const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'na1dw2',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    retries: 2,
    viewportWidth: 1000,
    viewportHeight: 660,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
