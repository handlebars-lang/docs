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
    "revision": "1b482d6666a21d204c4b61a6e2bdc526"
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
    "url": "assets/js/app.52248a5d.js",
    "revision": "2f2c33eb3283560f4d0ecf4b6f18a4ed"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "07980a176e1230b466ee5903a92bd850"
  },
  {
    "url": "contributing/index.html",
    "revision": "0c1841f74b15ab89c693dd6fca31328a"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "994346d8d1e162425dd4c3968ff842f9"
  },
  {
    "url": "examples/all-features.html",
    "revision": "6e246bc7dd11a246a2a5ff3bdb846e21"
  },
  {
    "url": "examples/comments.html",
    "revision": "99921a3e7f4fbd4df85f50c78da02368"
  },
  {
    "url": "examples/each-with.html",
    "revision": "42dbb5618d7190c07017b43ad03d76f5"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "a58733b0b50b04a1a09d707a2a1b9ea8"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "00904ea3b4355e2c9cc8c0f554199156"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "3b1ed65c94c9c7bf1ce9f402e8ab5d82"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "e4690a3ccec3694180f23b5b8967cd85"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "73be4ce511e99626139ab8c5a1ce9290"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "874460dd0b5e1111c0b5d963142dd506"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "803fcbbb8882ccac6ca1e80d6e1ec1af"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "a7630c8f59106fa1600939d9fce1ec0f"
  },
  {
    "url": "examples/partials.html",
    "revision": "88fc855d7175b910f1e403cb21b8fcf0"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "4e07b354d3477b04e158862f8793c5b3"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "e58c5ecc15358844fc53d3a6118134cc"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "a413ce7ff83f7ebebb3bf952a0caa8c6"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "89f1c633405c1a1956cf069b673eb4d2"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "b9c9716554faeda95b4186bfae7dccf7"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "4fa70875955b0bb54729daa3e101458c"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "b2c79300424c367c1e1b20cd89eb39b9"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "724ce5f0ea12cf7997b41edc0abf45aa"
  },
  {
    "url": "guide/expressions.html",
    "revision": "893dedd9f4f3e808cfd036e580981196"
  },
  {
    "url": "guide/index.html",
    "revision": "6cc54e7423d578551c0c7ab874a6519a"
  },
  {
    "url": "guide/installation.html",
    "revision": "91ad8bec7a544c46474e911937954272"
  },
  {
    "url": "guide/partials.html",
    "revision": "3bdc5e336b14a2e7ce2eab559b3edc48"
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
    "revision": "6022ae64fe8b18dcc05c41979846ed7c"
  },
  {
    "url": "playground.html",
    "revision": "bc447e6fddfa8fafa1f3edce6b6fb941"
  },
  {
    "url": "topics/installation.html",
    "revision": "25496497f852a794b6f9be09e42ee712"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "d53a4b19c5bb1195c10e247d608a3f91"
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
