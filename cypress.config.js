const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dom-chi-six.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
