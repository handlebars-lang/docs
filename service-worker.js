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
    "revision": "58b4c289d51a60080f00d9b5f129d52b"
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
    "url": "assets/js/app.f669d2df.js",
    "revision": "c82010fe183e046469ae7ca1cc368ae4"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "28ac970ee528cdea1be8980233fa2b23"
  },
  {
    "url": "contributing/index.html",
    "revision": "6bf4625141318d491a3a4d77b18f41fa"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "156d3817b68cad26592454100cca9682"
  },
  {
    "url": "examples/all-features.html",
    "revision": "c1700799d27b35abee9931c0f59d5253"
  },
  {
    "url": "examples/comments.html",
    "revision": "4345e8e3ebc02dabbcc533ccc4d91cf5"
  },
  {
    "url": "examples/each-with.html",
    "revision": "c32f8a699b77191b215445a9a6445f7b"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "b7f912cc440d8d713d6cff6457411019"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "fbc484271b72cea4ecaeacc8bbb9e4ac"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "f6ec010526b8244a191956f3c92d8556"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "de5ba78f2966206d08a2486a34d885b8"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "f01c54d3cec60052b3bd788368e0f143"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "930b9049fc884cf1ad96f80d721e7b97"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "2a499d9a5068f41f2f9892de13c268be"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "a7e867e7f1a44b6a83c0f8ee5a4f5fce"
  },
  {
    "url": "examples/partials.html",
    "revision": "0173221620c089024184a73ce589f174"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "084cb75d399b1aa02d685c4be34c0974"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "74807abc62e1afa040c1e09108bf82db"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "798e983f92a855eeff4e2ce839e06b19"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "a705c461c45818d99a82a29e9edaecda"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "a2178c3d588030d0d9d4ab0d083dccaa"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "3f45754685d527fbad4f0f30b03b6051"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "a9cd313f771cc236c9a18a11c1c012e4"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "7d8c66e9fc0d26c15f2cfec9bb843acd"
  },
  {
    "url": "guide/decorators.html",
    "revision": "0109fdd999010ea12206ad0381dc17c8"
  },
  {
    "url": "guide/execution.html",
    "revision": "4431f12ddffb7097749884df492d191e"
  },
  {
    "url": "guide/expressions.html",
    "revision": "0015f3ccb75324d86974a9eb9a448a2a"
  },
  {
    "url": "guide/index.html",
    "revision": "cce781df14f171c085310db7f6866954"
  },
  {
    "url": "guide/installation.html",
    "revision": "1a9d29725c3b3ee7c4845e9320829709"
  },
  {
    "url": "guide/partials.html",
    "revision": "1762ef5f25ea28c1b1c8967227bc77d8"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "3f18bcec4ca4c327bb8b8a3fd9fa2032"
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
    "revision": "8b875107aa8af8d1cf69f6fe0c9f532b"
  },
  {
    "url": "topics/installation.html",
    "revision": "8737ba898bc73f0eee89cdf04b01e33f"
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
