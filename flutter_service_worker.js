'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "ac6467664644e31528e61b103ab9507d",
"/assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"/assets/assets/images/avatar.png": "c3b6e456651561dd91e4df93e02b4e6d",
"/assets/assets/images/flutterw.png": "6261e07a1b1eb9cdd466b4879a41e361",
"/assets/assets/images/langs/android.png": "7080492e4658ec1a0ae325389341bc72",
"/assets/assets/images/langs/c.png": "c6f601267b5d478032791786c8ab5bc1",
"/assets/assets/images/langs/cpp.png": "f278be7973516129af9e64d45a0c6f4d",
"/assets/assets/images/langs/css.png": "b24088b0ac50ee86ea0952094aeaa595",
"/assets/assets/images/langs/django.png": "cf3f39a2c50d7ce3387cb35893350d12",
"/assets/assets/images/langs/firebase.png": "bb5d30fec65686babae2e8caa53666c3",
"/assets/assets/images/langs/flutter.png": "88c722ceb0908c030fc0d0f1d3ea703c",
"/assets/assets/images/langs/git.png": "41f7accb092fa591ef0948e0a2754193",
"/assets/assets/images/langs/html.png": "5411238ff17ac75d16b5b569c9fec62c",
"/assets/assets/images/langs/java.png": "751d306973bb608e0a91995a213b3a2a",
"/assets/assets/images/langs/js.png": "c441ff6c52f62228f894b027f6060f38",
"/assets/assets/images/langs/mongo.png": "d1dbc4c147a3c563a3f2fac1b4d32379",
"/assets/assets/images/langs/mysql.png": "4ccd3dffac7ee122272f42fb0bbd2546",
"/assets/assets/images/langs/php.png": "99ac132fac1bb05cd2a99d011d056fe1",
"/assets/assets/images/langs/postgre.png": "50156c71fb2cf47d5cfe134231975922",
"/assets/assets/images/langs/python.png": "7be70baaacc7ccc25ca25b987925e470",
"/assets/assets/images/projects/text_recognition/tr1.jpg": "285c42525b0be8bcdb59c3a44f0c3a60",
"/assets/assets/images/projects/text_recognition/tr2.jpg": "7be80c85d041e86b32280cee29831f23",
"/assets/assets/images/projects/text_recognition/tr3.jpg": "ecad1c2a5d6726debd346692d76482bb",
"/assets/assets/images/projects/text_recognition/tr4.jpg": "0b3dbe8ba244eebb2647a9067eed93cb",
"/assets/assets/images/projects/text_recognition/tr5.jpg": "7d2ab623849cc3a1433217a8fbab8d10",
"/assets/assets/images/projects/text_recognition/tr6.jpg": "13aae2a683d504686555a634f8ee56c1",
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
"/main.dart.js": "25d09c658a6f28dbe7a65a6348b7fd41",
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
