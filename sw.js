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
    "revision": "0cf70946b3dbe05321d7ef9717898380"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-34631501.js"
  },
  {
    "url": "build/p-4cff571d.js"
  },
  {
    "url": "build/p-5991d838.entry.js"
  },
  {
    "url": "build/p-615fb59d.entry.js"
  },
  {
    "url": "build/p-71058f99.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-98baeaf9.entry.js"
  },
  {
    "url": "build/p-9fb167e8.js"
  },
  {
    "url": "build/p-a2467410.entry.js"
  },
  {
    "url": "build/p-b10aab42.entry.js"
  },
  {
    "url": "build/p-b682347e.js"
  },
  {
    "url": "build/p-be277b70.entry.js"
  },
  {
    "url": "build/p-c77353f1.js"
  },
  {
    "url": "build/p-d05a61e7.entry.js"
  },
  {
    "url": "build/p-d58930af.entry.js"
  },
  {
    "url": "build/p-dadce086.entry.js"
  },
  {
    "url": "build/p-db32674f.entry.js"
  },
  {
    "url": "build/p-dce1a91a.css"
  },
  {
    "url": "build/p-e18383e5.entry.js"
  },
  {
    "url": "build/p-e6f4f277.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "8572b056b3229c1da9deb6e48a1666e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
