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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c6ffa7617ccb4a7fcd934bfb73984afb"
  },
  {
    "url": "assets/css/0.styles.2958be86.css",
    "revision": "17c3a95830064aac40c9657b089042a0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.00fba550.js",
    "revision": "120e4566f02209a5d330fa1ac7e7acf1"
  },
  {
    "url": "assets/js/10.6ae053a8.js",
    "revision": "ed3453d59887fd5315938982a3c1232d"
  },
  {
    "url": "assets/js/11.f40f8685.js",
    "revision": "322d499a91f58a0939b88c2a4bd483e4"
  },
  {
    "url": "assets/js/12.fe7b76ba.js",
    "revision": "b9696a3ba9177a8533301820a6fdd1ad"
  },
  {
    "url": "assets/js/13.1d719384.js",
    "revision": "168c82728601029ed5ff03f010892f78"
  },
  {
    "url": "assets/js/14.47c71e67.js",
    "revision": "8c89fec36789a203225f235aafbe1587"
  },
  {
    "url": "assets/js/15.f0554e3d.js",
    "revision": "1d36c30a9159aeb52f83f3b77be98e0f"
  },
  {
    "url": "assets/js/16.10602449.js",
    "revision": "466e931b8ee0ac9d2bc501996473668a"
  },
  {
    "url": "assets/js/17.4fa3b8b0.js",
    "revision": "6b1f22091a5ea0143a7f9ae815a3580c"
  },
  {
    "url": "assets/js/18.22bcf305.js",
    "revision": "8adbb598f38cf3f7a27bc207dea791f2"
  },
  {
    "url": "assets/js/19.96c14ac4.js",
    "revision": "274ae88f22a98605a7971193ce8ccc79"
  },
  {
    "url": "assets/js/2.3d110704.js",
    "revision": "ab827182036aed61e7d903134a10c8cd"
  },
  {
    "url": "assets/js/20.237816be.js",
    "revision": "9f42e3eb69bee44db1b510d497e4b745"
  },
  {
    "url": "assets/js/21.6fd19380.js",
    "revision": "afee0b92422664a3c6991e091f756ecc"
  },
  {
    "url": "assets/js/22.0a834618.js",
    "revision": "1acf6cfa56a318039949ca22dec00c58"
  },
  {
    "url": "assets/js/23.e9fbbe84.js",
    "revision": "72780d0de89e03f65b399ee5674136de"
  },
  {
    "url": "assets/js/24.9aa9ee22.js",
    "revision": "178f719b7c1d48e9308d0ad743d6f1e3"
  },
  {
    "url": "assets/js/25.05fefd43.js",
    "revision": "175fe9fa4e32bce180b25235b21e3bd2"
  },
  {
    "url": "assets/js/26.ee112f83.js",
    "revision": "11cba1c2b49a87e4a76ea51ef8abcb67"
  },
  {
    "url": "assets/js/27.2c56e8a5.js",
    "revision": "3855bf99601e42e7f963a9d88cc72524"
  },
  {
    "url": "assets/js/28.eac7ca76.js",
    "revision": "1d6436be57fa1ef842706708221c4c55"
  },
  {
    "url": "assets/js/29.89e6b014.js",
    "revision": "7d32aa488478ab12ce6aa0d3d4929414"
  },
  {
    "url": "assets/js/3.60c7a91d.js",
    "revision": "24fe01881e12aff26e4ee1ae52b5d13d"
  },
  {
    "url": "assets/js/30.1b51e5d0.js",
    "revision": "7c52bbd810a69cf8cf73ab0f8f6bf7f9"
  },
  {
    "url": "assets/js/31.90eb574d.js",
    "revision": "76674c6c285d3ff24f1c7d631e279adf"
  },
  {
    "url": "assets/js/32.4c4daf1c.js",
    "revision": "0a1c82ef24b5b9980139c12083654b91"
  },
  {
    "url": "assets/js/33.8f65053b.js",
    "revision": "6f903a93af58c875011d72005d79b4dc"
  },
  {
    "url": "assets/js/34.47d2311b.js",
    "revision": "289da4550e581f006b1c5a1c32225148"
  },
  {
    "url": "assets/js/35.ba485cc6.js",
    "revision": "9c47514c045f389a247bc420d7083cc5"
  },
  {
    "url": "assets/js/36.02560427.js",
    "revision": "b8ded60c356d87b7dafe81862a20c841"
  },
  {
    "url": "assets/js/37.0b4968ce.js",
    "revision": "fc5af84d3137d732f36e3196eb0ed476"
  },
  {
    "url": "assets/js/38.3168b8b2.js",
    "revision": "e1eb877cd1f180536cc12bbace7cec3c"
  },
  {
    "url": "assets/js/39.71dd26af.js",
    "revision": "c4f683bdc0b90135b96b484509860abe"
  },
  {
    "url": "assets/js/40.aeecd7f8.js",
    "revision": "8471ea56757df34356bac19578cdf791"
  },
  {
    "url": "assets/js/41.ccce76dd.js",
    "revision": "dcff5ec31603525fa7eb87367f01c450"
  },
  {
    "url": "assets/js/42.db636e01.js",
    "revision": "dfe5ff8c3835cdf0e1ebabb2891d7c3d"
  },
  {
    "url": "assets/js/43.500801aa.js",
    "revision": "eeb84793ac2536a8be9e5312f77d1702"
  },
  {
    "url": "assets/js/44.c99d5661.js",
    "revision": "070b0cd12d2d5dc3abdabd3664cdd0c9"
  },
  {
    "url": "assets/js/45.5a980036.js",
    "revision": "74330ad3d4bdbb9d4346284e75f3ae77"
  },
  {
    "url": "assets/js/5.4755613b.js",
    "revision": "fca8e68808b8305d66cfcb8c5f3c9873"
  },
  {
    "url": "assets/js/6.175c3a94.js",
    "revision": "7a2f285e0b4643c3daa3d724b3dec2e4"
  },
  {
    "url": "assets/js/7.42674cb8.js",
    "revision": "2268cc36f058d6dc2b1714e669c3b8f4"
  },
  {
    "url": "assets/js/8.44726f5e.js",
    "revision": "81aa7a3bbad5012181375b21f7f38d1e"
  },
  {
    "url": "assets/js/9.34f21c7a.js",
    "revision": "545464008162adb816636a80b40c0bd2"
  },
  {
    "url": "assets/js/app.17bc812c.js",
    "revision": "180008681882f779b30ec7efd9380310"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "47add871a9c43ab889b4bcba05f810c9"
  },
  {
    "url": "contributing/index.html",
    "revision": "31f0459ce56c5ba1519a9018a686d75e"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "30fe6c9556cc603609faa6c0747742ea"
  },
  {
    "url": "examples/all-features.html",
    "revision": "06bc8997ae4d6a336a6088a5ff6d7061"
  },
  {
    "url": "examples/comments.html",
    "revision": "df89cde7bc6c831878ff1a0298193279"
  },
  {
    "url": "examples/each-with.html",
    "revision": "b650cbbcdbfc8f8b11d45b139b553979"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "2dfe2844f8e61e90a6fe7a045f68237b"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "89d6e6dbac4b959e17470920b3df3e68"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "2d75672ad98f0f9c438c3487048bfcaa"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "01b5a04c96ca547a0021fa7e57a4977a"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "7ff2ce9da16fb22b89ce63094215771b"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "a4b28f7f3dbe3373cab878e463aa1e92"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "caa81a4d00ac6810e002e9e9f4ef86a0"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "73b01029b409f870c6db845f7426fd74"
  },
  {
    "url": "examples/partials.html",
    "revision": "f6f04dfd1203bcbae3d3083d9a68ed10"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "7660e1e1ce6f14473115d63e71dd4b78"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "3a005d5d7778512c0840e6b0145db8f1"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "624a68a5fa12dd62b7964b58a27cafaf"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "cabd7d730838a62f7d04c0b0bdbd2995"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "8bafeb9f1ce1fc7afe06249d64d2068d"
  },
  {
    "url": "guide/api-reference.html",
    "revision": "3b6713825ced9133411177668f21ee79"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "053e9106e5b2ef3af4336c276a002589"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "f7e49ad36da96c951df7da5660ae3817"
  },
  {
    "url": "guide/decorators.html",
    "revision": "fc7e5b8bdac080c09e9a8d6e62c588c5"
  },
  {
    "url": "guide/execution.html",
    "revision": "502ff8841ba49b3967f01da3e7a21739"
  },
  {
    "url": "guide/expressions.html",
    "revision": "97a9d7d93d1042af3ceda2c60913be26"
  },
  {
    "url": "guide/index.html",
    "revision": "f8f72903946fc535c57be86e81acf464"
  },
  {
    "url": "guide/installation.html",
    "revision": "c47621ecf6d8a8baf98794c435f16b7e"
  },
  {
    "url": "guide/partials.html",
    "revision": "7f8792c42ca93d7fc8176cb017049e5c"
  },
  {
    "url": "guide/precompilation.html",
    "revision": "aef3560f6c8ba159135be8a86a567841"
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
    "revision": "f26b2762fadfa9113cb2fd0b0e86d385"
  },
  {
    "url": "topics/installation.html",
    "revision": "5fb8022a93e64f85f66e6ecb82a01155"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
