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
    "revision": "cccb69821a89318f2b76ab050612d763"
  },
  {
    "url": "api-reference/index.html",
    "revision": "e2a42161a14c2e211049d3ecc8d737a0"
  },
  {
    "url": "assets/css/0.styles.2cf82a45.css",
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
    "url": "assets/js/10.f9822867.js",
    "revision": "dbf269adccbf9908cd3d55f05f33092b"
  },
  {
    "url": "assets/js/11.6d02d519.js",
    "revision": "357c5f327a0813ec36f6a5ca79cb9f53"
  },
  {
    "url": "assets/js/12.93a933be.js",
    "revision": "5d4617f3de746c7770ef52e92167a68b"
  },
  {
    "url": "assets/js/13.c5278987.js",
    "revision": "bc13d4cf2451bd623b685035636312d9"
  },
  {
    "url": "assets/js/14.caf2941e.js",
    "revision": "22fe287cf0c51554453df542c1439170"
  },
  {
    "url": "assets/js/15.5c19e80b.js",
    "revision": "31ad66c2874e322f99bcba85bea5164e"
  },
  {
    "url": "assets/js/16.4df6878f.js",
    "revision": "174eca7d43375303b0507b4cef3c7e30"
  },
  {
    "url": "assets/js/17.079805f5.js",
    "revision": "fa206db5de358d56eb9d7516aa1a7cbc"
  },
  {
    "url": "assets/js/18.c8390f0e.js",
    "revision": "ad349c348268c4e4453f44529284bb9e"
  },
  {
    "url": "assets/js/19.7d348c25.js",
    "revision": "71ba7bdbb4bdff51c9d026dfe443a351"
  },
  {
    "url": "assets/js/2.b913ca96.js",
    "revision": "310c227805dddef9cf437bb8e755041c"
  },
  {
    "url": "assets/js/20.80656d68.js",
    "revision": "fb9f07d7d62952883b9df32f6dece515"
  },
  {
    "url": "assets/js/21.f1adedc5.js",
    "revision": "2f4f12772137e1917c01b8d248463169"
  },
  {
    "url": "assets/js/22.c0e55388.js",
    "revision": "5d6b5ec5b2b0801a8c546126566bbd96"
  },
  {
    "url": "assets/js/23.40e7add6.js",
    "revision": "e419dbd9fd5569510b36e2aa88ca82a3"
  },
  {
    "url": "assets/js/24.79d28587.js",
    "revision": "84952e21c7259a3b146becd83048d897"
  },
  {
    "url": "assets/js/25.60bdda9d.js",
    "revision": "04a824b210ad6c29ca88cba7581bb5dd"
  },
  {
    "url": "assets/js/26.1784649b.js",
    "revision": "ab4c0fa0f1c348276b925436cd217d9d"
  },
  {
    "url": "assets/js/27.89cd1d1c.js",
    "revision": "1f6dc562cb6c6be79208b10e227dd099"
  },
  {
    "url": "assets/js/28.e1a13208.js",
    "revision": "8e01c54502a4e1505f502ae640baa23a"
  },
  {
    "url": "assets/js/29.189ad0e5.js",
    "revision": "4dd3f716fd43b5943dca6a2b9ada85dc"
  },
  {
    "url": "assets/js/3.a7f88ae9.js",
    "revision": "2928b97fde8aae86c64168ad18481558"
  },
  {
    "url": "assets/js/30.dd220afe.js",
    "revision": "493d19494122eadc65add2a0b279d552"
  },
  {
    "url": "assets/js/31.97d7acfd.js",
    "revision": "07c0fd6a25e1d6f94fccab6a1924e144"
  },
  {
    "url": "assets/js/32.48380bbb.js",
    "revision": "fa10eb405c916f5770107c016d9bfe22"
  },
  {
    "url": "assets/js/33.269a1bb2.js",
    "revision": "282b00e68eb37194735fcb440b2d59b0"
  },
  {
    "url": "assets/js/34.8e0edc43.js",
    "revision": "5577c101d6d86dd8ccff12b0ec5b208f"
  },
  {
    "url": "assets/js/35.76fdfaff.js",
    "revision": "7dcf0c3d113a4510818ea018dbfd0d83"
  },
  {
    "url": "assets/js/36.157da132.js",
    "revision": "92d3d55562ee2ada3f9e51d40803c002"
  },
  {
    "url": "assets/js/37.fbc1ec1c.js",
    "revision": "cbd8b48795bc37ce4426c0bf90196d47"
  },
  {
    "url": "assets/js/38.b5595cc0.js",
    "revision": "4c191f34685b4afa0324da9c4fe67490"
  },
  {
    "url": "assets/js/39.a5f6058b.js",
    "revision": "2099a36977e446e4a7a04a76a998986d"
  },
  {
    "url": "assets/js/40.cf6c4bdf.js",
    "revision": "10c21964b0a195574bb0f7cd1b943799"
  },
  {
    "url": "assets/js/41.54c09cf8.js",
    "revision": "b4399d2c251ade2430a92ac4aa679ca8"
  },
  {
    "url": "assets/js/42.f3e817b6.js",
    "revision": "fe544c86492a8bb42b5f6c85390e1aee"
  },
  {
    "url": "assets/js/43.75ac73ca.js",
    "revision": "325044e21b8620a87c2d6b3c11e99005"
  },
  {
    "url": "assets/js/44.291b2f8b.js",
    "revision": "bbb3913792fe923f64745b211f5542b1"
  },
  {
    "url": "assets/js/45.3b7edc88.js",
    "revision": "5d7c1b3704d914cb9e09f30fa4f338ef"
  },
  {
    "url": "assets/js/46.7ea75487.js",
    "revision": "f01cfa03c83564fa44b38166fe876cf6"
  },
  {
    "url": "assets/js/47.71627a40.js",
    "revision": "9d3c3829894b4fa53b831d6f0d74991c"
  },
  {
    "url": "assets/js/48.a741c650.js",
    "revision": "bf1c3169f12b42d11fddca799f5d234f"
  },
  {
    "url": "assets/js/49.16378165.js",
    "revision": "baaaffe8960fdd22bb4b2a8c75c726a4"
  },
  {
    "url": "assets/js/5.4252a43c.js",
    "revision": "4aa1504f5fdbd936599bee85d38396e1"
  },
  {
    "url": "assets/js/50.4d96b770.js",
    "revision": "937e9a3f2d078291650fd7d2e3f3836a"
  },
  {
    "url": "assets/js/51.8b7ffb4b.js",
    "revision": "4986a1e56259261ffb2d5bd1aa6fac22"
  },
  {
    "url": "assets/js/52.0e98eb53.js",
    "revision": "16452a0b29499181c6d19c8e617b446c"
  },
  {
    "url": "assets/js/53.af69474a.js",
    "revision": "a00521224fd58e4856729d2527b9cc35"
  },
  {
    "url": "assets/js/54.097a88fc.js",
    "revision": "9a09243a8dc8c302bf47d4a1ff2a16ee"
  },
  {
    "url": "assets/js/55.3e7c7f5c.js",
    "revision": "6d8f4afe70850c31da1bf64cee166b53"
  },
  {
    "url": "assets/js/56.1c4b984c.js",
    "revision": "54bbdd6f4721e0ea7efd830f31cbc322"
  },
  {
    "url": "assets/js/57.ca459356.js",
    "revision": "dc6ffc783dbb9f319d0108843c3bc12c"
  },
  {
    "url": "assets/js/58.b7e4379c.js",
    "revision": "7d9159ef1d18165f3203d79455b8caf4"
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
    "url": "assets/js/7.98ed9147.js",
    "revision": "3c9c8d880b7dab5dad5f50747a7029c5"
  },
  {
    "url": "assets/js/8.d27e8f94.js",
    "revision": "c22940b1123ed2016ee8e03b13823f10"
  },
  {
    "url": "assets/js/9.496eb723.js",
    "revision": "bf136730ccc2ecbb08350f44afff6413"
  },
  {
    "url": "assets/js/app.829cbe06.js",
    "revision": "8a55ef46d4cb2da3f3178de30a5cde28"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "9c63212fe571c94edef7536c41a04e02"
  },
  {
    "url": "contributing/index.html",
    "revision": "e5dcb7ffa02ade6810e341e6ae076bae"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "3f41b08bbcb354b5966d8f9646b2ba5d"
  },
  {
    "url": "examples/all-features.html",
    "revision": "7262cd527edc128cbc403e3efab0e6cc"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "58326b7eb83801470033a4e402d7c81d"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "6fcf6fe6e7c3f401d82d8b4e9965d38c"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "f253046019e1c19e7e1f4bd6f7ee09dc"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "4c28a9539a2c65fc98428e4c916e5517"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "f068bfc327612fc2cac0cff838237c9f"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "4c9d9a706b461a5d28b7025db2748c4b"
  },
  {
    "url": "examples/comments.html",
    "revision": "c5959adeeb34d879c9f17a0b83f8bb49"
  },
  {
    "url": "examples/each-with.html",
    "revision": "643623b0dd0bdc46d2efacde0ab0c9b7"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "8e1da9af9f87a086f93de997be38ea2f"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "246c6f0dd86f372a9e95a67df6aa70ef"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "b4448f5d91c04004339bb07ffa1fd457"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "27e861996c06f962d37af63c4992c0e5"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "c5479b200f98c4b2befcae64aab91ac5"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "fb8f2ce6cd4eade8d1f87e000ac457d4"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "54b5af1f17b71284e4ca74506ae535f9"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "0b05cd2ec8dafee8481844b1e6c84a8c"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "b649ef6455302130baf3e236154f01fe"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "0be20ef0b26e5a8381a70aab838d7a17"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "cd3e4ccd946f94e993dfe4924e9647b4"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "7b5dd0a25fedcc086c2fe7aca14853fb"
  },
  {
    "url": "examples/partials.html",
    "revision": "1ddae439f2d15063896070494c26d7f1"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "03dc724796cc52603e99b8780c8f0f95"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "d9244ff988bdfbef7ee55d01cb4a3559"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "f7120987a469bc659899575398ab54de"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "b163b0ec074db83913dd9a8e40991dc6"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "badfc8f699b0f91e9373b0c2f140d655"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "f8a1bef80240e4e581337b86d12d5b4c"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "ac0825be529dfc37fb33a0854f699386"
  },
  {
    "url": "guide/expressions.html",
    "revision": "8f9c44130564a7bc9b61426d143d537a"
  },
  {
    "url": "guide/index.html",
    "revision": "c79b00b01d3fe04c8a644edd95a14a71"
  },
  {
    "url": "guide/partials.html",
    "revision": "995d8db4a26f75af18b6eb1715998050"
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
    "revision": "7ad44d7d12197655d1b6c32572df7e0f"
  },
  {
    "url": "installation/index.html",
    "revision": "79ce2b3b1128888993b658450386fa2b"
  },
  {
    "url": "installation/integrations.html",
    "revision": "89b26a3df4de9c9a07408bfef79497b2"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "f2933a67e471d2bc9ce8937a3da6fafd"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "c68352a344ff3eff97a9580a6400d26f"
  },
  {
    "url": "playground.html",
    "revision": "948a9ab612998aba2574643f20ef0931"
  },
  {
    "url": "topics/attic.html",
    "revision": "889b308730d0c4f08852bf80153a9074"
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
