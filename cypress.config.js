const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1b3op4',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
