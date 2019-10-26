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
    "revision": "758860018dba1a0cf31eaa435fc10875"
  },
  {
    "url": "938eca982f9a6cfd3ce5.worker.js",
    "revision": "22c99f1a3f543f1203df19c5af4b85ef"
  },
  {
    "url": "api-reference/index.html",
    "revision": "20dac7e278b337b2745937ef40d39e43"
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
    "url": "assets/js/13.42d1e36c.js",
    "revision": "3ce0813c5b2a855687f33f54e429dda1"
  },
  {
    "url": "assets/js/14.1fb90bd6.js",
    "revision": "404b22f40c2246f182dfdd3f27099bee"
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
    "url": "assets/js/18.f7d17a41.js",
    "revision": "bacacbe133004ef5a5d869c41c5c92aa"
  },
  {
    "url": "assets/js/19.1be1f298.js",
    "revision": "6e3e7075cd08c3e53ac4acf1ee0a21a2"
  },
  {
    "url": "assets/js/2.a86a2690.js",
    "revision": "7236f2c8cdf75b160297ea0481928ddc"
  },
  {
    "url": "assets/js/20.30df126f.js",
    "revision": "0865eb8aaa91290283109bb7e50189a3"
  },
  {
    "url": "assets/js/21.bce023ad.js",
    "revision": "0712c1be9085cabadb493a13b81c4cd9"
  },
  {
    "url": "assets/js/22.0ca6a27f.js",
    "revision": "b78ec1b9525cd3f34036477dedbcf678"
  },
  {
    "url": "assets/js/23.1b9bbd5c.js",
    "revision": "5baece88f8b2f6127206180f33501d30"
  },
  {
    "url": "assets/js/24.cbb27086.js",
    "revision": "4b7c1c4c6285225c747c6333b3787cc2"
  },
  {
    "url": "assets/js/25.52e2e3f9.js",
    "revision": "acafbf70f00051e4fb9784cb293396fa"
  },
  {
    "url": "assets/js/26.a654c57e.js",
    "revision": "0322633861f49912adefd0a81f249af9"
  },
  {
    "url": "assets/js/27.c0f01c74.js",
    "revision": "0ca10d1e7d8e5e63136dca9d73e087ef"
  },
  {
    "url": "assets/js/28.a3820b77.js",
    "revision": "2037167b8b5ce67ef0261dbc398c3c19"
  },
  {
    "url": "assets/js/29.4f1599f3.js",
    "revision": "5777ff72b70499fcf9e20041b274c47a"
  },
  {
    "url": "assets/js/3.895c9e43.js",
    "revision": "ffe25c2f375ce8dd4832849eb6c0b8e3"
  },
  {
    "url": "assets/js/30.14dec77c.js",
    "revision": "1e976a36694fd14498552174205f729f"
  },
  {
    "url": "assets/js/31.4cad9734.js",
    "revision": "3d182f7ef1adf35bbfe472c8b7c1cf51"
  },
  {
    "url": "assets/js/32.293b46e1.js",
    "revision": "5a91bc25aea7ca4874d7266689abebb6"
  },
  {
    "url": "assets/js/33.a19fefd8.js",
    "revision": "b397b751b0d782baf13650e3e4ea6e83"
  },
  {
    "url": "assets/js/34.3ae11e82.js",
    "revision": "fc4393468d8830c20705dda5e1bd29e8"
  },
  {
    "url": "assets/js/35.e100e888.js",
    "revision": "2696ff76ffe063de930b7ee4837464f9"
  },
  {
    "url": "assets/js/36.e2832cb0.js",
    "revision": "9ed19afd9f95bad66e3a484db4e75f45"
  },
  {
    "url": "assets/js/37.fe6c9d11.js",
    "revision": "78f60930cab8a1f8f6ed390987a79928"
  },
  {
    "url": "assets/js/38.a5882720.js",
    "revision": "02daeb0f6b28ff6092e10cb414abfef1"
  },
  {
    "url": "assets/js/39.86e1da54.js",
    "revision": "bdac78a503e844f945c049009c754c65"
  },
  {
    "url": "assets/js/40.b6c97c6e.js",
    "revision": "ae5f612e03623dd9cfac0329c9f65cd2"
  },
  {
    "url": "assets/js/41.07afc4ae.js",
    "revision": "bf673691ef9bd3222c91e46060fca71f"
  },
  {
    "url": "assets/js/42.6184c64e.js",
    "revision": "8d39c971d1d95df6ec6ac368fbcb489f"
  },
  {
    "url": "assets/js/43.0af4b4ee.js",
    "revision": "20679a4ae915c97fbc5659ee1ae3294f"
  },
  {
    "url": "assets/js/44.c1668310.js",
    "revision": "85a4d5bf50d6a8c369e4a8fe7ce8971a"
  },
  {
    "url": "assets/js/45.07b70322.js",
    "revision": "f34e257abe8129ffbc90fdc7cd543b8e"
  },
  {
    "url": "assets/js/46.2f7fedd2.js",
    "revision": "16966b9c97edd008bcd4b2f096a0d6ec"
  },
  {
    "url": "assets/js/47.5acd1ddb.js",
    "revision": "73547c9d18593db801a620a7ceed2e36"
  },
  {
    "url": "assets/js/48.bdbf8b13.js",
    "revision": "630156410ba92da578f6728168f2c663"
  },
  {
    "url": "assets/js/49.def5648e.js",
    "revision": "a6b106df77d80c71afe99114bb150ff8"
  },
  {
    "url": "assets/js/5.afddd489.js",
    "revision": "01b75a144b5d0c26c55a99cbec6387d5"
  },
  {
    "url": "assets/js/50.65eac2bb.js",
    "revision": "6a5b3f55142dc88832ee3854980fcbc5"
  },
  {
    "url": "assets/js/51.db647b6c.js",
    "revision": "877817ff7517ce1a1aaafef929db85e9"
  },
  {
    "url": "assets/js/52.9eb5dfc3.js",
    "revision": "cff677e512b2e2dba9aeb612cda7118d"
  },
  {
    "url": "assets/js/53.de15aa2b.js",
    "revision": "14e4199aa3c131299a15438eb8d65095"
  },
  {
    "url": "assets/js/54.87e5c714.js",
    "revision": "dec20569746886f93987c195c92dd3bf"
  },
  {
    "url": "assets/js/55.5184cef3.js",
    "revision": "871f6dbd93c4f5c33635ae7313463f2f"
  },
  {
    "url": "assets/js/56.4fc255fd.js",
    "revision": "6a9ee10aa0e58237ff8fa0820154af4c"
  },
  {
    "url": "assets/js/57.008597ec.js",
    "revision": "82931b5a249fd6a9d352893dbdb919d8"
  },
  {
    "url": "assets/js/58.585cf032.js",
    "revision": "03d65d11d64732a40e805e95b70fa1cd"
  },
  {
    "url": "assets/js/59.fbac37d1.js",
    "revision": "40292cd0dfc84d1c5c700fa79d7d7445"
  },
  {
    "url": "assets/js/6.c6d43a9e.js",
    "revision": "cb65146752de8b925c2ff34e0b5049ba"
  },
  {
    "url": "assets/js/60.999c6b36.js",
    "revision": "849c61d7aac6d74a2c4b02e46a0b9023"
  },
  {
    "url": "assets/js/61.03c06cda.js",
    "revision": "9a729343dc742a6984889adc443f1ff3"
  },
  {
    "url": "assets/js/7.242d2460.js",
    "revision": "3da9c90430acfd8efcd960621de0e3f6"
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
    "url": "assets/js/app.232853df.js",
    "revision": "340d26d83b6b1793a04d0bb82becab5e"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "1ccf4db571352cf31cce49763663a2d5"
  },
  {
    "url": "contributing/index.html",
    "revision": "a600f9b3c0e17e3831b613c5da5134a9"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "3e35dd3a9d8528758d54a83352b14560"
  },
  {
    "url": "examples/all-features.html",
    "revision": "4a46759ecf2bf03a0e82d123119717d6"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "39bc79fd5fcace10a8c8e921e78b365e"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "4d301379168d554edcd98bedf6845d6a"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "4900d928c5d61925f64b4ad2ff957510"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "37f72e54d8ddad8241aa0b0c6fdf5f87"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "45fd909edb1921c251af35bc9d094468"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "b0889a232c6e42cd1231d12ce5aa30d2"
  },
  {
    "url": "examples/comments.html",
    "revision": "e83ee2cf100d5c805c14ad652fbf93ee"
  },
  {
    "url": "examples/each-with.html",
    "revision": "1dfcc2e54b107551b08abb6feebfda01"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "7f75a79f88ecfb0d5d8a8d2793adc5dd"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "47ea244d624e727e5db8afc846303df4"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "5fb37cf3af7e17b04918a6c4c0ebbea3"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "34a3729f4a60674e4dbc8882293424e1"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "c80068ff34e172ea27029e8431592d32"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "210b393c91138a0c39eddc149107a4c5"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "525fccbd65c064f1c46804a9d6c63eeb"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "fe0139cbd01e1f716570e0a783d0df4f"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "be66a0b277260d4e326cd862ca50001f"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "fc550ccf7099c913c2bbccfc83a30859"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "b9f62337704e78d69c2ad3b52af5ba02"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "0a973734931d669737dc5c94118348fa"
  },
  {
    "url": "examples/partials.html",
    "revision": "ef9fe53dd31d38b7b2bab65a53bf5e46"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "4c6d6d04e306e3e6ed34a4d2c7b0c5b4"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "286c4c20cd6d396aea786542d07e24c7"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "60d139dec60489faf43448fa0b91dc22"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "cb9b39b1601b01b0c4f50a1c0d91e070"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "49ce013bcd807bac38783e47c58619e2"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "93a93bd479c63418dacffc3dd7f0e46a"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "40f2a698cd05a39b6b8c9bb1f5d52646"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "132235cc1ff60a464e269a29f7f12e1c"
  },
  {
    "url": "guide/expressions.html",
    "revision": "3f7180ad5aee1f1901d02408b6a5baaf"
  },
  {
    "url": "guide/index.html",
    "revision": "df96be72b2392b6d29d386b1593783e3"
  },
  {
    "url": "guide/partials.html",
    "revision": "ad6e21edaf8fad5a90e08dedf522cba6"
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
    "revision": "afcf9fdd7dcb5e568518c554d0f8b286"
  },
  {
    "url": "installation/index.html",
    "revision": "dadf7decdfa4e834917ae1e812c598f3"
  },
  {
    "url": "installation/integrations.html",
    "revision": "480723f05f8e88a966ad08b0083855f5"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "3a1cad60ee59688493cfd3e9b6562d01"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "b1b0f944980d2da567b7c747bb09b5e4"
  },
  {
    "url": "playground.html",
    "revision": "a2fccee4cda002fa1b0c07c5583ea73c"
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
