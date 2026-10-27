// Rack U-Layout service worker: keeps the app working offline.
// Bump VERSION on every release so phones pick up the new files.
const VERSION = "rack-u-layout-2.0.0";
const FILES = ["./", "index.html", "i18n.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // Network first (fresh when online), cache as fallback (works offline).
  e.respondWith(fetch(req).then(res => { const copy = res.clone(); if (res.ok) caches.open(VERSION).then(c => c.put(req, copy)); return res; })
    .catch(() => caches.match(req, {ignoreSearch: true}).then(r => r || caches.match("index.html"))));
});
