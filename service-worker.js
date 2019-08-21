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
    "revision": "92cbfa1c235097a32159132bc40fa02c"
  },
  {
    "url": "assets/css/0.styles.626ef3c3.css",
    "revision": "3135de80b8f44707b3c818302d9b6efb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.eeb0b623.js",
    "revision": "d7d1ca5d33f8df76d7298694b2bb6fbd"
  },
  {
    "url": "assets/js/10.5b0fc148.js",
    "revision": "458f89ad8a64546534dd6d8ee9f837e9"
  },
  {
    "url": "assets/js/11.0e9ec492.js",
    "revision": "e6d5f0e621e270b0e1106f081f09f7a5"
  },
  {
    "url": "assets/js/12.556c55ad.js",
    "revision": "10f532ee852e680983f4b82fe4f250cc"
  },
  {
    "url": "assets/js/13.707e7c06.js",
    "revision": "775c89c3a3705b81e67e9b406fad4d4e"
  },
  {
    "url": "assets/js/14.257fb05d.js",
    "revision": "2e2263db0d2ebee87213b9499258af78"
  },
  {
    "url": "assets/js/15.54017f6c.js",
    "revision": "22e1cfdd8e7e545ec0826725af76c40d"
  },
  {
    "url": "assets/js/16.0b1bd9d2.js",
    "revision": "d256e1d2b61a5e2ce365f5f41e5f517a"
  },
  {
    "url": "assets/js/17.80ffc3e4.js",
    "revision": "29a893827fb9b4887a458da85622275f"
  },
  {
    "url": "assets/js/18.95192aaa.js",
    "revision": "326b03532731982bff87d99883351eb0"
  },
  {
    "url": "assets/js/19.2354501f.js",
    "revision": "a74d0f976ccdaa11eed050fd6b69eb06"
  },
  {
    "url": "assets/js/2.e3847f73.js",
    "revision": "1cf038388241be4793c23ac8cf3e6796"
  },
  {
    "url": "assets/js/20.056ececb.js",
    "revision": "389119ddd05abbf0924ad1c0fe017775"
  },
  {
    "url": "assets/js/21.01069dce.js",
    "revision": "9c5d112912db08a64bfd18faa130630a"
  },
  {
    "url": "assets/js/22.946ac097.js",
    "revision": "2fdd168b343b1c042056592cc9b38ea2"
  },
  {
    "url": "assets/js/23.dc366466.js",
    "revision": "18443b71f32e4680ee79a51ece468563"
  },
  {
    "url": "assets/js/24.98c77628.js",
    "revision": "1a514f37a0fdae2bc25aaa4620c8e986"
  },
  {
    "url": "assets/js/25.d5964837.js",
    "revision": "cab9922ea6e6fa23fb39b5cc0eee01de"
  },
  {
    "url": "assets/js/26.60a66755.js",
    "revision": "d22fed77a8b4e8556984f5c0c6ab1306"
  },
  {
    "url": "assets/js/27.3d12f258.js",
    "revision": "01763917b945ae88e168561d4f6696be"
  },
  {
    "url": "assets/js/28.4667c36f.js",
    "revision": "4a1b3b72c8497ed18b809fb1495b5561"
  },
  {
    "url": "assets/js/29.d163f2fa.js",
    "revision": "dd6754106538da127418a41b936b115d"
  },
  {
    "url": "assets/js/3.5e12ae0d.js",
    "revision": "2482b2df956b63659297c85cffd08568"
  },
  {
    "url": "assets/js/30.bc2ec1d7.js",
    "revision": "956612f2729032d1b0b997b0683990ac"
  },
  {
    "url": "assets/js/31.7d60b857.js",
    "revision": "4b713e336141354d2998afc1a12d7811"
  },
  {
    "url": "assets/js/32.7d410979.js",
    "revision": "447accb4682ca0a78e0245947734edf7"
  },
  {
    "url": "assets/js/33.9663dc39.js",
    "revision": "032bbfb68c1bc4adadc8df193c249f70"
  },
  {
    "url": "assets/js/34.95d228ed.js",
    "revision": "3aa3b23f009b8229ff82444859663b63"
  },
  {
    "url": "assets/js/35.aad2f19b.js",
    "revision": "86087be959aeb0eac0c2a65cf91b88a8"
  },
  {
    "url": "assets/js/36.97c3f3e0.js",
    "revision": "e8ac94fe21adcf2ec914657e5cf58b40"
  },
  {
    "url": "assets/js/37.e0d0cd63.js",
    "revision": "848933b7dc8344afecca5219b9be58a6"
  },
  {
    "url": "assets/js/38.aa2074be.js",
    "revision": "7375f5a61cae5f951220596e816d721f"
  },
  {
    "url": "assets/js/39.5ef96ac0.js",
    "revision": "42be354a2913a93db90428403de90cb8"
  },
  {
    "url": "assets/js/40.68def348.js",
    "revision": "0fca9feeb5186b3df2e7df9f488963ea"
  },
  {
    "url": "assets/js/41.4507fef3.js",
    "revision": "1e86c668c93b30d9e71612cbf5278c1b"
  },
  {
    "url": "assets/js/42.fbcf21b4.js",
    "revision": "2e321710c39d082cd9ad2a31d2a3a6e9"
  },
  {
    "url": "assets/js/43.466dd24c.js",
    "revision": "d82a2ca10d7cd1b76af21e37f3455930"
  },
  {
    "url": "assets/js/44.73713a12.js",
    "revision": "8c533b383b84beb4345cb4195377cd31"
  },
  {
    "url": "assets/js/45.283032e1.js",
    "revision": "5647dc3a587260f5a752ab044132d56d"
  },
  {
    "url": "assets/js/46.f22e0ce7.js",
    "revision": "1380246d0ce59dbdccdd4542a6baba69"
  },
  {
    "url": "assets/js/5.978477af.js",
    "revision": "98e5e811bfbe32c29a59b947469eb00c"
  },
  {
    "url": "assets/js/6.8d99e36a.js",
    "revision": "de70b520d998f2305269c988302edf92"
  },
  {
    "url": "assets/js/7.02879ff6.js",
    "revision": "47ba8575640f1aedcc2abc6d8b1122ff"
  },
  {
    "url": "assets/js/8.85c374f2.js",
    "revision": "61bd0de8752eaa7aeec9e44054b95158"
  },
  {
    "url": "assets/js/9.889fb8ee.js",
    "revision": "f94fe03bf02ed728a77a57347102f8ea"
  },
  {
    "url": "assets/js/app.0b22dc3c.js",
    "revision": "a9c675e8bde72f49e155cf65fc45c927"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "6d73f62becc41858c5b9c8055c083f7d"
  },
  {
    "url": "contributing/index.html",
    "revision": "65c07af236828a14d5f66488685c99d0"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "1755c7635f81c3017c85198a85956647"
  },
  {
    "url": "examples/all-features.html",
    "revision": "04be56be3a58131126358fda837929b8"
  },
  {
    "url": "examples/comments.html",
    "revision": "4c7356049454edc781180eb441d82cba"
  },
  {
    "url": "examples/each-with.html",
    "revision": "173c8e5cad4f6d45935584ef845ec4cb"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "5832d28b600ab6b40b929cc156a1ddbf"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "a43f71596fbed5023efe07b8489b317d"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "f52e926c4ca6c0794c93f8c5fff73c09"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "589c45becc9bf91505bafa544b253266"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "ac2094d0c07a33bf201ef4abc35be18e"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "2f9c16ac5e773b7db8bffafba561c8a4"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "f4b0a1512372ef105c21b7b858e943f2"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "110a0c84714cf6e8ab5b22e089a639ac"
  },
  {
    "url": "examples/partials.html",
    "revision": "34e299247e47e9b66f6b69fdb05d8de7"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "c371799be801954c6999de657be0c66a"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "0b3e23650f022b03536d4336dcb7c9b4"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "3e86e2f2f80188d3cae15d031cb06a8f"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "17485c5d5ef1ee7310a7751c806414dc"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "56373cea33016ee188bcf598f8805b11"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "fcabab79e738cc4eb311c42ff335edb8"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "77c07f62bedae3304c7f775b1ca2fe72"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "b11acdea56ffdad3def64504cf842cdc"
  },
  {
    "url": "guide/decorators.html",
    "revision": "bd8209c14f6df0118126cf76714c7955"
  },
  {
    "url": "guide/execution.html",
    "revision": "8d95f836019b9212f6dac4c61bcd5e88"
  },
  {
    "url": "guide/expressions.html",
    "revision": "c1449b2516fc7d8a4a4526ed49be3496"
  },
  {
    "url": "guide/index.html",
    "revision": "be5b3aae22659f7c11ecbd80f2d61eec"
  },
  {
    "url": "guide/installation.html",
    "revision": "12de4ac3915aec85f95336c365c2441e"
  },
  {
    "url": "guide/partials.html",
    "revision": "87a9085fc10d8b0dd0f5c98c4c03c41f"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "4a7598995e3764ca8936d7549144d96c"
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
    "revision": "cfb278b94f864ac093579f66b78838ae"
  },
  {
    "url": "topics/installation.html",
    "revision": "99aa827d330ab0859feade250d68af36"
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
