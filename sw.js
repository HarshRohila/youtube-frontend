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
    "revision": "479d6179e5f313129b5d464437bf6c05"
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
    "url": "build/p-04526fd5.entry.js"
  },
  {
    "url": "build/p-04e44dab.entry.js"
  },
  {
    "url": "build/p-1916d3b0.entry.js"
  },
  {
    "url": "build/p-200c3757.entry.js"
  },
  {
    "url": "build/p-293ffef4.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-2dea333e.entry.js"
  },
  {
    "url": "build/p-3e395720.entry.js"
  },
  {
    "url": "build/p-4d017b91.entry.js"
  },
  {
    "url": "build/p-611e4801.entry.js"
  },
  {
    "url": "build/p-6ad30cec.js"
  },
  {
    "url": "build/p-6ca48777.js"
  },
  {
    "url": "build/p-71205749.js"
  },
  {
    "url": "build/p-712f3b6e.js"
  },
  {
    "url": "build/p-75e37f01.js"
  },
  {
    "url": "build/p-7a74906a.js"
  },
  {
    "url": "build/p-8606d8ad.entry.js"
  },
  {
    "url": "build/p-8c8614f2.entry.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-958591d1.js"
  },
  {
    "url": "build/p-a215f906.js"
  },
  {
    "url": "build/p-b0fe857b.entry.js"
  },
  {
    "url": "build/p-c0874b44.js"
  },
  {
    "url": "build/p-c542aa36.entry.js"
  },
  {
    "url": "build/p-d315f463.js"
  },
  {
    "url": "build/p-d8e91e2f.entry.js"
  },
  {
    "url": "build/p-dce1a91a.css"
  },
  {
    "url": "build/p-f0dc8295.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
