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
    "revision": "22d02ce7725971410c27af550b0a5a78"
  },
  {
    "url": "assets/css/0.styles.9ef69df1.css",
    "revision": "131cf68a35415fc08a10ada9fba67410"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8898e817.js",
    "revision": "2161d0a2fbc9ce7ea0d98ca6329cf73c"
  },
  {
    "url": "assets/js/10.a04bc84c.js",
    "revision": "3809d00841303a75129deb29f55425f2"
  },
  {
    "url": "assets/js/11.6323cc0b.js",
    "revision": "9163d7cad56cecacef2d5de6aefb4e5e"
  },
  {
    "url": "assets/js/12.e692bf78.js",
    "revision": "1e023a1a2500a13fe2ab053bd3c35ed3"
  },
  {
    "url": "assets/js/13.b4325a96.js",
    "revision": "28aab6cbb55ec567eb3805ec535ce1a6"
  },
  {
    "url": "assets/js/14.f95f4b3c.js",
    "revision": "37415e80fd7b47cc1de58a7ae94e98c9"
  },
  {
    "url": "assets/js/15.c9e1f2c0.js",
    "revision": "e9ed940f145f64ddccaff1954a7f9e9d"
  },
  {
    "url": "assets/js/16.d882a1d8.js",
    "revision": "4e172249e386304244bb32cc97ca4c92"
  },
  {
    "url": "assets/js/17.6e25b16b.js",
    "revision": "3a9a26a08feeffe52629932552a3ea28"
  },
  {
    "url": "assets/js/18.241f9faa.js",
    "revision": "1d6b2b2e59f09339657b9e69ed4674ce"
  },
  {
    "url": "assets/js/19.2ed9e1ff.js",
    "revision": "f124e9d48664a5199c22c260cc21cd3c"
  },
  {
    "url": "assets/js/2.0eb84d5e.js",
    "revision": "3011d19f20189a7204b6a0891435d6bf"
  },
  {
    "url": "assets/js/20.662d0093.js",
    "revision": "8023878c759f26cfafac75d01e210245"
  },
  {
    "url": "assets/js/21.671ff4e8.js",
    "revision": "54713cc781a47eeabb931322a9b701db"
  },
  {
    "url": "assets/js/22.c3c83ee9.js",
    "revision": "9c3f385fc72ce1ccde6783826daf74f9"
  },
  {
    "url": "assets/js/23.c82463a2.js",
    "revision": "a450e9b2d5edbc70306b9ae87b5402ec"
  },
  {
    "url": "assets/js/24.8ab38d26.js",
    "revision": "23a690d756654f9be2c936a73b7d82be"
  },
  {
    "url": "assets/js/25.face3838.js",
    "revision": "00b3559fdf8138e6ef3a50e98dd34412"
  },
  {
    "url": "assets/js/26.0d37cbb1.js",
    "revision": "92b4eaaf0fcfdf2821ee9150e552546a"
  },
  {
    "url": "assets/js/27.4aa3a014.js",
    "revision": "e1d64860c90e6c829d900048c2f100c6"
  },
  {
    "url": "assets/js/28.4dbc101d.js",
    "revision": "660888f2d4e934bd11e19a78d50687ad"
  },
  {
    "url": "assets/js/29.97f0efff.js",
    "revision": "0d60018414615690b39c89dfc350f121"
  },
  {
    "url": "assets/js/3.516ebd4b.js",
    "revision": "4cfa80d996be9246bc0aba25f10296d7"
  },
  {
    "url": "assets/js/30.a7149703.js",
    "revision": "e6adbdd4e39c0beb581bda9a4771a08d"
  },
  {
    "url": "assets/js/31.655dfdba.js",
    "revision": "07c0fd6a25e1d6f94fccab6a1924e144"
  },
  {
    "url": "assets/js/32.b01672c0.js",
    "revision": "6274008cc50169194cd2dc51d0975508"
  },
  {
    "url": "assets/js/33.eacd3f3e.js",
    "revision": "8a0244cbd81b354e8c95b1baf5c43a29"
  },
  {
    "url": "assets/js/34.55df8404.js",
    "revision": "28f637e5bfd018183b20dfeaa43a4bf6"
  },
  {
    "url": "assets/js/35.d8ff5cf1.js",
    "revision": "8eff00eec22af494e605bf1d8a043082"
  },
  {
    "url": "assets/js/36.03d08d44.js",
    "revision": "74d2433dda419fb1345cb3658542dd99"
  },
  {
    "url": "assets/js/37.92ce58aa.js",
    "revision": "b97084ffda1b90d62539f8a3c849925c"
  },
  {
    "url": "assets/js/38.1c2894d3.js",
    "revision": "38a74eaf9dea692363273472c0eaf4db"
  },
  {
    "url": "assets/js/39.fcc0b1fd.js",
    "revision": "2099a36977e446e4a7a04a76a998986d"
  },
  {
    "url": "assets/js/40.ec295e87.js",
    "revision": "e410840f2fe9ee94afc8f1b56780e730"
  },
  {
    "url": "assets/js/41.e0f177ee.js",
    "revision": "fe082ed2ed823abc20b53eb779cce656"
  },
  {
    "url": "assets/js/42.731442a7.js",
    "revision": "a1ac548d4a404faf4d37b9d331eb02b5"
  },
  {
    "url": "assets/js/43.2c2a799f.js",
    "revision": "6b0f27f279897e031f6c27ccbb9039f0"
  },
  {
    "url": "assets/js/44.af2e1276.js",
    "revision": "509ebd696f50a4aa284d3412c41b55ed"
  },
  {
    "url": "assets/js/45.912a06ad.js",
    "revision": "0e0b1903f779b54fac900f6504b97249"
  },
  {
    "url": "assets/js/46.8c4c80f3.js",
    "revision": "bad69143496a9317797936d40ac5394b"
  },
  {
    "url": "assets/js/47.8c5b055a.js",
    "revision": "a7b162f5f562cf51e382cd0c0a29c71d"
  },
  {
    "url": "assets/js/48.807aa709.js",
    "revision": "3bac8f0755c2f3ec9ded8db5ff5f464e"
  },
  {
    "url": "assets/js/49.e7a070e8.js",
    "revision": "1eee6c049b69fd84aa4a02e32e61b980"
  },
  {
    "url": "assets/js/5.1a4d9c29.js",
    "revision": "a86d936529beccc825f06d6602b5b5f5"
  },
  {
    "url": "assets/js/50.07014a26.js",
    "revision": "e8aa4b94f86852e19210c1cc0e14b259"
  },
  {
    "url": "assets/js/51.60713bd5.js",
    "revision": "a04778394327eec6b5f254294a367c22"
  },
  {
    "url": "assets/js/6.1d07882a.js",
    "revision": "c11b498e44510386bd196b208abc16b6"
  },
  {
    "url": "assets/js/7.8b28701a.js",
    "revision": "16482bb5953f2937c9af0952ac18797e"
  },
  {
    "url": "assets/js/8.ce76ba81.js",
    "revision": "a2b92ae1d04e639fa06ff87bcf1c5b42"
  },
  {
    "url": "assets/js/9.ad05e264.js",
    "revision": "9e7bf85d4cf87761465d513619f2a5fb"
  },
  {
    "url": "assets/js/app.3376e408.js",
    "revision": "8f636a6e2464d5c3691414cc24e2c79b"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "bd153641055c9ccc6175d35cd2f4f6af"
  },
  {
    "url": "contributing/index.html",
    "revision": "33b3ec14137f52f678907d2ab8fb383d"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "de3d7c8428755b3e0e1e06708208633b"
  },
  {
    "url": "examples/all-features.html",
    "revision": "b16b6066d8384394eeeef2a0b7e300e7"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "5b10e19f3fc7131ecc63aba6d111d5b5"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "494f5b2886baae12beb2d57851eddd1d"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "95c2f4bf7a04b6f6f59e320fd9681bde"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "01e48faf25977370d8740d30eb33709d"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "d60b03f3917cafb0870c425d505511e5"
  },
  {
    "url": "examples/comments.html",
    "revision": "df2b9d07d9cfad4034554e982add046a"
  },
  {
    "url": "examples/each-with.html",
    "revision": "ed6a9b4ff886f524296007c425bf185c"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "b072806ec95fa926277e787f79e4cc68"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "0cd480956282558bb11852e4a0ff4b50"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "218d7a610369428fa9f1675f9f453449"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "780e15e4b5a39f52e269473219aa7818"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "6e16ef5effb19c82ad1a01c52d802e18"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "9332b0fc4fa1530625cdda3cecc91e7d"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "0e3601aff36b40e962680a688817d2d1"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "470da13f3fe5f640a70f6281746552cc"
  },
  {
    "url": "examples/partials.html",
    "revision": "eb2ab11efce0a848080e8c8b02f038c8"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "eac2550c949900f21ff37a0467fb1d58"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "3a834c8a8c6981fcf01ffdd190056d32"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "39e69fe19a304500f2a54e4eb01b43d8"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "0c6d7dd730b3b1f884f05e33c8f9eaf1"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "e10e62fd920616a317bf36503cbd40da"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "7648afb6e0493c0803bfd6a42870acd3"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "416c10d420b839a212f9b405e54a16eb"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "e7113303f13edbb266ed4e0e6effde77"
  },
  {
    "url": "guide/expressions.html",
    "revision": "121bcff77366afd821d3c962d8786321"
  },
  {
    "url": "guide/index.html",
    "revision": "4acd42fa0e4ae06f6123d64a9686921f"
  },
  {
    "url": "guide/installation.html",
    "revision": "6481d5c7d9f293cf85ec8b1377f34c61"
  },
  {
    "url": "guide/partials.html",
    "revision": "0d5e26c7cdd9cb8ffd057273c0dd92d3"
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
    "revision": "de8cf737676930ac26e42596f826f06b"
  },
  {
    "url": "playground.html",
    "revision": "3f732fbe03c9f08335714e02be85f188"
  },
  {
    "url": "topics/installation.html",
    "revision": "bf4a442e50fc36488e6b4a1af1a1f0ab"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "577383e2783f8c60dbf6a64e76f3efa3"
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
