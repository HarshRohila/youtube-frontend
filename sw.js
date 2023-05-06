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
    "revision": "72deb0c243b5f39f2cd9d7d7693f8b3f"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-12c01453.js"
  },
  {
    "url": "build/p-1ccd96a1.entry.js"
  },
  {
    "url": "build/p-35015f5b.js"
  },
  {
    "url": "build/p-40f3cc23.entry.js"
  },
  {
    "url": "build/p-418da9e3.js"
  },
  {
    "url": "build/p-54ac73ca.entry.js"
  },
  {
    "url": "build/p-597be55b.entry.js"
  },
  {
    "url": "build/p-5a2c8092.entry.js"
  },
  {
    "url": "build/p-65ec2e8f.js"
  },
  {
    "url": "build/p-6c30338f.entry.js"
  },
  {
    "url": "build/p-703a61bf.js"
  },
  {
    "url": "build/p-74e556e4.entry.js"
  },
  {
    "url": "build/p-89292799.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-99b00291.entry.js"
  },
  {
    "url": "build/p-9fae025f.entry.js"
  },
  {
    "url": "build/p-abfae8c6.entry.js"
  },
  {
    "url": "build/p-c963c4b0.entry.js"
  },
  {
    "url": "build/p-dce1a91a.css"
  },
  {
    "url": "build/p-f460fd82.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "8e9cebafd1b7dd6824a735f556418741"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
