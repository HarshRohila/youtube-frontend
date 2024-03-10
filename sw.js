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
    "revision": "5cd63b4c247f2222536c477f6ef89c22"
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
    "url": "build/p-0e2d9103.entry.js"
  },
  {
    "url": "build/p-0f8eda08.js"
  },
  {
    "url": "build/p-12b845d4.entry.js"
  },
  {
    "url": "build/p-198e6bdc.js"
  },
  {
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-1fd0cf08.js"
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
    "url": "build/p-2e9384b6.entry.js"
  },
  {
    "url": "build/p-366ee10f.js"
  },
  {
    "url": "build/p-39f4a1b5.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-3ff9f123.entry.js"
  },
  {
    "url": "build/p-40cd7015.entry.js"
  },
  {
    "url": "build/p-4325abee.js"
  },
  {
    "url": "build/p-473ff47b.entry.js"
  },
  {
    "url": "build/p-515fbc07.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-5304e58c.js"
  },
  {
    "url": "build/p-5333fb18.js"
  },
  {
    "url": "build/p-536b3570.entry.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6654a41d.entry.js"
  },
  {
    "url": "build/p-6736f4b2.entry.js"
  },
  {
    "url": "build/p-7b8d1737.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-8e1220a9.css"
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
    "url": "build/p-9dadace7.entry.js"
  },
  {
    "url": "build/p-9eb0ae11.entry.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-b44dc71b.js"
  },
  {
    "url": "build/p-bc9afcd6.entry.js"
  },
  {
    "url": "build/p-c472acb9.js"
  },
  {
    "url": "build/p-c8b7b009.js"
  },
  {
    "url": "build/p-c96f589c.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-ed06eb0a.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-ef6ec345.js"
  },
  {
    "url": "build/p-fde63bf3.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
