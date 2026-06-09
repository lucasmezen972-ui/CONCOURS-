/* Service Worker – Concours Attaché Territorial */
const CACHE = 'concours-v1';

const PRECACHE = [
  './',
  './index.html',
  './css/styles.css',
  './css/enhancements.css',
  './js/app.js',
  './content/partie1.js',
  './content/partie2.js',
  './content/partie3.js',
  './content/partie4.js',
  './content/partie5.js',
  './content/partie6.js',
  './content/partie7.js',
  './content/partie8.js',
  './content/fiches-express.js',
  './content/glossaire.js',
  './content/banque-jury.js',
  './content/annales.js',
  './content/examen-blanc.js',
  './content/mises-en-situation.js',
  './content/quiz-supplements.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  /* Never intercept KVdb API calls — always network */
  if (url.includes('kvdb.io')) return;

  /* Google Fonts — network first, fall back to cache */
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    e.respondWith(
      fetch(e.request)
        .then(r => { const c = r.clone(); caches.open(CACHE).then(cache => cache.put(e.request, c)); return r; })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  /* Everything else — cache first, then network */
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(r => {
        if (!r || r.status !== 200 || r.type === 'opaque') return r;
        const c = r.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, c));
        return r;
      }).catch(() => {
        if (e.request.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
