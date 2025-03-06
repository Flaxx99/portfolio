import { precacheAndRoute } from 'workbox-precaching';

// Importa el `__WB_MANIFEST` generado automáticamente
precacheAndRoute(self.__WB_MANIFEST || []);

self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  console.log("Interceptando solicitud:", event.request.url);
});
