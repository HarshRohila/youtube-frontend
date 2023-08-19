const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3333",
    viewportHeight: 740,
    viewportWidth: 360,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
