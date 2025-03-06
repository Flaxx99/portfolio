import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        strategies: 'generateSW', // Usa generateSW
        workbox: {
          cleanupOutdatedCaches: true,
          sourcemap: false
        },
        manifest: {
          name: "Mi PWA en Astro",
          short_name: "AstroPWA",
          start_url: "/",
          scope: "/",
          display: "standalone",
          icons: [
            { src: "/icons/favicon192.png", sizes: "192x192", type: "image/png" },
            { src: "/icons/favicon512.png", sizes: "512x512", type: "image/png" }
          ]
        }
      })
    ]
  }
});
