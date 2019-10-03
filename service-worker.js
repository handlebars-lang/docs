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
    "revision": "e6760c42298374c33bf3ea34dcb20eda"
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
    "url": "assets/js/11.7dd2dc17.js",
    "revision": "a7c0ea7afdc099bef237184344c4dac1"
  },
  {
    "url": "assets/js/12.9de38dcd.js",
    "revision": "58e721c9a22bfaac3c5d5499dade90d2"
  },
  {
    "url": "assets/js/13.3004ce5c.js",
    "revision": "d954a793d33de3dd9c8dae15212e6a74"
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
    "url": "assets/js/20.37d4fcda.js",
    "revision": "fb9f07d7d62952883b9df32f6dece515"
  },
  {
    "url": "assets/js/21.9237d516.js",
    "revision": "2852223733b78724066613d6ecf396b4"
  },
  {
    "url": "assets/js/22.870db96b.js",
    "revision": "c673afbb345c3899327d0099fa9efcec"
  },
  {
    "url": "assets/js/23.f3c4326c.js",
    "revision": "a8f20a5c24f6f9e762d5cf7eaf5a75a0"
  },
  {
    "url": "assets/js/24.c0732d73.js",
    "revision": "4aa4ce1b7f8c1b4d75e84e83a3bdd9a6"
  },
  {
    "url": "assets/js/25.491be340.js",
    "revision": "d0657c9a094d13e847c75ddaa417b153"
  },
  {
    "url": "assets/js/26.2179616f.js",
    "revision": "b08cd101e64fb082140e3e611481539e"
  },
  {
    "url": "assets/js/27.ef7bc75f.js",
    "revision": "0fcb169a96643df7d832fdd4e0dde70e"
  },
  {
    "url": "assets/js/28.14f9576e.js",
    "revision": "fb2ee14fdf2de1140d960dd701784975"
  },
  {
    "url": "assets/js/29.f8e98b83.js",
    "revision": "0d60018414615690b39c89dfc350f121"
  },
  {
    "url": "assets/js/3.a8745367.js",
    "revision": "c3f821c61725600728df329673224d3b"
  },
  {
    "url": "assets/js/30.a413034f.js",
    "revision": "db8e8c62727c23eb3951555ea6ce2378"
  },
  {
    "url": "assets/js/31.44386eb8.js",
    "revision": "6246d7593df3292e92cf73c94da61fd6"
  },
  {
    "url": "assets/js/32.355f201d.js",
    "revision": "6325d6fd765889e8160d952819ad4d21"
  },
  {
    "url": "assets/js/33.d301126f.js",
    "revision": "369ead262d7153726dae15abb6f7d808"
  },
  {
    "url": "assets/js/34.5aea0be8.js",
    "revision": "3d3da655d9df6a01323baf4b87b13d02"
  },
  {
    "url": "assets/js/35.eaee1c5a.js",
    "revision": "d793d10b9a7a8595208f4d87ef0a61cc"
  },
  {
    "url": "assets/js/36.91268b8a.js",
    "revision": "0ec57fdb1fac7919c747271658143ad1"
  },
  {
    "url": "assets/js/37.93f73fc6.js",
    "revision": "3fe76204b010b56dae0f718223127a6a"
  },
  {
    "url": "assets/js/38.362785d1.js",
    "revision": "efcc28f9bf04acfefb9781888ae70084"
  },
  {
    "url": "assets/js/39.9ada1fa1.js",
    "revision": "b7629ede335024bf4f4a7979d6e370c5"
  },
  {
    "url": "assets/js/40.dd8c80c1.js",
    "revision": "e0483c8e95a14f905e8257e1df6cdcc9"
  },
  {
    "url": "assets/js/41.b7e6cb79.js",
    "revision": "f223ccbc4e33a2fdba745e43c2e8fd36"
  },
  {
    "url": "assets/js/42.6d8d7368.js",
    "revision": "a6157d078c257d3cf4896e627233f91b"
  },
  {
    "url": "assets/js/43.5d3be0b7.js",
    "revision": "34e9bbefd89c98792da5e9b98da9ee22"
  },
  {
    "url": "assets/js/44.919d5dbc.js",
    "revision": "5ff8f30e5a44e6ba7a1f93cbb5ae62b5"
  },
  {
    "url": "assets/js/45.34ebde4d.js",
    "revision": "e396e47619a5609678841065a7eb6cb4"
  },
  {
    "url": "assets/js/46.1f12eb4c.js",
    "revision": "1a33cff65ea09d33208d9eb37ed48681"
  },
  {
    "url": "assets/js/47.02e551df.js",
    "revision": "82f1138da5fbf3863877761284b7a32a"
  },
  {
    "url": "assets/js/48.90bd266b.js",
    "revision": "8aad84e170c35941af91011ed07aa9b4"
  },
  {
    "url": "assets/js/49.108146ca.js",
    "revision": "984728989164cb66d747ced6956fafb9"
  },
  {
    "url": "assets/js/5.bbc55b37.js",
    "revision": "dcd74743468baa671ea710df2c60283e"
  },
  {
    "url": "assets/js/50.34a211d8.js",
    "revision": "19587ff6a347b5b9971a833bee61df89"
  },
  {
    "url": "assets/js/51.310d573c.js",
    "revision": "bc5df08ba51a9f6206728a9908e83d7d"
  },
  {
    "url": "assets/js/52.d252161f.js",
    "revision": "2fda49c12d7e7cd71b01dc23d3a845c1"
  },
  {
    "url": "assets/js/53.57bde3d6.js",
    "revision": "cc8b400e5d6bde3db1ae122f3ad9c60f"
  },
  {
    "url": "assets/js/54.2178b88d.js",
    "revision": "21ca9ef82459f02a413ac0a50b5e3aa9"
  },
  {
    "url": "assets/js/6.7838147f.js",
    "revision": "4c80f1df286cd8da75b24b36d7e468dc"
  },
  {
    "url": "assets/js/7.80c0e2b0.js",
    "revision": "827e6c701a86fcd99b50965e124e102f"
  },
  {
    "url": "assets/js/8.8573a0d5.js",
    "revision": "075d2c70452b82c20f264231a075d2a5"
  },
  {
    "url": "assets/js/9.e334e642.js",
    "revision": "7ebc425cf0f87f673f63c17f3a82af24"
  },
  {
    "url": "assets/js/app.369778fe.js",
    "revision": "7b7f83bd9260e19b6ea020f2e50a067c"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "472bc0fc0fbdd2f60c00e953fbf6f5e1"
  },
  {
    "url": "contributing/index.html",
    "revision": "8cd32fb2e41822b8d7c706ca2be3794a"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "2790cb20f60dc15743a74318f9119db6"
  },
  {
    "url": "examples/all-features.html",
    "revision": "db3dfc27c9790a6fee1e79bb1f864b48"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "b095403edac2f03482d175eb367b0bbd"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "51d130eaff1e9a3ca744510c4d2c4056"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "ea392c0d6af34d9cad40551947b84e09"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "12ca31033a10d18b25c908c7a678effd"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "5486659dac4c37bc790fad5b4af67c0f"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "b5e4e9eab88b94a2574d0c5d47cd7f6a"
  },
  {
    "url": "examples/comments.html",
    "revision": "bd641d512e9faaec80b0ba4c3d9dfbc1"
  },
  {
    "url": "examples/each-with.html",
    "revision": "734c46cac22e99a43e310c90e840d26c"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "69f2b4183f2b2a4e8a3207da983bba28"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "b288ae8879da71d71b3d184aad3abfbc"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "fd2709890a78dd04d3b0284155fdcde7"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "40972f1edb3dea2275448174a14548f4"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "604475135e1875905ea062bdb9735ed1"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "eee33fd52109adbc405190d4559a9989"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "d2659b122aa858f8cdd2e0282a7ece5f"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "b70322f1461351149a40b71a2b944d7a"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "acab47b49877f1cfa83e23ccd155db80"
  },
  {
    "url": "examples/partials.html",
    "revision": "2ccc8cc531cc5a5016528159ede6e315"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "98c407c2903fb47478aa39a28fd68958"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "d34b40f4d837a8272ab9ea239e4de526"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "6c78189523fa5a86e2c68b93c13f1de6"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "8d9c3b9f434a1589eabbf62f8a1391c6"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "4a29640579080cd8ea29403a0b91acbc"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "ab3e5e2c312e151740b0857e5c7ddb31"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "ed447d8c55ff7018c219b1f0db95e1b1"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "d075297fb3e8344d1aaf2c050344006e"
  },
  {
    "url": "guide/expressions.html",
    "revision": "c6fcb6e5786097c789e0a87bbfc69d5a"
  },
  {
    "url": "guide/index.html",
    "revision": "58a7a721f52b0ed06c1e96e0abe420f1"
  },
  {
    "url": "guide/partials.html",
    "revision": "be78e14f8f135b1e745344d9ef6f35ec"
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
    "revision": "ffa77af0a7518a2240c1900fec90d55f"
  },
  {
    "url": "playground.html",
    "revision": "0300324c3d0fc2fc9fedebf11fc33b44"
  },
  {
    "url": "topics/attic.html",
    "revision": "4f9f7a6fb0a2357cfef07867bd3c0ea8"
  },
  {
    "url": "topics/installation.html",
    "revision": "64913c518a4bdf2a1867ee9279530ab3"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "7a363137abd49ecacc61385b17df7dc8"
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
