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
    "revision": "d6982c04cab60f14ee17db2839a631ef"
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
    "url": "build/p-0516f3d0.css"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-293ffef4.js"
  },
  {
    "url": "build/p-2b726882.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-2f1d515f.entry.js"
  },
  {
    "url": "build/p-4588f329.entry.js"
  },
  {
    "url": "build/p-4c88f8f4.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-693fbf81.js"
  },
  {
    "url": "build/p-6ba1a978.entry.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-86422050.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-9224b677.entry.js"
  },
  {
    "url": "build/p-95f6c989.entry.js"
  },
  {
    "url": "build/p-9eb0ae11.entry.js"
  },
  {
    "url": "build/p-a215f906.js"
  },
  {
    "url": "build/p-a4a998fc.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-af8ff4f8.js"
  },
  {
    "url": "build/p-b9b29de3.entry.js"
  },
  {
    "url": "build/p-caeacfaa.entry.js"
  },
  {
    "url": "build/p-cf8ddc23.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-d3e85b87.entry.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-f47a05d1.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
