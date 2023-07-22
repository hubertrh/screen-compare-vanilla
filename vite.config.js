import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 4173,
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        feedback: resolve(__dirname, "feedback.html"),
        cookiePolicy: resolve(__dirname, "cookie-policy.html"),
      },
    },
  },
});
