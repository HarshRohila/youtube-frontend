/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "82cf7db4f4ada525bc4d0a710be99252"
  },
  {
    "url": "index.html",
    "revision": "ce2c4ca322513ed5225847ec718a77ff"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-293ffef4.js"
  },
  {
    "url": "build/p-3608a647.entry.js"
  },
  {
    "url": "build/p-4469003e.js"
  },
  {
    "url": "build/p-4923abd8.entry.js"
  },
  {
    "url": "build/p-4a26d71d.js"
  },
  {
    "url": "build/p-63c55f6f.js"
  },
  {
    "url": "build/p-70d415a9.js"
  },
  {
    "url": "build/p-724bf7b5.js"
  },
  {
    "url": "build/p-82713db8.entry.js"
  },
  {
    "url": "build/p-88fbaaf1.js"
  },
  {
    "url": "build/p-8b2770e6.entry.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-92e30cd8.entry.js"
  },
  {
    "url": "build/p-94a5d036.entry.js"
  },
  {
    "url": "build/p-9e07da63.entry.js"
  },
  {
    "url": "build/p-a9d42588.entry.js"
  },
  {
    "url": "build/p-bb4ef53f.js"
  },
  {
    "url": "build/p-d7b63ba9.entry.js"
  },
  {
    "url": "build/p-dce1a91a.css"
  },
  {
    "url": "build/p-e3bc5b7a.entry.js"
  },
  {
    "url": "build/p-ef1712c1.js"
  },
  {
    "url": "build/p-f0162e03.entry.js"
  },
  {
    "url": "build/p-f2829afd.entry.js"
  },
  {
    "url": "build/p-f36706ea.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "8572b056b3229c1da9deb6e48a1666e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
