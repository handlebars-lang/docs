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
    "revision": "afb46d76ab735497486723317e521544"
  },
  {
    "url": "assets/css/0.styles.7c4bd4f8.css",
    "revision": "f0b190fb7daae1dddcea37f067b66f3e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d4af86ee.js",
    "revision": "c8b16dd44f2c1004b5285b3f902a409f"
  },
  {
    "url": "assets/js/10.24b787dd.js",
    "revision": "39c977b8a696a88293388cbb501cb5fc"
  },
  {
    "url": "assets/js/11.933f724e.js",
    "revision": "b9523144f8b7c3bead9ee76ad8fc3057"
  },
  {
    "url": "assets/js/12.99aadeb9.js",
    "revision": "b9d0906c634d24d2924f053e321d9a10"
  },
  {
    "url": "assets/js/13.cd0b6cbf.js",
    "revision": "53873dfdfcf1c39d008b4c118c1986de"
  },
  {
    "url": "assets/js/14.a1c725f7.js",
    "revision": "fca99bde65019bcaa5637a6f93688093"
  },
  {
    "url": "assets/js/15.836a9d42.js",
    "revision": "637fa14476ae890ee87650cf3a01d142"
  },
  {
    "url": "assets/js/16.d882a1d8.js",
    "revision": "4e172249e386304244bb32cc97ca4c92"
  },
  {
    "url": "assets/js/17.aa0a1063.js",
    "revision": "3a7392daeb6ae76bc25fd4cd8b490c4b"
  },
  {
    "url": "assets/js/18.e4481d35.js",
    "revision": "90fca81565ffb8ad7160a0218bfeda79"
  },
  {
    "url": "assets/js/19.c96d3acc.js",
    "revision": "6f0233a76be0fd92f83beae6310e77e5"
  },
  {
    "url": "assets/js/2.925057e3.js",
    "revision": "d91108b149fe74f70686b798ff74b618"
  },
  {
    "url": "assets/js/20.a6120a66.js",
    "revision": "2ef53f17aa8c5482a69c88c023d3bdb9"
  },
  {
    "url": "assets/js/21.6a3f8d1a.js",
    "revision": "1da6e82e22672e67c46fba04b2206c4a"
  },
  {
    "url": "assets/js/22.f5c97599.js",
    "revision": "6bff627f2029a329f0b9089cfb57cf84"
  },
  {
    "url": "assets/js/23.1d710c18.js",
    "revision": "5a835a5427954dd20df036fc51efe203"
  },
  {
    "url": "assets/js/24.0fc551ab.js",
    "revision": "ec90e7b089a6659f5d8c9bfa7354a0a5"
  },
  {
    "url": "assets/js/25.7b356249.js",
    "revision": "92d95c56c8096ee4b954bd9d1ee7bb86"
  },
  {
    "url": "assets/js/26.499689f7.js",
    "revision": "f1f2df278374cf3e67b36dd7abe5af41"
  },
  {
    "url": "assets/js/27.b95505c6.js",
    "revision": "84ef9af795b37a3684626aaf841fb2e5"
  },
  {
    "url": "assets/js/28.cf749170.js",
    "revision": "ef271bfcbaa8de6aae24d626d041f822"
  },
  {
    "url": "assets/js/29.ba80af67.js",
    "revision": "1d9ea5cd100e146e304dc85dc0fc6ada"
  },
  {
    "url": "assets/js/3.57d377be.js",
    "revision": "92a076fa6ff211af89f9b1ccb1b7f691"
  },
  {
    "url": "assets/js/30.d128a2c8.js",
    "revision": "8fcc2bd2e811b0493110b51662746ab8"
  },
  {
    "url": "assets/js/31.7b7e00d8.js",
    "revision": "55c1e3383188d509a6dac1ba6f55baba"
  },
  {
    "url": "assets/js/32.a5d4c455.js",
    "revision": "7fb2a1b5465bee8aeb5a9d72e14a488e"
  },
  {
    "url": "assets/js/33.c063cb65.js",
    "revision": "01a9224f0d29945349fc486ba842fb9d"
  },
  {
    "url": "assets/js/34.e3dda67d.js",
    "revision": "0d7ae13e30f00db26e6d103c8821130e"
  },
  {
    "url": "assets/js/35.c6d09823.js",
    "revision": "a0445f66fa20daf89c516c6a642a3b7f"
  },
  {
    "url": "assets/js/36.1a0818cf.js",
    "revision": "553d45bf35650fac64ef4fb0b1ff66c7"
  },
  {
    "url": "assets/js/37.e7b4ae8f.js",
    "revision": "268ebf0730ca5b23fbd6a60caa3a2b15"
  },
  {
    "url": "assets/js/38.26b3511a.js",
    "revision": "cd26563164262e29ab79850c67243705"
  },
  {
    "url": "assets/js/39.6297df79.js",
    "revision": "9b0e881a18865874e6b081c5ebe6f8dd"
  },
  {
    "url": "assets/js/40.5a20b193.js",
    "revision": "5aec4593b9d847b559c53fba0127c1b6"
  },
  {
    "url": "assets/js/41.197c28c3.js",
    "revision": "520c8ae0f1a2538e842d38859c22ed4e"
  },
  {
    "url": "assets/js/42.a3c57400.js",
    "revision": "a9dcd32c50ca2234873a0ac437a9374d"
  },
  {
    "url": "assets/js/43.309bb87e.js",
    "revision": "a0ec4f24b1d3bd1f303a77ab20cf7413"
  },
  {
    "url": "assets/js/44.7e2354f1.js",
    "revision": "9460fc26ac5a8da55941bbb434e6ae38"
  },
  {
    "url": "assets/js/45.948e012d.js",
    "revision": "f207124294230dc31a9e5e041fb4abd4"
  },
  {
    "url": "assets/js/46.a81b6050.js",
    "revision": "2324803061c803c2f2d14cf51bbcb703"
  },
  {
    "url": "assets/js/47.25000e31.js",
    "revision": "7c65fe4e2a837bf5d74e699bb6ea5f8c"
  },
  {
    "url": "assets/js/48.cc0bcd02.js",
    "revision": "05ddc4d8694ef76ce86dccf90aef2526"
  },
  {
    "url": "assets/js/49.d75f1fbe.js",
    "revision": "a4e0b5b12ffb6ebe750caca5720eaeb3"
  },
  {
    "url": "assets/js/5.305ee8a8.js",
    "revision": "32edda256b14a4e3a4b5a399dc4f394a"
  },
  {
    "url": "assets/js/50.5636cf27.js",
    "revision": "758bb02190fd178d2b871e21612d96aa"
  },
  {
    "url": "assets/js/6.9cd967ab.js",
    "revision": "a41f369facf9a84ff26031554c069aab"
  },
  {
    "url": "assets/js/7.dc33b5df.js",
    "revision": "c4603a4087c938d0efbb81b62ab086e6"
  },
  {
    "url": "assets/js/8.fa3f460d.js",
    "revision": "d33e367113a2b08fd1c5c8871e0ae366"
  },
  {
    "url": "assets/js/9.07e23787.js",
    "revision": "32d085608c43b78ddf21bd228c35003f"
  },
  {
    "url": "assets/js/app.7c385e98.js",
    "revision": "01cb07d385025dc2b506593e2b8f1e07"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "2626e414104f4412c01150249c5b8609"
  },
  {
    "url": "contributing/index.html",
    "revision": "285463d7a6dd9d153aeace29dcd5ebaa"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "02f5bedd18c16cba70318699cb66898c"
  },
  {
    "url": "examples/all-features.html",
    "revision": "6cecf18b05bd6524b84bb0d103507b9c"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "4f900bf25eff8862eb2f703e857fe629"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "1cb02ec9759ac6ae0ebf3542bbe3bb1e"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "e6204bd8589fd20170b3ec1da46d27e3"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "670219f5c936ff33697b4f50f567e72d"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "70dfee20dad1c5de14e4b40a5b8279b4"
  },
  {
    "url": "examples/comments.html",
    "revision": "5912d30ae472a7f9a8056b4097c94f1c"
  },
  {
    "url": "examples/each-with.html",
    "revision": "aab086d0d167908c1a7198f3c1946821"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "3ca3a1a04a6bffd02fecb5abd9b30b16"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "9b5ef5c39612b51d01001e427f677352"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "e02c1704b1e16666e2a888f8bf18e2d8"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "225e12c525dc633da47f34ba8b85bf91"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "b149a36bbc1601e41fef6895321bdff3"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "4b9de141ac75ef277dde83ac5d218291"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "5c3d74cb9ac8a6c71faa73c675b83724"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "abdc23f3a5e400506a82f5475b232f7e"
  },
  {
    "url": "examples/partials.html",
    "revision": "d4c4d8eba889ae64e52703f70413d68c"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "6b89f984cda3234fe328ea9b2b677a51"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "9b133cf1ebe7451b5eae7d87956348d2"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "31e37ba4ea9f63e394d452a3bb9d88af"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "8523a147e83f1a3c92a221d50dde2003"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "17cced115d6700f43b0ddfeb89897a14"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "b50b2ead0d637f26f6f85bdcd27ca340"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "d9a12d1212294d530673f46dc488df1b"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "fe6f44fe068ba97e39f8d9345893047b"
  },
  {
    "url": "guide/expressions.html",
    "revision": "0a56a03e099a3404b47bb4ce8be875fe"
  },
  {
    "url": "guide/index.html",
    "revision": "438a414fb62aeb60380799a66cd675f3"
  },
  {
    "url": "guide/partials.html",
    "revision": "c43b240af4078b0898c546b6c9f37abf"
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
    "revision": "a8811fba7c8df183df9b6052f67a8bcf"
  },
  {
    "url": "playground.html",
    "revision": "d25f0dfe5b8b51d0c530b2599b7b54f3"
  },
  {
    "url": "topics/installation.html",
    "revision": "0a70c5827a7580e71ae58b633437e78b"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "97e319f4e6ee4163c2efdd0b0aa599bb"
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
