const CACHE_NAME = 'appV1';
const urlsToCache = [
  'static/js/bundle.js',
  'static/js/main.chunk.js',
  'static/js/0.chunk.js',
  '/index.html',
  '/',
  '/users',
];

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

this.addEventListener('push', function(event) {
  let data = event.data ? event.data.json() : {};

  const options = {
    body: data.body || 'You have a new message!',
    icon: 'icons/icon-192x192.png',  // Add your app icon here
    badge: 'icons/icon-192x192.png'  // Badge for notifications
  };

  event.waitUntil(
    this.registration.showNotification(data.title || 'Notification', options)
  );
});

// Handle notification click event
this.addEventListener('notificationclick', function(event) {
  event.notification.close();
  
  event.waitUntil(
    // eslint-disable-next-line no-undef
    clients.openWindow('https://your-website-url.com') // Open your app on click
  );
});



// this.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       if (cachedResponse) {
//         return cachedResponse;
//       }

//       const fetchRequest = event.request.clone();
//       return fetch(fetchRequest).then((response) => {
//         if (!response || response.status !== 200 || response.type !== 'basic') {
//           return response;
//         }

//         const responseToCache = response.clone();
//         caches.open(CACHE_NAME).then((cache) => {
//           cache.put(event.request, responseToCache);
//         });

//         return response;
//       });
//     })
//   );
// });

this.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// sw.js (in public folder)
// this.addEventListener('push', (event) => {
//   const data = event.data.json();
//   this.registration.showNotification(data.title, {
//     body: data.body,
//     icon: './download (3).jpeg',
//   });
// });


this.addEventListener('push', function(event) {
  const options = {
      body: event.data ? event.data.text() : 'No payload',
      icon: './download (3).jpeg', // Replace with your icon path
  };
  event.waitUntil(
      this.registration.showNotification('Push Notification', options)
  );
});
