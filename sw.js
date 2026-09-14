const OLD_CACHE='my-word-book-v3';
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k===OLD_CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
    .then(()=>self.registration.unregister())
));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request)));
