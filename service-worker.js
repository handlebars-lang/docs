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
    "revision": "a0fe2b04504570cd285aa781f7b3080f"
  },
  {
    "url": "api-reference/index.html",
    "revision": "ac1e9469d1a521a3b341a37ede0b4f08"
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
    "url": "assets/js/5.5d6f9a54.js",
    "revision": "6222ac23a42953a813d777f8c6767a0f"
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
    "url": "assets/js/8.0c309d90.js",
    "revision": "7e454926e7534e05e2546e38dd6016b1"
  },
  {
    "url": "assets/js/9.496eb723.js",
    "revision": "bf136730ccc2ecbb08350f44afff6413"
  },
  {
    "url": "assets/js/app.2205714e.js",
    "revision": "1aa1729ecf67ae369f1e4273e8d845a1"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "797d59b6de26d434566463942c7d7b94"
  },
  {
    "url": "contributing/index.html",
    "revision": "d96674232ebec9f7c57fe7ffec1ef5c2"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "d0fbeb7e6aada231bf528dc864d7fa64"
  },
  {
    "url": "examples/all-features.html",
    "revision": "676306e57e2a443ba38984fad576308a"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "3a822eaa3ad7b1075b8b76817e4a4dab"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "1a06a67c77de85b5f165ab133b2d565f"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "07c3822e8cc65a13d3ac04341e28c77b"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "679058b6e569e330f6299cb8df9afc98"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "1a50ad1b3343a6ff483708dcc42b1d5d"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "886651dd77bd815ffb800acefd945020"
  },
  {
    "url": "examples/comments.html",
    "revision": "765cf0f80859fae2fc3e62c67ff92c51"
  },
  {
    "url": "examples/each-with.html",
    "revision": "4cd254dab8a5ff8e31f9d7d64400fc47"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "c5d843b056f6e48912c9e5a91a4af1a8"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "c906eb75bbc869cf15b1de9a3ab7db6d"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "ab633420a8ba3443ae8880a01a620443"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "d0941a39fd43f7046fc5ba2d4e4e80ff"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "7b405f3d2ac1e8ee1e3d923411c3482c"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "26078eb704d6d3bb26ff0b18cbd38a9b"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "1cc00d4168481373b4e190f132ea4c91"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "b079af9f17a2355aaa4358437fd17fef"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "df86d26d03fe97d2e7dfa76c2c5a2c8a"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "cd5725562b02e8223d05e5fd95c170b0"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "eba687051dcca057736fb932023e0b56"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "07c708e9284b65a5a03527eda4f31344"
  },
  {
    "url": "examples/partials.html",
    "revision": "21811fd268c096c7bde562acf2dd768d"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "0570e10de56fe212a530c7d757ecdb22"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "d1e78ff3ab64661df29ab54a2fc8b24d"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "a73ccb016e9b310d2223c2f147d69f62"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "c8cac60a2234e55114d62aa442fa2b2b"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "1dc6c120a2222e1aeb9a03cfa777ea22"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "7fd42dedd11f2dbfacb2880dfe9c6eed"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "e2c08d46f759d1d8e2affe6b47329028"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "7070534667bcb54ec0c193f37a9ffbd5"
  },
  {
    "url": "guide/expressions.html",
    "revision": "f4dd28e01ef576e4afd62e2a39979c95"
  },
  {
    "url": "guide/index.html",
    "revision": "06de4fda73c8ad234fccd635283fdf6f"
  },
  {
    "url": "guide/partials.html",
    "revision": "93ad618cd9a0711c0c9a1a58f31d458b"
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
    "revision": "089439e37084029ca3e2ff24058e7402"
  },
  {
    "url": "installation/index.html",
    "revision": "8e69e95b08ec705d8f741b35ef7084a0"
  },
  {
    "url": "installation/integrations.html",
    "revision": "08a743f059db844c5c061a1e8f7b995f"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "4f6848a5e3633754ebb9aa14cf2cafe4"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "d4e298e0099b6bde90e070920b6aa7fc"
  },
  {
    "url": "playground.html",
    "revision": "1a2f6e61935382354cdc861e6858c4d7"
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
