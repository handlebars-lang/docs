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
    "revision": "4d391dc00bb437009e86cce826f2169e"
  },
  {
    "url": "api-reference/index.html",
    "revision": "537bdbe71ebea90c82c4962ff8695b4a"
  },
  {
    "url": "assets/css/0.styles.c92def12.css",
    "revision": "a6cdc175b12bc3b4df04c040074eda65"
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
    "url": "assets/js/10.3972fd25.js",
    "revision": "4ebc64d50a725baa3b6752c7c7278513"
  },
  {
    "url": "assets/js/11.6d02d519.js",
    "revision": "357c5f327a0813ec36f6a5ca79cb9f53"
  },
  {
    "url": "assets/js/12.2c3a22a8.js",
    "revision": "20493255ef83666bfed39375aa258ac6"
  },
  {
    "url": "assets/js/13.e1b9a16d.js",
    "revision": "9908ffd5cb1db4ccf267a206d99c8a87"
  },
  {
    "url": "assets/js/14.f5262fa7.js",
    "revision": "8901fef6bd3f279dff77d0ecefe5e33d"
  },
  {
    "url": "assets/js/15.5c19e80b.js",
    "revision": "31ad66c2874e322f99bcba85bea5164e"
  },
  {
    "url": "assets/js/16.a983ea76.js",
    "revision": "a5037ba90d440de01d45a6edb71e7d54"
  },
  {
    "url": "assets/js/17.9cb117e9.js",
    "revision": "cfd0a6aaf5e28f0389a4c3bdb9c08b56"
  },
  {
    "url": "assets/js/18.e785291b.js",
    "revision": "ed7fb3f513f76ae3c97023846e73d2ac"
  },
  {
    "url": "assets/js/19.76a8cf45.js",
    "revision": "45f59e5c70c03a085026b522abb348e7"
  },
  {
    "url": "assets/js/2.b913ca96.js",
    "revision": "310c227805dddef9cf437bb8e755041c"
  },
  {
    "url": "assets/js/20.0553703b.js",
    "revision": "a68b80e50e4f7db3bce39d2d532a287a"
  },
  {
    "url": "assets/js/21.839f1c9f.js",
    "revision": "20f3cd9cac3f0b25f8ddbd98cd1f1583"
  },
  {
    "url": "assets/js/22.afa2d06c.js",
    "revision": "018550752d0119be9a429d228f2567e4"
  },
  {
    "url": "assets/js/23.66194241.js",
    "revision": "bdc6af013043bceb9372c07f8de30db9"
  },
  {
    "url": "assets/js/24.8bbc5c46.js",
    "revision": "bb7879a1e3cbac5a2d94cff021a15edb"
  },
  {
    "url": "assets/js/25.e9d7616f.js",
    "revision": "f42bdade9d1dc896c144d5037ba03e2b"
  },
  {
    "url": "assets/js/26.dbf02fab.js",
    "revision": "ab9c329e054236cfd4d93d6a6b301746"
  },
  {
    "url": "assets/js/27.68d59547.js",
    "revision": "39560df3e59e349df171677bbc760074"
  },
  {
    "url": "assets/js/28.d0aba1c4.js",
    "revision": "1b00fec66c9f9228c9c99060402595d2"
  },
  {
    "url": "assets/js/29.423cdfea.js",
    "revision": "5614c1cae69d2cabf555c498dc4b9110"
  },
  {
    "url": "assets/js/3.a7f88ae9.js",
    "revision": "2928b97fde8aae86c64168ad18481558"
  },
  {
    "url": "assets/js/30.6e34d149.js",
    "revision": "db8e8c62727c23eb3951555ea6ce2378"
  },
  {
    "url": "assets/js/31.8c6fc447.js",
    "revision": "167410dc3ef470d735357ceed2821126"
  },
  {
    "url": "assets/js/32.2a18a986.js",
    "revision": "c6661ebf61eed27f8279e8501b9bbe85"
  },
  {
    "url": "assets/js/33.97afdffd.js",
    "revision": "d767cfbf869e5a857e5a86509e4152cd"
  },
  {
    "url": "assets/js/34.42b68553.js",
    "revision": "f5ab7996317a10548c03aa5e588bc67a"
  },
  {
    "url": "assets/js/35.fb8bc16f.js",
    "revision": "60a717a44158e5cfd37106af6b8dc5b1"
  },
  {
    "url": "assets/js/36.225eb2f3.js",
    "revision": "ea3660a06f4b022639f7c0b630c85461"
  },
  {
    "url": "assets/js/37.1abe48ac.js",
    "revision": "6b997b3f7ffbce4d8d97307c8f1c2925"
  },
  {
    "url": "assets/js/38.2dc50930.js",
    "revision": "13d1a35a12cef22f426c34c9302aa021"
  },
  {
    "url": "assets/js/39.863f8e26.js",
    "revision": "dcd8ebeeb9691330455d1b3fcdaded4b"
  },
  {
    "url": "assets/js/40.773a067e.js",
    "revision": "c02d54e350b966ed2df2319540b406c3"
  },
  {
    "url": "assets/js/41.b7e19c39.js",
    "revision": "dd49efbf13becd6af19029a5b0e21c6d"
  },
  {
    "url": "assets/js/42.58d74ce3.js",
    "revision": "1a8692191a4f40536dd0ccb78a5b4c05"
  },
  {
    "url": "assets/js/43.a2c7fb10.js",
    "revision": "689fc339a7deca7e03030de8f53409dc"
  },
  {
    "url": "assets/js/44.de98a317.js",
    "revision": "fe635a554022d9346b132359fdc03ef1"
  },
  {
    "url": "assets/js/45.5842aa7f.js",
    "revision": "92f84dd0f043261edc653c5874ffe001"
  },
  {
    "url": "assets/js/46.21af1810.js",
    "revision": "9f18aa525861fa45344d54c0843a96d0"
  },
  {
    "url": "assets/js/47.44d51506.js",
    "revision": "b02f29ddbe578ec4a8518b004121f7b3"
  },
  {
    "url": "assets/js/48.e31bc25a.js",
    "revision": "0302ce34c038d37cb0f178ba1127c82a"
  },
  {
    "url": "assets/js/49.e668237b.js",
    "revision": "bae6f71fa9cb4415e44c458c63d1da89"
  },
  {
    "url": "assets/js/5.7e9bfc50.js",
    "revision": "39ac1bebfd31fe97e5fab4a74b6dae05"
  },
  {
    "url": "assets/js/50.43a3abb0.js",
    "revision": "4a4936e8b452f5a9489c28ac87a0ee04"
  },
  {
    "url": "assets/js/51.c51c1f7a.js",
    "revision": "5c8110f2a02c649f28518fb93b9a581f"
  },
  {
    "url": "assets/js/52.9207d92b.js",
    "revision": "e94506d6b84d48c2b083a323e687e18b"
  },
  {
    "url": "assets/js/53.1a5e11f7.js",
    "revision": "25d6825a77045c20085f81d9da123d2a"
  },
  {
    "url": "assets/js/54.4e2a47aa.js",
    "revision": "cbff59c5eff77576eeacbeadfe9e98a0"
  },
  {
    "url": "assets/js/55.8c6c26ee.js",
    "revision": "6412d5f846c74d6c89457ed9bf2aae34"
  },
  {
    "url": "assets/js/56.f6924baa.js",
    "revision": "ac72b91cf1debb4970f6cb8f3fe346a2"
  },
  {
    "url": "assets/js/57.5c3a4e7a.js",
    "revision": "abc3a1ba6545697501a1216919890802"
  },
  {
    "url": "assets/js/58.1bb900ba.js",
    "revision": "57c54d5caf4802e9debd25c36e89db1e"
  },
  {
    "url": "assets/js/59.cf404b87.js",
    "revision": "e70533f92a27cb72a169f195ffcc82b7"
  },
  {
    "url": "assets/js/6.7b856339.js",
    "revision": "d3f67f26d58f4e71132935ef8f1bf5cc"
  },
  {
    "url": "assets/js/7.9351aa84.js",
    "revision": "4f7db1e6b3e60043719a3a7d7e7e9127"
  },
  {
    "url": "assets/js/8.3d034225.js",
    "revision": "84e3731135bd5c093677e717d4a2f0d4"
  },
  {
    "url": "assets/js/9.496eb723.js",
    "revision": "bf136730ccc2ecbb08350f44afff6413"
  },
  {
    "url": "assets/js/app.271542e5.js",
    "revision": "e482bc439866fe117de2c805605ab18f"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "42be1cddc0922aa8e34172fc3456d922"
  },
  {
    "url": "contributing/index.html",
    "revision": "8431a7e39f9c427c318311c57dc9fd9e"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "711626bd9cbd6aa68f1544ce19d8c6fc"
  },
  {
    "url": "examples/all-features.html",
    "revision": "e784997f3a7d9ec6f74fead4a99e246d"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "88a07757f8b8e0fc81bf5cca4d7ed8c4"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "cb2ec73815b7efcbd41a34101aec3eab"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "c5237292b4a4f8ae634c41f7d8bfedf6"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "7f26edb8e2074c922ec6a4b8069564f1"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "d622758f5fa0f4b416b82fc03685a297"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "244af0bb9b07feaecb3e76c5c1454c1f"
  },
  {
    "url": "examples/comments.html",
    "revision": "37b26bc13fea15eb5a914ef869b780cf"
  },
  {
    "url": "examples/each-with.html",
    "revision": "f53d77d5a36b22092997a5edd40b9b8d"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "096fdcca8ee89aaac910a4d29fc3eed8"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "c88edfd74b37057975b43542829726fb"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "bb73f2b24e9468918cf01cbc46fa7cda"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "9ddaa7b3769108f0b5c0fc514cfb50a0"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "a7a482e1bc16cc569dc35c368a266a05"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "917dbe56fd71deb4add4b0dd8526f167"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "40362715f0d388ff76c632aeaced548f"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "cf76edc9d9dc41cba9f9f53214c99fef"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "c8de94aef21de52380c6ad75f3c05ab4"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "4d67706254fb06e1b76e26d3f9c9d316"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "7aa9d585eeb7e93eb7f641665b480721"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "fb404627655b2ff3f873fe8340db2993"
  },
  {
    "url": "examples/partials.html",
    "revision": "0d4b006509b31f3f04a0765bfe0018cc"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "f4cda39c18806a028d30d990dc43c1ee"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "abb3310ba3945c7b50658d1af7a02d0b"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "cdd345fa1ea8bb778918032c547389f4"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "6bb02591ec7545ffcf302e3dd9b0315c"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "82a89380e7b0ee45fef38f1ae963675d"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "8eb96f0eaa26c02b69a259bef90253f4"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "62bc9857fb60cd46495fba59a1e726c0"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "3e7be2ad6e9a0227894bd1be5db4a707"
  },
  {
    "url": "guide/expressions.html",
    "revision": "0951e0cac923a77aa187146454ade43b"
  },
  {
    "url": "guide/index.html",
    "revision": "05c65a38143e3102bba8fb40987ff09f"
  },
  {
    "url": "guide/partials.html",
    "revision": "7c3ecf106384ba9f8292a79cc72f6b84"
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
    "revision": "e652ee5ae9509577b5ef80154a1e46cc"
  },
  {
    "url": "installation/index.html",
    "revision": "b6775684419833a4b538f420d03919c7"
  },
  {
    "url": "installation/integrations.html",
    "revision": "ad89bbe79e61d6823d35101944e2e333"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "35311e31d45578d64e841f0a3fe7ae23"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "b7099e2e1ddc62576442c2a709994a95"
  },
  {
    "url": "playground.html",
    "revision": "7919437a762b3ca1be0221b1a16e8dba"
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
