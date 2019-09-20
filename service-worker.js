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
    "revision": "21577bfa66f932d70c0e21500e2245ae"
  },
  {
    "url": "assets/css/0.styles.4dde007c.css",
    "revision": "22b2eb7a73756895fa2d4109340e077b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9338792c.js",
    "revision": "0d1976cc36f853b694b8f67558ce7d49"
  },
  {
    "url": "assets/js/10.f9a66fba.js",
    "revision": "ea43b712536bce01af330ef596059c77"
  },
  {
    "url": "assets/js/11.58d58af7.js",
    "revision": "98d1e6092416e3912fd4c1a71ae4406a"
  },
  {
    "url": "assets/js/12.df598723.js",
    "revision": "a894faad0de3e3b985e3d3cc7f5a29b4"
  },
  {
    "url": "assets/js/13.683421d9.js",
    "revision": "5a7d1921a09d0f06b381bec32e9292a1"
  },
  {
    "url": "assets/js/14.f76f428a.js",
    "revision": "6d12d1300a2f6b2a8d6c35c4fee48879"
  },
  {
    "url": "assets/js/15.720ff5f4.js",
    "revision": "ff3964fba1619216143164a258edb53d"
  },
  {
    "url": "assets/js/16.4f22f2be.js",
    "revision": "557df321d79f123f2ec205cd9ab1a10f"
  },
  {
    "url": "assets/js/17.ebc8f807.js",
    "revision": "d37c589a6dc37373f27d1dc1e94b87c1"
  },
  {
    "url": "assets/js/18.e2f696b0.js",
    "revision": "a0aeb53c325b70a1c6f6621ecaf58b0f"
  },
  {
    "url": "assets/js/19.73e975dc.js",
    "revision": "dc1ecd129eb82a31548c4ff2ea8b7866"
  },
  {
    "url": "assets/js/2.d21fb167.js",
    "revision": "dd9a94ed02a030125a359f362eef606d"
  },
  {
    "url": "assets/js/20.84a44368.js",
    "revision": "0918f134781cbeb97f1195f8828f24f9"
  },
  {
    "url": "assets/js/21.e3042a5e.js",
    "revision": "20f3cd9cac3f0b25f8ddbd98cd1f1583"
  },
  {
    "url": "assets/js/22.6218a72f.js",
    "revision": "8dd1075865a9ffc82a7f17c403cdb478"
  },
  {
    "url": "assets/js/23.6c9e972d.js",
    "revision": "12b068a44a299807fc3cc4368f8418e8"
  },
  {
    "url": "assets/js/24.dbd022f4.js",
    "revision": "ab19afb75c99ea1a584352fef0464afb"
  },
  {
    "url": "assets/js/25.3652154c.js",
    "revision": "42b22ac6f04d0664a5893e6da6f463ca"
  },
  {
    "url": "assets/js/26.df9254f7.js",
    "revision": "7340db6ae8ce9da2709289d81d696ef9"
  },
  {
    "url": "assets/js/27.d237ef71.js",
    "revision": "fc182616a77ae8b1bd447c709885c154"
  },
  {
    "url": "assets/js/28.ca91aa85.js",
    "revision": "bcc8a69cf2aec3597b6a1847026b9763"
  },
  {
    "url": "assets/js/29.fd8580f7.js",
    "revision": "49d87724ca7acee05572e5a8d024ac7b"
  },
  {
    "url": "assets/js/3.16ed616a.js",
    "revision": "db21b1d84308237d9b8771a007d8f79e"
  },
  {
    "url": "assets/js/30.281ae755.js",
    "revision": "52b428bd3ee34eb6516c7653ccd9c8b3"
  },
  {
    "url": "assets/js/31.b087a192.js",
    "revision": "f026c5fc7a2c2599d1b8a4cb674f8786"
  },
  {
    "url": "assets/js/32.a2c55413.js",
    "revision": "ac0e5e3eb537ea41e2c5b67818e61e39"
  },
  {
    "url": "assets/js/33.4844904c.js",
    "revision": "265b5490ad244a442e0882a5a5715dfd"
  },
  {
    "url": "assets/js/34.4fcb57fb.js",
    "revision": "08481dc1539d71306e19a30d60707541"
  },
  {
    "url": "assets/js/35.6b2adaec.js",
    "revision": "67c4ed7c10953c8891b2efa45b7cb09c"
  },
  {
    "url": "assets/js/36.c26db54a.js",
    "revision": "bcfc5a5c9caee7daeb83079bd10d0b81"
  },
  {
    "url": "assets/js/37.6ac85511.js",
    "revision": "a58fe09a860888e51a1d100f9199a2ac"
  },
  {
    "url": "assets/js/38.efb66bd5.js",
    "revision": "7cc007e3dd971de2c7a40a9af9098e4a"
  },
  {
    "url": "assets/js/39.7b1c187a.js",
    "revision": "3671216aad30a1f59d3848b83b849540"
  },
  {
    "url": "assets/js/40.09b28634.js",
    "revision": "ed5563ac0add313b678dc3240451fc78"
  },
  {
    "url": "assets/js/41.d86720cb.js",
    "revision": "ee2e8d7ba97eedf3d722e2b01f9e6d25"
  },
  {
    "url": "assets/js/42.fea65941.js",
    "revision": "a3dd68fdb7b2947de664086edcbfaea2"
  },
  {
    "url": "assets/js/43.a604eb99.js",
    "revision": "88492d1d0b6fd096861b9cb2457d334d"
  },
  {
    "url": "assets/js/44.fb26575d.js",
    "revision": "dfb5ac1f639aba14201987b187509bf5"
  },
  {
    "url": "assets/js/5.07ff2d9b.js",
    "revision": "5fb0b1d470eb171be89f54a29865557c"
  },
  {
    "url": "assets/js/6.528f5c51.js",
    "revision": "e9e04b240babdcc5bda410d2718164f4"
  },
  {
    "url": "assets/js/7.463fceaa.js",
    "revision": "a797c26acd64a6b5a65adfebb47a1ce4"
  },
  {
    "url": "assets/js/8.a8f47eca.js",
    "revision": "2cf82655c2af0128110569434877fb34"
  },
  {
    "url": "assets/js/9.33e7e1bb.js",
    "revision": "edf9b0c597032574005595bb93ff5f00"
  },
  {
    "url": "assets/js/app.1f8835a5.js",
    "revision": "3f132865d6a0d6f52360298702e2b247"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "16ad09be2228107bda9a11efe2b66de4"
  },
  {
    "url": "contributing/index.html",
    "revision": "0e2d95bad0c010a525eb3a18609f7b6b"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "fccc8a3507bb5a6bd6fe02a0087bf2fc"
  },
  {
    "url": "examples/all-features.html",
    "revision": "9af00fe3e7b5e6c78b2fae59c37c9df4"
  },
  {
    "url": "examples/comments.html",
    "revision": "2eb1ce84b6294604ee2c27d04b8dd4b0"
  },
  {
    "url": "examples/each-with.html",
    "revision": "da96dad7c2f18e753f17c26913fd4c65"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "9c1bd3178366d26b7c44b2f67783cced"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "59decb771c280bce80b45b7f0a9a44eb"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "9ae41622022a6fc5d219ce76dea8e37c"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "6bbfae009a27518bce1454a14d757e0a"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "f4741467f1560728f447384c4a0f69b3"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "03aca9aa8a853ea126c931c42c6db229"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "e945b2955d44488a805a4ec2cc5cebf8"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "ee95a9385509eb57c6a2485504b7fab5"
  },
  {
    "url": "examples/partials.html",
    "revision": "a6cb69b552302ba974e56577f6374fd5"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "dd7db4ea8c2cc64297345b92086b0400"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "3728ddfa4fc4a9d0917ac3e6d97acb01"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "9cf6428822254a4d83aa539a4bb40ae3"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "832f0aa77bf06dae6bf0fea6f94c4547"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "40b060e1ea233f097f95d338346410b8"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "342a3793c6f1d37f80c861ea8be1359c"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "d3444201cad67a9df7877b48d67bbc4b"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "e91238804fef44686879c167e4a5db69"
  },
  {
    "url": "guide/expressions.html",
    "revision": "8a8ccc85c054e47e272ae168c59d5945"
  },
  {
    "url": "guide/index.html",
    "revision": "0d89b84d33f74f3b7e6a7e3f305cb01d"
  },
  {
    "url": "guide/installation.html",
    "revision": "865fcd873e39498f0a1b3aa44c8e3eb6"
  },
  {
    "url": "guide/partials.html",
    "revision": "a9be4d67ad10bd80b199a49a45e4a850"
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
    "revision": "b563b0f5761c46aaa7425b2921352f7c"
  },
  {
    "url": "playground.html",
    "revision": "1528cbd8159c547b76febd7109a670ab"
  },
  {
    "url": "topics/installation.html",
    "revision": "3d6c3e238806978f4b065544a826be3d"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "df9b917affc985171431aa636de830c1"
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
