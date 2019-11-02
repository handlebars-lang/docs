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
    "revision": "755099d864106ccb5d006d9716719b6a"
  },
  {
    "url": "938eca982f9a6cfd3ce5.worker.js",
    "revision": "22c99f1a3f543f1203df19c5af4b85ef"
  },
  {
    "url": "api-reference/compilation.html",
    "revision": "7b2d5d751a38d3160e9c341dd8bf7344"
  },
  {
    "url": "api-reference/data-variables.html",
    "revision": "acabb8a29fb83f28e227879464e20ee5"
  },
  {
    "url": "api-reference/index.html",
    "revision": "d15cdccf363c497927435f4f91e99289"
  },
  {
    "url": "api-reference/runtime.html",
    "revision": "2d9524d13f90b96ef5f8e03b3a53054c"
  },
  {
    "url": "api-reference/utilities.html",
    "revision": "a0f759432d7f42fe1b0918150bfd0584"
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
    "url": "assets/js/29.f21e7f32.js",
    "revision": "d23e221cd71754a41726f0a1925ba9c4"
  },
  {
    "url": "assets/js/3.895c9e43.js",
    "revision": "ffe25c2f375ce8dd4832849eb6c0b8e3"
  },
  {
    "url": "assets/js/30.eb24f358.js",
    "revision": "f56572b2c95f04dfe32d9ab796f86f0f"
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
    "url": "assets/js/65.d4406c32.js",
    "revision": "298c5aba982cf4b46e05265a35616af8"
  },
  {
    "url": "assets/js/66.ecca8310.js",
    "revision": "92c9bee17f7832cbbaefb8a9215ec8c9"
  },
  {
    "url": "assets/js/67.aac287be.js",
    "revision": "1a1f71c2825c819ec48a1d6f7dcbabe2"
  },
  {
    "url": "assets/js/68.dc6df07e.js",
    "revision": "53361f4692cd2111ecec1941c80f5504"
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
    "url": "assets/js/70.92c96259.js",
    "revision": "d882afd322b4f0632f5659423d9eb2b4"
  },
  {
    "url": "assets/js/71.ec55bb59.js",
    "revision": "b4dbd5f5be201a59af69b90e2edbd417"
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
    "url": "assets/js/app.daf030f0.js",
    "revision": "4abfe049a91679a2d736a49fd05ca413"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "b997d41717cb7ae5ce2faaec3facc76a"
  },
  {
    "url": "contributing/index.html",
    "revision": "2dc4739bdb033e665b798664c21d531d"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "c21ce245b9add14f7cd65e6732e732d8"
  },
  {
    "url": "examples/all-features.html",
    "revision": "61741bb5084336357b9d118170e40a70"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "9f21ad656a730525eb4972f26aa346f8"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "12e6fab21c65f8cb432e4c237fe524c5"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "0948c464f84087c4336dfad4e9ab39e0"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "abc56d52c841beb94f1d8730783dc9dd"
  },
  {
    "url": "examples/builtin-helper-log-loglevel.html",
    "revision": "134bb71826e973af63ff69a79fe900cc"
  },
  {
    "url": "examples/builtin-helper-log-multiple-params.html",
    "revision": "0904c5a3c29a749441ef45182a5a9392"
  },
  {
    "url": "examples/builtin-helper-log.html",
    "revision": "de5b3a68eb140a80a499a80f03d5a885"
  },
  {
    "url": "examples/builtin-helper-lookup-dynamic-property.html",
    "revision": "9b48b5d3895a9973bb0f0898c5f3d3f0"
  },
  {
    "url": "examples/builtin-helper-lookup.html",
    "revision": "19210060bacdb02f69fe743f4936c91a"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "af7b51664ad6125cb782352295a24725"
  },
  {
    "url": "examples/builtin-helper-with-block-param.html",
    "revision": "7e668fbe82f9da870d65c6b233cf209f"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "2585871c7dc87bf98c7864205b9c2f43"
  },
  {
    "url": "examples/builtin-helper-with-else.html",
    "revision": "8397263e23c0ee0a4d171bbd0c3328a9"
  },
  {
    "url": "examples/comments.html",
    "revision": "e4f4c30af07b59040b4629fc38ad12bb"
  },
  {
    "url": "examples/each-with.html",
    "revision": "a25142cf058a24c1cb4adaff897c1b13"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "fc62097bd997e72cacb9406d3c051880"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "baed69e6685899acbe261ab587628945"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "770355516e12e07687054eedae28a0ab"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "9013b59778af35df63370895920de538"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "fd7b56074c99527758d8891f6cb8580f"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "a298c3c78780a0b42bdaefe6cd976d1d"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "f896d316b382b36d9c3cc887571674ea"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "0c6840671b0c68b177435d93d8996acd"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "2700aaebc33a2eea5df60d681baf90ca"
  },
  {
    "url": "examples/hook-block-helper-missing-default.html",
    "revision": "278f42d63a60c489853055b1a97cd491"
  },
  {
    "url": "examples/hook-block-helper-missing.html",
    "revision": "b2378fb4bd5067f051114c12576e8322"
  },
  {
    "url": "examples/hook-helper-missing-default-no-param.html",
    "revision": "80d6ea3bbd9b359464990e3c271242b6"
  },
  {
    "url": "examples/hook-helper-missing-default-param.html",
    "revision": "d662f58c22a99f2454a8e2c20869a14b"
  },
  {
    "url": "examples/hook-helper-missing.html",
    "revision": "6de9b17a9a7af78e2b28317ef661abd4"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "0b1b827855735575a9e75dab221e1329"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "f50b7820ac01325c7534c6be5063ca08"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "8cdcb6821732d76b73ce166a82334484"
  },
  {
    "url": "examples/partials.html",
    "revision": "f6b39e316504ee4add503f57f642ac2f"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "7fe77d62e714e2c1d838e9559ce4e446"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "fb415380b4d6cae6336fc90ffd439e41"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "4e8781cd9319f0f89be30a7c60581ae2"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "373dd65958a613a6df273ded831fe5af"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "02753005e4a9cbb69db57efa48c3172a"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "ef6d0308d915469c70119e1fefa657c1"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "d5dd6f7e6cf263af7a25932902d4cd4c"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "bbf5abee3db30595aca45910121989d4"
  },
  {
    "url": "guide/expressions.html",
    "revision": "5a49b8f8687b7b6e9587613a3fe64e90"
  },
  {
    "url": "guide/hooks.html",
    "revision": "06dc92541411cfcfbdd97095276f4ed7"
  },
  {
    "url": "guide/index.html",
    "revision": "4c8e44e6c926da99001797944152d3ac"
  },
  {
    "url": "guide/partials.html",
    "revision": "5815a403e8bbac37cad75a369036ed8c"
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
    "revision": "ee7ff2759a3e62d989421cc5511e16a3"
  },
  {
    "url": "installation/index.html",
    "revision": "8f0fc00751aafd5215d7ebfd2cdeb567"
  },
  {
    "url": "installation/integrations.html",
    "revision": "984edd17f6dac76578bca4d2ce781a31"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "824631f387ed5328d7872f5cc047816a"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "8be200b109de4ba9f03eed2dc6e495cd"
  },
  {
    "url": "playground.html",
    "revision": "b819b434d903a7aa1ea505949c20996b"
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
