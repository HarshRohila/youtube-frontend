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
    "revision": "1c5b8d7b5d95fc8d8320392e9208402c"
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
    "url": "build/p-00082fee.js"
  },
  {
    "url": "build/p-07263e0c.entry.js"
  },
  {
    "url": "build/p-0dcd6e05.js"
  },
  {
    "url": "build/p-119df918.js"
  },
  {
    "url": "build/p-138c7f9f.entry.js"
  },
  {
    "url": "build/p-1707b666.js"
  },
  {
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-1a9f0680.js"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-20f30c20.entry.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-2af77fc4.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-425fa41b.js"
  },
  {
    "url": "build/p-4325abee.js"
  },
  {
    "url": "build/p-483a08e8.js"
  },
  {
    "url": "build/p-4c181b5f.js"
  },
  {
    "url": "build/p-510333c3.entry.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-53796935.entry.js"
  },
  {
    "url": "build/p-57d52989.js"
  },
  {
    "url": "build/p-620f7193.entry.js"
  },
  {
    "url": "build/p-64083392.entry.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6654a41d.entry.js"
  },
  {
    "url": "build/p-69accca0.js"
  },
  {
    "url": "build/p-6a81203d.js"
  },
  {
    "url": "build/p-6cf4a597.js"
  },
  {
    "url": "build/p-73c5a77b.js"
  },
  {
    "url": "build/p-75c405c4.js"
  },
  {
    "url": "build/p-7e3ea488.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-87cf4cab.css"
  },
  {
    "url": "build/p-8b15adab.js"
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
    "url": "build/p-a5a82152.js"
  },
  {
    "url": "build/p-a6ed8315.entry.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-b05cd89d.js"
  },
  {
    "url": "build/p-b44dc71b.js"
  },
  {
    "url": "build/p-bea8cad3.js"
  },
  {
    "url": "build/p-cb4bcb88.entry.js"
  },
  {
    "url": "build/p-cfcd29c7.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-e78b6ecc.entry.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-f3806f02.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
