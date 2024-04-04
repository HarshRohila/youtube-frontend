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
    "revision": "5c0db45fffa7603cc09e2e8942fd5eaa"
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
    "url": "build/p-138c7f9f.entry.js"
  },
  {
    "url": "build/p-1a687b83.js"
  },
  {
    "url": "build/p-1ef9e92e.js"
  },
  {
    "url": "build/p-20826916.js"
  },
  {
    "url": "build/p-21ab5734.entry.js"
  },
  {
    "url": "build/p-25b30cef.js"
  },
  {
    "url": "build/p-27ce4408.js"
  },
  {
    "url": "build/p-2c400179.entry.js"
  },
  {
    "url": "build/p-2d1a0235.js"
  },
  {
    "url": "build/p-2e760794.entry.js"
  },
  {
    "url": "build/p-2f85254e.js"
  },
  {
    "url": "build/p-3ac9b0ad.entry.js"
  },
  {
    "url": "build/p-3e384376.entry.js"
  },
  {
    "url": "build/p-3ef153ad.entry.js"
  },
  {
    "url": "build/p-40ec57f2.js"
  },
  {
    "url": "build/p-4325abee.js"
  },
  {
    "url": "build/p-4c181b5f.js"
  },
  {
    "url": "build/p-515fbc07.js"
  },
  {
    "url": "build/p-528014d0.js"
  },
  {
    "url": "build/p-647a1903.js"
  },
  {
    "url": "build/p-64fb6340.entry.js"
  },
  {
    "url": "build/p-658a3b62.js"
  },
  {
    "url": "build/p-6654a41d.entry.js"
  },
  {
    "url": "build/p-6cf4a597.js"
  },
  {
    "url": "build/p-6d022576.js"
  },
  {
    "url": "build/p-7fbfe337.entry.js"
  },
  {
    "url": "build/p-87cf4cab.css"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-8e253a81.js"
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
    "url": "build/p-a0dedc53.js"
  },
  {
    "url": "build/p-a7bd2695.entry.js"
  },
  {
    "url": "build/p-aa3fc316.js"
  },
  {
    "url": "build/p-aeb91cdf.js"
  },
  {
    "url": "build/p-b3cbb184.js"
  },
  {
    "url": "build/p-b44dc71b.js"
  },
  {
    "url": "build/p-b5668ad7.entry.js"
  },
  {
    "url": "build/p-bb507b06.entry.js"
  },
  {
    "url": "build/p-bc5141d2.js"
  },
  {
    "url": "build/p-c9444cc0.js"
  },
  {
    "url": "build/p-caeb9836.js"
  },
  {
    "url": "build/p-d0b420cc.entry.js"
  },
  {
    "url": "build/p-d1e8cd2c.entry.js"
  },
  {
    "url": "build/p-dbd42f10.entry.js"
  },
  {
    "url": "build/p-e08808fe.js"
  },
  {
    "url": "build/p-e0fa5ee2.js"
  },
  {
    "url": "build/p-e4ab915d.entry.js"
  },
  {
    "url": "build/p-ee839885.js"
  },
  {
    "url": "build/p-eed3cf1e.entry.js"
  },
  {
    "url": "build/p-f4ae2682.js"
  },
  {
    "url": "build/p-fc8f56f5.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "695ac5d4488e06bcad004b2df76da19e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
