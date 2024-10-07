export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  
  navigator.serviceWorker.register(swUrl).then((registration) => {
    console.log("Service Worker registered:", registration);

    registration.onupdatefound = () => {
      const newWorker = registration.installing;
      newWorker.onstatechange = () => {
        if (newWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // New update available
            console.log('New update available. Please refresh the page.');
            // You can also show a prompt to the user to refresh the page.
          }
        }
      };
    };
  }).catch((error) => {
    console.error("Service Worker registration failed:", error);
  });
}
