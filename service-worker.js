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
    "revision": "d711a6cef4740ac2b9d867443cdf9b71"
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
    "url": "assets/js/12.36c03838.js",
    "revision": "64a80990b735b0bda118ca034f86815d"
  },
  {
    "url": "assets/js/13.0711ac5d.js",
    "revision": "23300f5e224cf7255147b1ea8492a0d9"
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
    "url": "assets/js/18.e76c6526.js",
    "revision": "ee44cddb24c35c82e9ee5c04b4686ff0"
  },
  {
    "url": "assets/js/19.102762d7.js",
    "revision": "20539f1a73745d244fc5ad5baccb6cd0"
  },
  {
    "url": "assets/js/2.94513f92.js",
    "revision": "ef2b1c9ad04a745ff93d23fb5b6d208b"
  },
  {
    "url": "assets/js/20.5a0bf73b.js",
    "revision": "4906fcd984b9c6e0a37b1cc16f8a748d"
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
    "url": "assets/js/25.4c79a046.js",
    "revision": "de25bf9a78827e50d21aa3e4a80ed69a"
  },
  {
    "url": "assets/js/26.4ea1fa6e.js",
    "revision": "f039fa4fbad442e2fb983aff05464412"
  },
  {
    "url": "assets/js/27.6ef62497.js",
    "revision": "de2d32773d099730461b07d07ad1fd13"
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
    "url": "assets/js/30.5affcc3c.js",
    "revision": "e31cd610dd100ec233dbbff15589b88f"
  },
  {
    "url": "assets/js/31.27c59e29.js",
    "revision": "8f4293b60fa4774028c45758b7f69245"
  },
  {
    "url": "assets/js/32.2ed08489.js",
    "revision": "27386384133cd290953cfacc02197a5a"
  },
  {
    "url": "assets/js/33.2ee84bca.js",
    "revision": "96ebf1e1a9c5920b75948720b093f080"
  },
  {
    "url": "assets/js/34.810eba7c.js",
    "revision": "8a6fae1676cfb4e55446e78cf154d105"
  },
  {
    "url": "assets/js/35.92eb9f4e.js",
    "revision": "2588db6131e4f22189e0278d2872534f"
  },
  {
    "url": "assets/js/36.fcbd7606.js",
    "revision": "9bfeee5a4a109ea73e649cde37aed23e"
  },
  {
    "url": "assets/js/37.80b5ef04.js",
    "revision": "e4d68bc4ac642ee31620d3bc903a6d1f"
  },
  {
    "url": "assets/js/38.0316bf1c.js",
    "revision": "22b1f8e56fb43b0d86c658de23451c35"
  },
  {
    "url": "assets/js/39.cc93c4dd.js",
    "revision": "f9c459da121d1055ff73ba809692148f"
  },
  {
    "url": "assets/js/40.6d32cd5e.js",
    "revision": "22dd1b3853e445420c57e8d898e87d53"
  },
  {
    "url": "assets/js/41.7c55b503.js",
    "revision": "9f7d9d13aaad2a1221c41b84ec01d49a"
  },
  {
    "url": "assets/js/42.8c1b8b0c.js",
    "revision": "25ee024f342ba304726438bb1261e848"
  },
  {
    "url": "assets/js/43.caa8b3fb.js",
    "revision": "d3354672ed508c76c6f9fe0e2c35a0e0"
  },
  {
    "url": "assets/js/44.954a0b06.js",
    "revision": "d2b1542ab20ae65e4f9253daca9f8d42"
  },
  {
    "url": "assets/js/45.f92873e3.js",
    "revision": "2e306e60c8c2aebffa53e0a9a9c9742d"
  },
  {
    "url": "assets/js/46.7453b803.js",
    "revision": "a8f35ea07514c3970450c3359d7756b7"
  },
  {
    "url": "assets/js/47.2cd5e08e.js",
    "revision": "ac97a61ff4b7bf754185e021f2e257b5"
  },
  {
    "url": "assets/js/48.c752488b.js",
    "revision": "b3d31536fbf2b8e7cb13c6e5d791e53f"
  },
  {
    "url": "assets/js/49.fae2bc1e.js",
    "revision": "4c1db97e2a0a06ca942c9c725170860c"
  },
  {
    "url": "assets/js/5.164a9447.js",
    "revision": "1ff5b64d945b1e4d6e311730292575de"
  },
  {
    "url": "assets/js/50.0497a769.js",
    "revision": "7d13bdd2af29f456549be78e8528ad39"
  },
  {
    "url": "assets/js/51.0998669a.js",
    "revision": "66dbbbdefc5e81d690335bc83b2a988f"
  },
  {
    "url": "assets/js/52.f326df03.js",
    "revision": "9ba1b47ad0de9b3533fdba8ee2520d09"
  },
  {
    "url": "assets/js/53.31dadfe0.js",
    "revision": "0f409b010864371dbeac703f8a5176de"
  },
  {
    "url": "assets/js/54.ccaec156.js",
    "revision": "75a0a3348c0cbc3d6f141b26ccd54b0a"
  },
  {
    "url": "assets/js/55.7b5486b8.js",
    "revision": "565106ebd7e20ea2e55bc90c947d244c"
  },
  {
    "url": "assets/js/56.07484746.js",
    "revision": "28d9352cf93f58b1f2fcc7f2f2c10d2e"
  },
  {
    "url": "assets/js/6.7b856339.js",
    "revision": "a9a9f4d31de4e2f25eba1871c0ebbebc"
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
    "url": "assets/js/app.194312a8.js",
    "revision": "dfd5bfbf66e52364bb6f36c6b189587d"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "19a02112016443fee765e29e29b4f689"
  },
  {
    "url": "contributing/index.html",
    "revision": "f7bdfcfe990e513545e32fa9f9f261d5"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "214da9aa43addf39dcf1c1994f3820fe"
  },
  {
    "url": "examples/all-features.html",
    "revision": "c17c8eb19c319468655a19dca4b0c2e0"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "4bdd81159153bb1898ab7b98fc023e92"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "b1cdf351db19e04c55103f1150b1acc4"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "be7b96f084cfd46314124203162bca4f"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "71cc6d06ed6c2a12360ef43a35f53b65"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "73b0811116fc1df9d9bc20754376e2b5"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "bc959186e0f9fa7b5d63c36533b9aca4"
  },
  {
    "url": "examples/comments.html",
    "revision": "28d8485f3dc5cc50d957fe41b513582b"
  },
  {
    "url": "examples/each-with.html",
    "revision": "25fd44e00d2011c524f777020d44b757"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "798b8cdbd5edff8f25b9c1da9b30f0d4"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "0369ca315d05b3b693045366d952c2fd"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "e0831c1321cbc4918df7e549f4f5a0d3"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "81c4aab9d2c3c5eee2603e9cb0a60758"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "6370af9c9bf5d4cb3d08bcf1baab0db1"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "e914b2a67a25a28d817e1d5a7c923b00"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "ad21bf9992f400c118fdfd598f0cb144"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "1b334dddef3ef0768ac6bc9d2723e841"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "a5d52d8cbdd52c457f7557ac3057cb93"
  },
  {
    "url": "examples/partials.html",
    "revision": "5f9a37e3aa69eea8f5692a3143c33182"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "12682577fcfba4326ed4b3051d1e84bb"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "2833e69d36f5c51b4bfabefbca4c0439"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "afff5273c187f9c2a92675dadcd68ace"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "2ddfc6a54991fef413e61b156894a4ed"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "db97d31d151917872514d3e76eb3e471"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "56e9cc7916f414c35d2d4e92acac870d"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "7a22f66652ba907f489ecc80e4b33f09"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "7af69a94dd87b72f524125108e33f0fa"
  },
  {
    "url": "guide/expressions.html",
    "revision": "e1879525af5cd454edc16b2f56a16c98"
  },
  {
    "url": "guide/index.html",
    "revision": "523e479ebe8f9d18bb57d91ac38ef538"
  },
  {
    "url": "guide/partials.html",
    "revision": "c35b80ee52cfd7cfaa31de24f62038cd"
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
    "revision": "db658524d31ab3e74abdefc0cdbf4c5f"
  },
  {
    "url": "playground.html",
    "revision": "8b1355a5a955e2938c1f59c86e14b055"
  },
  {
    "url": "topics/attic.html",
    "revision": "d204c58e7c7747f5097139e52af32bfe"
  },
  {
    "url": "topics/installation.html",
    "revision": "643f609afed41cd001c9a6e15c1149c3"
  },
  {
    "url": "topics/integrations.html",
    "revision": "a947134257e9f2f06bd5f6ed105aa159"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "32966eaffb98fbc44cb65771da03db18"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "2b8d602674c9f410a1c111aaa3372775"
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
