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
    "revision": "480ff8c13bde681fcaaea5e71d282305"
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
    "url": "build/p-0ac97e14.entry.js"
  },
  {
    "url": "build/p-16180984.entry.js"
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
    "url": "build/p-2dea333e.entry.js"
  },
  {
    "url": "build/p-3fa8c836.js"
  },
  {
    "url": "build/p-5ca2de82.entry.js"
  },
  {
    "url": "build/p-5ff301a6.js"
  },
  {
    "url": "build/p-6442a25f.js"
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
    "url": "build/p-7c20b5f9.entry.js"
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
    "url": "build/p-a7f59d53.entry.js"
  },
  {
    "url": "build/p-b0fe857b.entry.js"
  },
  {
    "url": "build/p-bc65b0a3.entry.js"
  },
  {
    "url": "build/p-c0874b44.js"
  },
  {
    "url": "build/p-c542aa36.entry.js"
  },
  {
    "url": "build/p-d3283506.entry.js"
  },
  {
    "url": "build/p-d8e91e2f.entry.js"
  },
  {
    "url": "build/p-dce1a91a.css"
  },
  {
    "url": "build/p-edab44ce.js"
  },
  {
    "url": "manifest.json",
    "revision": "6ea1f3e3aee37f06031eb0ad61400c47"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
