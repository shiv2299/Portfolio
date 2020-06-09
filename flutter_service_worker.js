'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "d4bff055b4263c26f99365cedc24b7ad",
"/assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"/assets/assets/images/avatar.png": "c3b6e456651561dd91e4df93e02b4e6d",
"/assets/assets/images/flutterw.png": "6261e07a1b1eb9cdd466b4879a41e361",
"/assets/assets/images/home_bg.jpg": "710a1ad58242c9031e18e4d935b52c93",
"/assets/assets/images/langs/android.png": "c8980ee4d506f49bf2bda1cfb23edc22",
"/assets/assets/images/langs/c.png": "2dc80ffd1fe6d7bb28d2a94bcab140b0",
"/assets/assets/images/langs/cpp.png": "f278be7973516129af9e64d45a0c6f4d",
"/assets/assets/images/langs/css.png": "c26a73b45b9a801864f13edeb0aa2cfb",
"/assets/assets/images/langs/django.png": "c095d2d793ef7fc3f1f770d0614c919a",
"/assets/assets/images/langs/firebase.png": "bb5d30fec65686babae2e8caa53666c3",
"/assets/assets/images/langs/flutter.png": "88c722ceb0908c030fc0d0f1d3ea703c",
"/assets/assets/images/langs/git.png": "41f7accb092fa591ef0948e0a2754193",
"/assets/assets/images/langs/html.png": "2e4ed85a249e0d819df884d55176c16c",
"/assets/assets/images/langs/java.png": "48b7a3d8958565e7aa3ad4dbf2312770",
"/assets/assets/images/langs/js.png": "2aeb352960a0d6061a8d441f3972e1fd",
"/assets/assets/images/langs/mongo.png": "d1dbc4c147a3c563a3f2fac1b4d32379",
"/assets/assets/images/langs/mysql.png": "4ccd3dffac7ee122272f42fb0bbd2546",
"/assets/assets/images/langs/php.png": "d27278dc5a547f6c1e7dbc73c5bfb065",
"/assets/assets/images/langs/postgre.png": "50156c71fb2cf47d5cfe134231975922",
"/assets/assets/images/langs/python.png": "7be70baaacc7ccc25ca25b987925e470",
"/assets/assets/images/profile.png": "7711f32bac02070becba08116b8a75e9",
"/assets/assets/images/projects/text_recognition/tr1.jpg": "3d2957f5e7b23303773121c9859b22b2",
"/assets/assets/images/projects/text_recognition/tr2.jpg": "f92dcc9f0719d86da73298be93f5f9b0",
"/assets/assets/images/projects/text_recognition/tr3.jpg": "8ecb44f6dcab98b9fc7eb419efb4417d",
"/assets/assets/images/projects/text_recognition/tr4.jpg": "c2c7540d74b977198cbbbeb6e43c3f86",
"/assets/assets/images/projects/text_recognition/tr5.jpg": "b7ac09ef392bcc551d884fb7d0458eb5",
"/assets/assets/images/projects/text_recognition/tr6.jpg": "8ff084c89bd3373fbc11cbe4ed34dd72",
"/assets/FontManifest.json": "19bc2263ae01b23370da59eea5f18b78",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "08d705abf25471e963f32a78bcccc82a",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "23ca07ae8548011fd8168b07131ef56d",
"/main.dart.js": "c7ef913c4dd2826500b6e5291b0ad0cb",
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
