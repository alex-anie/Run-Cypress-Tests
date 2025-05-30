const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: 'na1dw2',
  projectId: "wtw5ec",
  // reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
