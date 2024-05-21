const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    setupNodeEvents() {},
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mocha",
    overwrite: false,
    html: true,
    json: true,
  },
  experimentalModifyObstructiveThirdPartyCode: true,
  pageLoadTimeout: 10000,
  defaultCommandTimeout: 5000,
});
