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
    "revision": "829ae94b69e821bfb89144df45711fa7"
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
    "url": "assets/js/50.e4addedd.js",
    "revision": "f2abf9f201d228a588677954e1249fdb"
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
    "url": "assets/js/58.158a4866.js",
    "revision": "8f1f950781ab1ad7d87ec74981b4e67a"
  },
  {
    "url": "assets/js/59.a51d8550.js",
    "revision": "f39e55112d8d1ef4cb5e75a68d3a73ce"
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
    "url": "assets/js/app.e8e65865.js",
    "revision": "f8d4f4e623ddd38b0821d809d7978d75"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "1414e008cdc8f6865996ac455f678faf"
  },
  {
    "url": "contributing/index.html",
    "revision": "93de4c51dd1c6444af97aa34f91f4a75"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "0fe6d7c37f6739c92649ec549cb72964"
  },
  {
    "url": "examples/all-features.html",
    "revision": "e9dc1df329ee1231939450dcca83f605"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "5232af7dea9bf6ad8d6381c183719a5e"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "c6704b1f0616a696bc95a08ab68713ed"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "5b74510f32d7529d3f2cf7e7ad8941ec"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "6ba1f2ce8258ef24b1f2e94a9047a2cb"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "d972e61948476e9848229fa77478e580"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "48dc4966f2585025f0f2c658745a6cde"
  },
  {
    "url": "examples/comments.html",
    "revision": "c6a5f0eff6026a37f4985ad66b9c7faa"
  },
  {
    "url": "examples/each-with.html",
    "revision": "180e6dff484841867206a918d4d1e0dc"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "052d4e11b3987277bfedf9114daded1f"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "83d70dd82526ced0354afa8d37c559b1"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "ce11bf310010a80ebce86d3d325df1d8"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "2297771ea9c4e5860c6a043bbc818c09"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "153ed913a9e98aec987e977534d49747"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "6cdda7d08ae4f7267609457f36045fbf"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "976a1ecfc2f3106391fa165b33e5d7ae"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "be89e1cdd6c187cc003057ca6d86ba2b"
  },
  {
    "url": "examples/helper-single-parameter.html",
    "revision": "5660318b9de70ed17583216d66f41ba3"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "04a48642e63b68f223a7176ce76c4542"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "c37a2cfa01211d97425a138d8fab1b29"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "095939c7185bad665828e7afeadc90db"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "17417853b465dbf0cadb412ab6549ea0"
  },
  {
    "url": "examples/partials.html",
    "revision": "13cbd60a0c9e4cd2a2bfe8692504ccd1"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "fe1b3688de1bb50c4a367aae9cd1fead"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "1c63fd4f9677851682385f35b01b9000"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "af3d050708244bcc689e7c531ff030f1"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "9da80e5a0880dc5f8cab2f55a52dbedc"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "d271347a76daf2ca52677c17ca6e2d6c"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "112a1b0709ed11d5179547986e2a2c8c"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "708c66e3ceb8123312cc3a2a8ab3aabb"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "1592611a01604ea9c0e1c7e107dc112a"
  },
  {
    "url": "guide/expressions.html",
    "revision": "bcbcd54648666cb4188fa4447d101938"
  },
  {
    "url": "guide/index.html",
    "revision": "94978480809125b97f68fd8f1b11a0a1"
  },
  {
    "url": "guide/partials.html",
    "revision": "eb465df74dbacb628ed2ab3af80e4b4c"
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
    "revision": "32bce80c2fb35c2036fa0dda14648218"
  },
  {
    "url": "playground.html",
    "revision": "2700879f9f542f251afad76d98cf6760"
  },
  {
    "url": "topics/attic.html",
    "revision": "c43502972be3f8fa194025224bbb154e"
  },
  {
    "url": "topics/installation.html",
    "revision": "0c3a0d600fc1e97293f383b221f05890"
  },
  {
    "url": "topics/integrations.html",
    "revision": "879248b07ed53e9cbcf4b67cfdb95492"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "a2a662011232436642de7881ae6f4dfb"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "ac495665772f56bc28c89df2946265c7"
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
