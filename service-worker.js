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
    "revision": "7a8655c9ec7741ce06d162d92da68d6a"
  },
  {
    "url": "assets/css/0.styles.8cd3d8fa.css",
    "revision": "b4f45ca2801d734c2b1e3efcc60a688c"
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
    "url": "assets/js/12.55638beb.js",
    "revision": "9bd0cd0e834e80aea3f27f147eee3e00"
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
    "url": "assets/js/20.00a29cc6.js",
    "revision": "ab6aaf0412ab2b4f368ece86daa3946a"
  },
  {
    "url": "assets/js/21.57912bc4.js",
    "revision": "9ff9fdc8e8feeed8ef2f220226626050"
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
    "url": "assets/js/40.ec2c808c.js",
    "revision": "ddf5979e1994635637963f36ef07e0af"
  },
  {
    "url": "assets/js/41.a941af53.js",
    "revision": "21fda1957884d12b428868a85b8d8d55"
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
    "url": "assets/js/44.1bb899e3.js",
    "revision": "80c778ebe6d466ed375edc042b5c04b9"
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
    "url": "assets/js/48.5ce5cd73.js",
    "revision": "fd1809328110006967cad18810b27f24"
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
    "url": "assets/js/app.e2cdfa76.js",
    "revision": "d19a3c175ae5ee6bd6cdd276197050a3"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "05c1833a01c886107e4378535a6034e2"
  },
  {
    "url": "contributing/index.html",
    "revision": "a698cbbf4ca9b15d9ff84fe331ed2dbc"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "d3ad3a4f0d3f9ff032c7932bc834f1e8"
  },
  {
    "url": "examples/all-features.html",
    "revision": "9ace89eb7b2ff64fa261882f95b483ac"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "e5173ce28aa5276511581407f6f502f7"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "35d2d2dcb133b21d796f64075ab1978a"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "c47f071f7bc12d81f6a43f762f2c22e6"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "7edfb3a7dfdc2ab31ee04a750de4f785"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "3c8a305f8f31fe3bd7eeb6080d4008e6"
  },
  {
    "url": "examples/comments.html",
    "revision": "b56881f3de51abe9996f2389b4fb6a40"
  },
  {
    "url": "examples/each-with.html",
    "revision": "a4fdd16ed09f996a184b0dfd6dc58bbe"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "5493b859006122ead59516c728b534cd"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "242ea72cf44dbe66d4932f0260cc2932"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "2bfca3bbe14cdc0a3bf3b45824755098"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "2ab1145a745b2b5e48f0bff6cfc34254"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "dec0e04344cf9ec87e0e0399c0d7674c"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "3d8571a8ef189874bc8de9c4ba9944d4"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "5cc056819c29eddd291edfa0683ccc5a"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "128a317ae63552389e17aead374216ef"
  },
  {
    "url": "examples/partials.html",
    "revision": "2e25406581ffaeba719a474a53cf26d1"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "fb8cdd70e308600325316d3d5d05af3f"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "9bcd6cea1c31079c5653221c2f6dfe7e"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "f2c8b1ede73edfba44a16353eaaa7448"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "6032ac7d32f31194726c9477248c0809"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "ec6f387b5d741af704390deac669459b"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "8415976c92af8f83e8d23bf2267bae90"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "889eee838ec3a388d367e29775a09bb2"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "a6c82f4ed94f93d114996c303707979b"
  },
  {
    "url": "guide/expressions.html",
    "revision": "8eeebf05f0a0d26e6cf5ec69932b5e1c"
  },
  {
    "url": "guide/index.html",
    "revision": "09148b86fbae4f6770e15e7e78839c05"
  },
  {
    "url": "guide/partials.html",
    "revision": "fde2f3b721af943c69194ee0a3f20012"
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
    "revision": "a80a0b6703e5ccc45b8578c394b5b70b"
  },
  {
    "url": "playground.html",
    "revision": "b6301236344fe19cee98b2099ba66bf0"
  },
  {
    "url": "topics/installation.html",
    "revision": "f8e6931e43040081924eaded9bf4ae43"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "e8645b2bfeffda89ed9f424786416252"
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
