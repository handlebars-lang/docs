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
    "revision": "9ccc4989b43148fed73fee6529a1bcc5"
  },
  {
    "url": "assets/css/0.styles.558e5a5a.css",
    "revision": "e71dca8a4ff33c0508fc4d0ac1c61d8c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e39336c7.js",
    "revision": "125dbf17df8cacd9ae7cabf22031c50b"
  },
  {
    "url": "assets/js/10.84653e82.js",
    "revision": "0ea30d131a496802c37830f53e46b6ab"
  },
  {
    "url": "assets/js/11.e227e138.js",
    "revision": "e8e9fca51414afbc4d07521bcf163ce6"
  },
  {
    "url": "assets/js/12.8c597ad8.js",
    "revision": "6e401aab956f27c223abfb7bc92e6cdc"
  },
  {
    "url": "assets/js/13.896e31f0.js",
    "revision": "e164a741008916f8e19ff1b7b677f1cc"
  },
  {
    "url": "assets/js/14.5080cf1c.js",
    "revision": "673ae6ae574323cbcd19c2d1e57a546d"
  },
  {
    "url": "assets/js/15.0973ba16.js",
    "revision": "bf254311731ed75d4df16ebc0944c988"
  },
  {
    "url": "assets/js/16.4b6769f1.js",
    "revision": "722016d239aa6736e3aff8788b8ef7b3"
  },
  {
    "url": "assets/js/17.aa40fe91.js",
    "revision": "2cc9586e7b21111ad381407377a6207c"
  },
  {
    "url": "assets/js/18.19323c2e.js",
    "revision": "8c197d5fa8a3dc9f4916aed8c7b4976d"
  },
  {
    "url": "assets/js/19.7b4a7d93.js",
    "revision": "162d539db7dc318d65dae399b14e92f3"
  },
  {
    "url": "assets/js/2.925057e3.js",
    "revision": "d91108b149fe74f70686b798ff74b618"
  },
  {
    "url": "assets/js/20.aa259739.js",
    "revision": "17abe7098127c2366600a28f51895ca3"
  },
  {
    "url": "assets/js/21.735c5c73.js",
    "revision": "9ba2446a364dcb50d42a2ce2ae735561"
  },
  {
    "url": "assets/js/22.50705494.js",
    "revision": "96b93068f7b2b6f0381d70d6bae8e179"
  },
  {
    "url": "assets/js/23.0cd84460.js",
    "revision": "80f11604b15584e6ecaf0614ecbab707"
  },
  {
    "url": "assets/js/24.7e30b8e8.js",
    "revision": "e1c02636576a16bf93039ffb3833299a"
  },
  {
    "url": "assets/js/25.3911c721.js",
    "revision": "cd7a0857e226b74eeb26a6637de0fdad"
  },
  {
    "url": "assets/js/26.e6583603.js",
    "revision": "175a49bae0203828c76e6c9d3f1f5da0"
  },
  {
    "url": "assets/js/27.c068e681.js",
    "revision": "08fe4ee54cd59ff6bedd85f93b66bc8b"
  },
  {
    "url": "assets/js/28.d0275bdd.js",
    "revision": "15ca7209e290b59c7592e176ba1a5d4f"
  },
  {
    "url": "assets/js/29.ca1a69cc.js",
    "revision": "49d87724ca7acee05572e5a8d024ac7b"
  },
  {
    "url": "assets/js/3.348e82b7.js",
    "revision": "f9d8c3aa44e7c5efde379f41433bc982"
  },
  {
    "url": "assets/js/30.e36a41c8.js",
    "revision": "6cc5a76ac7f58f39b2e6240d23a98b9e"
  },
  {
    "url": "assets/js/31.6e3d221f.js",
    "revision": "dd91cdaec0bc998383a0729028ef5dbe"
  },
  {
    "url": "assets/js/32.d9839760.js",
    "revision": "c6661ebf61eed27f8279e8501b9bbe85"
  },
  {
    "url": "assets/js/33.75f726c3.js",
    "revision": "10b94a67d29bccedd636f38f4b0f6f4b"
  },
  {
    "url": "assets/js/34.4ec21f10.js",
    "revision": "dde0cb34135ea827fb6bb274c94a69d5"
  },
  {
    "url": "assets/js/35.5b36c747.js",
    "revision": "b0d1a539d1add2225b8631299b50c3d2"
  },
  {
    "url": "assets/js/36.73ecd0a3.js",
    "revision": "8dd8a782bfe9c9f02ebb9ca2d718a4f4"
  },
  {
    "url": "assets/js/37.9a167d00.js",
    "revision": "7b4026bdddbb12e518fbd222f674a3e0"
  },
  {
    "url": "assets/js/38.e1dc8cdc.js",
    "revision": "9725640e1681de55529c12d6e9cd858d"
  },
  {
    "url": "assets/js/39.1180eb99.js",
    "revision": "203200812e59061da31046dd57d838c6"
  },
  {
    "url": "assets/js/40.34c78eae.js",
    "revision": "44a392c3723b9df934714b8b3e6d5769"
  },
  {
    "url": "assets/js/41.8ecb531a.js",
    "revision": "3ef36e2414395afaae0b433a7a4e296a"
  },
  {
    "url": "assets/js/42.ce4147da.js",
    "revision": "a0c4644f07f0245c24479fda9cdadb37"
  },
  {
    "url": "assets/js/43.6b5fbfe7.js",
    "revision": "47b623a5d694bc445483b8a234fd9bfe"
  },
  {
    "url": "assets/js/44.01b164cc.js",
    "revision": "2eb99e8476e21b297db1bc20c6a5b6c9"
  },
  {
    "url": "assets/js/45.593539b5.js",
    "revision": "44aead14d214c3513677184dba223754"
  },
  {
    "url": "assets/js/46.2c921738.js",
    "revision": "0457079208f5d508030794412777fb0c"
  },
  {
    "url": "assets/js/47.edad45c1.js",
    "revision": "c14410a88ef4fcce5c1e584a88a823a1"
  },
  {
    "url": "assets/js/48.31707119.js",
    "revision": "13cb56e755b67ab5f285dba386844af1"
  },
  {
    "url": "assets/js/49.79651e48.js",
    "revision": "5d618b7538d53c5274da65193a85d8bf"
  },
  {
    "url": "assets/js/5.a6fd16f3.js",
    "revision": "97807f591b7230b8e4b5e9cc63bb82d0"
  },
  {
    "url": "assets/js/50.dba48ebf.js",
    "revision": "75defb62fcb0eeff4aae95d074cc7f34"
  },
  {
    "url": "assets/js/51.f4623547.js",
    "revision": "a6a3750d4fe5cacc37f9d433d20a9a93"
  },
  {
    "url": "assets/js/52.b8e2e807.js",
    "revision": "e26f163f60b52c48e1e06e19c0b00334"
  },
  {
    "url": "assets/js/53.10a3cb09.js",
    "revision": "a633fa8385642590b726f753246d59a4"
  },
  {
    "url": "assets/js/54.a35fc470.js",
    "revision": "912cafce61af0c9663a6654373b39e7c"
  },
  {
    "url": "assets/js/55.ff0ecc85.js",
    "revision": "f755672b017f089843ddca4234ffe125"
  },
  {
    "url": "assets/js/56.07484746.js",
    "revision": "28d9352cf93f58b1f2fcc7f2f2c10d2e"
  },
  {
    "url": "assets/js/6.2eb0cbb1.js",
    "revision": "7c138f7ac72211383f91e440ab82d8e1"
  },
  {
    "url": "assets/js/7.8a1ce518.js",
    "revision": "14af9b8145adce26e6f86324ef3ed481"
  },
  {
    "url": "assets/js/8.23e3e890.js",
    "revision": "812ca2e17f0026e06696bee19d46812d"
  },
  {
    "url": "assets/js/9.7c9a5c25.js",
    "revision": "66a804afb1978afc073bc1795c956757"
  },
  {
    "url": "assets/js/app.926f579d.js",
    "revision": "e5c074bbda9a46c4c0ffa20d5786eb31"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "da4b22849396cf2048ad287cd3f4f31c"
  },
  {
    "url": "contributing/index.html",
    "revision": "9b72d20f70e2d8ea2ce5311d4066717c"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "be02b72666344516525e9c6f7ccd3903"
  },
  {
    "url": "examples/all-features.html",
    "revision": "587b62b57194dd4cef8c7533cb4f4888"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "7bafc32da3a5695115d3508b83bc29bc"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "28eeb6365581863ae2352dd363924023"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "211d3c1acfb82c547a047ee9a2e9e85b"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "382584211b3ebf52037efd611cf407eb"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "0ca0dff504034b444260e827c4cedb01"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "5d459f0dc7f68569f780791bf2e47801"
  },
  {
    "url": "examples/comments.html",
    "revision": "9ac5c67d0b1edd5391169d4d83f3175e"
  },
  {
    "url": "examples/each-with.html",
    "revision": "c25343e31b747b286cd707a73a53bbbd"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "e5b6ccf4ea5ff57b91830e5374bed2dc"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "b97efac4a1a171cd6959015a3b3bfc0f"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "9de843aa357e836e7b1229cf95b0c623"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "cd75cefe1bbec51899e84e9f5e34338a"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "76eee80101a99ac376819098093b0edc"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "5b55595147d375641d347f2aeccc3dae"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "f34170dd9bbf45662d9626487ea4e0cd"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "ee07abe853339fe55f164a95343f0b8c"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "a1d96225c0f7769312267e432f5246a8"
  },
  {
    "url": "examples/partials.html",
    "revision": "a0aaaadb6895f16d49eb5fe86dd4ce92"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "0378f2757dc3e059e0dd8d1671aa030d"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "cd7ac9faec64bd0d0be0c1b5ac87c277"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "c4a5c4d433c04e9502188ef8d031fdf4"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "eecef7a55edaa650e9b681b86439aff4"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "fe39b4b59be4c41e2b80c9962a6085b2"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "f1ecdb447c3d2e97c7f74cd202c70880"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "3def478df745f6f1bfe5b69dfe67fb26"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "986cb9411403b82b7550a6aa7228552c"
  },
  {
    "url": "guide/expressions.html",
    "revision": "7483aebe8520f1e31250eb92fb667b63"
  },
  {
    "url": "guide/index.html",
    "revision": "674cb9892cab5fbfd984a69d9e170b74"
  },
  {
    "url": "guide/partials.html",
    "revision": "b0a2ded22f1916dad351800a6d36bcec"
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
    "revision": "9151b3ad22d770e0cd63a5fdf5c04cf4"
  },
  {
    "url": "playground.html",
    "revision": "810c099961bed4a638246cf6653072e5"
  },
  {
    "url": "topics/attic.html",
    "revision": "9c57841dfbb297d5ad9ee1bf7e4663ef"
  },
  {
    "url": "topics/helper-packages.html",
    "revision": "2a46240eb596c435a2d8e721d59574ca"
  },
  {
    "url": "topics/installation.html",
    "revision": "50e10cc79dd6bb3fa81d76cb28488ef3"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "8a70a61b8ccc89f1ec4bf130aae77f57"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "68180b178293063ba9c4c53941291390"
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
