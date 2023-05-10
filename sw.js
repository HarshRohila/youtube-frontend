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
    "revision": "1aa06426dce92fba1fc384a6b2c6e061"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-00eabc80.entry.js"
  },
  {
    "url": "build/p-04526fd5.entry.js"
  },
  {
    "url": "build/p-04e44dab.entry.js"
  },
  {
    "url": "build/p-14d08795.js"
  },
  {
    "url": "build/p-1916d3b0.entry.js"
  },
  {
    "url": "build/p-24b21de3.js"
  },
  {
    "url": "build/p-293ffef4.js"
  },
  {
    "url": "build/p-2dea333e.entry.js"
  },
  {
    "url": "build/p-3d88a7b1.css"
  },
  {
    "url": "build/p-3e0cd4fc.entry.js"
  },
  {
    "url": "build/p-5c1a28e4.js"
  },
  {
    "url": "build/p-6ca48777.js"
  },
  {
    "url": "build/p-712f3b6e.js"
  },
  {
    "url": "build/p-7b52695d.js"
  },
  {
    "url": "build/p-8758d5a7.entry.js"
  },
  {
    "url": "build/p-8759da8b.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-958591d1.js"
  },
  {
    "url": "build/p-aa32d230.js"
  },
  {
    "url": "build/p-b0fe857b.entry.js"
  },
  {
    "url": "build/p-c542aa36.entry.js"
  },
  {
    "url": "build/p-ca5ed09e.entry.js"
  },
  {
    "url": "build/p-d8e91e2f.entry.js"
  },
  {
    "url": "build/p-dfd2c51e.entry.js"
  },
  {
    "url": "build/p-f4a9b504.entry.js"
  },
  {
    "url": "build/p-f7d64ae4.js"
  },
  {
    "url": "manifest.json",
    "revision": "d6b2eca4abad5356588059dd5b4c3394"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
