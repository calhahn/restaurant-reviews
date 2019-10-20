// Service worker

const VERSION = '0.1.0';
const STATIC_CACHE_NAME = `reviews-static-${VERSION}`;

// Cache the site assets on install
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll([
          '/',
          '/index.html',
          '/index.js',
          '/restaurant.html?id=1',
          '/restaurant.html?id=2',
          '/restaurant.html?id=3',
          '/restaurant.html?id=4',
          '/restaurant.html?id=5',
          '/restaurant.html?id=6',
          '/restaurant.html?id=7',
          '/restaurant.html?id=8',
          '/restaurant.html?id=9',
          '/restaurant.html?id=10',
          '/css/styles.css',
          '/data/restaurants.json',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
        ]);
      })
  );
});

// Delete no longer needed old caches when a new service worker is activated
self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((cacheNames) => {
      // Wrap it in Promise.all to wait on the completion of all those promises
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('reviews-') &&
                 cacheName != STATIC_CACHE_NAME;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Handle requests offline-first: cache, falling back to network
self.addEventListener('fetch', (evt) => {
  // console.log(evt.request.url);
  evt.respondWith(
    caches.match(evt.request).then((response) => {
      return response || fetch(evt.request);
    })
  );
});
