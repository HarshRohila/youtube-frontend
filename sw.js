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
    "revision": "e4f85134696e4fd503177b124349b952"
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
    "url": "build/p-00b1d902.js"
  },
  {
    "url": "build/p-020837dd.js"
  },
  {
    "url": "build/p-0a52de16.entry.js"
  },
  {
    "url": "build/p-0b475387.js"
  },
  {
    "url": "build/p-110f633c.entry.js"
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
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-22b517e5.entry.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-4357c78a.js"
  },
  {
    "url": "build/p-478d5499.entry.js"
  },
  {
    "url": "build/p-4800bbdc.js"
  },
  {
    "url": "build/p-4c181b5f.js"
  },
  {
    "url": "build/p-4fd3b951.entry.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-54cb02ed.js"
  },
  {
    "url": "build/p-5e37953c.entry.js"
  },
  {
    "url": "build/p-5eb86cb1.entry.js"
  },
  {
    "url": "build/p-60cf8f24.entry.js"
  },
  {
    "url": "build/p-627c83b1.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6693d76a.entry.js"
  },
  {
    "url": "build/p-6cf4a597.js"
  },
  {
    "url": "build/p-6febfc74.js"
  },
  {
    "url": "build/p-701710ba.js"
  },
  {
    "url": "build/p-70c7dc5d.entry.js"
  },
  {
    "url": "build/p-7e3efe59.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-87cf4cab.css"
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
    "url": "build/p-8ce2809c.entry.js"
  },
  {
    "url": "build/p-954d5885.js"
  },
  {
    "url": "build/p-95f6c989.entry.js"
  },
  {
    "url": "build/p-9bf75ee5.js"
  },
  {
    "url": "build/p-9c808f1f.js"
  },
  {
    "url": "build/p-9eb0ae11.entry.js"
  },
  {
    "url": "build/p-a34e5f25.entry.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-b7062b34.entry.js"
  },
  {
    "url": "build/p-bc5141d2.js"
  },
  {
    "url": "build/p-c0d51e15.entry.js"
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
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-ddcc5246.entry.js"
  },
  {
    "url": "build/p-dfe5a97d.js"
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
    "url": "build/p-f757ae1d.js"
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
