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
    "revision": "e756a929240cb022fc04724fd3b89286"
  },
  {
    "url": "assets/css/0.styles.9489fbcc.css",
    "revision": "01b7e71d377f99d76542b0bab4a48c1c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.70a866e3.js",
    "revision": "bb0dc1339adba47ade881aa4027d74c7"
  },
  {
    "url": "assets/js/10.f9822867.js",
    "revision": "dbf269adccbf9908cd3d55f05f33092b"
  },
  {
    "url": "assets/js/11.203a932c.js",
    "revision": "50321fec803b26c30e7922c38e6be1b5"
  },
  {
    "url": "assets/js/12.edf8e08d.js",
    "revision": "f013afc1a673e1282354c9916e0f6ead"
  },
  {
    "url": "assets/js/13.c512f75a.js",
    "revision": "6d7fb1d0625d8fc3415fbe57aa62ef8a"
  },
  {
    "url": "assets/js/14.c8e69b5d.js",
    "revision": "21e507679ea9e6c855c3c0b57227c13b"
  },
  {
    "url": "assets/js/15.78678efe.js",
    "revision": "2613240723a8c856889a20985d704ae0"
  },
  {
    "url": "assets/js/16.b30e55f8.js",
    "revision": "9865d89bceb4aab9fc424aaa554f5b05"
  },
  {
    "url": "assets/js/17.00d13e75.js",
    "revision": "e7e33ef19880ff11f5e1129bd18d7b5c"
  },
  {
    "url": "assets/js/18.4b0cd5d8.js",
    "revision": "a50c266db22e7f585bc3a4eb0acf59bc"
  },
  {
    "url": "assets/js/19.c586f9d7.js",
    "revision": "747b98c273360a90da62380ca071c1b0"
  },
  {
    "url": "assets/js/2.94513f92.js",
    "revision": "ef2b1c9ad04a745ff93d23fb5b6d208b"
  },
  {
    "url": "assets/js/20.928d238f.js",
    "revision": "b3b2993fd3e993ccfae70f4ff098b310"
  },
  {
    "url": "assets/js/21.b824e035.js",
    "revision": "22db207ba17f831731114028bf9e1573"
  },
  {
    "url": "assets/js/22.5ca753fa.js",
    "revision": "d0e28b86e869e553a18f4c8eba906525"
  },
  {
    "url": "assets/js/23.34026bcb.js",
    "revision": "79d9e5d5fea52955178f69cf7a21378d"
  },
  {
    "url": "assets/js/24.14e4a635.js",
    "revision": "d61b1f8cfc8397608e404a40e7ae93e7"
  },
  {
    "url": "assets/js/25.ecdeb23f.js",
    "revision": "afd64db12ae7a7865fecc48bba94705e"
  },
  {
    "url": "assets/js/26.8ab7e7ea.js",
    "revision": "b82a139a18a9e42e2f85b2595824e630"
  },
  {
    "url": "assets/js/27.ba5209ef.js",
    "revision": "2dfd3907051621ba933d0d96c8ca764d"
  },
  {
    "url": "assets/js/28.6ef3fe0d.js",
    "revision": "9ddaf3c1b1ad35eb333032d4a6eab1ee"
  },
  {
    "url": "assets/js/29.c1e853f9.js",
    "revision": "ca139b86a0f37029ee5e2f21b63c7175"
  },
  {
    "url": "assets/js/3.fdc54805.js",
    "revision": "4e4d15c364bc8a796352c4ceebbe6a7f"
  },
  {
    "url": "assets/js/30.b3dd530a.js",
    "revision": "1b8ca7a792f34d71b645c46207431838"
  },
  {
    "url": "assets/js/31.c841e66e.js",
    "revision": "c28f774dd6fe24a94153c4b5034cf807"
  },
  {
    "url": "assets/js/32.a542d6bb.js",
    "revision": "eb860a72c4f72b278c538eb4517166e5"
  },
  {
    "url": "assets/js/33.805d87eb.js",
    "revision": "8501dd2d08cf21c77ae8de63e47dc9d7"
  },
  {
    "url": "assets/js/34.84529961.js",
    "revision": "0da92411061ed12e4e54478f0cff309f"
  },
  {
    "url": "assets/js/35.b055b7ea.js",
    "revision": "f6f2d7fff3a2d540f3842edb7e79fd74"
  },
  {
    "url": "assets/js/36.6cf08d6e.js",
    "revision": "5c1f3895f658621028cfdd68b4b5df34"
  },
  {
    "url": "assets/js/37.d39fb0d7.js",
    "revision": "e7fdc1bd6abed1cd5f2ffd35d934db11"
  },
  {
    "url": "assets/js/38.266f4f52.js",
    "revision": "0080224e5ea601cc88e135a115ff7683"
  },
  {
    "url": "assets/js/39.2dcc4031.js",
    "revision": "7932d6b0803394189a4af9fae7e67edd"
  },
  {
    "url": "assets/js/40.67b306a5.js",
    "revision": "b9627314c86e2e6a948cb505f31c7a49"
  },
  {
    "url": "assets/js/41.d2bb8210.js",
    "revision": "b44d7337098b0231c8bee89f80d95dcc"
  },
  {
    "url": "assets/js/42.da9384de.js",
    "revision": "5c0b0a36ae3e1e3b52337cf5bde63609"
  },
  {
    "url": "assets/js/43.13156538.js",
    "revision": "c44432d390da36f0db156754f193f7a5"
  },
  {
    "url": "assets/js/44.ba32e910.js",
    "revision": "3046ec961adbb552b81956e2e95c20af"
  },
  {
    "url": "assets/js/45.95ca50f1.js",
    "revision": "c8fe0bd5068b6c692cfdb681622e2bfc"
  },
  {
    "url": "assets/js/46.cf3ff3ef.js",
    "revision": "dfb166522c051a374e34e51ff3e1b48a"
  },
  {
    "url": "assets/js/47.17dcbb85.js",
    "revision": "b4aec9a13de4c5ca58fae70d02c3a1d8"
  },
  {
    "url": "assets/js/48.e0564fd0.js",
    "revision": "50e73c102947b8f7dd42b6d50ba40b56"
  },
  {
    "url": "assets/js/49.16378165.js",
    "revision": "baaaffe8960fdd22bb4b2a8c75c726a4"
  },
  {
    "url": "assets/js/5.1a5afe37.js",
    "revision": "026f02578f34b63fcb6825a75c3f1ed2"
  },
  {
    "url": "assets/js/50.a9be6db9.js",
    "revision": "6440d70bfd9e0eedc192767ea18aa295"
  },
  {
    "url": "assets/js/51.2d3c07cb.js",
    "revision": "4e74b67888aeac14a00f1d62b2234eb6"
  },
  {
    "url": "assets/js/52.4e3f6dbe.js",
    "revision": "6b9fa47cb87f66d8f9c6136dc8edc58a"
  },
  {
    "url": "assets/js/53.bdd74880.js",
    "revision": "389f23c6c2053578b5299e84ae46e997"
  },
  {
    "url": "assets/js/54.40b39c4d.js",
    "revision": "d3230607110db1bf7fca24fae5351352"
  },
  {
    "url": "assets/js/55.ae6c331a.js",
    "revision": "9b06a09d750cebb3beaa702bc3f7e669"
  },
  {
    "url": "assets/js/56.992f2391.js",
    "revision": "aba6ee58e6f3829dedd4904aef662465"
  },
  {
    "url": "assets/js/57.65fa2b4f.js",
    "revision": "70a968ace7c523be4b74eaa3cb979b47"
  },
  {
    "url": "assets/js/58.7de7a526.js",
    "revision": "29796142f7d8d6429acd00e41bdfc4b9"
  },
  {
    "url": "assets/js/59.cf404b87.js",
    "revision": "e70533f92a27cb72a169f195ffcc82b7"
  },
  {
    "url": "assets/js/6.5daa4126.js",
    "revision": "a4e0c7bb65f0512d45dc2d5162fd4f68"
  },
  {
    "url": "assets/js/7.43047847.js",
    "revision": "9d0965e81643e392c7f930a117cbc934"
  },
  {
    "url": "assets/js/8.9c19a5c1.js",
    "revision": "9919ea642dba7127d4b66b470004b45b"
  },
  {
    "url": "assets/js/9.496eb723.js",
    "revision": "bf136730ccc2ecbb08350f44afff6413"
  },
  {
    "url": "assets/js/app.9c48f8e7.js",
    "revision": "5036f32786ad937d1af1a2d18ff26038"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "99dec186aa75f6eb40d53602b326fe43"
  },
  {
    "url": "contributing/index.html",
    "revision": "c7774d45ab782280863d7f58aa19850d"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "08104be717d0a3e51934ed3178e1ef95"
  },
  {
    "url": "examples/all-features.html",
    "revision": "3a48c17184100d0b14e8136cc978c72c"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "081eb190f958f0adc991a27a4ee33533"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "478cd4e3c3d977ae21a909515da65154"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "217437abcbf40192927ee27782650510"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "4885eaee30a13e49d8c6352514e0cce0"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "41f07b9ed465b89bbd4c3a21e3f559b5"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "9ac34713202c43ff70de4a614e5dc32f"
  },
  {
    "url": "examples/comments.html",
    "revision": "803a05f3676cf0acb933eac7a5525397"
  },
  {
    "url": "examples/each-with.html",
    "revision": "0d54778dbf003cb6a5075e47e2f3f704"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "879e139125ce0678786e402e18ef876f"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "e394f6f5e7dbde8e51c17eeb0e4e53c3"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "bc35c1d9c56c5af2efe03236b2d81d43"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "f409c0fb55a7f79954c8c777208d299e"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "d1ceee2be5c43293eb5ddbf07e2aea30"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "b741c096b01c8e6f332a8135cb94210f"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "bff4115f7df00d563e374d8b270cf348"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "47ca3c0e3c5d8fcd7b88e584d76346cf"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "a76627eb74edb5d8c1a9c2d5202c22b9"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "38c21b60907cc47f0f4d206633e1db6c"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "338a0ffd3b7f575a8e51c03b8e693b31"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "530541b57c1bb04ebc258657772822ae"
  },
  {
    "url": "examples/partials.html",
    "revision": "fc774545f622386ea06fde80def1c416"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "a439f597987d9400106840cbc41ebf18"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "a2b773bc5996675e6b838cdb14cb5018"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "41ff8d08da4484f8777350e66530760d"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "7d32d49897941a3ac6f77f359c8e11e6"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "0e43fcb03728b28cb198a656912b6c2d"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "c6fe833e39699fc78b47c29420909845"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "80c10f407219bc1297217f57e04ea26a"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "f8bff38089bbbddd61dc0119726da5c6"
  },
  {
    "url": "guide/expressions.html",
    "revision": "a5a468901cab4fed9c6bb0956fa769fb"
  },
  {
    "url": "guide/index.html",
    "revision": "1feb4b4bf7719b292577a9b737960174"
  },
  {
    "url": "guide/partials.html",
    "revision": "0c9234dd638cfca00b8def16f49dfdd3"
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
    "revision": "84b65c8d2d050a36c860b8c605ab34d8"
  },
  {
    "url": "playground.html",
    "revision": "7d31eab53fe1bf28e2c72982f1cb0bf3"
  },
  {
    "url": "topics/attic.html",
    "revision": "e3906353f944fa49818b26628e31fab9"
  },
  {
    "url": "topics/installation.html",
    "revision": "5a4981dd323627a9bf3ede8ca5acdc6e"
  },
  {
    "url": "topics/integrations.html",
    "revision": "0c118ed3c7608965230dd019bfed1a81"
  },
  {
    "url": "topics/precompilation.html",
    "revision": "16ac9fffedd15bb237a9af54e3afe7ca"
  },
  {
    "url": "topics/when-to-use-handlebars.html",
    "revision": "ee73415494729d49818a58439e154946"
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
