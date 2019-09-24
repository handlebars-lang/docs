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
    "revision": "a61b33808a6a5fece5fd19ce0c8da004"
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
    "url": "assets/js/17.51b0f281.js",
    "revision": "9d76639a604e3d53d7ebc8b098abc30e"
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
    "url": "assets/js/35.d41b11bf.js",
    "revision": "39e74cfa05fcdcdede5d8656e27b6124"
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
    "url": "assets/js/41.2dcf7ade.js",
    "revision": "5a2bba7599b254f48b14d0b80472481e"
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
    "url": "assets/js/app.3656dd8c.js",
    "revision": "c06ec6b5fbd223fd851d930a763322a1"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "82631863e08d62fa5cea2e8b11a40ece"
  },
  {
    "url": "contributing/index.html",
    "revision": "d3b02ddb6c3e2dd61ca812ab0d2add71"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "250f26650c34a055d4fdcd347dc963c5"
  },
  {
    "url": "examples/all-features.html",
    "revision": "2112a6ded83d947155bbb11e28dfe348"
  },
  {
    "url": "examples/comments.html",
    "revision": "785a8a681b690a17ce365d9accaaf3ee"
  },
  {
    "url": "examples/each-with.html",
    "revision": "49dc4aa8fde74ef53b687f602564941a"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "c11f1021aa3b709e91f9262b57ba04f9"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "74dde65219305876ef3a52c73cf88de3"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "e9adc3c7d2036c59712d9c1011e85972"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "2f03d3d140d3d4e144aa6f1109d19920"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "727f6bc564eeffe3f7b1d65b38bb27e3"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "f1267457ba1adacef986dc8fb19d12ca"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "1fbf6ac5ad723e71147bc670628bdf15"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "edaedf06f17a746eb8e00a4b4e43ef5b"
  },
  {
    "url": "examples/partials.html",
    "revision": "b1b07535d4acd3192890464c11b6f736"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "986ac40d6d172f94a8080a184b5c17c5"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "25ebff7f1666398cd5a550dd0040df22"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "d0e9140cd96ce978d16fd8f20c22c971"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "98aa5d3cbc49877345c48ec1e94b0af7"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "f5fee65ddb46e1481e49ef7417c819d3"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "35ec880448e778f2c44a2ea19d798e37"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "aa7af6e16b4e8df29aa02747f65989f9"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "8b3d6ccbafba1156601b08e8f60580b3"
  },
  {
    "url": "guide/expressions.html",
    "revision": "a809ebefe609d676ee818925ef5b9de9"
  },
  {
    "url": "guide/index.html",
    "revision": "52f40ad83f599ecc677e1ae25899c19e"
  },
  {
    "url": "guide/installation.html",
    "revision": "cea780e1521b9b7bcd38df72d33dbe03"
  },
  {
    "url": "guide/partials.html",
    "revision": "6641e02ae3d4c6bf10516608d9ee2835"
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
    "revision": "76832f97d2adf7ca3ca5ebdd76ec1f39"
  },
  {
    "url": "playground.html",
    "revision": "a93fbc31ece3cf18dd8f52c058320186"
  },
  {
    "url": "topics/installation.html",
    "revision": "0bb7a6bf54d70692b329c9adb82e5bee"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "2c93200f91ddba7dc0e525bd37a09fe4"
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
