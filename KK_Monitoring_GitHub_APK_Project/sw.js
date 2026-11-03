const CACHE_NAME = 'kk-monitoring-v68-studytrack';
const ASSETS = [
  './',
  './index.html',
  './apple-glass.css',
  './vocab.js',
  './core-app.js',
  './v42-command.js',
  './command-enhancements.js',
  './cloud-sync.js',
  './v62-fixes.js',
  './v65-system.js',
  './android-mobile.js',
  './icon-192.png',
  './icon-512.png',
  './logo.png',
  './splash.png',
  './splash.jpg'
];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(() => {})));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).catch(() => cached))
  );
});
