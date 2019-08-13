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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "63067744fcbfa87c82ae9dc66fd570c3"
  },
  {
    "url": "assets/css/0.styles.71d8fa0a.css",
    "revision": "0273a6af96479a5975b8feb1fda2435c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.77b5917e.js",
    "revision": "11b2c7c71eed40abf7ab5be55b4d74ff"
  },
  {
    "url": "assets/js/10.4b03feda.js",
    "revision": "a5eaa80a84d9b8ffb6a4f128ed877038"
  },
  {
    "url": "assets/js/11.05af1a37.js",
    "revision": "2a0cde9c93767e4dc7d4577fe84bc753"
  },
  {
    "url": "assets/js/12.99ff680a.js",
    "revision": "57525088803f16aa4f2809285ff007e9"
  },
  {
    "url": "assets/js/13.39725cd2.js",
    "revision": "57338b05e0b16bfaceb22fa09227b02d"
  },
  {
    "url": "assets/js/14.81f310c6.js",
    "revision": "681808824683657e81a28209caca822b"
  },
  {
    "url": "assets/js/15.05ea6294.js",
    "revision": "7cca4a3b9e60c67929be6b1bc2a1b9c1"
  },
  {
    "url": "assets/js/16.092e9ca5.js",
    "revision": "33605f306efe30b2c05774e73bd420a4"
  },
  {
    "url": "assets/js/17.6c1502ef.js",
    "revision": "f3123b1dd874529d0b2e41efd47a859e"
  },
  {
    "url": "assets/js/18.c52ed65e.js",
    "revision": "3016a50c754274374b00050be0396ed9"
  },
  {
    "url": "assets/js/19.dca94fe5.js",
    "revision": "1a692aee5b5689638732e0c3c532f962"
  },
  {
    "url": "assets/js/2.27760cc5.js",
    "revision": "b1628728b6e28782c2d22e11f0723b96"
  },
  {
    "url": "assets/js/20.2ca7978f.js",
    "revision": "f46f16b6e6cd890cb5c5ca718cdde29a"
  },
  {
    "url": "assets/js/21.b4eb13d8.js",
    "revision": "f8616826dd26cfad135fc7f81974d59a"
  },
  {
    "url": "assets/js/22.e1f1cde0.js",
    "revision": "a9437d8336a89184c176ae04b2cafdc1"
  },
  {
    "url": "assets/js/23.8636d71b.js",
    "revision": "99fdb019f4917233d5dd9517bef324e5"
  },
  {
    "url": "assets/js/24.77344953.js",
    "revision": "716799ad0f0c5d3bd41594def89be2e6"
  },
  {
    "url": "assets/js/25.9fa65829.js",
    "revision": "5106b94d6eebd7eaa2991fc0bdcf3ce9"
  },
  {
    "url": "assets/js/26.98bd67af.js",
    "revision": "ee4e4c1448cc561a87299e53295f5f7a"
  },
  {
    "url": "assets/js/27.bdbe8636.js",
    "revision": "effee73bb2725583d7df4804f1803d3c"
  },
  {
    "url": "assets/js/28.6521fefd.js",
    "revision": "b5905cca74506a3d2b043e470f6af60e"
  },
  {
    "url": "assets/js/29.0ea436c6.js",
    "revision": "b9e3f40a84501b3ab10c864f5e0046f1"
  },
  {
    "url": "assets/js/3.411659b1.js",
    "revision": "904b68bdd2534f681a19e9c5d1d1096b"
  },
  {
    "url": "assets/js/30.88152e92.js",
    "revision": "02824e5267152d4c3e157629ba45e22a"
  },
  {
    "url": "assets/js/31.86ff9c68.js",
    "revision": "9f11f307251f29c05124df421b33c293"
  },
  {
    "url": "assets/js/32.279146b1.js",
    "revision": "1e27281a1171b4576c8993659c876480"
  },
  {
    "url": "assets/js/33.1d16bae5.js",
    "revision": "d34d3a240f2bd49318e9bf7323186d38"
  },
  {
    "url": "assets/js/34.b8366e2d.js",
    "revision": "83651af97c007db2357d6b4ae35e7f53"
  },
  {
    "url": "assets/js/35.1f6dbf12.js",
    "revision": "34df77210c048fe602b4914d2bfcbf93"
  },
  {
    "url": "assets/js/36.66147178.js",
    "revision": "2deedab1f643d1150754725306f56764"
  },
  {
    "url": "assets/js/37.6327bec9.js",
    "revision": "88670202bc85e580721b04ce34d84e43"
  },
  {
    "url": "assets/js/38.5b4d2f4b.js",
    "revision": "3d5226c2a768410a1c678767926abe9e"
  },
  {
    "url": "assets/js/39.c635d2bf.js",
    "revision": "99a12c24f61bd1eb9a832ee345797e58"
  },
  {
    "url": "assets/js/40.4d1b2991.js",
    "revision": "32219138763fb1991936bedcda054aba"
  },
  {
    "url": "assets/js/41.3cd64a98.js",
    "revision": "58da867e4888bd2beb5d3187333118de"
  },
  {
    "url": "assets/js/42.b1739bfe.js",
    "revision": "c1c045a58e1ded218621397f5d1a960c"
  },
  {
    "url": "assets/js/43.bcadad00.js",
    "revision": "f4f80410506e5f21a2d035edef314c8c"
  },
  {
    "url": "assets/js/44.1e9c6c2e.js",
    "revision": "49e159bb272a849306d11083ac605a76"
  },
  {
    "url": "assets/js/45.5a3e7445.js",
    "revision": "80e652a84c8c494eab187b86e2c9fec6"
  },
  {
    "url": "assets/js/46.f22e0ce7.js",
    "revision": "1380246d0ce59dbdccdd4542a6baba69"
  },
  {
    "url": "assets/js/5.d71e7982.js",
    "revision": "17510a369bf9ef2f7c9a02afadf96928"
  },
  {
    "url": "assets/js/6.7705e672.js",
    "revision": "5176713b6c2095c84124b93f3bfeb04f"
  },
  {
    "url": "assets/js/7.e28b6c66.js",
    "revision": "51be90b92826a6d308e72028b6d1f7af"
  },
  {
    "url": "assets/js/8.4feaffd1.js",
    "revision": "f73e847754583d899a0b6285f9f28082"
  },
  {
    "url": "assets/js/9.30c2bdb8.js",
    "revision": "7101f6387221177b16f1fbcd94568859"
  },
  {
    "url": "assets/js/app.7c6dcda0.js",
    "revision": "2e00a1c9e8131db954cb40d161cb33a2"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "de388b9547f0bf7f05a2cc196b6461b4"
  },
  {
    "url": "contributing/index.html",
    "revision": "198c1300355362fffde1ec66fe6a900d"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "1c919dca27ae0b08f0e7399c7a878245"
  },
  {
    "url": "examples/all-features.html",
    "revision": "dac2f45a670fd98e065a70419075c180"
  },
  {
    "url": "examples/comments.html",
    "revision": "5e274ed268640ffe7b3d480479e9dcf1"
  },
  {
    "url": "examples/each-with.html",
    "revision": "c4761feb72ca9604b75f6beaef152245"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "1dff8ba566c901aeb30c2ad6c539dbf5"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "6fafd9b134704cb75b7784cf7e051b06"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "03dc419a33ccd6c87e5a3cf42c7396d0"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "f1e1926cfb1700b77e52674abae105f3"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "578829e7adec3457ca2e59018a3743b2"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "75b230e2c952025371b641f6bb104fe2"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "9cd129d4500d3a3127982a1cc375f3c8"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "8f1d54b7fdd9c03813ca2b98768d8dbe"
  },
  {
    "url": "examples/partials.html",
    "revision": "c45de35813ba50d9c0cdd67001fc50f3"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "6dea9583c4e5e1d74fc744ee691427ff"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "bcf8b8a2cacb4b952e26317723b49345"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "860e7b6cf160b61777c38d6043512221"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "d9ab7b83528447ae35f6a84d312ac1ae"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "0f418e96c330efc8da929175b32e58cf"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "dc804384f7e2c256a8ba3d6d2f1af06b"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "6ffec97ad66eff595e337efb1260e4d5"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "e683311682e38722609dc0f35ccfc2cb"
  },
  {
    "url": "guide/decorators.html",
    "revision": "4cfbb70214fadadbe59dcad1c7da2445"
  },
  {
    "url": "guide/execution.html",
    "revision": "636504a1db76601e9422385983f795bf"
  },
  {
    "url": "guide/expressions.html",
    "revision": "cf98144308532a8674ae7eab1a0cdc4f"
  },
  {
    "url": "guide/index.html",
    "revision": "2246a2a4a8142b5cfb341f05d535df7b"
  },
  {
    "url": "guide/installation.html",
    "revision": "ce9e133e5793b1dbe9212bb661bc782b"
  },
  {
    "url": "guide/partials.html",
    "revision": "7eb66039cf51ca5808e38c94c3b8335e"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "895d1d6b5aa901254e2a9364a6759dcc"
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
    "revision": "09061fe74e152200201da2e2d4650981"
  },
  {
    "url": "topics/installation.html",
    "revision": "4f60c7dfc6e92a7b2a65fe83c1007241"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
