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
    "revision": "b1464d5175af905c442c639a47cefcfe"
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
    "url": "build/p-02d80348.js"
  },
  {
    "url": "build/p-04ceea98.entry.js"
  },
  {
    "url": "build/p-0516f3d0.css"
  },
  {
    "url": "build/p-05f3b18b.js"
  },
  {
    "url": "build/p-111f9688.entry.js"
  },
  {
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-25553b8f.entry.js"
  },
  {
    "url": "build/p-2766a800.entry.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-2cb8ecb3.entry.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-30fdc733.js"
  },
  {
    "url": "build/p-32ff31d4.js"
  },
  {
    "url": "build/p-371fb604.js"
  },
  {
    "url": "build/p-3ff9f123.entry.js"
  },
  {
    "url": "build/p-43ad8a1b.entry.js"
  },
  {
    "url": "build/p-44214d35.entry.js"
  },
  {
    "url": "build/p-4452a5aa.js"
  },
  {
    "url": "build/p-4631fa28.js"
  },
  {
    "url": "build/p-480c8c7e.entry.js"
  },
  {
    "url": "build/p-48c56917.entry.js"
  },
  {
    "url": "build/p-49983187.entry.js"
  },
  {
    "url": "build/p-4d500cf2.js"
  },
  {
    "url": "build/p-54677159.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6741b81a.js"
  },
  {
    "url": "build/p-70aaf9ff.js"
  },
  {
    "url": "build/p-7fa5eda9.entry.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-885c367f.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
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
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-b2504b03.entry.js"
  },
  {
    "url": "build/p-c10ac30b.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-f0e5f91a.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
