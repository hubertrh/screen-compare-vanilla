import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `http://localhost:${5173 || 4173}`,
    viewportWidth: 1280,
    viewportHeight: 680,
  },
});
