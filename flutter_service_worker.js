'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "36087785a828138d4cde961b9b4ace27",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/images/avatar.png": "c3b6e456651561dd91e4df93e02b4e6d",
"assets/assets/images/flutterw.png": "6261e07a1b1eb9cdd466b4879a41e361",
"assets/assets/images/langs/android.png": "7080492e4658ec1a0ae325389341bc72",
"assets/assets/images/langs/c.png": "c6f601267b5d478032791786c8ab5bc1",
"assets/assets/images/langs/cpp.png": "21b8d7d58dc3ba936d2a24473d647ccb",
"assets/assets/images/langs/css.png": "d6c13a17af8571425416433078224425",
"assets/assets/images/langs/django.png": "cf3f39a2c50d7ce3387cb35893350d12",
"assets/assets/images/langs/firebase.png": "bb5d30fec65686babae2e8caa53666c3",
"assets/assets/images/langs/flutter.jpg": "21683350cf2c95501bcff79cd952df00",
"assets/assets/images/langs/git.png": "41f7accb092fa591ef0948e0a2754193",
"assets/assets/images/langs/html.png": "5411238ff17ac75d16b5b569c9fec62c",
"assets/assets/images/langs/java.png": "751d306973bb608e0a91995a213b3a2a",
"assets/assets/images/langs/js.jpg": "f9a72decb2e14eaa164136a8357b9fbb",
"assets/assets/images/langs/mongo.png": "d1dbc4c147a3c563a3f2fac1b4d32379",
"assets/assets/images/langs/mysql.png": "e89f37dd52fd59ef180baa4a423cb0cc",
"assets/assets/images/langs/php.png": "23801f56d40abaa33e883150e5053e95",
"assets/assets/images/langs/postgre.png": "1954b1d51cb2b479ebfb7df3bb1b443a",
"assets/assets/images/langs/python.png": "7be70baaacc7ccc25ca25b987925e470",
"assets/assets/images/new_langs/android.svg": "517a9fc724512edea680817b8f31f152",
"assets/assets/images/new_langs/c.svg": "458915b7cc6344cf233ac015e5d29b87",
"assets/assets/images/new_langs/cpp.svg": "2ef0b57ef0d3a36b1c7f6bb9ef1a5f73",
"assets/assets/images/new_langs/css.svg": "1ebd42665fa208f387061c30b00d8d0f",
"assets/assets/images/new_langs/django.svg": "7d7a918bf552800b61512d66b58dfa6b",
"assets/assets/images/new_langs/firebase.svg": "6cd17d8332eeb44fc8abd8eaed907c46",
"assets/assets/images/new_langs/flutter.svg": "2e96e165e73ec74267fb647f664c9b62",
"assets/assets/images/new_langs/git.svg": "004e50d26f8b987f327485a2ad9d9864",
"assets/assets/images/new_langs/html.svg": "2a690b993ade83e247eb9584a4ad87d6",
"assets/assets/images/new_langs/java.svg": "d085b196ddbed5b266b976fa0d41160d",
"assets/assets/images/new_langs/js.svg": "5b0de99405d58d04c73f8d8bf022263c",
"assets/assets/images/new_langs/mongo.svg": "99029f733a346fa890346d8e1e299b1e",
"assets/assets/images/new_langs/mysql.svg": "31c36018df2014402642ac7508a1aca3",
"assets/assets/images/new_langs/php.svg": "a749525e92d60c7e5ba57299582e7bef",
"assets/assets/images/new_langs/postgre.svg": "18a3eabffaa29b0c65aeefcdb75658d0",
"assets/assets/images/new_langs/python.svg": "d7d70a267d074ad807064ea55ed09fd8",
"assets/assets/images/projects/text_recognition/tr1.jpg": "285c42525b0be8bcdb59c3a44f0c3a60",
"assets/assets/images/projects/text_recognition/tr2.jpg": "7be80c85d041e86b32280cee29831f23",
"assets/assets/images/projects/text_recognition/tr3.jpg": "ecad1c2a5d6726debd346692d76482bb",
"assets/assets/images/projects/text_recognition/tr4.jpg": "0b3dbe8ba244eebb2647a9067eed93cb",
"assets/assets/images/projects/text_recognition/tr5.jpg": "7d2ab623849cc3a1433217a8fbab8d10",
"assets/assets/images/projects/text_recognition/tr6.jpg": "13aae2a683d504686555a634f8ee56c1",
"assets/assets/images/social/facebook.png": "e99b886e5b44d0e2161a31133a11e1ad",
"assets/assets/images/social/github.png": "5154751365c097c7c0b38911bc480859",
"assets/assets/images/social/instagram.png": "56b985d56c81b2fd2ad35d9ad362847e",
"assets/assets/images/social/linkedin.png": "3ead6e690b85fda806386faf1c10aa83",
"assets/FontManifest.json": "8297c40e0bc45a67731b65700d1631cc",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "08d705abf25471e963f32a78bcccc82a",
"assets/NOTICES": "b3a8f1637a78ffaf7fae9c9917661f16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "23ca07ae8548011fd8168b07131ef56d",
"/": "23ca07ae8548011fd8168b07131ef56d",
"main.dart.js": "d907afed1696f3aaf22ca1b67ec20021",
"manifest.json": "30d8fe881b670c596511ec4d473a20cf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
