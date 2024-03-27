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
    "revision": "6ecad5eb58f8ff8ba57cd7a7e5efa4ba"
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
    "url": "build/p-00460c93.js"
  },
  {
    "url": "build/p-0874e72a.js"
  },
  {
    "url": "build/p-138c7f9f.entry.js"
  },
  {
    "url": "build/p-173c0038.js"
  },
  {
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-1b8850dc.js"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-2e760794.entry.js"
  },
  {
    "url": "build/p-37f9b184.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-4325abee.js"
  },
  {
    "url": "build/p-515fbc07.js"
  },
  {
    "url": "build/p-524a5bb9.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-648d1788.entry.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6654a41d.entry.js"
  },
  {
    "url": "build/p-675af075.js"
  },
  {
    "url": "build/p-6f84aa7f.entry.js"
  },
  {
    "url": "build/p-7fbeb99c.entry.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-80e4e7a2.js"
  },
  {
    "url": "build/p-84cca485.js"
  },
  {
    "url": "build/p-86cb6e1b.entry.js"
  },
  {
    "url": "build/p-87cf4cab.css"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-90d81ce8.js"
  },
  {
    "url": "build/p-954d5885.js"
  },
  {
    "url": "build/p-95f6c989.entry.js"
  },
  {
    "url": "build/p-97bf1ba1.entry.js"
  },
  {
    "url": "build/p-9a472600.js"
  },
  {
    "url": "build/p-9dadace7.entry.js"
  },
  {
    "url": "build/p-9eb0ae11.entry.js"
  },
  {
    "url": "build/p-a3350af3.entry.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-b44dc71b.js"
  },
  {
    "url": "build/p-bc5141d2.js"
  },
  {
    "url": "build/p-cf671c8d.entry.js"
  },
  {
    "url": "build/p-cff7c84c.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-d5d516bc.js"
  },
  {
    "url": "build/p-d991cb74.js"
  },
  {
    "url": "build/p-e202420a.js"
  },
  {
    "url": "build/p-e2d90f67.js"
  },
  {
    "url": "build/p-e54ea196.js"
  },
  {
    "url": "build/p-e790daee.entry.js"
  },
  {
    "url": "build/p-e8d0ac2d.js"
  },
  {
    "url": "build/p-e9c13035.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-f98a6635.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
