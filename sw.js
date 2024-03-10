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
    "revision": "e11eb96251088fa39818ff3d12dcc6f6"
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
    "url": "build/p-0aef945c.entry.js"
  },
  {
    "url": "build/p-0cb40786.entry.js"
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
    "url": "build/p-2e760794.entry.js"
  },
  {
    "url": "build/p-3297b6b8.js"
  },
  {
    "url": "build/p-3895efda.entry.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-3b56e72b.entry.js"
  },
  {
    "url": "build/p-3b7085e5.js"
  },
  {
    "url": "build/p-3ff9f123.entry.js"
  },
  {
    "url": "build/p-4325abee.js"
  },
  {
    "url": "build/p-511307f6.entry.js"
  },
  {
    "url": "build/p-515fbc07.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-62be8cd1.entry.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-6654a41d.entry.js"
  },
  {
    "url": "build/p-674acdd7.js"
  },
  {
    "url": "build/p-6ad5c5be.js"
  },
  {
    "url": "build/p-6e49c143.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-87cf4cab.css"
  },
  {
    "url": "build/p-88cc7230.js"
  },
  {
    "url": "build/p-890be6a6.entry.js"
  },
  {
    "url": "build/p-89687980.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-954d5885.js"
  },
  {
    "url": "build/p-95f6c989.entry.js"
  },
  {
    "url": "build/p-9a472600.js"
  },
  {
    "url": "build/p-9dadace7.entry.js"
  },
  {
    "url": "build/p-9eb0ae11.entry.js"
  },
  {
    "url": "build/p-9f34646c.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-aee6cf60.entry.js"
  },
  {
    "url": "build/p-b44dc71b.js"
  },
  {
    "url": "build/p-c8b7b009.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-d4cf89eb.entry.js"
  },
  {
    "url": "build/p-ddc612e1.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-fae28420.js"
  },
  {
    "url": "build/p-febebdc0.js"
  },
  {
    "url": "build/p-ffdfb00a.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
