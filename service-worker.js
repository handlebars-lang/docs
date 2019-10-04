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
    "revision": "ff33059ce9715390236b6cb53a6a469c"
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
    "url": "assets/js/46.deb551d0.js",
    "revision": "98f9ea8c9648cb7113046d561cc34a94"
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
    "url": "assets/js/app.b20aa1ae.js",
    "revision": "2b4995d83c0ec2044e323c8d1b6429e4"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "9d59e04fc96739a55d4d8a978c2a7ad0"
  },
  {
    "url": "contributing/index.html",
    "revision": "7c779ab5ab796a197ec4f5c3b6f3c808"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "ac269f03580fe4701eabc396339adc3c"
  },
  {
    "url": "examples/all-features.html",
    "revision": "e67f1fd6049afa7f13ebd121b7ff9747"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "f26f15bdbe83a2b81c348f06713ff142"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "1d1d455130b22add99f8802956277b42"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "e2c59a67aadfc521d1f73de5a1158068"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "21b6ae1528b63d5b195949eafa8db280"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "12c01af4612557364916df67bd8b23a0"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "623345a7e5d10fb74aa8ee858b003273"
  },
  {
    "url": "examples/comments.html",
    "revision": "5e260d543d53a9d641377969da3715a3"
  },
  {
    "url": "examples/each-with.html",
    "revision": "d4c35993b6f127a54c90272b6bd94c5b"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "4e2b979b93201f8552995f47e33c4de4"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "26b9da3705e7a6956af57a33975527f1"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "48fbcf7df60371cb26b169dbe706a8b8"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "b58c704acb99218a03170eacbd7b9a46"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "9eb1c27f94b8bc97e291524aa069aa36"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "4b1b1c780a9a519ba662010967bcae6b"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "bc9abe7e468a322c4d6e90de4108e426"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "1312fee5c5e867ff23153de7212e284a"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "d23bbf09d7f1d502c412e84d9c0b9c8c"
  },
  {
    "url": "examples/partials.html",
    "revision": "518e6fe92a898f5c0d36891d31c15b0f"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "ee31165e4dbe01e52ce96668fb4dc51b"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "25d699adb9b4f5fdc1babac1881314f6"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "48c7e074acff26594f28c33b06c40144"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "ac085eaff8997c6a173c67f2d2499aa8"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "60d9c0d7511969e66bf3496cd8654868"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "2327837f7483b3e2e42d83e142fea119"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "de146ecc9a91f722211632a30c3e8a5a"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "bb862b55d0fefe0025f0da9c40714b03"
  },
  {
    "url": "guide/expressions.html",
    "revision": "c7ed8130120283f876347bab34fdfad2"
  },
  {
    "url": "guide/index.html",
    "revision": "d2c4abb369178a36125f443a20703ca1"
  },
  {
    "url": "guide/partials.html",
    "revision": "f0553c326f889caceefb2e56d10e66b8"
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
    "revision": "ab5d3285a8bbd9c6302498d15b56332c"
  },
  {
    "url": "playground.html",
    "revision": "65487aa3ba653dfef15681bf1cabfe0a"
  },
  {
    "url": "topics/attic.html",
    "revision": "c67054b771c559357669285fe604fbb6"
  },
  {
    "url": "topics/helper-packages.html",
    "revision": "eaf847acc24341bbf9b942b8da1c0a3d"
  },
  {
    "url": "topics/installation.html",
    "revision": "9241a39fa9b9d4bc75324c6a3979fea4"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "b45a98b10b04989a1f0e1e844a851126"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "8751be3ca439177c9bd9c108b446eafa"
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
