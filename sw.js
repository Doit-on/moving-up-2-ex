/**
 * Moving Up 2: Critical Reading (ม.5) - Service Worker
 * Cache Strategy: Cache-first with Network Fallback & Auto Purge
 */

const CACHE_NAME = 'moving-up-2-v1.0.2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/i18n.js',
  './js/settings.js',
  './js/system-check.js',
  './js/qrcode.min.js',
  './js/app.js',
  './manifest.json',
  './assets/images/cover.jpg',
  './assets/images/twp_logo.png',
  './assets/images/ex1.jpg',
  './assets/images/ex2.jpg',
  './assets/images/ex3.jpg',
  './assets/images/ex4.jpg',
  './assets/images/ex5.jpg',
  './assets/images/ex6.jpg',
  './assets/images/ex7.jpg',
  './assets/images/ex8.jpg',
  './assets/images/ex9.jpg',
  './assets/images/ex10.jpg',
  './assets/images/covers/mu1.jpg',
  './assets/images/covers/mu2.jpg',
  './assets/images/covers/mu3.jpg',
  './assets/images/covers/nw1.jpg',
  './assets/images/covers/nw2.jpg',
  './assets/images/covers/nw3.jpg',
  './assets/images/covers/step1.jpg',
  './assets/images/covers/step2.jpg',
  './assets/images/covers/step3.jpg',
  './assets/audio/ex1.mp3',
  './assets/audio/ex2.mp3',
  './assets/audio/ex3.mp3',
  './assets/audio/ex4.mp3',
  './assets/audio/ex5.mp3',
  './assets/audio/ex6.mp3',
  './assets/audio/ex7.mp3',
  './assets/audio/ex8.mp3',
  './assets/audio/ex9.mp3',
  './assets/audio/ex10.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const url of ASSETS_TO_CACHE) {
        try {
          await cache.add(url);
        } catch (e) {
          try {
            const flatUrl = './' + url.split('/').pop();
            await cache.add(flatUrl);
          } catch(e2) {}
        }
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const respClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, respClone));
        return response;
      }).catch(() => {
        const filename = event.request.url.split('/').pop();
        return caches.match('./' + filename);
      });
    })
  );
});
