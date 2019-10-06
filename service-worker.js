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
    "revision": "cc52477e2ff7e85e6b1b6241f452b627"
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
    "url": "assets/js/53.c05ca72c.js",
    "revision": "d997b8d9d3ec2f6adac6fe3afdc1bff7"
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
    "url": "assets/js/app.9e83cbbd.js",
    "revision": "69524d2a845c6984fb677db5e4e5fb0b"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "639af5260f17ecefcd79517578329cbd"
  },
  {
    "url": "contributing/index.html",
    "revision": "916e748f5b5d5586571ebb57243dd6df"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "7cf9de5374b55d83a7419dff2e22c762"
  },
  {
    "url": "examples/all-features.html",
    "revision": "90e6dc8b904807be9882e81ad56356b2"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "f0292c3eec24a642f752be2f3ad6772d"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "22c1cd0e6ffc5db99cfcb06cf34844e5"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "cc7c60b7f683b7203fa59ab9247d65e6"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "0943787a9ed5e7a23dbe2b5d164d76e3"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "62c491f5904abcc5f8dec7e129d86e29"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "dee2e234541ec46375dae08a6c1f2a28"
  },
  {
    "url": "examples/comments.html",
    "revision": "080a62e0a8151ade37f7dad03d937c89"
  },
  {
    "url": "examples/each-with.html",
    "revision": "d81ad87f778076c105ec1e490ba17a08"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "74710cff27ce93a2b6556ad68e0764a0"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "04699b2c6d65dd776929fbe89eae0936"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "7054e9f74e7e70be8f77575f8530cfd3"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "7e1021c16d69d78343c6aa173809cceb"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "fe600569438e00026f215c9ac3a76ccc"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "8dc2ecd528e0d5ab8ded4b026413b893"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "492cd6ecfd4f23f7aafaf77e0fd62410"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "2f89b60c4b86ef6b50cb717b2490b26b"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "44621f1d7d5446b6c41ce00356a9f22d"
  },
  {
    "url": "examples/partials.html",
    "revision": "20e2f61dc05b4769b2c16a425196e773"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "546a048429c5d9b36ae35f1e842debe2"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "1754124126762495cbd5c6f94697afe2"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "44f8644b5f231c601086d29acec61edc"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "8e1ad6c6ea5478106a84fd2c5296f701"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "4367bb3be8201b40fdec8914a479a7b1"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "0087883080ee02ad2f56bc3ec1be1a7b"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "96867449137edd20857eff42746d324d"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "52e5f1519e2b5610b98bfaec5ec37887"
  },
  {
    "url": "guide/expressions.html",
    "revision": "50ee1c835a808a7450ae37e0f873699c"
  },
  {
    "url": "guide/index.html",
    "revision": "651c3eb5d9bf3f40ba8d3a2ebb8293ee"
  },
  {
    "url": "guide/partials.html",
    "revision": "5878b048804623cbeea89cf05d808cce"
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
    "revision": "bfe64694b1c2a29a805a0d0895499b3f"
  },
  {
    "url": "playground.html",
    "revision": "bd193b03ec3a6d197380973fc8547145"
  },
  {
    "url": "topics/attic.html",
    "revision": "4b1935bdba15c78c9ffb969a37a73296"
  },
  {
    "url": "topics/installation.html",
    "revision": "d8a1b177103fdf679e2387f755c093d2"
  },
  {
    "url": "topics/integrations.html",
    "revision": "96c65da3b82963a31b4e81f2b2782fa4"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "ac622763bbec14405de2046d026034fd"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "b166b6aa595d1717d050aad1e949c851"
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
