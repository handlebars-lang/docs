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
    "revision": "07d7beab44892d9a4d59174ad01d7bdc"
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
    "url": "assets/js/app.d0d608fb.js",
    "revision": "584b21a737b694af1c407346cbfb3233"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "0d50a815f41cc8f56efb65728a66a7d1"
  },
  {
    "url": "contributing/index.html",
    "revision": "b85138ce4f62dc2ed549bc62e82713ac"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "1ff7738de084fdc27c6e247c747889f7"
  },
  {
    "url": "examples/all-features.html",
    "revision": "02a1d550a32423f2f9f0d462e19c405b"
  },
  {
    "url": "examples/comments.html",
    "revision": "ff5dd973119db33fd02dd005c7d0ad21"
  },
  {
    "url": "examples/each-with.html",
    "revision": "0852b1a9b4aac7b79ff86a73ea8882c9"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "5ee9b725a69deedbf7a6065f75e18839"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "9e0c5026f0e9e9056d17c048446168c9"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "98dbdaf78037f395efbc7965b227862f"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "6d64c38f83b4763f03044c5743bceac3"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "f1cd639c1a77cfe97fda2af571a3c950"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "3b0a6128242f8d77192d95c5dce87d14"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "67ecc3a6c1d92fdc1cae9bd84c337f6c"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "16e60f515200789542595b111c06e0a4"
  },
  {
    "url": "examples/partials.html",
    "revision": "6e76102f67b9aab332c1fc95533f72ab"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "b5cd62c52fec5c616b931d1982e6a93b"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "243a05aa253a9ea86c45edf1187774a6"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "db468dcf7558e74841e407acfc251ef6"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "94b07512ddd2b4fd6f243773eb2153ea"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "af3b3384a6bc2e0334348dc136b27302"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "84eeaa38fe089ec1d8dbbb2f2081c159"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "c71f5a7f2b786dad75e782094acffc7e"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "4b2e378f882ad8006f400213f1f86d77"
  },
  {
    "url": "guide/decorators.html",
    "revision": "f744e5c54c9a5c0c0d8dac27730209ec"
  },
  {
    "url": "guide/execution.html",
    "revision": "dc065345411d7f4b6697da3b578bc163"
  },
  {
    "url": "guide/expressions.html",
    "revision": "f86370e0151ec210c5bd76938f962e84"
  },
  {
    "url": "guide/index.html",
    "revision": "b615eece3170f33d125b9168fd6b9659"
  },
  {
    "url": "guide/installation.html",
    "revision": "b99b7cf74f8c6606c826d977a40734df"
  },
  {
    "url": "guide/partials.html",
    "revision": "fbad373611832f138249bd59b35356a3"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "abd58102f6935117681f27d4de9eecfa"
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
    "revision": "2a39344ab9192aba453ef72f9e5be598"
  },
  {
    "url": "topics/installation.html",
    "revision": "6c7fb5e04bad2141d5c9e32155d7d6e2"
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
