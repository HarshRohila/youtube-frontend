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
    "revision": "73852b095582adb5a704d03ae780f72d"
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
    "url": "build/p-0b475387.js"
  },
  {
    "url": "build/p-132704ca.entry.js"
  },
  {
    "url": "build/p-13637994.js"
  },
  {
    "url": "build/p-138c7f9f.entry.js"
  },
  {
    "url": "build/p-14a93dff.js"
  },
  {
    "url": "build/p-165e63ee.js"
  },
  {
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-3060c16d.entry.js"
  },
  {
    "url": "build/p-34852140.js"
  },
  {
    "url": "build/p-38e88585.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-4357c78a.js"
  },
  {
    "url": "build/p-4c181b5f.js"
  },
  {
    "url": "build/p-524aa3d7.entry.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-54cb02ed.js"
  },
  {
    "url": "build/p-58007acb.entry.js"
  },
  {
    "url": "build/p-5e37953c.entry.js"
  },
  {
    "url": "build/p-616d06fa.entry.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6654a41d.entry.js"
  },
  {
    "url": "build/p-6cf4a597.js"
  },
  {
    "url": "build/p-701710ba.js"
  },
  {
    "url": "build/p-7e3efe59.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-87158049.entry.js"
  },
  {
    "url": "build/p-8832fd5c.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-8cb43504.js"
  },
  {
    "url": "build/p-8e1220a9.css"
  },
  {
    "url": "build/p-935d0a1c.entry.js"
  },
  {
    "url": "build/p-954d5885.js"
  },
  {
    "url": "build/p-95f6c989.entry.js"
  },
  {
    "url": "build/p-98fe6bbd.entry.js"
  },
  {
    "url": "build/p-9c808f1f.js"
  },
  {
    "url": "build/p-9eb0ae11.entry.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-b44dc71b.js"
  },
  {
    "url": "build/p-bc5141d2.js"
  },
  {
    "url": "build/p-c1b151ee.js"
  },
  {
    "url": "build/p-c2b68ac1.js"
  },
  {
    "url": "build/p-c358820d.js"
  },
  {
    "url": "build/p-c4fd8842.js"
  },
  {
    "url": "build/p-d0239e1a.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-d6dd7c2b.entry.js"
  },
  {
    "url": "build/p-da9c6e4e.entry.js"
  },
  {
    "url": "build/p-e88f731b.js"
  },
  {
    "url": "build/p-ebb7d3fd.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-fcbaad83.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
