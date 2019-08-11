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
    "revision": "9f58cde70f0216ad3eddfa5eab0137f9"
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
    "url": "assets/js/app.597c4fdb.js",
    "revision": "d054c386a84c1855c47d42cad6fd94ea"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "048b40a5f340c9ffca8458cfffe84d72"
  },
  {
    "url": "contributing/index.html",
    "revision": "79ca323c7f16a594df31423a7ce94b6b"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "bc7f3cd78dab73d7a9926e75aa597607"
  },
  {
    "url": "examples/all-features.html",
    "revision": "58deebe65f3e52d7e6ae26cfcf2bc303"
  },
  {
    "url": "examples/comments.html",
    "revision": "d46de774013348370edf03c8bfbc070c"
  },
  {
    "url": "examples/each-with.html",
    "revision": "cbb2d2697d74a1a6958dda25f4aea282"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "7aa4772ae5a7adae95ba6cc0287fbe03"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "5c18167bfa1e886c7cc43589ab3cd827"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "ec440c3b6cc9b0901a7b869ddfc7d15d"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "be700b7d97ab6b3950a266618a728480"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "f90cc3ea4f6897ddf7a2cd024b8ce6a1"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "9ce6069438cc08e5b032587b5a3c4631"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "9aefa8a3d7f0659984828ffaece59e54"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "37d9fbfb40783c23d4df85607b5942d1"
  },
  {
    "url": "examples/partials.html",
    "revision": "5a2e297e919599fb6402f8b514abf163"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "2b387fc85caa70e82a4275a1baf8ed79"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "910f21bbc6dc88c04302ed72c23a398b"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "7614bbcccab11d4e1209474a6faa0317"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "b298cc0dea10068b5706491e492b25a8"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "8a1997eef13ba50af1bea0aca485a5bf"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "2cc561dda5add7172c62e4d2fec84a08"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "7604517fe396eda9d8a7c7ca11396dcb"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "debec462d86eca55a485417d4b9b6a70"
  },
  {
    "url": "guide/decorators.html",
    "revision": "37be0e0eee170c412855cea3a8b2a74d"
  },
  {
    "url": "guide/execution.html",
    "revision": "4315fb7864c47e815d0280f48457961a"
  },
  {
    "url": "guide/expressions.html",
    "revision": "4ebd26fde33bfdce2a2800d78236f0cd"
  },
  {
    "url": "guide/index.html",
    "revision": "9ecda60e724072a14df30ad9cb56d7b5"
  },
  {
    "url": "guide/installation.html",
    "revision": "a72dfc65689dc14178514588394c2084"
  },
  {
    "url": "guide/partials.html",
    "revision": "00086674c65c3549a4b5267d1da56983"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "1b3713ff0f8fcf282848f18495dc3bd6"
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
    "revision": "edc109859fb6c7109c8141b0c9276f56"
  },
  {
    "url": "topics/installation.html",
    "revision": "3ce2003fe99b071d7668fa1e3ee8c4c7"
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
