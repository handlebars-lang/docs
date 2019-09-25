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
    "revision": "e43b795d5e3cb22b06afe65b0ba90143"
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
    "url": "assets/js/5.37caaf0a.js",
    "revision": "ada73558431947f895ddf273a0670f1f"
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
    "url": "assets/js/8.4c646efe.js",
    "revision": "ab6cd13b93b48b1d3100217be94d6a79"
  },
  {
    "url": "assets/js/9.ad05e264.js",
    "revision": "9e7bf85d4cf87761465d513619f2a5fb"
  },
  {
    "url": "assets/js/app.41fde546.js",
    "revision": "732cdfca705226c9fae7a17527816d61"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "e5202b9dd3cd604bad54e3aa5c81198f"
  },
  {
    "url": "contributing/index.html",
    "revision": "805443b43ab9cc7e1bd1f5a43e830ae3"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "acd9006d5b616b78752c38cc50dbae2e"
  },
  {
    "url": "examples/all-features.html",
    "revision": "70799c63b056fa5df244549e8dfb2270"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "f904a6bdd17f157beda3298e65f1379f"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "875d6746a37719e0eba318e32e2e7bbb"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "90e5c7469a3265435d8c48f89e5e38ee"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "6d5cd19cc8567968b207158ae5b26b77"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "7da6817f1b295bf410fb1ed123f89c51"
  },
  {
    "url": "examples/comments.html",
    "revision": "0eb0fcee0e4f8c4658aaf2c7ce2141c0"
  },
  {
    "url": "examples/each-with.html",
    "revision": "4c0416dea44099cdee59162c76f32280"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "ce3049dd8954c92fe786b47d38b297b1"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "e5e79de8fd4fb887186879708d1462ce"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "b7e51c70a9dd27041b7fbc7d5c331c83"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "751fdf97a0485681b13c047f8d7bf1bf"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "3ef2f8eb611ef65a583ff4781f1ac6e1"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "684fdaf9d6c0e2413b4173f78b6aba04"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "d26152bf5e9c6a0553c6cf910470f2dd"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "982e5667f77c587ed175de2ad00f6f09"
  },
  {
    "url": "examples/partials.html",
    "revision": "959863693649b090f6e53bb0cc4c9a82"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "79e0f7fd3e2d8299742c95c678511755"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "2de8c5a8456a0655c6d1d3f9387a796c"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "213628f0e9149b1d41a96581305b7fe5"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "4470db004c84f5113636b4840c3d8c1b"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "731391934a83b3e60a9f5c7cb45fc49a"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "9dc4e1591082c40ff4f5e2419474c9ea"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "46ea2e1f4c5450b8a566018a8d5d54f9"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "25d6791b589874d2a9161beb232fa003"
  },
  {
    "url": "guide/expressions.html",
    "revision": "8d3597855f2f9440840fe211ab85b325"
  },
  {
    "url": "guide/index.html",
    "revision": "ff0889f1ff368b2fc4e4dc6500371124"
  },
  {
    "url": "guide/installation.html",
    "revision": "6001f09b10dddcc4d7bf479c2f5e8f39"
  },
  {
    "url": "guide/partials.html",
    "revision": "61dbb5133621de079d57de1dcd1e101d"
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
    "revision": "4d6daef0e62fc0ad22b1403db6f35e91"
  },
  {
    "url": "playground.html",
    "revision": "ce5507e7b4a500f57ec0844ebe8c110f"
  },
  {
    "url": "topics/installation.html",
    "revision": "5b2b678c9d674b60040b3ba6f6c04056"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "f108f0a3a82b72508351f18242c3677b"
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
