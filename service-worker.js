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
    "revision": "078458ba071f0635a020fe0f1fb05f39"
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
    "url": "assets/js/38.604ee19c.js",
    "revision": "e1b9e5c8feb4fb76da8f9e2b3c767e3b"
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
    "url": "assets/js/app.9f1da0c3.js",
    "revision": "940cb45f247ba34757c8c888bf0183b3"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "bc2220d172f26c59c5a90b07abc3f3bc"
  },
  {
    "url": "contributing/index.html",
    "revision": "a092198757b6606503d7daad7b75a7e2"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "e94b7c6f215eea01e9465cce54bf4abd"
  },
  {
    "url": "examples/all-features.html",
    "revision": "db59b90cc6d017a9efa306818e64ae42"
  },
  {
    "url": "examples/comments.html",
    "revision": "f9fc4d72b93598e1ebf814298fce391f"
  },
  {
    "url": "examples/each-with.html",
    "revision": "c4a2cc9c08250bb75dc0f6c872ae9c14"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "c52990bb57d92f566cbba1d0a7406e16"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "7298313874a9ab4e870e8db0e1435e2b"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "5f416a058b9fc558865d33af8dd9d975"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "8ea9929fe5a649cd76b481fa4df57adc"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "9c8011d917fe2575708abfae5fc34462"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "df8ad93104a66ecd0b53467804c75cfd"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "df490c978b66331234a21dff1dff8590"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "ac6ebeab8803dc214fbb12a30ebe0e19"
  },
  {
    "url": "examples/partials.html",
    "revision": "26fd097439cb9475ddf6aaf11a1b9111"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "791f85764b8faca2b9b36f060a765c92"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "9bc9753ccf8ebca3691846d6db5ba3f3"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "3e1950450f70c817f0e1b9deb0412849"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "60c25f57c5ed923f8b27cd7146f3267b"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "ced11d73db0cc0995f411580484298e9"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "8642d68b74ade5ce4222080b1b695015"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "4c90c7abd4b2922db02151cceba0d74c"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "5eb2bd1dc8c5390191d3b93e80e28f8b"
  },
  {
    "url": "guide/expressions.html",
    "revision": "f463b7e83f5b540aac2fe1277e326595"
  },
  {
    "url": "guide/index.html",
    "revision": "fc5aaf891a349c97131ac9960b12f3b2"
  },
  {
    "url": "guide/installation.html",
    "revision": "8e52d3f06f3a920ce9210f6181561c5d"
  },
  {
    "url": "guide/partials.html",
    "revision": "48a541b25f8d04e7a85ff5f00ae7fbf0"
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
    "revision": "d6df490e92e5d547540c40961d3516a2"
  },
  {
    "url": "playground.html",
    "revision": "cd7be3bf6017b706698110d4d8ea936d"
  },
  {
    "url": "topics/installation.html",
    "revision": "d0bd6df861cf1fef00e2ea62c377cd08"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "af8775f66ea00ce8b4f4b71bd14e9f8a"
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
