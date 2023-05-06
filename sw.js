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
    "revision": "6f20128277c29a1eb328920f1e9580cd"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-0d3348b9.js"
  },
  {
    "url": "build/p-0ea661d9.js"
  },
  {
    "url": "build/p-1b06f766.entry.js"
  },
  {
    "url": "build/p-293ffef4.js"
  },
  {
    "url": "build/p-42ce20da.entry.js"
  },
  {
    "url": "build/p-4469003e.js"
  },
  {
    "url": "build/p-498ca91a.js"
  },
  {
    "url": "build/p-56571874.entry.js"
  },
  {
    "url": "build/p-58362b24.entry.js"
  },
  {
    "url": "build/p-7af02496.entry.js"
  },
  {
    "url": "build/p-82713db8.entry.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-92e30cd8.entry.js"
  },
  {
    "url": "build/p-9af66cea.js"
  },
  {
    "url": "build/p-9e07da63.entry.js"
  },
  {
    "url": "build/p-bb4ef53f.js"
  },
  {
    "url": "build/p-d60e2be0.entry.js"
  },
  {
    "url": "build/p-d7b63ba9.entry.js"
  },
  {
    "url": "build/p-dce1a91a.css"
  },
  {
    "url": "build/p-ddb3f821.js"
  },
  {
    "url": "build/p-dfd66d1d.js"
  },
  {
    "url": "build/p-e3bc5b7a.entry.js"
  },
  {
    "url": "build/p-f2829afd.entry.js"
  },
  {
    "url": "build/p-f36706ea.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "8572b056b3229c1da9deb6e48a1666e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
