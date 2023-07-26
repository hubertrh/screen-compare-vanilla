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
        "icons/light-mode.svg",
        "icons/dark-mode.svg",
        "icons/popular-screens-icon.svg",
        "icons/cross.svg",
        "icons/edit-field.svg",
        "icons/plus.svg",
        "icons/reset.svg",
        "favicons/favicon.svg",
        "favicons/favicon.ico",
        "favicons/apple-touch-icon.png",
      ],
      manifest: {
        name: "ScreenCompare",
        short_name: "ScreenCompare",
        description:
          "ScreenCompare: a user-friendly tool providing simplified, accurate comparisons and visualizations of screen size, resolution, and PPI.",
        theme_color: "#171C26",
        icons: [
          {
            src: "favicons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "favicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "favicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
