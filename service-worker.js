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
    "revision": "5d0c2dd0591138aa4953549b13d9b7ee"
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
    "url": "assets/js/50.8649fcc5.js",
    "revision": "1aeb6cc88dfcf4a57d93cd00d19c42b3"
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
    "url": "assets/js/app.08494245.js",
    "revision": "29b1dc306b35f24293ff755b83a68d64"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "7651c3c4c27483603506ed02c4be1142"
  },
  {
    "url": "contributing/index.html",
    "revision": "701cf9aaf0a8c08fa7ce5538dfbf8002"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "c16bcffd7f69d43fbc20e15f6a9c791b"
  },
  {
    "url": "examples/all-features.html",
    "revision": "69b336bc1d97e78c5c5b6aeedd9ee6f7"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "199407409526912ac6200b5d88de813e"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "06f880d4ddbee0773c1251b8d2c71ff7"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "645e7b235898d4718fab12db67c13e8c"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "03dc6da3a03ad963300eccb0f8c7c69f"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "4712e1dcb78923d97d65c1a6bdb1a3ba"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "64dea3b05f94aec2e7d57d1bcfaab1de"
  },
  {
    "url": "examples/comments.html",
    "revision": "4d469049dc101de56c19eb97b93a7937"
  },
  {
    "url": "examples/each-with.html",
    "revision": "dd232557c0ba29be04cc56ad98060973"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "0a63d985ca2a3fbc41149a140f59f2c0"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "845739eaa35e8aa8b5cbfaae9771d0e2"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "a1fd024f9de626d073ce53d785f32452"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "100df2f918ef6c934f7aa992f9d09f8b"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "9dc85e933e91e088acf959d269056a55"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "8159a6ec1b430dc197b5c087e8935cd0"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "4f292a5c3b114b95b08494f8fcfbdf17"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "9d065add837022d0fde1dfdb6b5bb39a"
  },
  {
    "url": "examples/helper-single-parameter.html",
    "revision": "106b787fc144571d90b0ea85a88f0ef9"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "da0ed9a68b8f121b42caee0e0f404c06"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "50b456d7bcfea627c1125c2e140dbb70"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "8fcd862c8b8d50d3fe214c3cc3cb096d"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "547b2d8b62495efe52e1a587531bb219"
  },
  {
    "url": "examples/partials.html",
    "revision": "d666cebaffc207e737b2f74c10e295cf"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "8d510b5d7da7965566ecc1a72537d997"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "4b5ff49e54f4305eb7766c46c7b41c10"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "6af6daa3048322fbafd575906ddea93b"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "47e3ec9dae04e99c6b326478904c6725"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "6b56a97de6a802cc8b861a832a260193"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "cbe59e2b6106f05feb48e1530ff71dc5"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "d590b65f45cecfc4ef7c2c1ee65873cc"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "a332bdcd7e265962c81e70020494fba4"
  },
  {
    "url": "guide/expressions.html",
    "revision": "38959b62367d47fde39df6c4df7859b6"
  },
  {
    "url": "guide/index.html",
    "revision": "c512d5549e4deabe0ea6a942bf18e92d"
  },
  {
    "url": "guide/partials.html",
    "revision": "76faf3343d621e4e0af124f00cffdf9b"
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
    "revision": "dd9907e93790efca6fd6e3067974baaf"
  },
  {
    "url": "playground.html",
    "revision": "4eebce65fea9e7da8d037456bc0a5cef"
  },
  {
    "url": "topics/attic.html",
    "revision": "6137d4563ee3373b02ce8285c3c21b7f"
  },
  {
    "url": "topics/installation.html",
    "revision": "256448b24aeaf0b7bbe14f72dbdc4b40"
  },
  {
    "url": "topics/integrations.html",
    "revision": "4567f3782f74ac8369201ea9fabccf0d"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "0a9a2657cafb1f3363aed21c7c45b487"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "46b49ceea49fb65a2d9cede13b0c20ba"
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
