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
    "revision": "aa6215127782f729d055ac9bc4967ce7"
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
    "url": "build/p-11c489fc.entry.js"
  },
  {
    "url": "build/p-138c7f9f.entry.js"
  },
  {
    "url": "build/p-14a93dff.js"
  },
  {
    "url": "build/p-165e63ee.js"
  },
  {
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-1ef9e92e.js"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-21f73165.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-2c272efd.js"
  },
  {
    "url": "build/p-2c400179.entry.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-2e760794.entry.js"
  },
  {
    "url": "build/p-3ab8ad8c.entry.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-3fff6c0d.js"
  },
  {
    "url": "build/p-4325abee.js"
  },
  {
    "url": "build/p-4c181b5f.js"
  },
  {
    "url": "build/p-515fbc07.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-54cb02ed.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6654a41d.entry.js"
  },
  {
    "url": "build/p-6cf4a597.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-831bfe6f.js"
  },
  {
    "url": "build/p-87cf4cab.css"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-8cb43504.js"
  },
  {
    "url": "build/p-90ab9235.js"
  },
  {
    "url": "build/p-954d5885.js"
  },
  {
    "url": "build/p-95f6c989.entry.js"
  },
  {
    "url": "build/p-9a472600.js"
  },
  {
    "url": "build/p-9c808f1f.js"
  },
  {
    "url": "build/p-9dadace7.entry.js"
  },
  {
    "url": "build/p-9eb0ae11.entry.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-af67b2ce.js"
  },
  {
    "url": "build/p-b44dc71b.js"
  },
  {
    "url": "build/p-b6a44947.entry.js"
  },
  {
    "url": "build/p-bc5141d2.js"
  },
  {
    "url": "build/p-bed48845.entry.js"
  },
  {
    "url": "build/p-c072adea.entry.js"
  },
  {
    "url": "build/p-c2b68ac1.js"
  },
  {
    "url": "build/p-c4fd8842.js"
  },
  {
    "url": "build/p-cdfef660.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-d8e3f962.js"
  },
  {
    "url": "build/p-e88f731b.js"
  },
  {
    "url": "build/p-ee839885.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-f2b65472.entry.js"
  },
  {
    "url": "build/p-fa831e51.entry.js"
  },
  {
    "url": "build/p-fe29a315.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
