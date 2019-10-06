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
    "revision": "a93ecd4cde6741f80b89eae945c65676"
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
    "url": "assets/js/19.606046ce.js",
    "revision": "33e80383ca85794a98362b2410d3be25"
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
    "url": "assets/js/50.0a101d9e.js",
    "revision": "8390ce6f94ad5f2099273405745ebc0b"
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
    "url": "assets/js/55.b9361f0f.js",
    "revision": "9789a30333e6914c43102af841cfd14b"
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
    "url": "assets/js/app.4c81aba2.js",
    "revision": "6a1386a0bb8d3f9ceb3880dfc7c2ea7c"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "191a2ded203cbde0c81893934440ae89"
  },
  {
    "url": "contributing/index.html",
    "revision": "ce0b776d1aeae88b4500359a3b735826"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "586329bba265fb4bf6f5c7132d6786fd"
  },
  {
    "url": "examples/all-features.html",
    "revision": "a7f9fac2a51b8ced842f15282b2da045"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "28291b8db51355b56ad29dac851c2e7b"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "895e5f7059649d82eb619c22f1da501f"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "98173ae582922c18a5853180252eddea"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "fe1d763898c5b9b9d7491c6c07bbce4b"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "5f8e3a154da045459da8bab026539f7d"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "fe11e9a0bb53098d2793e25dfc66d25e"
  },
  {
    "url": "examples/comments.html",
    "revision": "1205dc69e046b3ab663842dec13740a7"
  },
  {
    "url": "examples/each-with.html",
    "revision": "a6b49fb9aa57f8577ae6808eef6a9c81"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "bef9a924f1ea74c63878383216727424"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "3bb991667363755ecbfca7d664a2c32d"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "8f2e6a757044cd7674acbf29fe257507"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "09a0feb49e6289c932354d574050229a"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "f4df1770a2477e14266fee963d71d728"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "fb8ca5eca082f39c3a3798e9efbe8923"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "3871b13e47922c0fe15eaebe89ba2a7d"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "460650821dcaa802d7ef9b10136f30db"
  },
  {
    "url": "examples/helper-single-parameter.html",
    "revision": "b2ec1be230dae49cbbba710f555a9da4"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "91f2ba95721a95cf14803ede8f5a1860"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "1ab1c85420fccce12abd6190f119ab4a"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "c18dc84d5116f9da96ddb81b93d90bd0"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "2d0b0a0b78a9c8f591f63721391c071e"
  },
  {
    "url": "examples/partials.html",
    "revision": "8a2844bdc066e26647a4f747b8694380"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "912b98f5a1a2e1f451d03482e7379560"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "c2a4df28dc424254244d09041db29ab5"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "e914cf26dd833c9a5b4b920f6bb70f3c"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "5090769315dae34c904114bedbf66d2d"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "9293e3c64229732e52ff144b346909c8"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "dca3a96c72090c5b461be0da3d59b67e"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "d837b07bf873131666cf44b8dc18fcf2"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "484b36b24322845cf8cd3f629bded5ac"
  },
  {
    "url": "guide/expressions.html",
    "revision": "84a95059d6a86ef04e6a10bffc681ff6"
  },
  {
    "url": "guide/index.html",
    "revision": "895e96c4e6e56ba9c9f8505c0280e72a"
  },
  {
    "url": "guide/partials.html",
    "revision": "48e15fffd99c82c229621575966a30b1"
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
    "revision": "7647379e50dc83cca013d93ad3987815"
  },
  {
    "url": "playground.html",
    "revision": "4f593c01a5ea3e8e6146150a298b2125"
  },
  {
    "url": "topics/attic.html",
    "revision": "d5babe95fc4a64c8255418a057ccf993"
  },
  {
    "url": "topics/installation.html",
    "revision": "8d5956cdf99d83ba7c6f5414041e6f4c"
  },
  {
    "url": "topics/integrations.html",
    "revision": "c8fd7447a887f9559c7bc0fc0e5b2ac4"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "81652e56ba49e989a8bfc6de68656281"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "b7e8fef712cee5aa6fa48473bb21fa7d"
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
