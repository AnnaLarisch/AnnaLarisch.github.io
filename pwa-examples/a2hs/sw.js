self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('simpsons-store').then((cache) => cache.addAll([
      '/pwa-examples/a2hs/',
      '/pwa-examples/a2hs/index.html',
      '/pwa-examples/a2hs/index.js',
      '/pwa-examples/a2hs/style.css',
      '/pwa-examples/a2hs/images/simpsons1.jpg',
      '/pwa-examples/a2hs/images/simpsons2.jpg',
      '/pwa-examples/a2hs/images/simpsons3.jpg',
      '/pwa-examples/a2hs/images/simpsons4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});