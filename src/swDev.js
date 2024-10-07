// import webpush from "web-push"

export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  // navigator.serviceWorker.register(swUrl).then((response) => {
  //   console.log("responseresponse",response)
  // })

  // const vapidKeys = webpush.generateVAPIDKeys();

  // Prints 2 URL Safe Base64 Encoded Strings
  // console.log(vapidKeys.publicKey, vapidKeys.privateKey);
  
  
  const publicVapidKey = "BMjC6wX9RigBB9Y8IPpPI6MmitwqLs3VLnCI4bngadPNBTrXiykkaOBD5u_6nNzKNllERofm0GfFu6okvND0VY4"; // Replace with your public VAPID key

  const urlBase64ToUint8Array = (base64String) => {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
  };

  const determineAppServerKey = () => {
      return urlBase64ToUint8Array(publicVapidKey);
  };


  navigator.serviceWorker.register(swUrl).then((response) => {
      console.log('Service Worker Registered:', response);

      response.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: determineAppServerKey(),
      }).then((subscription) => {
          console.log('Push Subscription:', subscription);
          // Here you can send subscription details to your server if needed
      }).catch((err) => console.error('Subscription failed:', err));
  }).catch((err) => console.error('Service Worker registration failed:', err));
};


