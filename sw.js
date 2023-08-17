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
    "revision": "4c185575777af26dbc82ffccd79f2493"
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
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-1e8bba82.entry.js"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-287c7dfa.js"
  },
  {
    "url": "build/p-296d4d5e.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-32ff31d4.js"
  },
  {
    "url": "build/p-3438947e.entry.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-3ff9f123.entry.js"
  },
  {
    "url": "build/p-4325abee.js"
  },
  {
    "url": "build/p-434fec0c.entry.js"
  },
  {
    "url": "build/p-49983187.entry.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-54677159.js"
  },
  {
    "url": "build/p-5ea8aeef.entry.js"
  },
  {
    "url": "build/p-64e61c0a.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-7032e6e3.js"
  },
  {
    "url": "build/p-76d79977.entry.js"
  },
  {
    "url": "build/p-7e735c0b.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-8365c174.js"
  },
  {
    "url": "build/p-885c367f.js"
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
    "url": "build/p-9dadace7.entry.js"
  },
  {
    "url": "build/p-9eb0ae11.entry.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-b157210b.js"
  },
  {
    "url": "build/p-b8f801ba.js"
  },
  {
    "url": "build/p-bacd31b3.js"
  },
  {
    "url": "build/p-baf09ac6.entry.js"
  },
  {
    "url": "build/p-c8cff741.entry.js"
  },
  {
    "url": "build/p-cd922cfd.entry.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-d48c4d1f.js"
  },
  {
    "url": "build/p-e41fa52b.entry.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-f990289b.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
