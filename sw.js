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
    "revision": "fad8f9d64a5e976496181b58e963d111"
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
    "url": "build/p-05a13e36.entry.js"
  },
  {
    "url": "build/p-138c7f9f.entry.js"
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
    "url": "build/p-27ce4408.js"
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
    "url": "build/p-3a2aafb5.entry.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-40ec57f2.js"
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
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6654a41d.entry.js"
  },
  {
    "url": "build/p-692ed39d.entry.js"
  },
  {
    "url": "build/p-6ca16a2d.js"
  },
  {
    "url": "build/p-6cf4a597.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-82cdff04.js"
  },
  {
    "url": "build/p-87cf4cab.css"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-8e253a81.js"
  },
  {
    "url": "build/p-954d5885.js"
  },
  {
    "url": "build/p-95f6c989.entry.js"
  },
  {
    "url": "build/p-99b55d07.entry.js"
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
    "url": "build/p-a0dedc53.js"
  },
  {
    "url": "build/p-a32f14ec.entry.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-aeb91cdf.js"
  },
  {
    "url": "build/p-b07ee05e.js"
  },
  {
    "url": "build/p-b3cbb184.js"
  },
  {
    "url": "build/p-b44dc71b.js"
  },
  {
    "url": "build/p-bc5141d2.js"
  },
  {
    "url": "build/p-c9444cc0.js"
  },
  {
    "url": "build/p-c98a989e.entry.js"
  },
  {
    "url": "build/p-caeb9836.js"
  },
  {
    "url": "build/p-cc9a4025.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-d9044deb.js"
  },
  {
    "url": "build/p-dbd42f10.entry.js"
  },
  {
    "url": "build/p-de07c8ee.js"
  },
  {
    "url": "build/p-e08808fe.js"
  },
  {
    "url": "build/p-e0fa5ee2.js"
  },
  {
    "url": "build/p-ee839885.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-f4ae2682.js"
  },
  {
    "url": "build/p-fc63424a.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
