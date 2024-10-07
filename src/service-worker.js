// This file is to handle the registration of the service worker
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.protocol === 'http'
);

export function register(config) {
  if ('serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
          return;
      }

      window.addEventListener('load', () => {
          const swUrl = `${process.env.PUBLIC_URL}/sw.js`;

          if (isLocalhost) {
              checkValidServiceWorker(swUrl, config);
          } else {
              registerValidSW(swUrl, config);
          }
      });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
          registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker == null) {
                  return;
              }
              installingWorker.onstatechange = () => {
                  if (installingWorker.state === 'installed') {
                      if (navigator.serviceWorker.controller) {
                          console.log(
                              'New content is available; please refresh.'
                          );
                      } else {
                          console.log('Content is cached for offline use.');
                      }
                  }
              };
          };
      })
      .catch((error) => {
          console.error('Error during service worker registration:', error);
      });
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
  })
      .then((response) => {
          const contentType = response.headers.get('content-type');
          if (
              response.status === 404 ||
              (contentType != null && contentType.indexOf('javascript') === -1)
          ) {
              navigator.serviceWorker.ready.then((registration) => {
                  registration.unregister().then(() => {
                      window.location.reload();
                  });
              });
          } else {
              registerValidSW(swUrl, config);
          }
      })
      .catch(() => {
          console.log(
              'No internet connection found. App is running in offline mode.'
          );
      });
}
