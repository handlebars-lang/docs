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
    "revision": "b1452eea19ae69344b210615cb608e41"
  },
  {
    "url": "assets/css/0.styles.76da7ab7.css",
    "revision": "85baba22a6f3013b786bc4940e7209a1"
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
    "url": "assets/js/16.529de999.js",
    "revision": "3f556d599db78b1413a7e478a04b4c76"
  },
  {
    "url": "assets/js/17.946e29f3.js",
    "revision": "33314467cc975ee1253ab6facc634fec"
  },
  {
    "url": "assets/js/18.5d1dd27d.js",
    "revision": "137e3e97bd8a1d17345659cc26ac2ec1"
  },
  {
    "url": "assets/js/19.7ea48f00.js",
    "revision": "fea0e9d9211515245908c10333cd2625"
  },
  {
    "url": "assets/js/2.cba9de78.js",
    "revision": "a7d334b2ebb81f0451133e4ecbb91420"
  },
  {
    "url": "assets/js/20.5904e448.js",
    "revision": "f77759ea8d99d255f478fd52cad095e3"
  },
  {
    "url": "assets/js/21.3257e611.js",
    "revision": "b8a24ffa86b0e26a550d9a624e12132c"
  },
  {
    "url": "assets/js/22.3203e910.js",
    "revision": "1fd68f88d9159284c09bc96b186d1c3d"
  },
  {
    "url": "assets/js/23.a995f8c0.js",
    "revision": "d1bc0a553fd7a54e35ee00cad069ccf6"
  },
  {
    "url": "assets/js/24.5fd76dc7.js",
    "revision": "4aee7f56584d935eadb23d65e36751c8"
  },
  {
    "url": "assets/js/25.f9336cf8.js",
    "revision": "3587302fc2cb35a3e8b94d57aa9d9c20"
  },
  {
    "url": "assets/js/26.dbbc6641.js",
    "revision": "f13f0295334fe36575f38e130bc8e9e5"
  },
  {
    "url": "assets/js/27.2f2eebe6.js",
    "revision": "93351fded273e3ccc2c4647fd773a4ff"
  },
  {
    "url": "assets/js/28.9c1c660b.js",
    "revision": "9bb1f311b8602b6ea9599b0df8b9adb1"
  },
  {
    "url": "assets/js/29.eea1be16.js",
    "revision": "d60bb46f64a71ea5944ab0acf4e11053"
  },
  {
    "url": "assets/js/3.5f0cf0a6.js",
    "revision": "2004c7d3f953081ff950f7f17f1d9d5f"
  },
  {
    "url": "assets/js/30.0b593136.js",
    "revision": "41135ab84d75dc099064379a339b21fe"
  },
  {
    "url": "assets/js/31.f75bdafa.js",
    "revision": "007641e66d309aa224807cc3fc09f266"
  },
  {
    "url": "assets/js/32.8dc24797.js",
    "revision": "1da292ccf201238dc544ad3f59954496"
  },
  {
    "url": "assets/js/33.3f97a3a9.js",
    "revision": "1da5e65a6b758ed1306ce97db6f826dc"
  },
  {
    "url": "assets/js/34.2edc3635.js",
    "revision": "d3eb95a3291ef931d01b54d1a1ee276c"
  },
  {
    "url": "assets/js/35.482c0d93.js",
    "revision": "c9bee97638555705987d4994f4962726"
  },
  {
    "url": "assets/js/36.a3fae79c.js",
    "revision": "17023530befdb9ba55c6dda96881cd7e"
  },
  {
    "url": "assets/js/37.d0fffca9.js",
    "revision": "74b24fae26947196a5d5e17e059c1e41"
  },
  {
    "url": "assets/js/38.19a350a1.js",
    "revision": "11aba6475c641f13550fb56bda960933"
  },
  {
    "url": "assets/js/39.386b9065.js",
    "revision": "55d65e9c74af913e0ee02d33e65e274d"
  },
  {
    "url": "assets/js/40.89c549fa.js",
    "revision": "d6b293457276ea4d1ea95941810d8854"
  },
  {
    "url": "assets/js/41.55177993.js",
    "revision": "961616a1e8e464397eb6915bed314459"
  },
  {
    "url": "assets/js/42.a3c35237.js",
    "revision": "e0effacc33638214732cf41012966b91"
  },
  {
    "url": "assets/js/43.2b3dc83d.js",
    "revision": "a381c6282ff13972b7fe510ef8ac5d35"
  },
  {
    "url": "assets/js/44.0b34c742.js",
    "revision": "32792a6aca88b7df85fae934ed93278a"
  },
  {
    "url": "assets/js/45.8c827606.js",
    "revision": "918ddbbf59d3c5239da7117d0fb8d09f"
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
    "url": "assets/js/9.04c8838b.js",
    "revision": "8c52065e08dc533b00478666fdd116f7"
  },
  {
    "url": "assets/js/app.d333d141.js",
    "revision": "58cea9ed479cb29756e61ba36fe5dd02"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "78acdf50441b3681dd99381db472ac30"
  },
  {
    "url": "contributing/index.html",
    "revision": "c7d65bb255f56b73c0c6ec6306e3e070"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "8cb380487d839b8d370afaf9c2192488"
  },
  {
    "url": "examples/all-features.html",
    "revision": "e6b62266e75fe2c0067f6c298880d2f7"
  },
  {
    "url": "examples/comments.html",
    "revision": "bee0ae3c28b3df5fc88789cefcc8379a"
  },
  {
    "url": "examples/each-with.html",
    "revision": "4f3b16fd9777c0808684eb3072386d98"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "67a4f4f7af459ae1ecab7562270619cc"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "cfd9909ada54b4accff4c18aff52e95b"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "a2fbc0b9c8c5efb0fe0ae85cb63dfa45"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "dcf43cc70d9d4cdb9039f3affa7274f0"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "e014bd6c0d7dde231ab52787eb0d3bfc"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "c0069e28289b99f4cea85d193e3043f3"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "2f30301e4549c1938f5b5299ecd834c9"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "20cad035eaf0ee5aec7c2dc927f09bd6"
  },
  {
    "url": "examples/partials.html",
    "revision": "a8cc3b280db5a010370f2c1dbcdea576"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "3d95b32faa1d1c4b048e36ddcef25333"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "550893d8213609ea5603a83c33333e92"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "4e47adb27256703ab205877a7b011c31"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "24bc2fde679da40d6c13a4695e4e5e43"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "2a5f3042472442b732df67eb5f369a8a"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "23a612ad211de0a93601305f0246bdaa"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "3269fef4967d03e6ed5ee90f9cab7b67"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "bbb5c15d07b27af126d8d73cd547a41a"
  },
  {
    "url": "guide/expressions.html",
    "revision": "4eccfa5a1bd3e6c4ec8048d15356414d"
  },
  {
    "url": "guide/index.html",
    "revision": "2b3dcc6b4d0ad91a115917afed0ffe71"
  },
  {
    "url": "guide/installation.html",
    "revision": "8b33f0fc817af504dfe0ad56db23376d"
  },
  {
    "url": "guide/partials.html",
    "revision": "d41a708fa879eb764f3e4ac8744c3481"
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
    "revision": "b7b3bdfdbcc0357b951033d04ba4633c"
  },
  {
    "url": "playground.html",
    "revision": "efe9e68135a59db4074555df32270c59"
  },
  {
    "url": "topics/installation.html",
    "revision": "be84e72b7b66bc5fa374ae42765331a6"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "4dc89218ccbf0a826356c588ef58ffc4"
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
