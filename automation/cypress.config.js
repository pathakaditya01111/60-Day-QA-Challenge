const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://be8d52e4-0fad-4ccf-80c4-b04f6c32880f.mock.pstmn.io",
    specPattern: "cypress/e2e/**/*.cy.js"
  }
});