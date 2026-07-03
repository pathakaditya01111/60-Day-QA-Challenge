const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "cypress-mochawesome-reporter",

  screenshotOnRunFailure: true,

  video: true,

  screenshotsFolder: "cypress/screenshots",

  videosFolder: "cypress/videos",

  e2e: {

    setupNodeEvents(on, config) {

      require("cypress-mochawesome-reporter/plugin")(on);

      return config;

    }

  }

});