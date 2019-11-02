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
    "revision": "bcaa149de0b967cfc7052184d0c53844"
  },
  {
    "url": "938eca982f9a6cfd3ce5.worker.js",
    "revision": "22c99f1a3f543f1203df19c5af4b85ef"
  },
  {
    "url": "api-reference/compilation.html",
    "revision": "4d939df2e8ae7ccf5164d6f908538b54"
  },
  {
    "url": "api-reference/data-variables.html",
    "revision": "8a8f459e79e21101e854610ea531b6c7"
  },
  {
    "url": "api-reference/index.html",
    "revision": "759287be6f553d89c9a64700eb708ebb"
  },
  {
    "url": "api-reference/runtime.html",
    "revision": "92c552b94f052c0741383a34c617f19b"
  },
  {
    "url": "api-reference/utilities.html",
    "revision": "efa10816962c014d369f68b912fc20b9"
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
    "url": "assets/js/13.ca46c829.js",
    "revision": "c5e78a1bb5714117d9ae17f99c59f661"
  },
  {
    "url": "assets/js/14.2c12ceb9.js",
    "revision": "0ccbde9119aef9ab3365b571e0a0bbec"
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
    "url": "assets/js/25.b05647fe.js",
    "revision": "95918011b1db89b5c5d400c8a5fcd0bb"
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
    "url": "assets/js/51.67ac4356.js",
    "revision": "4a0e9ae97ce004f1ccb70df1f0e26522"
  },
  {
    "url": "assets/js/52.62b26924.js",
    "revision": "f2a2ad3840c6dcd8e0471cc30dce00fc"
  },
  {
    "url": "assets/js/53.ad3e53fe.js",
    "revision": "3d93e98a40c61ec4f903309623778038"
  },
  {
    "url": "assets/js/54.1f765c83.js",
    "revision": "60a62f568cc782237f89c0cef65cb53f"
  },
  {
    "url": "assets/js/55.72338b0e.js",
    "revision": "91397fb6342818a2e9cc95c9f02cb067"
  },
  {
    "url": "assets/js/56.532d78ee.js",
    "revision": "1b01ca8dab2002a14970e195ecfd9eaf"
  },
  {
    "url": "assets/js/57.a470cfc2.js",
    "revision": "f67f46ccc4e1ec84c3fe1db2590ec3a2"
  },
  {
    "url": "assets/js/58.a0be0958.js",
    "revision": "4dc1ef81cbc5c80ebfc07bcd78dfc830"
  },
  {
    "url": "assets/js/59.bc07e97c.js",
    "revision": "b3517ff7c34d1e36421b917e99e8351f"
  },
  {
    "url": "assets/js/6.c6d43a9e.js",
    "revision": "cb65146752de8b925c2ff34e0b5049ba"
  },
  {
    "url": "assets/js/60.12e2c96f.js",
    "revision": "849c61d7aac6d74a2c4b02e46a0b9023"
  },
  {
    "url": "assets/js/61.2b4197b0.js",
    "revision": "08fb2ecba00762b6f66091e62a95064c"
  },
  {
    "url": "assets/js/62.f5179892.js",
    "revision": "2072727dfa2c64640a0ae23dea516bb2"
  },
  {
    "url": "assets/js/63.6da5880f.js",
    "revision": "07cbf93221943ab3ae99bc02bd028e4e"
  },
  {
    "url": "assets/js/64.fca2357c.js",
    "revision": "4683479d91f225f766b60c96a7ca0800"
  },
  {
    "url": "assets/js/65.0898dd11.js",
    "revision": "2415b5de58048dc2ddef0515a22888b4"
  },
  {
    "url": "assets/js/66.345031c1.js",
    "revision": "585b048fa16169478eafd91376a3213b"
  },
  {
    "url": "assets/js/67.90ae3db8.js",
    "revision": "3c454071e4136fe216e18e9213438c1c"
  },
  {
    "url": "assets/js/68.074fceb0.js",
    "revision": "adf60dbd72b2eec7041814a01e5b1166"
  },
  {
    "url": "assets/js/69.cbfb5b0b.js",
    "revision": "022598f8dc344cc4a6db2b87f9444d00"
  },
  {
    "url": "assets/js/7.242d2460.js",
    "revision": "3da9c90430acfd8efcd960621de0e3f6"
  },
  {
    "url": "assets/js/70.ab2e1d4f.js",
    "revision": "fbb084533ab4da5056c213adaea493e7"
  },
  {
    "url": "assets/js/71.18210be1.js",
    "revision": "86e194e4071049afcaa43de8d98d8ec4"
  },
  {
    "url": "assets/js/72.9267ec54.js",
    "revision": "d24653495db623d5d1f73763a33cc3a5"
  },
  {
    "url": "assets/js/8.71a32672.js",
    "revision": "5eff7279edfa915d9eb6a9a9909ea1b7"
  },
  {
    "url": "assets/js/9.9b730ea0.js",
    "revision": "1d9949e96f1c534e7e7be8a2d421d2c7"
  },
  {
    "url": "assets/js/app.0fdf9f05.js",
    "revision": "38a126d7debe9fdb15567c6c9709d920"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "85dd61d578dd78857318b52cc177487e"
  },
  {
    "url": "contributing/index.html",
    "revision": "9fffd92f7df497634e0855d89c13597d"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "29335a6c4667858b2c846aa3645680e4"
  },
  {
    "url": "examples/all-features.html",
    "revision": "9994514943a6fe4e5b5ca017fdb4544c"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "08a60ce68d96de1d8f81561ac56e3f22"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "df191f1e9a048a71995826df527055dd"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "5abef191d0ae3ac1a0886d33b133118e"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "6c1d14de05210c49437e21a1d102d72d"
  },
  {
    "url": "examples/builtin-helper-log-loglevel.html",
    "revision": "b3b19b542b3ab4694f58f55db0c07b7f"
  },
  {
    "url": "examples/builtin-helper-log-multiple-params.html",
    "revision": "b4706bb8f71773c1690fe16eec8cd427"
  },
  {
    "url": "examples/builtin-helper-log.html",
    "revision": "4f9bf6eade38794ff0ce913888608499"
  },
  {
    "url": "examples/builtin-helper-lookup-dynamic-property.html",
    "revision": "da765b18f563a949f9c79ae5de3cd5ec"
  },
  {
    "url": "examples/builtin-helper-lookup.html",
    "revision": "539b3fc78fa8fe393c93d3623bfe28d0"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "e61b2466d61a5e566fd59298070a98b5"
  },
  {
    "url": "examples/builtin-helper-with-block-param.html",
    "revision": "d9ff438be857c86514e29dd39e220487"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "559845ce555a3867f2dea774f54d79d7"
  },
  {
    "url": "examples/builtin-helper-with-else.html",
    "revision": "f439f3e35e44b74e099fa75c9b98f707"
  },
  {
    "url": "examples/comments.html",
    "revision": "c330c792ae757f45a6b92eda0d84fee2"
  },
  {
    "url": "examples/each-with.html",
    "revision": "e64a380269ec3ba9c35be0a6d225c5dc"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "c23604f776a847f2b5c70614bfe1b3d9"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "67155be4f15eec72915e40a249c75f58"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "099259aa72991f4903af8edd86054fb4"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "a5d597fb5f7967e537600f8ed7f6cba1"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "a75336f63852d8f03cdb17ff03241432"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "efe049081ab5e11ecb22d37795cf28a7"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "f2b4a352fc93e45aa912b52841bb3fa0"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "5be1fe0d2d60a47fe4bdb06b516f8fe0"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "159706cfcf201022092f72ef257b7fbd"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "f756a162ca3c306b0e87e41b909a266d"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "ea04c3bafd097ab5082cdd5168b792cf"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "0ea55de8475b43072b9d03f1a9448ebe"
  },
  {
    "url": "examples/partials.html",
    "revision": "1801170b2d3cc10d168e3361a27ffc0a"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "8d1ee70f4386535b02ac8f6ee2e7c8c5"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "7e70099d795c8f326bac16fe26e04e35"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "6bba5d8b16e225b3f55c1dfbf3faf178"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "df442833ec90ed462a5acc596222dddc"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "abcba25297c4b624db444b6fd95b5429"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "203755b9049ccd4f5639d68b1f19ae29"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "b3192a6073eb81aae8e2247cfb199a0c"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "d660432e9737d2fd29e794232ad1146c"
  },
  {
    "url": "guide/expressions.html",
    "revision": "0609866a4e756a3ed38366b2b0b1e3d6"
  },
  {
    "url": "guide/index.html",
    "revision": "65a826fe6dcbfa60b16045dc5212c9f4"
  },
  {
    "url": "guide/partials.html",
    "revision": "48dcc46f746d3ccbab0c6258660359aa"
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
    "revision": "33488f533afadc365a2eaaa1ddae3884"
  },
  {
    "url": "installation/index.html",
    "revision": "6e5e98af4bb9d798fcf17b16ea91e808"
  },
  {
    "url": "installation/integrations.html",
    "revision": "e0f188ab91aa7b45453dff3a7db72eb5"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "c82df91bd556ce9922e407d40aea6ef8"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "2a9a886460e410ae91b56124c7aedc03"
  },
  {
    "url": "playground.html",
    "revision": "cfb5108fa74fd8eaeb2c0303d04172ff"
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
