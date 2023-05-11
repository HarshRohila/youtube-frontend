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
    "revision": "16f8707f51492ddeb84711d6d8351cf2"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-00d55996.entry.js"
  },
  {
    "url": "build/p-04526fd5.entry.js"
  },
  {
    "url": "build/p-04e44dab.entry.js"
  },
  {
    "url": "build/p-184d81b6.entry.js"
  },
  {
    "url": "build/p-1916d3b0.entry.js"
  },
  {
    "url": "build/p-27f6585c.js"
  },
  {
    "url": "build/p-293ffef4.js"
  },
  {
    "url": "build/p-2af4b0a2.entry.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-2dea333e.entry.js"
  },
  {
    "url": "build/p-3fa8c836.js"
  },
  {
    "url": "build/p-5c1a917a.entry.js"
  },
  {
    "url": "build/p-5ff301a6.js"
  },
  {
    "url": "build/p-6ad30cec.js"
  },
  {
    "url": "build/p-6ca48777.js"
  },
  {
    "url": "build/p-712f3b6e.js"
  },
  {
    "url": "build/p-7c95d887.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-958591d1.js"
  },
  {
    "url": "build/p-97a92754.entry.js"
  },
  {
    "url": "build/p-a215f906.js"
  },
  {
    "url": "build/p-a7f59d53.entry.js"
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
    "url": "build/p-d8e91e2f.entry.js"
  },
  {
    "url": "build/p-dbcf76f5.entry.js"
  },
  {
    "url": "build/p-dce1a91a.css"
  },
  {
    "url": "manifest.json",
    "revision": "6ea1f3e3aee37f06031eb0ad61400c47"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
