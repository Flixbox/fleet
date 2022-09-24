import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "https://localhost:3000/",
    excludeSpecPattern: "**/individual-tests/**",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
