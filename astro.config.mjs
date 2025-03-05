import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        strategies: 'injectManifest', // Se asegura de usar un Service Worker personalizado
        srcDir: 'src', // Directorio donde está el Service Worker
        filename: 'sw.js', // Nombre del archivo de Service Worker
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
              src: "/icons/favicon192.png", // RUTA CORREGIDA (debe estar en public/)
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/icons/favicon512.png", // RUTA CORREGIDA
              sizes: "512x512",
              type: "image/png"
            }
          ]
        }
      })
    ]
  }
});
