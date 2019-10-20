// Register the service worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => {
      console.log(`Service worker registered with scope: ${reg.scope}`);
    })
    .catch((err) => {
      console.log(`Service worker registration failed: ${err}`);
    });

  navigator.serviceWorker.ready
    .then(() => {
      console.log('Service worker ready');
    });
}
