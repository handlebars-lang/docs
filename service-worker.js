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
    "revision": "231b03b755de30af1fbff1478eabdc1c"
  },
  {
    "url": "938eca982f9a6cfd3ce5.worker.js",
    "revision": "22c99f1a3f543f1203df19c5af4b85ef"
  },
  {
    "url": "api-reference/compilation.html",
    "revision": "7fd786d53cc4749ad9df05624784bb94"
  },
  {
    "url": "api-reference/data-variables.html",
    "revision": "374a3b0a4106863a3dcdd707fdf94961"
  },
  {
    "url": "api-reference/index.html",
    "revision": "539a78bccb80e8f2a3d57c1ed5524c41"
  },
  {
    "url": "api-reference/runtime.html",
    "revision": "ba9d22f2a24e418eaef43a4d0cae7e46"
  },
  {
    "url": "api-reference/utilities.html",
    "revision": "3fcb56514bb23736ccfad2c58e62110c"
  },
  {
    "url": "assets/css/0.styles.464e2d1b.css",
    "revision": "18f9f741735d0f86277d81b0ed15399f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e99aa2c6.js",
    "revision": "032490b34642fb15fe088a5447b96ae8"
  },
  {
    "url": "assets/js/10.092d3aa7.js",
    "revision": "cbf75e00a81c4d6bf999e84860c40a41"
  },
  {
    "url": "assets/js/11.cc5fe5b7.js",
    "revision": "0e7a6805be045b5862f9d254a906e63e"
  },
  {
    "url": "assets/js/12.501425ec.js",
    "revision": "510a0d09611176e149405f0ff99c7e9c"
  },
  {
    "url": "assets/js/13.33002e98.js",
    "revision": "04f37bd1aa09cc2d4ab638af29f4a447"
  },
  {
    "url": "assets/js/14.0b4240e9.js",
    "revision": "3dfff2bd46fab6b62bd77195b26442bf"
  },
  {
    "url": "assets/js/15.819599f7.js",
    "revision": "7082829337afd1b130deb6c1fc84ce06"
  },
  {
    "url": "assets/js/16.fe04632b.js",
    "revision": "5d1a1dc0e30f13edde596d9c63d68ec5"
  },
  {
    "url": "assets/js/17.eac41dfd.js",
    "revision": "3a67a541f1699563cb37555d802b1bfb"
  },
  {
    "url": "assets/js/18.c6a5b95e.js",
    "revision": "4d99fe2c229a0c00cf4fdb0cc2da56e1"
  },
  {
    "url": "assets/js/19.d4bcb3f1.js",
    "revision": "f594643fbe69d309a2bf7e4487f7d0d5"
  },
  {
    "url": "assets/js/2.a86a2690.js",
    "revision": "7236f2c8cdf75b160297ea0481928ddc"
  },
  {
    "url": "assets/js/20.1558aeb1.js",
    "revision": "7eda0cf5c2069c244b646f91b710e7e5"
  },
  {
    "url": "assets/js/21.1fa43d6b.js",
    "revision": "2064293e6b00aa28a418a0f745584ae7"
  },
  {
    "url": "assets/js/22.e771337a.js",
    "revision": "f3870b28f3a1d967f7ff8b4fa22875a0"
  },
  {
    "url": "assets/js/23.b47aa9f0.js",
    "revision": "f1cad32eb52eb4eeec3d0d5aa3b9fe23"
  },
  {
    "url": "assets/js/24.fd9f0911.js",
    "revision": "0d7e6e7f8b3fb7eec87a98f2a0fd9d34"
  },
  {
    "url": "assets/js/25.1e1d5c99.js",
    "revision": "bc53599369aa09d301a0a97bc08a797e"
  },
  {
    "url": "assets/js/26.f125edb8.js",
    "revision": "0322633861f49912adefd0a81f249af9"
  },
  {
    "url": "assets/js/27.328077b0.js",
    "revision": "0ca10d1e7d8e5e63136dca9d73e087ef"
  },
  {
    "url": "assets/js/28.afd874ff.js",
    "revision": "2037167b8b5ce67ef0261dbc398c3c19"
  },
  {
    "url": "assets/js/29.0f1ab6f3.js",
    "revision": "5777ff72b70499fcf9e20041b274c47a"
  },
  {
    "url": "assets/js/3.895c9e43.js",
    "revision": "ffe25c2f375ce8dd4832849eb6c0b8e3"
  },
  {
    "url": "assets/js/30.e95bbf2a.js",
    "revision": "1e976a36694fd14498552174205f729f"
  },
  {
    "url": "assets/js/31.24fc7456.js",
    "revision": "a89f5b580f042ceff23b318c89747ad2"
  },
  {
    "url": "assets/js/32.33657011.js",
    "revision": "08c578074c65cc7b60feb29575fe7f63"
  },
  {
    "url": "assets/js/33.2704cc79.js",
    "revision": "695e20738a24f64a2c5e7efa4b680c8b"
  },
  {
    "url": "assets/js/34.82a792f5.js",
    "revision": "fc4393468d8830c20705dda5e1bd29e8"
  },
  {
    "url": "assets/js/35.dbd962b4.js",
    "revision": "2696ff76ffe063de930b7ee4837464f9"
  },
  {
    "url": "assets/js/36.f4933b42.js",
    "revision": "9ed19afd9f95bad66e3a484db4e75f45"
  },
  {
    "url": "assets/js/37.21665022.js",
    "revision": "78f60930cab8a1f8f6ed390987a79928"
  },
  {
    "url": "assets/js/38.b5b05d75.js",
    "revision": "02daeb0f6b28ff6092e10cb414abfef1"
  },
  {
    "url": "assets/js/39.ad52e943.js",
    "revision": "bdac78a503e844f945c049009c754c65"
  },
  {
    "url": "assets/js/40.a22e79e4.js",
    "revision": "ae5f612e03623dd9cfac0329c9f65cd2"
  },
  {
    "url": "assets/js/41.9fc0c05d.js",
    "revision": "bf673691ef9bd3222c91e46060fca71f"
  },
  {
    "url": "assets/js/42.fe39bced.js",
    "revision": "8d39c971d1d95df6ec6ac368fbcb489f"
  },
  {
    "url": "assets/js/43.e1f85177.js",
    "revision": "993e4326b82e3a4dc8acd2a70b63f9dd"
  },
  {
    "url": "assets/js/44.92ccca75.js",
    "revision": "85a4d5bf50d6a8c369e4a8fe7ce8971a"
  },
  {
    "url": "assets/js/45.407e6b52.js",
    "revision": "f34e257abe8129ffbc90fdc7cd543b8e"
  },
  {
    "url": "assets/js/46.88badac1.js",
    "revision": "16966b9c97edd008bcd4b2f096a0d6ec"
  },
  {
    "url": "assets/js/47.5a210992.js",
    "revision": "73547c9d18593db801a620a7ceed2e36"
  },
  {
    "url": "assets/js/48.0e8af735.js",
    "revision": "630156410ba92da578f6728168f2c663"
  },
  {
    "url": "assets/js/49.1fec2bb4.js",
    "revision": "a6b106df77d80c71afe99114bb150ff8"
  },
  {
    "url": "assets/js/5.afddd489.js",
    "revision": "01b75a144b5d0c26c55a99cbec6387d5"
  },
  {
    "url": "assets/js/50.cff2b799.js",
    "revision": "24ef771ead705547cef9d5aa748967aa"
  },
  {
    "url": "assets/js/51.dd414444.js",
    "revision": "4a0e9ae97ce004f1ccb70df1f0e26522"
  },
  {
    "url": "assets/js/52.4736a97b.js",
    "revision": "f2a2ad3840c6dcd8e0471cc30dce00fc"
  },
  {
    "url": "assets/js/53.969c6007.js",
    "revision": "3d93e98a40c61ec4f903309623778038"
  },
  {
    "url": "assets/js/54.cb427dde.js",
    "revision": "26581529f935499c74e5e32ba3e391b2"
  },
  {
    "url": "assets/js/55.d26ec512.js",
    "revision": "91397fb6342818a2e9cc95c9f02cb067"
  },
  {
    "url": "assets/js/56.1317811f.js",
    "revision": "1b01ca8dab2002a14970e195ecfd9eaf"
  },
  {
    "url": "assets/js/57.42bd558c.js",
    "revision": "f67f46ccc4e1ec84c3fe1db2590ec3a2"
  },
  {
    "url": "assets/js/58.c386b18f.js",
    "revision": "4dc1ef81cbc5c80ebfc07bcd78dfc830"
  },
  {
    "url": "assets/js/59.1aa5754f.js",
    "revision": "4a12e690ec3effdfb8d21668edd84721"
  },
  {
    "url": "assets/js/6.c6d43a9e.js",
    "revision": "cb65146752de8b925c2ff34e0b5049ba"
  },
  {
    "url": "assets/js/60.62034329.js",
    "revision": "849c61d7aac6d74a2c4b02e46a0b9023"
  },
  {
    "url": "assets/js/61.46184a70.js",
    "revision": "608b6869af6da4d123eb1c09dd59d9d4"
  },
  {
    "url": "assets/js/62.84ec64ad.js",
    "revision": "90e0c289bb9413e7d0e31282c3192327"
  },
  {
    "url": "assets/js/63.4f74d24c.js",
    "revision": "f962762049fc2d46eb31a1c2fec1cc2c"
  },
  {
    "url": "assets/js/64.4544fed4.js",
    "revision": "6a6d937b04caed63407c4039db7113ce"
  },
  {
    "url": "assets/js/65.00fc2041.js",
    "revision": "16c6bcced40a0e2e03e7f26656284911"
  },
  {
    "url": "assets/js/66.3bb8ae99.js",
    "revision": "38aa3e9e3526b87f93aee5dfe2ea52ab"
  },
  {
    "url": "assets/js/67.aac287be.js",
    "revision": "1a1f71c2825c819ec48a1d6f7dcbabe2"
  },
  {
    "url": "assets/js/68.b595f05f.js",
    "revision": "b409dc4409d681d5e67ad2e202bc63e8"
  },
  {
    "url": "assets/js/69.b866498a.js",
    "revision": "71482758e99d0d51c13b9234e71efb01"
  },
  {
    "url": "assets/js/7.242d2460.js",
    "revision": "3da9c90430acfd8efcd960621de0e3f6"
  },
  {
    "url": "assets/js/70.ca9813c0.js",
    "revision": "ec82fe40f231ff1990a47b171855ea51"
  },
  {
    "url": "assets/js/71.ec55bb59.js",
    "revision": "b4dbd5f5be201a59af69b90e2edbd417"
  },
  {
    "url": "assets/js/72.70b582bb.js",
    "revision": "14d8f2cca3da6f006a2c69d4be07dd96"
  },
  {
    "url": "assets/js/73.c8538ab0.js",
    "revision": "7577c695f7d6680f9a7f24a26d3cb48f"
  },
  {
    "url": "assets/js/74.cc423455.js",
    "revision": "b89f17ab7e5869e57f61f22a015a08c3"
  },
  {
    "url": "assets/js/75.2b7baa4c.js",
    "revision": "a82a1d08033a750ad2050dad179f297c"
  },
  {
    "url": "assets/js/76.74bd6a58.js",
    "revision": "b915ef0ed528adf58f7b22da3a545df8"
  },
  {
    "url": "assets/js/77.572d9014.js",
    "revision": "e78a171edd864ab218cd2e413940875e"
  },
  {
    "url": "assets/js/78.1229364f.js",
    "revision": "9189fbb878d3fcebd6880cd7675411fa"
  },
  {
    "url": "assets/js/8.777dad60.js",
    "revision": "9aafa6974c2a9a308b4fef6864f0a264"
  },
  {
    "url": "assets/js/9.9b730ea0.js",
    "revision": "1d9949e96f1c534e7e7be8a2d421d2c7"
  },
  {
    "url": "assets/js/app.0e04b4dc.js",
    "revision": "4e43745e2cd1c4a574c0c1029a04070a"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "8e6b8b4c4bf7e3a9b30f58d22e07d291"
  },
  {
    "url": "contributing/index.html",
    "revision": "9c841f350cfb0be30a351e21b855b148"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "0613a2377e16027685150d9575494daf"
  },
  {
    "url": "examples/all-features.html",
    "revision": "68a2bde3b72d75d31dc7129c349ebc00"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "012812dc1df553cf5ad2df42337b1a68"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "d31d8d08a4f5dabd4c64921107f36f75"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "212bfca768deae5bb9a1d453dc38eced"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "48b8d56df32f1eb1f4ac5696f8751090"
  },
  {
    "url": "examples/builtin-helper-log-loglevel.html",
    "revision": "5d1c20c794cef714d338a628b084e486"
  },
  {
    "url": "examples/builtin-helper-log-multiple-params.html",
    "revision": "020558f747adf60c90bf2f944aed4a16"
  },
  {
    "url": "examples/builtin-helper-log.html",
    "revision": "296feae0b505d595d6f8816f44f8ac41"
  },
  {
    "url": "examples/builtin-helper-lookup-dynamic-property.html",
    "revision": "d3255b6b8153541c9d17585447642c81"
  },
  {
    "url": "examples/builtin-helper-lookup.html",
    "revision": "bc571469ff9244b4ec3de38965e4aacc"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "5b6af4abc86632677b358faa35614404"
  },
  {
    "url": "examples/builtin-helper-with-block-param.html",
    "revision": "2150466a350533e34975557b4622a049"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "ed8e6d3d7a48dfb82da6539087d675db"
  },
  {
    "url": "examples/builtin-helper-with-else.html",
    "revision": "199d92ec1c16d7985d8c091d1d12fa56"
  },
  {
    "url": "examples/comments.html",
    "revision": "9ac642b2d49469d92645705cbc92624f"
  },
  {
    "url": "examples/each-with.html",
    "revision": "f5d32c975a013ef6ccd3516255d632cf"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "8dc1ca461dbce8ab3e3bd90a266a4b4e"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "79ca7db0e3d08bea4c462c2896c0e368"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "54e271e500656751b3a3cf94a6c68cf0"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "161ad1c2149b3129f79a24c4d9e715cd"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "b12a4f57db0c5ba321130da439c27797"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "be9bcb8e878fc3275787690b94f0213f"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "2c624ef191609659c51f2bd142ffd97d"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "e9c84b896e0ecdf1425eb74328831c7f"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "f769eb2c3bd385492ee0d6bb596f1a14"
  },
  {
    "url": "examples/hook-block-helper-missing-default.html",
    "revision": "e7ea0ac1ecde2440fec33a9028e8e78c"
  },
  {
    "url": "examples/hook-block-helper-missing.html",
    "revision": "54b14aa9309ea43cd50326f3554bebce"
  },
  {
    "url": "examples/hook-helper-missing-default-no-param.html",
    "revision": "16f2d523cecd2a6bd41277a4c8245e90"
  },
  {
    "url": "examples/hook-helper-missing-default-param.html",
    "revision": "41c486e9ef58efa0b24e9dfc70152f74"
  },
  {
    "url": "examples/hook-helper-missing.html",
    "revision": "6fd8b8f88f4dbfbaa019490a87248672"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "34bffcd893e171136a40e3863d81636c"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "5c815e2fa8506709dd7f5da3650a0ac8"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "35d45a562d7c6318e157349c0fb43cac"
  },
  {
    "url": "examples/partials.html",
    "revision": "220d3226575c3d1e8bbd7b6a85df837b"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "d0fefc067b3b966ff710d4e76e576034"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "e72efa4e14f4157b88a3d52ce29f7b94"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "84cffe680c045d098b6fef000383acf8"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "5724c7005c82c8340efac2bc037b6a6a"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "46ac8cf95815327c9ba250140dd7b6cb"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "a69d888abd40f380e0960328eb86c4fc"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "bc561723d48d7bacd22ed13c6a9aeade"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "2fff54ee5ee3eda52a550b7df4223d69"
  },
  {
    "url": "guide/expressions.html",
    "revision": "7709b097eb38c344355bc3465ab45ca4"
  },
  {
    "url": "guide/hooks.html",
    "revision": "e0faf50f9f3a4c2d7f7eb1b5c705f742"
  },
  {
    "url": "guide/index.html",
    "revision": "ad79f461df2b7db3cd17f2adb683bfd8"
  },
  {
    "url": "guide/partials.html",
    "revision": "32fc77b702484ef0c11c60ef8a1720f2"
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
    "revision": "4945790fca171ab41bc1917cdb9060af"
  },
  {
    "url": "installation/index.html",
    "revision": "fc8a51a759dd2e4e9faa12e0a0d1c832"
  },
  {
    "url": "installation/integrations.html",
    "revision": "0f2947f5cf64dd110c9abc69800f0de1"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "9b64e5fddae5a000bdbaaf7c6c168aa5"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "d4a3873c85af5c2ddff3cfaee8d78a85"
  },
  {
    "url": "playground.html",
    "revision": "04956f4094d934f971d62a2c6e4a9dfa"
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
