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
    "revision": "952b42cf21937c747a726922367be7dc"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-26258b92.js"
  },
  {
    "url": "build/p-27f6585c.js"
  },
  {
    "url": "build/p-285f2cc3.entry.js"
  },
  {
    "url": "build/p-293ffef4.js"
  },
  {
    "url": "build/p-36a0f2c0.entry.js"
  },
  {
    "url": "build/p-4469003e.js"
  },
  {
    "url": "build/p-51a562ba.js"
  },
  {
    "url": "build/p-5315a6c8.entry.js"
  },
  {
    "url": "build/p-5ff301a6.js"
  },
  {
    "url": "build/p-6ad30cec.js"
  },
  {
    "url": "build/p-7c95d887.js"
  },
  {
    "url": "build/p-7cb9bef6.entry.js"
  },
  {
    "url": "build/p-82713db8.entry.js"
  },
  {
    "url": "build/p-8c8b64f6.js"
  },
  {
    "url": "build/p-92e30cd8.entry.js"
  },
  {
    "url": "build/p-94e79ecf.entry.js"
  },
  {
    "url": "build/p-9c56a411.entry.js"
  },
  {
    "url": "build/p-9e07da63.entry.js"
  },
  {
    "url": "build/p-bb4ef53f.js"
  },
  {
    "url": "build/p-bdc52ab8.js"
  },
  {
    "url": "build/p-c0874b44.js"
  },
  {
    "url": "build/p-d52ba5e4.entry.js"
  },
  {
    "url": "build/p-d7b63ba9.entry.js"
  },
  {
    "url": "build/p-dce1a91a.css"
  },
  {
    "url": "build/p-e3bc5b7a.entry.js"
  },
  {
    "url": "build/p-ef1712c1.js"
  },
  {
    "url": "build/p-f2829afd.entry.js"
  },
  {
    "url": "build/p-f36706ea.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "6ea1f3e3aee37f06031eb0ad61400c47"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
