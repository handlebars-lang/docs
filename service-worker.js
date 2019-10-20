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
    "revision": "ada35470bccb133272d65117ed6bf8e4"
  },
  {
    "url": "api-reference/index.html",
    "revision": "6c32f65efeeda98b0f6b65a1db304a7f"
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
    "url": "assets/js/16.f0b3cedd.js",
    "revision": "c852648f1454e3f4646058ca5f05dcd8"
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
    "url": "assets/js/47.d6a34ab6.js",
    "revision": "22f4648a00f61a6411269f083a075acf"
  },
  {
    "url": "assets/js/48.a741c650.js",
    "revision": "bf1c3169f12b42d11fddca799f5d234f"
  },
  {
    "url": "assets/js/49.5aa7c1d5.js",
    "revision": "3937fa9967a63af2384e39cf5ad8e082"
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
    "url": "assets/js/58.66c052ac.js",
    "revision": "aa4eec85938b242bc5a42df0b2bb04ce"
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
    "url": "assets/js/app.9cd9e1ab.js",
    "revision": "ecaaebb27b757415cd19497b16ca3d5c"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "bb4dfd829d546d047a313ef9bd1a1590"
  },
  {
    "url": "contributing/index.html",
    "revision": "2c6642ba5174730c90cdae22cbeb8cd1"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "2ea73bde004104a31cbc16c3809106ce"
  },
  {
    "url": "examples/all-features.html",
    "revision": "70ed8b77753c0b850526285abdd38431"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "cab98bc6f969de57203402fe1d378fb1"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "2c056eaef2f32f4da06f77370a55e444"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "d75e736d04e79770286c1ed0d1d14a88"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "d7fd81d758796a64ceba0e29cc22f8d3"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "dba0a85ed31b079731a39f7688f3799a"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "b9aa01615dd080a7a3459921ba18cfc4"
  },
  {
    "url": "examples/comments.html",
    "revision": "c29f3bcdf4dc0d5dafb92c108f0dd739"
  },
  {
    "url": "examples/each-with.html",
    "revision": "61358978d29a209f3c5c8759a32bf7d6"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "680bd067c9d3a718cb8a974e6e535f7d"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "60d384e54247b95c759146c9c79bb617"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "94f0352cdb25ce4cf0699ba2ccd506b0"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "354dee9bf1aa7604cb6839bf312143ab"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "29c74219bd6794a8acae85b96f57b0f8"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "7f3aa4a6fed13e02f32627c04c2ba7cb"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "c50cef3da8c1d452b6bb81a1fcf7a491"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "f9dad12b0ff0beb01face28619a68a32"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "5fc505a27e52879211286c42c046a428"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "54cc76835ece5f918bb4bb1d61010781"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "28b8d6a6117dba961929a155654d324e"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "74cc8db8e012349939ac8509edb23bf9"
  },
  {
    "url": "examples/partials.html",
    "revision": "699ab5e8aec1be645968c2ddf550ff5b"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "1270435609a19c1fcc01a1f4f196b04e"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "84eae213420ee223b4a91e760b6db564"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "55f9e749f57976d2a6e821ac3de1aad7"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "293379ab7e7e8a49e03915daa8370dd2"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "de834b25869e619fda5a473925d78e34"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "5568ebb337814162b10e6c55ebdaf32e"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "e26527ed0bfbb9c1433c66e7d8bf0ed9"
  },
  {
    "url": "guide/expressions.html",
    "revision": "827765683a8074dd22958e93fcb92e35"
  },
  {
    "url": "guide/index.html",
    "revision": "69c66a6930887b9f620c9e36237a0224"
  },
  {
    "url": "guide/partials.html",
    "revision": "cde094f89d93d1579333537892b61459"
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
    "revision": "285cc637c4fd010e469f189a6c977b7a"
  },
  {
    "url": "installation/index.html",
    "revision": "c0008346e8645256c6306273cc3d06ce"
  },
  {
    "url": "installation/integrations.html",
    "revision": "52b5351c177f76a6db7f8015e7bfcea0"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "e327f528f3a6c13253d847c0f3474f85"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "bbb88a40decb3e716b6d291f16638b8b"
  },
  {
    "url": "playground.html",
    "revision": "37a17eb407ba82ab9d3a68cde7cd54aa"
  },
  {
    "url": "topics/attic.html",
    "revision": "243dd79f7508ac54c7502a17e3c3fa33"
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
