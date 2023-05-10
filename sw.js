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
    "revision": "b78d69f0d6d0aec247854dec9221acba"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-145392c1.entry.js"
  },
  {
    "url": "build/p-1bc4aba2.js"
  },
  {
    "url": "build/p-293ffef4.js"
  },
  {
    "url": "build/p-3d88a7b1.css"
  },
  {
    "url": "build/p-4469003e.js"
  },
  {
    "url": "build/p-4cfef176.entry.js"
  },
  {
    "url": "build/p-528ded47.entry.js"
  },
  {
    "url": "build/p-5c1a28e4.js"
  },
  {
    "url": "build/p-686a7df9.entry.js"
  },
  {
    "url": "build/p-82713db8.entry.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-8f56c993.js"
  },
  {
    "url": "build/p-92e30cd8.entry.js"
  },
  {
    "url": "build/p-9e07da63.entry.js"
  },
  {
    "url": "build/p-aa32d230.js"
  },
  {
    "url": "build/p-aaff4822.js"
  },
  {
    "url": "build/p-ae94282b.entry.js"
  },
  {
    "url": "build/p-b163a548.js"
  },
  {
    "url": "build/p-bb4ef53f.js"
  },
  {
    "url": "build/p-d7b63ba9.entry.js"
  },
  {
    "url": "build/p-e3bc5b7a.entry.js"
  },
  {
    "url": "build/p-ef1712c1.js"
  },
  {
    "url": "build/p-f239dc9d.js"
  },
  {
    "url": "build/p-f2829afd.entry.js"
  },
  {
    "url": "build/p-f36706ea.entry.js"
  },
  {
    "url": "build/p-f8d9b7d6.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "d6b2eca4abad5356588059dd5b4c3394"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
