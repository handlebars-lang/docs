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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "21df8ebf1177422094f742a7078b4f9d"
  },
  {
    "url": "assets/css/0.styles.2958be86.css",
    "revision": "17c3a95830064aac40c9657b089042a0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.00fba550.js",
    "revision": "120e4566f02209a5d330fa1ac7e7acf1"
  },
  {
    "url": "assets/js/10.6ae053a8.js",
    "revision": "ed3453d59887fd5315938982a3c1232d"
  },
  {
    "url": "assets/js/11.f40f8685.js",
    "revision": "322d499a91f58a0939b88c2a4bd483e4"
  },
  {
    "url": "assets/js/12.f2da8660.js",
    "revision": "2a75ad52b13360c7daaa764c9eafa971"
  },
  {
    "url": "assets/js/13.1d719384.js",
    "revision": "168c82728601029ed5ff03f010892f78"
  },
  {
    "url": "assets/js/14.47c71e67.js",
    "revision": "8c89fec36789a203225f235aafbe1587"
  },
  {
    "url": "assets/js/15.f0554e3d.js",
    "revision": "1d36c30a9159aeb52f83f3b77be98e0f"
  },
  {
    "url": "assets/js/16.10602449.js",
    "revision": "466e931b8ee0ac9d2bc501996473668a"
  },
  {
    "url": "assets/js/17.4fa3b8b0.js",
    "revision": "6b1f22091a5ea0143a7f9ae815a3580c"
  },
  {
    "url": "assets/js/18.22bcf305.js",
    "revision": "8adbb598f38cf3f7a27bc207dea791f2"
  },
  {
    "url": "assets/js/19.96c14ac4.js",
    "revision": "274ae88f22a98605a7971193ce8ccc79"
  },
  {
    "url": "assets/js/2.3d110704.js",
    "revision": "ab827182036aed61e7d903134a10c8cd"
  },
  {
    "url": "assets/js/20.237816be.js",
    "revision": "9f42e3eb69bee44db1b510d497e4b745"
  },
  {
    "url": "assets/js/21.6fd19380.js",
    "revision": "afee0b92422664a3c6991e091f756ecc"
  },
  {
    "url": "assets/js/22.0a834618.js",
    "revision": "1acf6cfa56a318039949ca22dec00c58"
  },
  {
    "url": "assets/js/23.e9fbbe84.js",
    "revision": "72780d0de89e03f65b399ee5674136de"
  },
  {
    "url": "assets/js/24.9aa9ee22.js",
    "revision": "178f719b7c1d48e9308d0ad743d6f1e3"
  },
  {
    "url": "assets/js/25.05fefd43.js",
    "revision": "175fe9fa4e32bce180b25235b21e3bd2"
  },
  {
    "url": "assets/js/26.ee112f83.js",
    "revision": "11cba1c2b49a87e4a76ea51ef8abcb67"
  },
  {
    "url": "assets/js/27.2c56e8a5.js",
    "revision": "3855bf99601e42e7f963a9d88cc72524"
  },
  {
    "url": "assets/js/28.eac7ca76.js",
    "revision": "1d6436be57fa1ef842706708221c4c55"
  },
  {
    "url": "assets/js/29.89e6b014.js",
    "revision": "7d32aa488478ab12ce6aa0d3d4929414"
  },
  {
    "url": "assets/js/3.60c7a91d.js",
    "revision": "24fe01881e12aff26e4ee1ae52b5d13d"
  },
  {
    "url": "assets/js/30.1b51e5d0.js",
    "revision": "7c52bbd810a69cf8cf73ab0f8f6bf7f9"
  },
  {
    "url": "assets/js/31.90eb574d.js",
    "revision": "76674c6c285d3ff24f1c7d631e279adf"
  },
  {
    "url": "assets/js/32.4c4daf1c.js",
    "revision": "0a1c82ef24b5b9980139c12083654b91"
  },
  {
    "url": "assets/js/33.8f65053b.js",
    "revision": "6f903a93af58c875011d72005d79b4dc"
  },
  {
    "url": "assets/js/34.47d2311b.js",
    "revision": "289da4550e581f006b1c5a1c32225148"
  },
  {
    "url": "assets/js/35.ba485cc6.js",
    "revision": "9c47514c045f389a247bc420d7083cc5"
  },
  {
    "url": "assets/js/36.02560427.js",
    "revision": "b8ded60c356d87b7dafe81862a20c841"
  },
  {
    "url": "assets/js/37.740ffc58.js",
    "revision": "5ede313f1c93bcb550e985b6bd40dcd9"
  },
  {
    "url": "assets/js/38.3168b8b2.js",
    "revision": "e1eb877cd1f180536cc12bbace7cec3c"
  },
  {
    "url": "assets/js/39.71dd26af.js",
    "revision": "c4f683bdc0b90135b96b484509860abe"
  },
  {
    "url": "assets/js/40.aeecd7f8.js",
    "revision": "8471ea56757df34356bac19578cdf791"
  },
  {
    "url": "assets/js/41.ccce76dd.js",
    "revision": "dcff5ec31603525fa7eb87367f01c450"
  },
  {
    "url": "assets/js/42.db636e01.js",
    "revision": "dfe5ff8c3835cdf0e1ebabb2891d7c3d"
  },
  {
    "url": "assets/js/43.500801aa.js",
    "revision": "eeb84793ac2536a8be9e5312f77d1702"
  },
  {
    "url": "assets/js/44.c99d5661.js",
    "revision": "070b0cd12d2d5dc3abdabd3664cdd0c9"
  },
  {
    "url": "assets/js/45.5a980036.js",
    "revision": "74330ad3d4bdbb9d4346284e75f3ae77"
  },
  {
    "url": "assets/js/5.4755613b.js",
    "revision": "fca8e68808b8305d66cfcb8c5f3c9873"
  },
  {
    "url": "assets/js/6.175c3a94.js",
    "revision": "7a2f285e0b4643c3daa3d724b3dec2e4"
  },
  {
    "url": "assets/js/7.42674cb8.js",
    "revision": "2268cc36f058d6dc2b1714e669c3b8f4"
  },
  {
    "url": "assets/js/8.44726f5e.js",
    "revision": "81aa7a3bbad5012181375b21f7f38d1e"
  },
  {
    "url": "assets/js/9.34f21c7a.js",
    "revision": "545464008162adb816636a80b40c0bd2"
  },
  {
    "url": "assets/js/app.a710ff95.js",
    "revision": "6a7865ac151e308fa0a7d5cd2e7c3027"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "22b9b815d5e60e25b2685f676b793e8d"
  },
  {
    "url": "contributing/index.html",
    "revision": "f978605558bb93e20f85beeff3020202"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "6f56db2bbac6d5e4c1683647c4ab6574"
  },
  {
    "url": "examples/all-features.html",
    "revision": "626db84d2db146a021f5937bd668530c"
  },
  {
    "url": "examples/comments.html",
    "revision": "2267658e87796805cccf342fed32fe3d"
  },
  {
    "url": "examples/each-with.html",
    "revision": "6e45bb677201512ea18bc2feaf504b7e"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "f3694152661260350e9be163c83ce19e"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "0f9fd642c28ae8577dfe8642ec9728fb"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "127ef17f84b841ca87e87c58537dc76c"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "89d6776e676e329ea665915697d0edf3"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "7d930d5ad58ae32f45a02457dc62239c"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "2e22a5d334f57a91a8853c1b578fd7c3"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "69634da765cececae126becdb0b811d7"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "0e67a829f0de0ee01f64eacc7b14af3c"
  },
  {
    "url": "examples/partials.html",
    "revision": "19321138d2bc65e30f6326f4da777321"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "394043f32d89af8e6ed881e3abf93bca"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "77343531573c9bc6a5df2b7ca58a9651"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "39afda19f44d05df1c0f6d113d0b2c79"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "da1187ede66ff2aa18d900dc8c094257"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "4962c7418df6201ecb1b95d61efab561"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "49d4a5c6355820903d38345161bb055a"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "35e497fccf4ac8b567e7aadbf30a0471"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "ec33777b0984c20d598fd2cad627645b"
  },
  {
    "url": "guide/decorators.html",
    "revision": "c52553ecf554d2af20732622d1afbadd"
  },
  {
    "url": "guide/execution.html",
    "revision": "fc5e666080a9c95f44acc539a929d91f"
  },
  {
    "url": "guide/expressions.html",
    "revision": "5afb2433fbc7d2c781f7535cf6bc1ff2"
  },
  {
    "url": "guide/index.html",
    "revision": "e4a34b8970033e56becbbf2526ba46c5"
  },
  {
    "url": "guide/installation.html",
    "revision": "4270bcde7c3b7d4ee36b9e18854c01ad"
  },
  {
    "url": "guide/partials.html",
    "revision": "b8b5ed7c70330c11908f98aba4f4a00d"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "e3b1089f62a9031729c8930f6787fb8f"
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
    "revision": "f70e3ade7dc74e9ac6974d701b56d805"
  },
  {
    "url": "topics/installation.html",
    "revision": "03b718de846e1423cfea06c82b149b95"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
