import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

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
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "light-mode.svg",
        "dark-mode.svg",
        "popular-screens-icon.svg",
        "cross.svg",
        "edit-field.svg",
        "plus.svg",
        "reset.svg",
        "favicon.svg",
        "favicon.ico",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "ScreenCompare",
        short_name: "ScreenCompare",
        description:
          "ScreenCompare: a user-friendly tool providing simplified, accurate comparisons and visualizations of screen size, resolution, and PPI.",
        theme_color: "#171C26",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
