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
    "revision": "9e8f094ecc4ab3bc30109c52bbf9f2ac"
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
    "url": "assets/js/50.88356cd2.js",
    "revision": "ce1db51cf8b2f963a8f822ab92dc8586"
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
    "url": "assets/js/app.61fb5b58.js",
    "revision": "ec15c6be1356b1dd2015fefc18ecf649"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "3387079a66e53e178d32a2074ad12b4c"
  },
  {
    "url": "contributing/index.html",
    "revision": "6eb8166d7dc0d6d4c03dd388eed30beb"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "eb81868d05f0ca469e95c6e24da6f0ed"
  },
  {
    "url": "examples/all-features.html",
    "revision": "97ef787365a0f3104528bc00ae9eee86"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "eac97d4adfbf960a4a61216d955ec03d"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "f16673af96c9e07479f2c3f8e3f33b40"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "2f3e44a234e8ee07dce19ee92213ef1b"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "ed0050b13ea0c15cbb753d82180a100f"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "a4dfe99e72aef2329ebee996a720a914"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "f4b7cc17ecf3555a6cf84966b34f6545"
  },
  {
    "url": "examples/comments.html",
    "revision": "b68efff23b5992cf49895cc94e39fe10"
  },
  {
    "url": "examples/each-with.html",
    "revision": "c8ecdaa6018fe5dbccc8a4f4a3eedc06"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "128c5433bc3b45513a1905695839bdb6"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "d611b40fa7cb7789c45bf85882c0c254"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "3e70965f739155b884debc3694eb2859"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "b31c84120cf93c4e53200e4222b5c7c3"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "8e3193891f56e6ba3d236c96f1f3a769"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "1a6b8c9644a269367d5a771b5f841ef9"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "168228e0e14890d97052dd98dabeee65"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "517a43871e38713f50fa803a12ccbaec"
  },
  {
    "url": "examples/helper-single-parameter.html",
    "revision": "6dab6d108d0d237986b8d11744f3c76b"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "30075ca21ff86aec1772ba6d4e13713b"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "74dfd209dd56859fdbc8b7c8ae3a924d"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "84a7f932254bc38bd2af71c2307edbd7"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "012804ab96cbb102bb3fcea3e7dc822a"
  },
  {
    "url": "examples/partials.html",
    "revision": "7169d9df195432c56dc21eaa9c3af187"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "ae5be7e5aa80d4a5303ead5e5745da16"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "45109e67eda490d6ad1cb8a994dde90a"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "8f5f64cf0df09a674ad6fb238cc6d114"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "a9da6f5d365435d28a0b512f6c9141e5"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "2280cbe035bcdd2d7fdedd227fab56f4"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "305ae9664a9d7cf481f8ef508de01284"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "c6b6487c1be748d3a2f0e2d3c0a81831"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "a30c9a60cd5b3ab57e4edd9081b5d68c"
  },
  {
    "url": "guide/expressions.html",
    "revision": "8b97090082bb5e1405055d3ded291bb0"
  },
  {
    "url": "guide/index.html",
    "revision": "eb0e854317856c9e976530138d4928b7"
  },
  {
    "url": "guide/partials.html",
    "revision": "19e574a52330c0e25a3facbb23daac5a"
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
    "revision": "94cb65545779988e513f62f8885f2896"
  },
  {
    "url": "playground.html",
    "revision": "fab90f44adf1105ce94d2d25ef6a868c"
  },
  {
    "url": "topics/attic.html",
    "revision": "bba95aaafd5e09ef348eaf85fdad0e31"
  },
  {
    "url": "topics/installation.html",
    "revision": "142b08656a957b4d9bec876e9a1d519e"
  },
  {
    "url": "topics/integrations.html",
    "revision": "90393d8c854c07e606b9a39759ee49fb"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "a72ba3e73c057986c21670907ef32892"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "0a1632b5c8a7c8916fabdcbcaa5a17f9"
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
