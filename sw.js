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
    "url": "404.html",
    "revision": "82cf7db4f4ada525bc4d0a710be99252"
  },
  {
    "url": "index.html",
    "revision": "9577cf06f927a23d3c5cb5368d17aa91"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-001cff99.js"
  },
  {
    "url": "build/p-20caa613.js"
  },
  {
    "url": "build/p-29a2ef61.entry.js"
  },
  {
    "url": "build/p-34631501.js"
  },
  {
    "url": "build/p-498ca91a.js"
  },
  {
    "url": "build/p-5991d838.entry.js"
  },
  {
    "url": "build/p-6cc58472.js"
  },
  {
    "url": "build/p-86e4a15f.entry.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-965ddd7c.js"
  },
  {
    "url": "build/p-977e7983.js"
  },
  {
    "url": "build/p-9fb167e8.js"
  },
  {
    "url": "build/p-9fde076c.entry.js"
  },
  {
    "url": "build/p-a2467410.entry.js"
  },
  {
    "url": "build/p-b10aab42.entry.js"
  },
  {
    "url": "build/p-b30a79f1.entry.js"
  },
  {
    "url": "build/p-be277b70.entry.js"
  },
  {
    "url": "build/p-d05a61e7.entry.js"
  },
  {
    "url": "build/p-d58930af.entry.js"
  },
  {
    "url": "build/p-db32674f.entry.js"
  },
  {
    "url": "build/p-dce1a91a.css"
  },
  {
    "url": "build/p-e1197cb5.entry.js"
  },
  {
    "url": "build/p-e18383e5.entry.js"
  },
  {
    "url": "build/p-f895c532.js"
  },
  {
    "url": "manifest.json",
    "revision": "8572b056b3229c1da9deb6e48a1666e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
