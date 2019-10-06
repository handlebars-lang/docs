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
    "revision": "d57be3c53aecf10de0e3ae77fcbd03dc"
  },
  {
    "url": "assets/css/0.styles.9489fbcc.css",
    "revision": "01b7e71d377f99d76542b0bab4a48c1c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.70a866e3.js",
    "revision": "bb0dc1339adba47ade881aa4027d74c7"
  },
  {
    "url": "assets/js/10.f9822867.js",
    "revision": "dbf269adccbf9908cd3d55f05f33092b"
  },
  {
    "url": "assets/js/11.203a932c.js",
    "revision": "50321fec803b26c30e7922c38e6be1b5"
  },
  {
    "url": "assets/js/12.c1a21fc2.js",
    "revision": "69d24d5bfc628c6bc083f19ff30d95db"
  },
  {
    "url": "assets/js/13.ee058a48.js",
    "revision": "998982bc511066df58a4a8afa6b55c13"
  },
  {
    "url": "assets/js/14.c8e69b5d.js",
    "revision": "21e507679ea9e6c855c3c0b57227c13b"
  },
  {
    "url": "assets/js/15.78678efe.js",
    "revision": "2613240723a8c856889a20985d704ae0"
  },
  {
    "url": "assets/js/16.0828f47f.js",
    "revision": "d4326abd23ab858adb64fc00efc578b3"
  },
  {
    "url": "assets/js/17.c357efd6.js",
    "revision": "10fcb41b833c6068679ea637c6a18dd3"
  },
  {
    "url": "assets/js/18.45eb6b2a.js",
    "revision": "eb742de50607a7dfaaccddc9dbcf45db"
  },
  {
    "url": "assets/js/19.f779056b.js",
    "revision": "5b2575eb81042728584584be56597bf4"
  },
  {
    "url": "assets/js/2.94513f92.js",
    "revision": "ef2b1c9ad04a745ff93d23fb5b6d208b"
  },
  {
    "url": "assets/js/20.94f3c830.js",
    "revision": "c5afdbb05f9a5f4ae82934ddd8f1f305"
  },
  {
    "url": "assets/js/21.50f952a9.js",
    "revision": "1da6e82e22672e67c46fba04b2206c4a"
  },
  {
    "url": "assets/js/22.53215f5d.js",
    "revision": "c799476b13f07c55d491a0be17108edb"
  },
  {
    "url": "assets/js/23.ed75c2c2.js",
    "revision": "131902bfba0139be3e31998f6713db89"
  },
  {
    "url": "assets/js/24.6c4cb2af.js",
    "revision": "33fc7dee832f207c27abec0a886766be"
  },
  {
    "url": "assets/js/25.b29082b7.js",
    "revision": "cbb5e5498006e5c9df6d449aa358be31"
  },
  {
    "url": "assets/js/26.4ea1fa6e.js",
    "revision": "f039fa4fbad442e2fb983aff05464412"
  },
  {
    "url": "assets/js/27.eef4ba0a.js",
    "revision": "7216147b97fe97f83e0a1355c95e9166"
  },
  {
    "url": "assets/js/28.234680ba.js",
    "revision": "f3cbd11a2e770a003748ad46508f2975"
  },
  {
    "url": "assets/js/29.c1e853f9.js",
    "revision": "ca139b86a0f37029ee5e2f21b63c7175"
  },
  {
    "url": "assets/js/3.fdc54805.js",
    "revision": "4e4d15c364bc8a796352c4ceebbe6a7f"
  },
  {
    "url": "assets/js/30.eb95664d.js",
    "revision": "e31cd610dd100ec233dbbff15589b88f"
  },
  {
    "url": "assets/js/31.1e6c9f74.js",
    "revision": "8f4293b60fa4774028c45758b7f69245"
  },
  {
    "url": "assets/js/32.31640d4c.js",
    "revision": "27386384133cd290953cfacc02197a5a"
  },
  {
    "url": "assets/js/33.4175a061.js",
    "revision": "96ebf1e1a9c5920b75948720b093f080"
  },
  {
    "url": "assets/js/34.7905bf9f.js",
    "revision": "8a6fae1676cfb4e55446e78cf154d105"
  },
  {
    "url": "assets/js/35.a027c12a.js",
    "revision": "2588db6131e4f22189e0278d2872534f"
  },
  {
    "url": "assets/js/36.48afc893.js",
    "revision": "9bfeee5a4a109ea73e649cde37aed23e"
  },
  {
    "url": "assets/js/37.c563d525.js",
    "revision": "62644f92f50af38ec503090c8f5d581f"
  },
  {
    "url": "assets/js/38.1c16f2f9.js",
    "revision": "22b1f8e56fb43b0d86c658de23451c35"
  },
  {
    "url": "assets/js/39.17a71f7d.js",
    "revision": "8ee80f522dc3bab5fdf63e7113adc4b3"
  },
  {
    "url": "assets/js/40.3111821b.js",
    "revision": "c6ce5bffe2499936fe9aefa4cb8196c6"
  },
  {
    "url": "assets/js/41.b4b9b484.js",
    "revision": "eff975e7d456bc2da25c4137136d3114"
  },
  {
    "url": "assets/js/42.ec724cf0.js",
    "revision": "04f3946626eca7083c23471e85775b21"
  },
  {
    "url": "assets/js/43.4d4d4271.js",
    "revision": "2b48e180639002f1d87b08ac71dad5e3"
  },
  {
    "url": "assets/js/44.e34f4317.js",
    "revision": "625209ca8b7f02c643a1df6ddc50a951"
  },
  {
    "url": "assets/js/45.7809cec4.js",
    "revision": "5f5b7edd2ada504fb7249080e1302ae9"
  },
  {
    "url": "assets/js/46.a5d48dbe.js",
    "revision": "82c99b0a41d87dc3efba0ec43ed15eba"
  },
  {
    "url": "assets/js/47.e6dc378e.js",
    "revision": "e81db106236f5b9254f8cc07bf424972"
  },
  {
    "url": "assets/js/48.0bb3fda8.js",
    "revision": "c91f050543340df7c0d10d89d2997b6f"
  },
  {
    "url": "assets/js/49.9f675e89.js",
    "revision": "ff30325c5073001a2f08d9c25cdf0910"
  },
  {
    "url": "assets/js/5.164a9447.js",
    "revision": "1ff5b64d945b1e4d6e311730292575de"
  },
  {
    "url": "assets/js/50.266d887b.js",
    "revision": "48453f8fe41806f0062d8ca9a2ed2659"
  },
  {
    "url": "assets/js/51.ad2bd082.js",
    "revision": "aed43c1f2460991242f1ca989191c182"
  },
  {
    "url": "assets/js/52.523f4ef2.js",
    "revision": "515f78c4737aae36c62925da344bea70"
  },
  {
    "url": "assets/js/53.e2991e0c.js",
    "revision": "03488900ed2aaebacd40ec3095fa6932"
  },
  {
    "url": "assets/js/54.643e53c5.js",
    "revision": "054c877b4f42da9f62cb8acaa839f88a"
  },
  {
    "url": "assets/js/55.9b3915bf.js",
    "revision": "fb09ce81fa6b927ceeac77aa33599069"
  },
  {
    "url": "assets/js/56.1bf50174.js",
    "revision": "92f589f87e603fcded861c97a16b6bf1"
  },
  {
    "url": "assets/js/57.d8c63446.js",
    "revision": "a1f4307dd1aa7d6421b52f793ef6575b"
  },
  {
    "url": "assets/js/58.3ba6760e.js",
    "revision": "8ea273d26035966d86317d6330e226ad"
  },
  {
    "url": "assets/js/59.86c65572.js",
    "revision": "816789ff8fbd51b33516b8a7fcaf3226"
  },
  {
    "url": "assets/js/6.7b856339.js",
    "revision": "a9a9f4d31de4e2f25eba1871c0ebbebc"
  },
  {
    "url": "assets/js/60.52163156.js",
    "revision": "9f4249d6baf593ed4150ba4cd4460653"
  },
  {
    "url": "assets/js/7.1509e863.js",
    "revision": "cf5735b82f5eb1438bede3c0f38dd823"
  },
  {
    "url": "assets/js/8.24239273.js",
    "revision": "720339149e57af57a32af61f26a3edde"
  },
  {
    "url": "assets/js/9.496eb723.js",
    "revision": "bf136730ccc2ecbb08350f44afff6413"
  },
  {
    "url": "assets/js/app.0aec38fc.js",
    "revision": "043dc87c0c70773a535471e33da56639"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "178364f75c9f639cd11ea4067f05f158"
  },
  {
    "url": "contributing/index.html",
    "revision": "74bd586b421fb69b755fb4fd5cb1ee32"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "717ac3bd45fc44425419abbfce95912b"
  },
  {
    "url": "examples/all-features.html",
    "revision": "f72058eb144b0f4a82ca8dc93aa3a6ba"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "c7f54b66d393a4c6eb3df09b58269777"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "2702cae531d01951e7d8e975228afb94"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "b1556b1bb2b3ef99837d8d38c32dbcca"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "7d9a8c7bc8c331a6849f30db896a015b"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "6287ee9e0f28899b4206e332036287eb"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "037e88dc0ef5f985444b399e73b6cb76"
  },
  {
    "url": "examples/comments.html",
    "revision": "bdb4c2e9093beea42b69777315830c4f"
  },
  {
    "url": "examples/each-with.html",
    "revision": "d777e70dfb3f728f3bbb755f41aec7f2"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "23c77acfb3513231a442245dd555ed3d"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "c9c18839595c7fbedc765e0fab2091bd"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "be415480f03795055021452859d99fd3"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "0ad839154815c51a86fc0dbb2ea8a707"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "c41bbe0efcc3a94456a167ebcc7734bc"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "21f985327e6d527239c225f2833a8fd6"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "6207f0499d949ede3a9f7b472e0d47f6"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "8bbc5cde2fc8a7920cea8551b2c4ed64"
  },
  {
    "url": "examples/helper-single-parameter.html",
    "revision": "f81576f327eca88b68f2045f62311252"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "2a396e1e0567c86e6b27185b77345007"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "56824945d4e3dac76bc617ebac6fe4cd"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "34fe35e9d417f7fe844e0c160ac12d63"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "276efc429e7e9f2edba3c44b10606dbb"
  },
  {
    "url": "examples/partials.html",
    "revision": "4e283cfe4ab99b43e88c4071cf51bd62"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "6d65f8ff9bb6e739bde498f185d16656"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "11bcfe8d509f55f4419419127908106c"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "a8de8398768831e9db3609e4ab2f6c41"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "af3d3beb5d06ec77b8d45d6e1996f5b5"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "9d0527c4c45df945765a12bf52b1b9e9"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "71506d0c2754086817f52657dc8dbb69"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "02fdd94844c80c4584951074dd1d4604"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "9df075b017954360628c20c61f65d8fa"
  },
  {
    "url": "guide/expressions.html",
    "revision": "2d52c0c85b27814e9702135b92ed3b70"
  },
  {
    "url": "guide/index.html",
    "revision": "7b4780a01cc51eed848ba134ed6b062e"
  },
  {
    "url": "guide/partials.html",
    "revision": "8641a7c10ef528fae26a5e3bc70e371c"
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
    "revision": "0247fd8a6d4963eca7627daa492ca585"
  },
  {
    "url": "playground.html",
    "revision": "c2f1234b0d90e0de3d7589b449570ab9"
  },
  {
    "url": "topics/attic.html",
    "revision": "b0b4ef9dafd02edecbdfa12feb1fc399"
  },
  {
    "url": "topics/installation.html",
    "revision": "83370d5414dd0141da8b7e0e9429f397"
  },
  {
    "url": "topics/integrations.html",
    "revision": "6c85ca466603d05e09cb4de1eea67b83"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "25a14ca0dd4bbb7769447fc13328cf8c"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "097c2cba3c33efb8b05b14a827850f44"
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
