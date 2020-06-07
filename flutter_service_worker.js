'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "373a40c4328064c64158a49adf95ac8b",
"/assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"/assets/assets/images/avatar.png": "c3b6e456651561dd91e4df93e02b4e6d",
"/assets/assets/images/home_bg.jpg": "710a1ad58242c9031e18e4d935b52c93",
"/assets/assets/images/profile.png": "7711f32bac02070becba08116b8a75e9",
"/assets/FontManifest.json": "8297c40e0bc45a67731b65700d1631cc",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "300d3a8d5eeabcb3f2ad8a6cafcdc9ad",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "23ca07ae8548011fd8168b07131ef56d",
"/main.dart.js": "49c8ed954cb7f0736ada3d9656bdfd68",
"/manifest.json": "30d8fe881b670c596511ec4d473a20cf"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
