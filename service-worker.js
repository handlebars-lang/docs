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
    "revision": "28067399683d3371506fc4d2b9b5ad49"
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
    "url": "assets/js/52.90765fd3.js",
    "revision": "edd9c160834c1680150e614085b2a962"
  },
  {
    "url": "assets/js/53.54713511.js",
    "revision": "24fb993470c6fb61b076b9015d47b451"
  },
  {
    "url": "assets/js/54.bcb2cb95.js",
    "revision": "92dd1305720f279aed12b8f4114590fe"
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
    "url": "assets/js/app.6aad4b58.js",
    "revision": "be3b015cf6807a66ebbb9ed15a8ddea9"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "52d0812d15dc22162cc1517fe849cbf8"
  },
  {
    "url": "contributing/index.html",
    "revision": "ae17a8fdf3582576f594157a0aebd1b3"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "0c21a5d9f2786b39bc6b3acefd2764e9"
  },
  {
    "url": "examples/all-features.html",
    "revision": "38a86897d1de4ca1bad01422b5e1aa77"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "f6292c940931d617f2e4006d53a9c989"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "dd70d384a4e932c9449f4e507b8ecbdc"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "07fff37d13f7f4fea8a83e0d8f79ff68"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "d5b3e8410ae5a9b4d9ea8867777bbb88"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "b4964752c4084d0cd45e880a23f4ed53"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "bae9482e3ae2ed98afe124bef39aff31"
  },
  {
    "url": "examples/comments.html",
    "revision": "c45f854b277572dd450fb54e94923b34"
  },
  {
    "url": "examples/each-with.html",
    "revision": "23db3b36dc0c5dfca74228f94c2eac26"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "748fdedd206552795fb2ebffc936b09d"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "1a67513df34bde53dcb9316dd6c936bc"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "d30bde83d4350055fe6dff2af710004a"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "3b0e08aefbb6feaed8cda9957c99258f"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "13b4047ee1b30df955db2430909e749c"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "e7031c8d9d031bede2cb46dcd9f30249"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "3965fb04cdcdace572d354591eb9025f"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "cea8443bd16896512254bf438f84b821"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "bbeb324da3b9e14f57ca24e6993991b4"
  },
  {
    "url": "examples/partials.html",
    "revision": "c709e5d84214f8085de113bfb93985e6"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "bb58fac75c1ef05b883a86f1058dc601"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "d2a7eea01729e9e538fadc314c0ba4b4"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "96e239e9a460544dd00c9d83a149c8ed"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "448454d4a2c0a36bb3d66747f9d9b040"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "7f1c8afd34ed741aeb71c0377dbf520f"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "5b79407554fc0c6f33b23619f9f98165"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "0d655605371281c732b8f3d365eab0ba"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "082bd51ba2cb93ac4d19a24e43b8edbf"
  },
  {
    "url": "guide/expressions.html",
    "revision": "ac49ca1677e2be62c90cfd33b191625c"
  },
  {
    "url": "guide/index.html",
    "revision": "f3f7c55fe42d85e2bf02fe579ce94fb6"
  },
  {
    "url": "guide/partials.html",
    "revision": "e1489574fcf5419cf736cc0d1f4d0a70"
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
    "revision": "d3ddc5350d0f4a5ea4c108327cbefbfb"
  },
  {
    "url": "playground.html",
    "revision": "8813c1a23dee123e85a109576dffc5b0"
  },
  {
    "url": "topics/attic.html",
    "revision": "83edadeb68d87a1d82b2aedc68fbed1c"
  },
  {
    "url": "topics/helper-packages.html",
    "revision": "20115a23771de92380656b61c901d1e8"
  },
  {
    "url": "topics/installation.html",
    "revision": "f16ab4f7e37dd85460b8700ab0e3f426"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "0534a1c0798f1261a9fc4e4653e6e985"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "7879b603f639f8ba7653bf4c39f5b625"
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
