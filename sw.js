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
    "revision": "fe6c0174bd3a26855868ba50f2dfd2c2"
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
    "url": "build/p-06712466.js"
  },
  {
    "url": "build/p-0c673137.entry.js"
  },
  {
    "url": "build/p-1195af1c.entry.js"
  },
  {
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-2766a800.entry.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-28a32af5.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-2f53529c.js"
  },
  {
    "url": "build/p-32ff31d4.js"
  },
  {
    "url": "build/p-3438947e.entry.js"
  },
  {
    "url": "build/p-371fb604.js"
  },
  {
    "url": "build/p-38d6634b.entry.js"
  },
  {
    "url": "build/p-3ff9f123.entry.js"
  },
  {
    "url": "build/p-4325abee.js"
  },
  {
    "url": "build/p-44214d35.entry.js"
  },
  {
    "url": "build/p-49983187.entry.js"
  },
  {
    "url": "build/p-54677159.js"
  },
  {
    "url": "build/p-58631e49.entry.js"
  },
  {
    "url": "build/p-5fd1cb1a.entry.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-76a5b20e.js"
  },
  {
    "url": "build/p-7b8f49ca.entry.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
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
    "url": "build/p-8f173dc6.js"
  },
  {
    "url": "build/p-8f183a2a.js"
  },
  {
    "url": "build/p-95f6c989.entry.js"
  },
  {
    "url": "build/p-96efbbcc.js"
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
    "url": "build/p-a9ae5372.entry.js"
  },
  {
    "url": "build/p-aefc2466.js"
  },
  {
    "url": "build/p-bacd31b3.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-f3517f9a.entry.js"
  },
  {
    "url": "build/p-fa40f061.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
