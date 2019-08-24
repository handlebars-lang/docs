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
    "revision": "fe250b929eb19d913d3cb1df420193b9"
  },
  {
    "url": "assets/css/0.styles.049b05a3.css",
    "revision": "338ad6f3a4af233528be507c3e8f68c1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cf694f41.js",
    "revision": "1390517f7ba41e046761ac0907458d8c"
  },
  {
    "url": "assets/js/10.8dd7593f.js",
    "revision": "28fea2cfc3d9d7a896087d970dfb2665"
  },
  {
    "url": "assets/js/11.08c8906f.js",
    "revision": "bef8ca7e84837cc4e34e0335b75641a5"
  },
  {
    "url": "assets/js/12.852124fb.js",
    "revision": "d1fc5fc098ca7653ad3c33579639eda5"
  },
  {
    "url": "assets/js/13.0e7f709c.js",
    "revision": "5c55f49a571bc77b71e19973f266d75a"
  },
  {
    "url": "assets/js/14.e8f85c7c.js",
    "revision": "94ff1362a2a821f545ad64a7a0175b59"
  },
  {
    "url": "assets/js/15.a0c81d81.js",
    "revision": "9f36a7b5d65c00572f25a87721cb6bda"
  },
  {
    "url": "assets/js/16.1a7e4aa2.js",
    "revision": "7c97d38eac12baee606b27229c6acefe"
  },
  {
    "url": "assets/js/17.8d01543b.js",
    "revision": "892d4435f28e221ffa9e35b2965cd87f"
  },
  {
    "url": "assets/js/18.875ab43a.js",
    "revision": "a78acce7b170f50aa4be66280292f83e"
  },
  {
    "url": "assets/js/19.f7510352.js",
    "revision": "bbca31c5de1ec69eb3af0087e4e083b6"
  },
  {
    "url": "assets/js/2.cba9de78.js",
    "revision": "a7d334b2ebb81f0451133e4ecbb91420"
  },
  {
    "url": "assets/js/20.95f3ec5a.js",
    "revision": "94e4c77e7172adf1361b76689e409d43"
  },
  {
    "url": "assets/js/21.a0502296.js",
    "revision": "534421915c906262a2272f24c37ecff7"
  },
  {
    "url": "assets/js/22.12eb0908.js",
    "revision": "157f8963eea0a3a5b7851bca5c51f840"
  },
  {
    "url": "assets/js/23.22e0d352.js",
    "revision": "c3de3bb2dac36cf815f41b7e0a3ad706"
  },
  {
    "url": "assets/js/24.741fd0db.js",
    "revision": "206d43f53153e5702ea9c3ca3476d8d1"
  },
  {
    "url": "assets/js/25.b4d78b41.js",
    "revision": "a10fca0c389937f6a2b688d6b3159281"
  },
  {
    "url": "assets/js/26.3e30800b.js",
    "revision": "c8a23f4ea4eb030e6782749e118f06b0"
  },
  {
    "url": "assets/js/27.f72938e2.js",
    "revision": "668784421c83ad284a3737d54d6f3bbe"
  },
  {
    "url": "assets/js/28.8040daaf.js",
    "revision": "ff68bc52b9cffaa78101cf54767596ac"
  },
  {
    "url": "assets/js/29.106c47ea.js",
    "revision": "019a5778155a45fbd284ead0333ea2ac"
  },
  {
    "url": "assets/js/3.8774a775.js",
    "revision": "9e612dbebba8f0df7d00e2e3cb5d6b5a"
  },
  {
    "url": "assets/js/30.91d6112b.js",
    "revision": "84eff7b7c85514ac7422e11d6c1eac19"
  },
  {
    "url": "assets/js/31.e73ceae5.js",
    "revision": "30deb478ac679cca0437935d38c73c3d"
  },
  {
    "url": "assets/js/32.fbfbd434.js",
    "revision": "ef92c2c923694c02e3e2603b5dd528c8"
  },
  {
    "url": "assets/js/33.b99d6c7e.js",
    "revision": "c7f03c84c414cc3afca57d03d4520a9b"
  },
  {
    "url": "assets/js/34.548da5f1.js",
    "revision": "9b52987491d6af50290474825f95266b"
  },
  {
    "url": "assets/js/35.482c0d93.js",
    "revision": "c9bee97638555705987d4994f4962726"
  },
  {
    "url": "assets/js/36.c84a849d.js",
    "revision": "52fbe7ac13d57526e232e3364f42998a"
  },
  {
    "url": "assets/js/37.50679b67.js",
    "revision": "0820395812fa864999d4415ceb4558fe"
  },
  {
    "url": "assets/js/38.5b2f0828.js",
    "revision": "560f8046a636e5dfed768095439bba01"
  },
  {
    "url": "assets/js/39.16852347.js",
    "revision": "f9bad2511fc61358e71dc6067783d075"
  },
  {
    "url": "assets/js/40.e1fddad0.js",
    "revision": "e5f749f33e0f8a9ac01d156617a01be9"
  },
  {
    "url": "assets/js/41.b7105860.js",
    "revision": "2d70f404f8f65d7215b8371f933eac86"
  },
  {
    "url": "assets/js/42.805ea63b.js",
    "revision": "c7a5b83bbf9b7d8e418a8733d448f508"
  },
  {
    "url": "assets/js/43.b36d2d41.js",
    "revision": "aed0eafca54fc637081d9780d4b86cf1"
  },
  {
    "url": "assets/js/44.6d6d62a9.js",
    "revision": "18fbb05e129a9eb6b3ce392b8d3415af"
  },
  {
    "url": "assets/js/45.f8ea8223.js",
    "revision": "c7afbeab2f29a39bb1e6336ce8463f6e"
  },
  {
    "url": "assets/js/46.bafb4e20.js",
    "revision": "e341e6318a6adb293f881811335a4b05"
  },
  {
    "url": "assets/js/47.8beb8c73.js",
    "revision": "6a57b759d5e060863f78dfab6c7fa8ba"
  },
  {
    "url": "assets/js/5.5dfb1f2c.js",
    "revision": "47bd1d4d835dd2b6389e7cf72cd8e5b5"
  },
  {
    "url": "assets/js/6.0ab15db9.js",
    "revision": "6b89b4a40f5280c2d2b10eb2e3b5bda0"
  },
  {
    "url": "assets/js/7.03547115.js",
    "revision": "07f19173f01d444fe47c8fa941f62b61"
  },
  {
    "url": "assets/js/8.0e84121f.js",
    "revision": "677464077d44cf91f06a7a96afac5902"
  },
  {
    "url": "assets/js/9.5e05eb7f.js",
    "revision": "86e749a5ac0cc819d313e5536bf5e3be"
  },
  {
    "url": "assets/js/app.0da17a49.js",
    "revision": "6d65e9e6da32abc164ac2051194dc38c"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "8258e69a69891fc9002e36b88d9fe9df"
  },
  {
    "url": "contributing/index.html",
    "revision": "f0fb2e51e6005d729675beafab3b0a8b"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "fb9ebdf60e2ddfc0c454102099bee822"
  },
  {
    "url": "examples/all-features.html",
    "revision": "cc12c30d999f24bdbe1554ab2b45b197"
  },
  {
    "url": "examples/comments.html",
    "revision": "9491e10b5c838331bdfb018a770437c6"
  },
  {
    "url": "examples/each-with.html",
    "revision": "012490213e39f1d21943e3a023ebea3d"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "9ad826a5357dd2e10ab1d0be48861f54"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "08d4705dcd8ae550b5a3e83cd50ac523"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "8504b81126dd02116aad6e2a5b42f84f"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "c225094b24dc80181df734e8d0cd1c98"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "a3eacf7bfc67b05490e0df2e9d9b1c80"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "b8cc647283dff1627559ddf930f2f88e"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "d0ec4f6d0eebd16f0b85bb902211d3a9"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "1c9f26cd8f6c5d9d2063f64646337a47"
  },
  {
    "url": "examples/partials.html",
    "revision": "e944857e8feb6ac7218a0fe1b17a7e65"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "f000781d6bbd24600f62cd441e2fd7ca"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "a9cbe56154e8285d92e23181a77fef85"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "afd195f7e3f4004da0f2afb1a5dccf3c"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "d5920cf7412ed0b919c3e6335c91594f"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "816a57c60e6e8e70f9b3d9350aed2fbe"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "18d1f43b6d897c26ff449d099550043f"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "98ff1a42e7c1de4e6bba6ca3ecaba107"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "684a556c03e0de8c9ad8759521791948"
  },
  {
    "url": "guide/decorators.html",
    "revision": "722d348c36773724003949e8ea7574be"
  },
  {
    "url": "guide/execution.html",
    "revision": "0b78b7658733ec46e293e4fee37df853"
  },
  {
    "url": "guide/expressions.html",
    "revision": "0127d417204bd5471ec3e4003266c01e"
  },
  {
    "url": "guide/index.html",
    "revision": "81bdec91afa3c2b0124c5352c37b1b7a"
  },
  {
    "url": "guide/installation.html",
    "revision": "7c4955c5591091948d43d9afcf025626"
  },
  {
    "url": "guide/partials.html",
    "revision": "1e2042a0456adc87d62c20970213df70"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "edf794e629687eb3a10e93cd9b82d38a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "021c96d35a7916814364b51e07bb85f9"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b6a0aed6bd43766cb72aed892883e78e"
  },
  {
    "url": "icons/handlebarsjs-icon.svg",
    "revision": "fa8fee4fad92619161a2b667a14511d4"
  },
  {
    "url": "images/favicon.png",
    "revision": "112f1b3a6d29f9cc655473c67bcad303"
  },
  {
    "url": "images/handlebars_logo.png",
    "revision": "bc9e95fc4a3ea4998503a65683cdd37d"
  },
  {
    "url": "images/handlebars-devswag.png",
    "revision": "9f39cc93300584f7454c24825cc7ce92"
  },
  {
    "url": "index.html",
    "revision": "817a271e6fd441b78f3d85b39adeeac7"
  },
  {
    "url": "playground.html",
    "revision": "ed7cafb4b580f6fae3fe769baba2ec8c"
  },
  {
    "url": "topics/installation.html",
    "revision": "925b46d7341b2e29adb998fde3207708"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
