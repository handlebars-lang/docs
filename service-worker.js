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
    "revision": "89e2602bc55e25074e8e0bfed22c963e"
  },
  {
    "url": "938eca982f9a6cfd3ce5.worker.js",
    "revision": "22c99f1a3f543f1203df19c5af4b85ef"
  },
  {
    "url": "api-reference/compilation.html",
    "revision": "716f3f8427469b46f33e7318f7bbdee5"
  },
  {
    "url": "api-reference/data-variables.html",
    "revision": "309292ab0bf70e9b2cacb97363f48618"
  },
  {
    "url": "api-reference/index.html",
    "revision": "2210c29a80f5fc9424840f90dd0e63f8"
  },
  {
    "url": "api-reference/runtime.html",
    "revision": "686d12cda3a83614e08a7de43503443f"
  },
  {
    "url": "api-reference/utilities.html",
    "revision": "bdb2fd753b87973e8a032b61f9c6738b"
  },
  {
    "url": "assets/css/0.styles.6512d0a7.css",
    "revision": "abe3369dc0513c8724e2c9c556bf23dd"
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
    "url": "assets/js/25.c44ea851.js",
    "revision": "eb6ad93ad52904ab5eb328f453cd52b1"
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
    "url": "assets/js/32.db75f7eb.js",
    "revision": "e140beb518ce6630ed98a4187634569e"
  },
  {
    "url": "assets/js/33.363010ad.js",
    "revision": "9d6b9da3060f33853183f10b5872c485"
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
    "url": "assets/js/64.fcbd4f7d.js",
    "revision": "4b8bb78f5af9628559f14f80b24a88c3"
  },
  {
    "url": "assets/js/65.35064330.js",
    "revision": "d004cfd94db1417fe8515a2bab175140"
  },
  {
    "url": "assets/js/66.3bb8ae99.js",
    "revision": "38aa3e9e3526b87f93aee5dfe2ea52ab"
  },
  {
    "url": "assets/js/67.362107cd.js",
    "revision": "9720a567d92139e7cee4abef04583e83"
  },
  {
    "url": "assets/js/68.03d994d9.js",
    "revision": "a225e1cac099d7624923af4e1e88a350"
  },
  {
    "url": "assets/js/69.e2fc0dcf.js",
    "revision": "bb2facea96336be9ca3087ae9add95cb"
  },
  {
    "url": "assets/js/7.242d2460.js",
    "revision": "3da9c90430acfd8efcd960621de0e3f6"
  },
  {
    "url": "assets/js/70.058ee6a3.js",
    "revision": "7fd1cb42b63275b73e79ded844953709"
  },
  {
    "url": "assets/js/71.03f6f8ee.js",
    "revision": "f794feb4aa0f180efcaf89b28007b92f"
  },
  {
    "url": "assets/js/72.29d68244.js",
    "revision": "48c62f8a90e89dad77fc95226832f947"
  },
  {
    "url": "assets/js/73.cba9db5b.js",
    "revision": "dbd439e2b94d80916603e960815f6ddd"
  },
  {
    "url": "assets/js/74.12fa6093.js",
    "revision": "96746280a4e0f2c2c566d3022e0b2a9a"
  },
  {
    "url": "assets/js/75.4cf25fd1.js",
    "revision": "16efcaa0b2d433e766f0196dec6da13f"
  },
  {
    "url": "assets/js/76.3edb1d3f.js",
    "revision": "8002d1c66917848fb74776ab58ca2f51"
  },
  {
    "url": "assets/js/77.e4bca72d.js",
    "revision": "cd2c93c8bfabc6d45dbdcf52478d1dea"
  },
  {
    "url": "assets/js/78.1229364f.js",
    "revision": "9189fbb878d3fcebd6880cd7675411fa"
  },
  {
    "url": "assets/js/8.2faadc8f.js",
    "revision": "9aafa6974c2a9a308b4fef6864f0a264"
  },
  {
    "url": "assets/js/9.9b730ea0.js",
    "revision": "1d9949e96f1c534e7e7be8a2d421d2c7"
  },
  {
    "url": "assets/js/app.f616dd40.js",
    "revision": "93af2dba21a038ff622e757a84a3c4ae"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "3644c065b8c25d9bea4c90c67f2b4f45"
  },
  {
    "url": "contributing/index.html",
    "revision": "e32c4fa3de891ac4088447a62c3b4d21"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "021cc3f4dca2c9a78a3ff1af83c22c5d"
  },
  {
    "url": "examples/all-features.html",
    "revision": "65e9a83a342eab0b03cd5c66ece5a1c0"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "cdf36d8da39be1bf2ba014b755f642cd"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "36dc35ddd1fa2049b5dbc1f47ed5e819"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "20e33e518ddb25e7eedbabfe018fafb8"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "cc28b6f35b67bb015b60d6ae15d5ad7d"
  },
  {
    "url": "examples/builtin-helper-log-loglevel.html",
    "revision": "4e0b6028bd3ffae1987ff4feaa0f8961"
  },
  {
    "url": "examples/builtin-helper-log-multiple-params.html",
    "revision": "79246215d33c56f42b60be83d0778eb1"
  },
  {
    "url": "examples/builtin-helper-log.html",
    "revision": "5da994850e7975c93ff53b262a12d6b8"
  },
  {
    "url": "examples/builtin-helper-lookup-dynamic-property.html",
    "revision": "1af21191258733c06f136ef7bd86af68"
  },
  {
    "url": "examples/builtin-helper-lookup.html",
    "revision": "9038af7888d49b60357279d3d6958b18"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "860497d5f5c5e23a93e26209cd808604"
  },
  {
    "url": "examples/builtin-helper-with-block-param.html",
    "revision": "511785ea16828414832c0ca2e6131338"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "7b24584fbc71a67a871b209522c40cc6"
  },
  {
    "url": "examples/builtin-helper-with-else.html",
    "revision": "48f4d3874b88ff3766938d33df911989"
  },
  {
    "url": "examples/comments.html",
    "revision": "d6aec86f385a88d5dbb30f2cb1cce684"
  },
  {
    "url": "examples/each-with.html",
    "revision": "39df0a78212b73a29cbd6e0cf5f8374b"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "8180a5dcf064f704e2842ab84de711ba"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "ff86ceef1cacc55cafb2a05795683d2e"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "b2579581b0c3493a30e24f8f07da7898"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "392ea7da261d62954b0021c208182ece"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "19622fcb640e92aa84842a70cc346558"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "d480f9326980f7c256470f385fc97ea4"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "0c1492f4a2029255e41f65bbe4208e52"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "22c472b9c43090800f23659ef1bd24ca"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "6360fccb9d017cc7cdec00048fb4ac0e"
  },
  {
    "url": "examples/hook-block-helper-missing-default.html",
    "revision": "4220c5f33636db7561afe55b77b3c7ac"
  },
  {
    "url": "examples/hook-block-helper-missing.html",
    "revision": "c1992a1e033f168e2f65262186c761f4"
  },
  {
    "url": "examples/hook-helper-missing-default-no-param.html",
    "revision": "010eebbddf979341716ef1ee0f65748f"
  },
  {
    "url": "examples/hook-helper-missing-default-param.html",
    "revision": "17b2ad5001dbfb0aba876cc7e1ffe4f4"
  },
  {
    "url": "examples/hook-helper-missing.html",
    "revision": "28a8fe9dba466fdd899f2f890d4a6c09"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "25fd2075ea0adf6181ebab37502ce537"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "38c1ce2022bac95ff3a07ec0010e996e"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "eb3f4ed7bbf52e421a8574d3b0771487"
  },
  {
    "url": "examples/partials.html",
    "revision": "fdfe6339250fad422447f214594385a3"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "6fa4a9aa55e57d12f7237c3723064e72"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "c574e146724825d9744b95b3846d1e38"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "0ec2433ba32d754e244897ccf1ce3a84"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "df05f63a518efcdbabe9357d16a702e9"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "09af70f81a264c214c66c50700f21c4f"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "1d72bb9c5430eaa7ec48cdb1ec0bf6a1"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "96b05d6fc08431dbaffe94823b6d4ed6"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "549e7f6c5f0cbf4bc146b10dc8b857f2"
  },
  {
    "url": "guide/expressions.html",
    "revision": "0c9c3e254a2a5dd35fe69e77cd2a164e"
  },
  {
    "url": "guide/hooks.html",
    "revision": "686c45884e9a42f14788fb369f555bab"
  },
  {
    "url": "guide/index.html",
    "revision": "70ccdb7048b2a02f5ac1580dda70e927"
  },
  {
    "url": "guide/partials.html",
    "revision": "16c350f5b33b9be751647518db3f8143"
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
    "revision": "c25936f800ee59e05d901475377c3e3c"
  },
  {
    "url": "installation/index.html",
    "revision": "d3ee174cb9ce444f545665d1a567521a"
  },
  {
    "url": "installation/integrations.html",
    "revision": "f49a6af35e490995c775170f4bcefbfc"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "5c6087b015fd39b92c6166436231c518"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "46c6e263060818b9e4a7e7854ff15027"
  },
  {
    "url": "playground.html",
    "revision": "aa07717e0e47799472eda2ca717999a9"
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
