
const CACHE_NAME = 'your-cache-name';
const urlsToCache = [
    '/',
    'index2.html',
    'dist/css',
    'dist/css/adminlte.css',
    'plugins/fontawesome-free/css/all.min.css',
    'plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
    'dist/css/adminlte.min.css',
    'dist/js',
    'CTI/logo 192x192.png',

];

self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated.');
});