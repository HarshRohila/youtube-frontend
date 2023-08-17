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
    "url": "index.html",
    "revision": "f9f080afc0702206541b8b71524b44cd"
  },
  {
    "url": "share.html",
    "revision": "e69930c03b0725e4f837ef94d9bd98c8"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-296d4d5e.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-32ff31d4.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-3ff9f123.entry.js"
  },
  {
    "url": "build/p-4325abee.js"
  },
  {
    "url": "build/p-44af44e5.entry.js"
  },
  {
    "url": "build/p-49983187.entry.js"
  },
  {
    "url": "build/p-504b64c1.entry.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6654a41d.entry.js"
  },
  {
    "url": "build/p-6eaf9be3.entry.js"
  },
  {
    "url": "build/p-7e735c0b.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-8365c174.js"
  },
  {
    "url": "build/p-856c3110.js"
  },
  {
    "url": "build/p-87cf4cab.css"
  },
  {
    "url": "build/p-885c367f.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-954d5885.js"
  },
  {
    "url": "build/p-95f6c989.entry.js"
  },
  {
    "url": "build/p-9dadace7.entry.js"
  },
  {
    "url": "build/p-9eb0ae11.entry.js"
  },
  {
    "url": "build/p-a6e071cf.entry.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-b157210b.js"
  },
  {
    "url": "build/p-b44dc71b.js"
  },
  {
    "url": "build/p-b8f801ba.js"
  },
  {
    "url": "build/p-bacd31b3.js"
  },
  {
    "url": "build/p-baf09ac6.entry.js"
  },
  {
    "url": "build/p-c1cdda1c.entry.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-d2bba9b7.js"
  },
  {
    "url": "build/p-d48c4d1f.js"
  },
  {
    "url": "build/p-dea5b7b8.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-efd2cee6.js"
  },
  {
    "url": "build/p-f88d51b4.entry.js"
  },
  {
    "url": "build/p-f9d3d2c7.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
