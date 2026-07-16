const CACHE_NAME = "animal-friend-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./gallery.html",
  "./style.css",
  "./animals.js",
  "./script.js",
  "./gallery.js",
  "./config.js",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});