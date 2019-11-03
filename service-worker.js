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
    "revision": "ae7b8093097bcf102438e6bcbb0ff4b4"
  },
  {
    "url": "938eca982f9a6cfd3ce5.worker.js",
    "revision": "22c99f1a3f543f1203df19c5af4b85ef"
  },
  {
    "url": "api-reference/compilation.html",
    "revision": "612e775ff72f911b0c5879dbc7185545"
  },
  {
    "url": "api-reference/data-variables.html",
    "revision": "0db8f6e8a1e2444da0457f0d603f0018"
  },
  {
    "url": "api-reference/index.html",
    "revision": "33363b7737a5aaae994155b0c55ae51a"
  },
  {
    "url": "api-reference/runtime.html",
    "revision": "8a31d954d0bc877da261e3e6864749c2"
  },
  {
    "url": "api-reference/utilities.html",
    "revision": "045520d787ac0bd4da4af5672be3b6d8"
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
    "url": "assets/js/66.642d938a.js",
    "revision": "c7b97c8ce08e905b26e6b9834e3adecb"
  },
  {
    "url": "assets/js/67.560e3d79.js",
    "revision": "ca878e8078701857cbc06e6e92cedd0f"
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
    "url": "assets/js/8.2faadc8f.js",
    "revision": "9aafa6974c2a9a308b4fef6864f0a264"
  },
  {
    "url": "assets/js/9.9b730ea0.js",
    "revision": "1d9949e96f1c534e7e7be8a2d421d2c7"
  },
  {
    "url": "assets/js/app.a88011af.js",
    "revision": "8ee00fcc5cde183e4dfbb6ab5aa0d384"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "c16b2b6b9bd29fb4cda540b8f6d61f16"
  },
  {
    "url": "contributing/index.html",
    "revision": "6751a84e308246cba7cc4fc25e264f57"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "4ba0df00f8f62515bff71256cdae8b8a"
  },
  {
    "url": "examples/all-features.html",
    "revision": "3e25a160176fa2fc22f5a9112c45fa70"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "2a6d97d4d7381da52a5c1a8f3e921526"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "149d301a136037f4ab935a4934d2301c"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "9e1ca194ea7a9bfa87b45905be95ecf7"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "ff3330f80f5d91343684eac2598e533a"
  },
  {
    "url": "examples/builtin-helper-log-loglevel.html",
    "revision": "266a741ede43622b89c91bde613e93bd"
  },
  {
    "url": "examples/builtin-helper-log-multiple-params.html",
    "revision": "a69b54b4487238f17511740c26c1f024"
  },
  {
    "url": "examples/builtin-helper-log.html",
    "revision": "b3d105dfe2c394854bddb85b9b8d71b1"
  },
  {
    "url": "examples/builtin-helper-lookup-dynamic-property.html",
    "revision": "09b5a0b0d5a4fc8e33b8649006378b0e"
  },
  {
    "url": "examples/builtin-helper-lookup.html",
    "revision": "277514d567425af38d0584acd131bfa9"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "63bd0e210e23b485f9dfd0b5612d4cd1"
  },
  {
    "url": "examples/builtin-helper-with-block-param.html",
    "revision": "9bdd2b131757e2571c98b01ca655274f"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "63227492cd38c561d296d7b5a3ad5974"
  },
  {
    "url": "examples/builtin-helper-with-else.html",
    "revision": "26b2c05d24afca84f351622671e0beb8"
  },
  {
    "url": "examples/comments.html",
    "revision": "1e631f42006f4b322abe4bb1108df2f8"
  },
  {
    "url": "examples/each-with.html",
    "revision": "7d06ec2101a88733747495155db0e7fc"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "f87c568c5076798c46a9b7bd36b6f1de"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "06af9635575903b6f3b0d315ed4e2b6f"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "8310db2d6ebe6996ddde19f1fa357b5a"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "ba9a82a7f1fc72660fd9c421f3724e2f"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "6758995c5f3947cf67eacd4bc1b6f79b"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "c905216c57fa188c2f86b3cae96f1a70"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "b2b268e9f1d809e7608fbd35a334670e"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "dab11f59c17284e543de9931bc1fe27b"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "c63fcbbc3f62383860a9caa6adce7a34"
  },
  {
    "url": "examples/hook-block-helper-missing-default.html",
    "revision": "d3a23e75866729ffd936fa4861e719a9"
  },
  {
    "url": "examples/hook-block-helper-missing.html",
    "revision": "c6cf4e8e95082840db8795e0fb2d000e"
  },
  {
    "url": "examples/hook-helper-missing-default-no-param.html",
    "revision": "993d84fd58fedbb59d82db5ef2792c14"
  },
  {
    "url": "examples/hook-helper-missing-default-param.html",
    "revision": "5433250292e5caf0477290ec161a3cdf"
  },
  {
    "url": "examples/hook-helper-missing.html",
    "revision": "8188af93815a4443dd4b64c3886ce413"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "666ac4b32c07aa1113e1c2badee8fb21"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "b405126b4bb5714f2c24bf81f713829d"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "b2f6597e63de9acf74ce7714297ae00b"
  },
  {
    "url": "examples/partials.html",
    "revision": "c0dc9ffc09f0cb087b7ada91b197c156"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "58f3f35883004a7795e0b429437aa915"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "3006ae1ffa28a00b34b28bff86a42963"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "19e48dab93cb61888b13462ed473c14a"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "6cdbd88c3b4adb14ad7ebc380596a8cd"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "f12679797d13a76b3ad44b369256f806"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "073618ce52696f406de647c3bbc76f3d"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "842074129092fad9e353ba3daed74460"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "3f5abddc4f17ddb935e562eefcdb1420"
  },
  {
    "url": "guide/expressions.html",
    "revision": "db216ce9b8f62d973f444a6a824bbdd0"
  },
  {
    "url": "guide/hooks.html",
    "revision": "f2a73552cfc41e6dd5e38deb0c51fab6"
  },
  {
    "url": "guide/index.html",
    "revision": "36288f8d60cc65115f8decec07675f85"
  },
  {
    "url": "guide/partials.html",
    "revision": "dbab6ca7cea09541913dc38234089a7c"
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
    "revision": "9d125456296fcf2543640f9cc4e6b513"
  },
  {
    "url": "installation/index.html",
    "revision": "cc51a80c14a92439d900e9394ac3cfc1"
  },
  {
    "url": "installation/integrations.html",
    "revision": "2fdcf7fa6f1f25d27d3b432c01c79dcb"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "e0e0db24cd6a5f1bf9c4249265a81d78"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "c3a4f9f9f40612e738ed0102b980ba52"
  },
  {
    "url": "playground.html",
    "revision": "ab1fa1ba980d22d9c0f3dbd6c6f5fbe4"
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
