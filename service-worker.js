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
    "revision": "c93e80c80febe3623f2fbfbcf5e9c32a"
  },
  {
    "url": "assets/css/0.styles.73998d75.css",
    "revision": "b68d900e6136278f6d4a2e0d06a0844f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.06d8f12f.js",
    "revision": "7a7b62c3d7c369fd2db90127acff2403"
  },
  {
    "url": "assets/js/10.d434b72e.js",
    "revision": "24a9d6b6caa25710fc3d6e32e292e73a"
  },
  {
    "url": "assets/js/11.5b032f8b.js",
    "revision": "ae2e3983e9a81338a731a33ca83ecfa9"
  },
  {
    "url": "assets/js/12.9de38dcd.js",
    "revision": "58e721c9a22bfaac3c5d5499dade90d2"
  },
  {
    "url": "assets/js/13.3b4665ac.js",
    "revision": "4e06e12679dd89da00b0c071e97a3637"
  },
  {
    "url": "assets/js/14.00eee1dd.js",
    "revision": "939c0b07254aca06065b8dfd9afeb479"
  },
  {
    "url": "assets/js/15.25398cb5.js",
    "revision": "7991387b6db2e87e9872ec16a112f548"
  },
  {
    "url": "assets/js/16.2501df90.js",
    "revision": "4dba4a5baa339e1c66cd7e31e34fd105"
  },
  {
    "url": "assets/js/17.138b7708.js",
    "revision": "8e483a9eb1ab770824acb7954774cf00"
  },
  {
    "url": "assets/js/18.4a03e8cc.js",
    "revision": "c448fd4ee79759002020e1a762d43789"
  },
  {
    "url": "assets/js/19.19930890.js",
    "revision": "55a3e9bfec5445dbafef09c2b4ba4f36"
  },
  {
    "url": "assets/js/2.925057e3.js",
    "revision": "d91108b149fe74f70686b798ff74b618"
  },
  {
    "url": "assets/js/20.40fa0d0e.js",
    "revision": "8f6615179027164511f9aa0949167e4e"
  },
  {
    "url": "assets/js/21.3000f2f2.js",
    "revision": "6c11cba9b453cb571ea2d57166fabcf0"
  },
  {
    "url": "assets/js/22.183cd8ae.js",
    "revision": "bfa99ea1764b62e6f206fada172b2533"
  },
  {
    "url": "assets/js/23.0cd84460.js",
    "revision": "80f11604b15584e6ecaf0614ecbab707"
  },
  {
    "url": "assets/js/24.4ed2464d.js",
    "revision": "974a92b3bb645471a32cabc19587e625"
  },
  {
    "url": "assets/js/25.af0c5080.js",
    "revision": "204f443ba715b4650c135df8bb44c325"
  },
  {
    "url": "assets/js/26.ceb8fdd9.js",
    "revision": "5fda9f2d2312b9138346e8f1cc5cdc24"
  },
  {
    "url": "assets/js/27.bc2b3c60.js",
    "revision": "c14fffc4f19265d539db86f5b3ae2587"
  },
  {
    "url": "assets/js/28.2bbdedb3.js",
    "revision": "c595bdfb875907e6e73922577f4ba0f0"
  },
  {
    "url": "assets/js/29.ac513d4c.js",
    "revision": "15c81f2ae568c4ec6ace0f2ebb8edcd4"
  },
  {
    "url": "assets/js/3.a8745367.js",
    "revision": "c3f821c61725600728df329673224d3b"
  },
  {
    "url": "assets/js/30.a7f51643.js",
    "revision": "f35b3d6811e1ac9fbb986b93a1fc0797"
  },
  {
    "url": "assets/js/31.b609f9a0.js",
    "revision": "167410dc3ef470d735357ceed2821126"
  },
  {
    "url": "assets/js/32.04b72919.js",
    "revision": "413e8e28386f7c587895adb66e875757"
  },
  {
    "url": "assets/js/33.a392244a.js",
    "revision": "c925f71f636d07e32a1f53d566fc475d"
  },
  {
    "url": "assets/js/34.814edc5b.js",
    "revision": "a9b21a6fa71b5d583fd367c6bda019f0"
  },
  {
    "url": "assets/js/35.fba46f25.js",
    "revision": "452a1a78f359ed57cb5787c70cff9166"
  },
  {
    "url": "assets/js/36.85c911c0.js",
    "revision": "74d2433dda419fb1345cb3658542dd99"
  },
  {
    "url": "assets/js/37.90a3131b.js",
    "revision": "093d49f4a6cda9a115a34de6e6e794f7"
  },
  {
    "url": "assets/js/38.8fef60cd.js",
    "revision": "ab439a21af926791f5fc4a66f7e84a2a"
  },
  {
    "url": "assets/js/39.714f0df7.js",
    "revision": "84a37eae0a5069ebb9f368656da83f50"
  },
  {
    "url": "assets/js/40.d2b4b9ac.js",
    "revision": "4556ab0ae4eaf146e0709adb8e2dcd80"
  },
  {
    "url": "assets/js/41.1b5b594b.js",
    "revision": "c2705107d5138a0f432079c287777ae6"
  },
  {
    "url": "assets/js/42.ed39baec.js",
    "revision": "0261e69f480fdd912fbbda899cefff2e"
  },
  {
    "url": "assets/js/43.ea1364a7.js",
    "revision": "0b8701444145825f0b57c9f7d794603c"
  },
  {
    "url": "assets/js/44.a3661419.js",
    "revision": "8d1607c3b239964f55a99beb56e94db8"
  },
  {
    "url": "assets/js/45.ad2d91c8.js",
    "revision": "65c6722ea64d8899982ae46a269839a8"
  },
  {
    "url": "assets/js/46.da8ed810.js",
    "revision": "87e475a34eb7c09a20d919b542ecf65d"
  },
  {
    "url": "assets/js/47.08235371.js",
    "revision": "9f0aed370a6bb38e68e9b23777996276"
  },
  {
    "url": "assets/js/48.8afa7548.js",
    "revision": "c1a84522ec547ce396c877fa1a0da162"
  },
  {
    "url": "assets/js/49.f9a64b41.js",
    "revision": "797fdeee88b76d1a79d72f68a93b0ac2"
  },
  {
    "url": "assets/js/5.603d503f.js",
    "revision": "94a8a5c81fb61a6a5534f380bc1c4a5a"
  },
  {
    "url": "assets/js/50.8e3d9515.js",
    "revision": "ff2765ec9ff9daba7bd14ad24723dace"
  },
  {
    "url": "assets/js/51.1b85630c.js",
    "revision": "663df2706f4270178dc9b9ec8cdd5c29"
  },
  {
    "url": "assets/js/52.ccea14a9.js",
    "revision": "099eff31e5a83fc8dbd08fbf2c7f9b77"
  },
  {
    "url": "assets/js/53.ac822f68.js",
    "revision": "48f3a4e042dd5f71657ee13ef60b4b91"
  },
  {
    "url": "assets/js/54.7454c30e.js",
    "revision": "a9e13af7910e559ecf33aee482119511"
  },
  {
    "url": "assets/js/55.442deb10.js",
    "revision": "cc59fb704bb1f175cd608b6d5ebaf14a"
  },
  {
    "url": "assets/js/56.07484746.js",
    "revision": "28d9352cf93f58b1f2fcc7f2f2c10d2e"
  },
  {
    "url": "assets/js/6.ad3a4169.js",
    "revision": "1c5d617723586e26e0613a6073dfe7bb"
  },
  {
    "url": "assets/js/7.0f5c21f0.js",
    "revision": "4c41ec43e1140fac45cb7bacc76bd0cc"
  },
  {
    "url": "assets/js/8.a3d523ac.js",
    "revision": "3f524c1267f0ffe90716db204f1948f5"
  },
  {
    "url": "assets/js/9.e334e642.js",
    "revision": "7ebc425cf0f87f673f63c17f3a82af24"
  },
  {
    "url": "assets/js/app.46161ebc.js",
    "revision": "717abd1fcaa71b3ad4c2cfdd10565319"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "76b961ea545dbcaf3896911dc101d8a4"
  },
  {
    "url": "contributing/index.html",
    "revision": "25e0c9b34d188f45489742831bda23fc"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "f99943b47e3638b025a2e4c1edbcd1e9"
  },
  {
    "url": "examples/all-features.html",
    "revision": "67517a16051807006f524c2098e19752"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "9df61d3490915df11840cd28e31b4d87"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "1cc78de8fe8678685bf8f861b767fef3"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "f6d6e75c9315bcb346a70b87e7588edc"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "5992465a0e62a3922b1666abd9e0ef17"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "42c483dbe05b0f125462c9f4e64649bc"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "4960424a27aeec4fba797fadb95ed3a9"
  },
  {
    "url": "examples/comments.html",
    "revision": "6b1ed212b54ec50454a58525ea82bc0f"
  },
  {
    "url": "examples/each-with.html",
    "revision": "1a24c547e9d3a6e1398f1a2046ca04d8"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "148ea611d0011858ce754f532223ecc2"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "ef6c6e736ad7ae25bfc401ce9caa163d"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "b61da283c4772bb71bdd19c493e7f598"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "b066c155cc389a80aaf7c31dcf462ab2"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "10a7be64a22a512e4bc90093575bd40b"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "ed4b9bd6879ff814b6b87cb79628f859"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "55904018f56830852d0f2a559bb508ee"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "873fa49e1a2fb3b64407be1f73c1122b"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "c92e2b5a3633216f81ec2159ba217736"
  },
  {
    "url": "examples/partials.html",
    "revision": "26c2fbaac47c7ebbb4cd230892f2f587"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "25ad23c3ccbc0f3c5ba7010c6a0c732b"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "c71d69cc339a1bf7118fd8b844fcecca"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "072ee94a5b672cb4aaf781eb1c40acfd"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "545c074a143615149ada0b1d8c9592a7"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "2ac7a5ac579498caf0cdd5cf2f3607b5"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "7e690442e6a303a6119f6bd64a45c46b"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "a5fc0425413492f495de6ef8db89af90"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "5139a2a5c4898623e36206616c6c822f"
  },
  {
    "url": "guide/expressions.html",
    "revision": "1ec3681e91bb5ca2c1a8e07d25674448"
  },
  {
    "url": "guide/index.html",
    "revision": "863140b7d9b0278f369aa68589c3a71b"
  },
  {
    "url": "guide/partials.html",
    "revision": "bcbf20dafd8eee2ca751f7c3ca237845"
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
    "revision": "c8bcac5a6bc46edb380bdb2cda2a1bca"
  },
  {
    "url": "playground.html",
    "revision": "9d9b0ca5b3ee10f61e770541465b8e9d"
  },
  {
    "url": "topics/attic.html",
    "revision": "2bd088bfec1678a0621097998e75d22c"
  },
  {
    "url": "topics/helper-packages.html",
    "revision": "2adfaad41fdbb2ab0ef9f8ad6a393cca"
  },
  {
    "url": "topics/installation.html",
    "revision": "49d0ca2d330726f5a3f1f2f0c68b3907"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "49e431356959f849bfb3885804141c61"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "800e08aca7a4fd0f582e4b2b78be0228"
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
