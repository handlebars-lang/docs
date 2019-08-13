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
    "revision": "28e3d23a22514573b85328c83377fff4"
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
    "url": "assets/js/app.49f6afc2.js",
    "revision": "d21d248833c977d9e562010c28f2023f"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "8b28e4d082a376a58c7090d3f8b8cddb"
  },
  {
    "url": "contributing/index.html",
    "revision": "646dac859b36fea6e8e3986db6bd916d"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "b50bf9f28bee4ce9515611e99d40c7a5"
  },
  {
    "url": "examples/all-features.html",
    "revision": "94aedaa599b415c41091fe562495e3ec"
  },
  {
    "url": "examples/comments.html",
    "revision": "82dc60eaff63e55e2e3daa94a39654c8"
  },
  {
    "url": "examples/each-with.html",
    "revision": "6caf404ce938fd2a5384da95bfdb0a3c"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "917ba68196b72fd2e641686c5ecbc04d"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "234992eb03594e07a72425ec1a883818"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "0d1c80d6ae198bca234d69b28a6c352c"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "b9deaaade763b1b88f52316fa2e2c0ae"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "111a61d666c41314f0a6ff70bd0b594b"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "2fc41c9f6d1ccfe22ec0fd3cc9fa1171"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "5ee71a1d70bd3359cf2392f0d99c47d1"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "9859b58a3d787595a41bab6f877a9717"
  },
  {
    "url": "examples/partials.html",
    "revision": "505d983b32ddb394d1d0e5cdd36aba15"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "78982e4747a8627f4c07fe445303f288"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "e93f307f059d5c75d23b7da40829a4a0"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "f74f3f2f9fca14eeb82c4c348ee97929"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "4aba18485692d6a51ba74f8c4d18cafa"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "59295d9a7316c4e88523854fc58ebbd9"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "ccc42f310daa9198b3fa0b30b6e78091"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "54b6bf77323fa29c11bd0770c4219cc5"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "3c7d4d480dc0b7665e0f2b9c2d9ba97c"
  },
  {
    "url": "guide/decorators.html",
    "revision": "9c650a8ac02b3817604b9be8270b73e1"
  },
  {
    "url": "guide/execution.html",
    "revision": "3f8cf4fc9d661deb4431463874834fab"
  },
  {
    "url": "guide/expressions.html",
    "revision": "c53428423230a11137187bfa316d14c1"
  },
  {
    "url": "guide/index.html",
    "revision": "d2bc126682baa5399de4347644e7c299"
  },
  {
    "url": "guide/installation.html",
    "revision": "4fc337088fa1609963276ede34d33a15"
  },
  {
    "url": "guide/partials.html",
    "revision": "30341db71dcb84d08270ea3d3e5aedac"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "533c2f5b45db410981d4a7c73409f35a"
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
    "revision": "15ecfbb2221673486d84e23e0e63822d"
  },
  {
    "url": "topics/installation.html",
    "revision": "040c42bbd15af12ce210387c7c879a0b"
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
