import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        strategies: 'injectManifest', 
        srcDir: 'src',  // Source directory for the SW
        swSrc: 'src/sw.js',  // Ensure this is the actual source Service Worker file
        filename: 'sw.js',  // The built Service Worker file
        manifest: {
          name: "Mi PWA en Astro",
          short_name: "AstroPWA",
          description: "Una Progressive Web App creada con Astro",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          orientation: "portrait",
          start_url: "/",
          scope: "/",
          icons: [
            {
              src: "/icons/favicon192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/icons/favicon512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ]
        }
      })
    ]
  }
});
