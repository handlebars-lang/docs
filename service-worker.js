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
    "revision": "04fa15256c10603bd941035e73982860"
  },
  {
    "url": "938eca982f9a6cfd3ce5.worker.js",
    "revision": "22c99f1a3f543f1203df19c5af4b85ef"
  },
  {
    "url": "api-reference/compilation.html",
    "revision": "1ae7882413853ece6a567d8e0fb6f970"
  },
  {
    "url": "api-reference/data-variables.html",
    "revision": "68385dc79640f830dafc6fc46ecb2e2e"
  },
  {
    "url": "api-reference/index.html",
    "revision": "0278b3d125a2b85f9223858d1ec1a3e6"
  },
  {
    "url": "api-reference/runtime.html",
    "revision": "3c324108e53e0efe637235afe8301d67"
  },
  {
    "url": "api-reference/utilities.html",
    "revision": "0f642b3a2721130f674ea259e4834b37"
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
    "url": "assets/js/13.dc749552.js",
    "revision": "5c4ee80294872806ca3fd4ecfad86ec4"
  },
  {
    "url": "assets/js/14.c1d6426b.js",
    "revision": "24add57eb950e5af5675927c3567fe59"
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
    "url": "assets/js/31.d198d58f.js",
    "revision": "3d182f7ef1adf35bbfe472c8b7c1cf51"
  },
  {
    "url": "assets/js/32.524705db.js",
    "revision": "5a91bc25aea7ca4874d7266689abebb6"
  },
  {
    "url": "assets/js/33.fbcb934c.js",
    "revision": "b397b751b0d782baf13650e3e4ea6e83"
  },
  {
    "url": "assets/js/34.b4b9afcd.js",
    "revision": "fc4393468d8830c20705dda5e1bd29e8"
  },
  {
    "url": "assets/js/35.cbea37fe.js",
    "revision": "2696ff76ffe063de930b7ee4837464f9"
  },
  {
    "url": "assets/js/36.17d2fcf8.js",
    "revision": "9ed19afd9f95bad66e3a484db4e75f45"
  },
  {
    "url": "assets/js/37.584c0f19.js",
    "revision": "78f60930cab8a1f8f6ed390987a79928"
  },
  {
    "url": "assets/js/38.94d39736.js",
    "revision": "02daeb0f6b28ff6092e10cb414abfef1"
  },
  {
    "url": "assets/js/39.3b539357.js",
    "revision": "bdac78a503e844f945c049009c754c65"
  },
  {
    "url": "assets/js/40.2e94c605.js",
    "revision": "ae5f612e03623dd9cfac0329c9f65cd2"
  },
  {
    "url": "assets/js/41.e662362b.js",
    "revision": "bf673691ef9bd3222c91e46060fca71f"
  },
  {
    "url": "assets/js/42.07a81d6b.js",
    "revision": "8d39c971d1d95df6ec6ac368fbcb489f"
  },
  {
    "url": "assets/js/43.aa322a09.js",
    "revision": "993e4326b82e3a4dc8acd2a70b63f9dd"
  },
  {
    "url": "assets/js/44.b0b3ffb8.js",
    "revision": "85a4d5bf50d6a8c369e4a8fe7ce8971a"
  },
  {
    "url": "assets/js/45.22deff23.js",
    "revision": "f34e257abe8129ffbc90fdc7cd543b8e"
  },
  {
    "url": "assets/js/46.a5e9cbba.js",
    "revision": "16966b9c97edd008bcd4b2f096a0d6ec"
  },
  {
    "url": "assets/js/47.dd20b3e0.js",
    "revision": "ef439d18247922eeb57ab754238cdc85"
  },
  {
    "url": "assets/js/48.4137ba9c.js",
    "revision": "630156410ba92da578f6728168f2c663"
  },
  {
    "url": "assets/js/49.f650e598.js",
    "revision": "a6b106df77d80c71afe99114bb150ff8"
  },
  {
    "url": "assets/js/5.afddd489.js",
    "revision": "01b75a144b5d0c26c55a99cbec6387d5"
  },
  {
    "url": "assets/js/50.e2ffc616.js",
    "revision": "24ef771ead705547cef9d5aa748967aa"
  },
  {
    "url": "assets/js/51.8f230a36.js",
    "revision": "4a0e9ae97ce004f1ccb70df1f0e26522"
  },
  {
    "url": "assets/js/52.d5aca24a.js",
    "revision": "f2a2ad3840c6dcd8e0471cc30dce00fc"
  },
  {
    "url": "assets/js/53.c691f0e5.js",
    "revision": "3d93e98a40c61ec4f903309623778038"
  },
  {
    "url": "assets/js/54.ae4b9287.js",
    "revision": "7451bf12f030a9d75852969aeb50292f"
  },
  {
    "url": "assets/js/55.ab1abb74.js",
    "revision": "d445308aaa52584600cdc1ae1704585e"
  },
  {
    "url": "assets/js/56.012112a5.js",
    "revision": "741c8e10c3a40e6dc49ddd1e7f2921f7"
  },
  {
    "url": "assets/js/57.1886cefd.js",
    "revision": "3bea567752b43e00ea89d74bb7d1de3c"
  },
  {
    "url": "assets/js/58.f8d4b0d4.js",
    "revision": "ca20d056d93f2468919d22de9fcba574"
  },
  {
    "url": "assets/js/59.01fea110.js",
    "revision": "8c21c943e492fc474bd08fe5ecd4ee18"
  },
  {
    "url": "assets/js/6.c6d43a9e.js",
    "revision": "cb65146752de8b925c2ff34e0b5049ba"
  },
  {
    "url": "assets/js/60.0833deea.js",
    "revision": "ff78676f692ec42600f9ca296fad7e35"
  },
  {
    "url": "assets/js/61.f5058790.js",
    "revision": "40014fb084503c84e3ec6eac8cd45e05"
  },
  {
    "url": "assets/js/62.cf02b086.js",
    "revision": "e4a59656bbfda6aae78167268afee96d"
  },
  {
    "url": "assets/js/63.1fa9bbb0.js",
    "revision": "8b8380ffc6ea704d36a2f66889db1c3c"
  },
  {
    "url": "assets/js/64.fb9fea23.js",
    "revision": "6a6d937b04caed63407c4039db7113ce"
  },
  {
    "url": "assets/js/65.b26f077a.js",
    "revision": "47112581bf41b1430f92391c1f4660b9"
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
    "url": "assets/js/app.a2be2343.js",
    "revision": "71d95a87a159df855ebb71d6e42458ef"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "94be956fbc298e1d5d6c2415ad78cefb"
  },
  {
    "url": "contributing/index.html",
    "revision": "a92b3287dee656c3eae92af60d0cf089"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "aea99ef6fdaf8edb34cc459a5a7eeffc"
  },
  {
    "url": "examples/all-features.html",
    "revision": "bd552165b1457120bd5250b8c8d61d66"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "53dd285b317aa2047f72e0fb7bacab0d"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "28ee72b3f736822f822104ea375d2dc7"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "e217abbb9914fd71b2ff323d968be54e"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "87c493e25af1e99b476ab1066c131604"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "c55600312f6bc61e27d644713f075cac"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "2b8536d04b360d344232ac3c4ac9f8c6"
  },
  {
    "url": "examples/comments.html",
    "revision": "5566b3ba47bf78b21b53af63ccc79974"
  },
  {
    "url": "examples/each-with.html",
    "revision": "1542dbd002ed6e41e76e4dcc2bf93354"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "08c7f2e8fad2678784e3794c91912409"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "5566a2753db6048b2a772fce9a385d29"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "76195251fb73824c71a121389ba304c1"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "026eadfc74baf0b88612553af3c65032"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "97a7f5f9ca973ff25795bbc21bd612b2"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "4ece8a53fd341a4aa42f151a3a1e8107"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "401a4e0f46e6bc484620ca2aad7bf4f2"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "167ec97594d436b8c5d01156f3e744ad"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "8c6dae2a77ef43ea3f776d11a56e0593"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "ee57c31540e33af0a2819aa0dd7862cb"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "1b5404534a963062cdabdb3f07e9972b"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "27502d0bf2a8f48e6aaa99cbdfacf518"
  },
  {
    "url": "examples/partials.html",
    "revision": "0605bef780cdaa01aeb171db0b9779f6"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "7c04716f76021c56bcd4cddaa0773de1"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "36e448296186c206fbd277468b8c6f2e"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "f9aa40aae21c4b3021f56f164bfe2180"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "74774a99af8abb75435c437054b6f284"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "f14bd4ae5718db36387d41209ba4d830"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "b2ac5743d36db7afbda6c57e7eb7ca97"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "7116f78879431d227a7d50f386a2ff53"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "8f602998044a87b809d4f64b8afc57da"
  },
  {
    "url": "guide/expressions.html",
    "revision": "5c38d8557bfc7f72ab8bd362326c8101"
  },
  {
    "url": "guide/index.html",
    "revision": "4011ed31ce3e269df20aa2b8ed945cdb"
  },
  {
    "url": "guide/partials.html",
    "revision": "b5c98217c32cd0d53933d2b54f0ef882"
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
    "revision": "ba6689eb8842bfc0c4bbc3238f198aa3"
  },
  {
    "url": "installation/index.html",
    "revision": "e9c25b5120c35569c39d92179fb480b4"
  },
  {
    "url": "installation/integrations.html",
    "revision": "ec4c1aa425d3da093e86fb15cfed70c0"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "9b6475a132eaa07d3f773e4db2d6f7c7"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "fe28e08b1b13afec3d05f2f81c5786b2"
  },
  {
    "url": "playground.html",
    "revision": "ae4cc0c0b6b033ab8471faeed63f7a41"
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
