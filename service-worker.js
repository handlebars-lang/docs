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
    "revision": "59b8c92ecd27f6730fa8e52527270059"
  },
  {
    "url": "assets/css/0.styles.9ef69df1.css",
    "revision": "131cf68a35415fc08a10ada9fba67410"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8898e817.js",
    "revision": "2161d0a2fbc9ce7ea0d98ca6329cf73c"
  },
  {
    "url": "assets/js/10.a04bc84c.js",
    "revision": "3809d00841303a75129deb29f55425f2"
  },
  {
    "url": "assets/js/11.793936f9.js",
    "revision": "2df5fd286e3a35eb9116c2da91d21570"
  },
  {
    "url": "assets/js/12.e692bf78.js",
    "revision": "1e023a1a2500a13fe2ab053bd3c35ed3"
  },
  {
    "url": "assets/js/13.12975bd4.js",
    "revision": "22531ef505a0028e05d8e7b02c06bb89"
  },
  {
    "url": "assets/js/14.4034aa80.js",
    "revision": "912331906665d8d30aa6954c8c920cfe"
  },
  {
    "url": "assets/js/15.0dbc5c24.js",
    "revision": "e4876c95af536e070376518221b9197d"
  },
  {
    "url": "assets/js/16.5f30d42a.js",
    "revision": "ebf07fd43f6538163de07a9f2258a75a"
  },
  {
    "url": "assets/js/17.b375343b.js",
    "revision": "f891bcc963e83ec887485aee8f4bbcd9"
  },
  {
    "url": "assets/js/18.4a8acf0c.js",
    "revision": "3c4ac723453bcb87f8ba0c45d350b6e2"
  },
  {
    "url": "assets/js/19.64f281ac.js",
    "revision": "b968f37070906c8b68c2c6277e28f606"
  },
  {
    "url": "assets/js/2.0eb84d5e.js",
    "revision": "3011d19f20189a7204b6a0891435d6bf"
  },
  {
    "url": "assets/js/20.5370ef1d.js",
    "revision": "f6af4516e8ce96920c2c2f0ed38ae39e"
  },
  {
    "url": "assets/js/21.081f87e2.js",
    "revision": "18d1e58f78b9e3089492d43893daa3f0"
  },
  {
    "url": "assets/js/22.cef72353.js",
    "revision": "edb2a32422c50868f9717c5636f9b0a7"
  },
  {
    "url": "assets/js/23.b8bcdf5b.js",
    "revision": "de34fad7f22fb5f4695cb1159ec0799e"
  },
  {
    "url": "assets/js/24.81a532b1.js",
    "revision": "82cb71d85e6a9eb2ab1afe6dbffc4318"
  },
  {
    "url": "assets/js/25.36254da4.js",
    "revision": "78e1f633b264226527b40efeea334e03"
  },
  {
    "url": "assets/js/26.f715aee4.js",
    "revision": "35007bcc8db757a2a900ff3b9608b511"
  },
  {
    "url": "assets/js/27.70a29812.js",
    "revision": "9e0c87b65143ffeef3d8835583f4dbb2"
  },
  {
    "url": "assets/js/28.097f2949.js",
    "revision": "3b28196178e8e888081a4c281fdbfc54"
  },
  {
    "url": "assets/js/29.dcda77da.js",
    "revision": "2332ab9213684f040557861c0f5693b5"
  },
  {
    "url": "assets/js/3.516ebd4b.js",
    "revision": "4cfa80d996be9246bc0aba25f10296d7"
  },
  {
    "url": "assets/js/30.1d2d90f7.js",
    "revision": "eb642acbff836b86616fc4bc6c93bc1c"
  },
  {
    "url": "assets/js/31.16e30a42.js",
    "revision": "07c0fd6a25e1d6f94fccab6a1924e144"
  },
  {
    "url": "assets/js/32.f99d7c5f.js",
    "revision": "6f8d15a439f55e902014c48331516980"
  },
  {
    "url": "assets/js/33.69595a46.js",
    "revision": "4296bcc1fb599792b2a3b0673878c267"
  },
  {
    "url": "assets/js/34.640e1d8f.js",
    "revision": "3cb9c71ac3038ee394ddf53ad4d1967b"
  },
  {
    "url": "assets/js/35.d45a4f76.js",
    "revision": "ce2a08f54b02c73bdce0592cfca89362"
  },
  {
    "url": "assets/js/36.e8d4b6e8.js",
    "revision": "92c8e2d5933308e1b6cac69ec0ff51b7"
  },
  {
    "url": "assets/js/37.5af9adc3.js",
    "revision": "2806a6232a800b4bafd2625adb82f4cb"
  },
  {
    "url": "assets/js/38.148d62d0.js",
    "revision": "9dc67dc17de26bc552aeea78cb62403a"
  },
  {
    "url": "assets/js/39.ff3987e7.js",
    "revision": "07733e8fc2acf148e0ba22124f50d955"
  },
  {
    "url": "assets/js/40.c60884a7.js",
    "revision": "58d16e8cb41a5053d3266813e0a1f922"
  },
  {
    "url": "assets/js/41.f6d4473d.js",
    "revision": "a207c93cad0e18c813d101263a1177bb"
  },
  {
    "url": "assets/js/42.4815c6d3.js",
    "revision": "d3cf9285c24dc0a9276987125c64a831"
  },
  {
    "url": "assets/js/43.7da36610.js",
    "revision": "f7197e014047d9bb76f0af7677e5571c"
  },
  {
    "url": "assets/js/44.5a870248.js",
    "revision": "8e56a1256b890e6343237e2304403686"
  },
  {
    "url": "assets/js/45.8581c35d.js",
    "revision": "eea6a0f1599c767c1c058659d086a117"
  },
  {
    "url": "assets/js/46.ec3fcc31.js",
    "revision": "f287c1329dc87100f435022aad39e8b3"
  },
  {
    "url": "assets/js/5.0b980220.js",
    "revision": "06def0fe00c385ceb9fa7d6998577453"
  },
  {
    "url": "assets/js/6.ed11a301.js",
    "revision": "9b3e196385b60f6a9866e9a443a5e70c"
  },
  {
    "url": "assets/js/7.00b6a03a.js",
    "revision": "7223008d476f28933c368c1558f9442b"
  },
  {
    "url": "assets/js/8.d4caa522.js",
    "revision": "43caa866425e69982cff22365564bdf2"
  },
  {
    "url": "assets/js/9.ad05e264.js",
    "revision": "9e7bf85d4cf87761465d513619f2a5fb"
  },
  {
    "url": "assets/js/app.2f340c19.js",
    "revision": "523d28caa655654cda380b199232c042"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "7a92d9d18e0d4e972b477e6123016f1d"
  },
  {
    "url": "contributing/index.html",
    "revision": "ef62f9e7d6a42af888efcb0e0a64819e"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "291fad2df8df462f0e3234d9011c9f0d"
  },
  {
    "url": "examples/all-features.html",
    "revision": "86b0730fd22160decb94e8be6f9b3f04"
  },
  {
    "url": "examples/comments.html",
    "revision": "22e7d939424c769b3010b1e038d482e3"
  },
  {
    "url": "examples/each-with.html",
    "revision": "0d4cc52df0619144667f241bc55482f3"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "700762bd560074977cdf5c7d001dc334"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "095fcb60273127e6efbe642bc412248d"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "5c5510b2c4382a124f499f248f0c8343"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "846c617b732d7907f41377375e5d21ee"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "bc2ce07713d8f1db0e15fd0666cdec58"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "e65f63f90126b6386bc47bd2ac6b30f7"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "d6fc75450bc5ddd16e36bcdf45996cc3"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "e76057ce49c13bf6fb0cbb1bc6e98144"
  },
  {
    "url": "examples/partials.html",
    "revision": "8c51fc1ea1d8de08233480077f26ace8"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "286d9a5554da152630069dd762b5c6e2"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "6165b772e9d0410d495efe3b85712b3e"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "0976de3e6c0457c18c8bd13e5b57f788"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "5c7ae39d3dcded11a0d1550dc98d2dde"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "8800cb29d604c52aec66e409f959d0ba"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "ccfc0ae3ff82412ae5beedfe4d369507"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "4d56c6ab960915a7af4ca7b30036fd55"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "3f7da733830ec5f93438cad99f2a5deb"
  },
  {
    "url": "guide/expressions.html",
    "revision": "44a6be67158c35db9f7927097e30f4cf"
  },
  {
    "url": "guide/index.html",
    "revision": "de20b0523fd8a2e16b5f7b8e0cb3e76a"
  },
  {
    "url": "guide/installation.html",
    "revision": "c6af382d632a81e1cd83337441aaef0d"
  },
  {
    "url": "guide/partials.html",
    "revision": "53a5a3300a4adbce258d7c7fb99640e4"
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
    "revision": "d5a27e3cbff8334ee3ca1804738181bf"
  },
  {
    "url": "playground.html",
    "revision": "ee7fe7f52797d92799cd1ee61b475dd7"
  },
  {
    "url": "topics/installation.html",
    "revision": "32a58db18a1ad98a9b23433f5364679e"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "1c1028a9e474d66260959db4a510b9ff"
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
