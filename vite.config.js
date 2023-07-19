import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
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
