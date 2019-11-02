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
    "revision": "8dadb14d432a72cb67d9902e667d7fb6"
  },
  {
    "url": "938eca982f9a6cfd3ce5.worker.js",
    "revision": "22c99f1a3f543f1203df19c5af4b85ef"
  },
  {
    "url": "api-reference/compilation.html",
    "revision": "20fe1f9fe149c72c6131c06ec2620238"
  },
  {
    "url": "api-reference/data-variables.html",
    "revision": "09c81705d08bb9d412ba50d446e2375c"
  },
  {
    "url": "api-reference/index.html",
    "revision": "5fff90416b224063b1c0b20a2a29f806"
  },
  {
    "url": "api-reference/runtime.html",
    "revision": "800028323dc8498bc0451a6e2bfc4343"
  },
  {
    "url": "api-reference/utilities.html",
    "revision": "f1d25f5cf44a5b9601067953e41969b7"
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
    "url": "assets/js/45.faf4fda6.js",
    "revision": "76b35e5bed07b82f635c66c6a5f17a2b"
  },
  {
    "url": "assets/js/46.4d928301.js",
    "revision": "f841f45905475314af933b704dfa1279"
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
    "url": "assets/js/65.d4406c32.js",
    "revision": "298c5aba982cf4b46e05265a35616af8"
  },
  {
    "url": "assets/js/66.ecca8310.js",
    "revision": "92c9bee17f7832cbbaefb8a9215ec8c9"
  },
  {
    "url": "assets/js/67.04f92cd7.js",
    "revision": "740dd6375091a68be8b806cf62bef57f"
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
    "url": "assets/js/8.777dad60.js",
    "revision": "9aafa6974c2a9a308b4fef6864f0a264"
  },
  {
    "url": "assets/js/9.9b730ea0.js",
    "revision": "1d9949e96f1c534e7e7be8a2d421d2c7"
  },
  {
    "url": "assets/js/app.2d6cee6c.js",
    "revision": "3c6f0287e2743f32946d071447284842"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "a25d191f65b4e508fe0449b9074d81ae"
  },
  {
    "url": "contributing/index.html",
    "revision": "4899542e00bb5f31e87c4571db6dd660"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "ed00271cff89cb57191493a5edccb3e6"
  },
  {
    "url": "examples/all-features.html",
    "revision": "cad031cbb2f6b397f4d4c47dc78f3134"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "b418cd2414c0077c2ccc755f50958b3b"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "2ab474eac437b2f436cd4fdf25faa8e7"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "4a28d365b8ecef7ff8ded49d5d90aa65"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "fc7ada58695d6f56392e4cc77481d1c3"
  },
  {
    "url": "examples/builtin-helper-log-loglevel.html",
    "revision": "f73bea29a729755f89015796f139de69"
  },
  {
    "url": "examples/builtin-helper-log-multiple-params.html",
    "revision": "3ed20745b3a4b6c9aabc4a18f0067303"
  },
  {
    "url": "examples/builtin-helper-log.html",
    "revision": "36dc4ebf93e31bd5775be8efde7e8ba9"
  },
  {
    "url": "examples/builtin-helper-lookup-dynamic-property.html",
    "revision": "75afe1430c2a2b9fe6f05e6a2614f37e"
  },
  {
    "url": "examples/builtin-helper-lookup.html",
    "revision": "524572dd4b6b992659cd5c72789e3d5e"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "62256041ff022649d382a377faf42760"
  },
  {
    "url": "examples/builtin-helper-with-block-param.html",
    "revision": "9347407b5386cad7432ee327c473e373"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "d8be3a1ba5b9cbd5a5c28c61d97c4cbd"
  },
  {
    "url": "examples/builtin-helper-with-else.html",
    "revision": "ae0c606fa4fe1502e4c887a354ae0378"
  },
  {
    "url": "examples/comments.html",
    "revision": "f5b87e50d6a4fa8d24c705c74c06ff02"
  },
  {
    "url": "examples/each-with.html",
    "revision": "418547b127027717decbed6201ff8cdc"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "fc12d4d3e64ec49f5f659fc92d899c5b"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "20de7074c769440f4567dd756163178a"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "71da5be9b9b24e06f25184a883f2a999"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "e2ab09728ee198148dd91e4b3b745bf7"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "a40fce451ee938c446d46912f38493dd"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "9ed40fd17d785530f8386c4ac3cbd86b"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "bbf370542b78c970d4fa52ff77330f82"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "eefa17e2ea95bc0d298eb785bd6d29bb"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "df0562611618ae2560ef7da22ba40199"
  },
  {
    "url": "examples/hook-block-helper-missing-default.html",
    "revision": "0c28b73b158e41299480db743cb454ce"
  },
  {
    "url": "examples/hook-block-helper-missing.html",
    "revision": "010e9b54a32a7f402d06860465147ff3"
  },
  {
    "url": "examples/hook-helper-missing-default-no-param.html",
    "revision": "95f969e9355b6ae15ee0f163be16806c"
  },
  {
    "url": "examples/hook-helper-missing-default-param.html",
    "revision": "6b282254f2842b13bbe02a2b6a76ff64"
  },
  {
    "url": "examples/hook-helper-missing.html",
    "revision": "7254241873ccf0ddaa3bb71e31e7185b"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "6479f58c78e4aa01182c66bded4e52c5"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "11f1b00e9d7c2851b8aa25b45e3e2967"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "09e0dbcce22d3f860ac65b5ef88b4c3a"
  },
  {
    "url": "examples/partials.html",
    "revision": "d70ea7aa052ab46e8283b93fcb083daf"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "4f4c444cc747fc54162b35e5500a7f4a"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "bd603f11bb3c68e6716730759f192906"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "47c682da0e3a0859d8bd650fd77121fa"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "02265bc2b4fec8957cc12a7961674ba5"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "8e035422bb89ba1e822cfff12286f6e5"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "0f1c18296c1e6837295d38c56a9c434b"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "d116ec0ea25cf631552a593fe459cbf8"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "6ae22862c6c5293fac85900df78c09ac"
  },
  {
    "url": "guide/expressions.html",
    "revision": "e7d6ad5bdd5acaedc07f8702c8d9e950"
  },
  {
    "url": "guide/hooks.html",
    "revision": "27f1734136cd7675f44cdea50a4bf5ad"
  },
  {
    "url": "guide/index.html",
    "revision": "1265bd27361e6e6918f3aaf44b126fa8"
  },
  {
    "url": "guide/partials.html",
    "revision": "b63366fd6c10dc6daf39e8fc295fe3e3"
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
    "revision": "9d277fcf62cffa00a4c5f237525b0b81"
  },
  {
    "url": "installation/index.html",
    "revision": "d67bd828805fcfd0a135e488569ea569"
  },
  {
    "url": "installation/integrations.html",
    "revision": "670bbc9951588779f3e892e512fc83a1"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "eb4ac56ba6d651cfefd9b0b7b5fd74bd"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "2aaa6f18f749925aa83fd17d81618a08"
  },
  {
    "url": "playground.html",
    "revision": "4943fb73a8101e337810b51880f942ea"
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
