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
    "revision": "92079d5b8b706d3b8d6150c7d2d82ebe"
  },
  {
    "url": "api-reference/index.html",
    "revision": "682042e1e61100c8387efc64237100fe"
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
    "url": "assets/js/12.9d766228.js",
    "revision": "d1a523581a0c2cd35db8d21f8b5cb18d"
  },
  {
    "url": "assets/js/13.476eb2c6.js",
    "revision": "a413e1b5370e9719879a7c2b8f6b8cae"
  },
  {
    "url": "assets/js/14.caf2941e.js",
    "revision": "22fe287cf0c51554453df542c1439170"
  },
  {
    "url": "assets/js/15.78678efe.js",
    "revision": "2613240723a8c856889a20985d704ae0"
  },
  {
    "url": "assets/js/16.025600d8.js",
    "revision": "839e534e252cacfe37a991cdd5273e08"
  },
  {
    "url": "assets/js/17.c44b0f02.js",
    "revision": "151151704715c6c3647ce3a84c261ba5"
  },
  {
    "url": "assets/js/18.6b1662b2.js",
    "revision": "44ec4ca1e063972b8eaa806eab7a79fa"
  },
  {
    "url": "assets/js/19.30823706.js",
    "revision": "33b56b0f401d4507103e06087deeb950"
  },
  {
    "url": "assets/js/2.b913ca96.js",
    "revision": "310c227805dddef9cf437bb8e755041c"
  },
  {
    "url": "assets/js/20.15cadb2c.js",
    "revision": "d7a7a9a690ed2ea865423f76ab0910ec"
  },
  {
    "url": "assets/js/21.f1adedc5.js",
    "revision": "2f4f12772137e1917c01b8d248463169"
  },
  {
    "url": "assets/js/22.027df892.js",
    "revision": "69aa5f91baa20b590a6cfdefd356fc06"
  },
  {
    "url": "assets/js/23.89523d04.js",
    "revision": "25403334909a5efa321cc1a2a356fa6a"
  },
  {
    "url": "assets/js/24.e9071aab.js",
    "revision": "cdadac33be5d52b019358af9efbb7d2e"
  },
  {
    "url": "assets/js/25.27501959.js",
    "revision": "1032f774fbaaeefcfbbcbb29b76cc6ff"
  },
  {
    "url": "assets/js/26.4c602cbc.js",
    "revision": "a8998b4a877a8bc9ad3ced8d0523a14c"
  },
  {
    "url": "assets/js/27.d00f3422.js",
    "revision": "efd32495b0e9bd17638966cc87103a31"
  },
  {
    "url": "assets/js/28.df2edc18.js",
    "revision": "04e0278a70b2f003ec4e2866e9ae6c03"
  },
  {
    "url": "assets/js/29.23a0d47a.js",
    "revision": "c6fb13d01a39aa844a4b0d44b477e82a"
  },
  {
    "url": "assets/js/3.a7f88ae9.js",
    "revision": "2928b97fde8aae86c64168ad18481558"
  },
  {
    "url": "assets/js/30.49d351f7.js",
    "revision": "e31cd610dd100ec233dbbff15589b88f"
  },
  {
    "url": "assets/js/31.998d507f.js",
    "revision": "626c2719e75509c92072079696511511"
  },
  {
    "url": "assets/js/32.18d5cb2c.js",
    "revision": "f4cf0aac561c053868b3003227a08324"
  },
  {
    "url": "assets/js/33.da9bd63f.js",
    "revision": "f9271776d2af0e789531d2fb4b4e5818"
  },
  {
    "url": "assets/js/34.a6d11173.js",
    "revision": "4dbef340118fc2ce9f461c93a3769ef3"
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
    "url": "assets/js/40.26cffa57.js",
    "revision": "e829398dbdf0e414662035d66b829521"
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
    "url": "assets/js/46.d23acd67.js",
    "revision": "f01cfa03c83564fa44b38166fe876cf6"
  },
  {
    "url": "assets/js/47.761eedc6.js",
    "revision": "21f36db7ab4ed2615446b251f6e32f64"
  },
  {
    "url": "assets/js/48.08559ada.js",
    "revision": "9a2e390f31b5d3cd2a840d574741aea2"
  },
  {
    "url": "assets/js/49.9f675e89.js",
    "revision": "ff30325c5073001a2f08d9c25cdf0910"
  },
  {
    "url": "assets/js/5.33a53552.js",
    "revision": "44d04255872a5c498d2d35ce607576f4"
  },
  {
    "url": "assets/js/50.da1cf2a8.js",
    "revision": "056e6407db33beb8cebce417c1d2d0b5"
  },
  {
    "url": "assets/js/51.491250d0.js",
    "revision": "2081a98e2572627a0eab4d7851cbeb4d"
  },
  {
    "url": "assets/js/52.523f4ef2.js",
    "revision": "515f78c4737aae36c62925da344bea70"
  },
  {
    "url": "assets/js/53.e2991e0c.js",
    "revision": "03488900ed2aaebacd40ec3095fa6932"
  },
  {
    "url": "assets/js/54.89d348c1.js",
    "revision": "1238c4cbb16a2572f94688c622ccf0e3"
  },
  {
    "url": "assets/js/55.59c7cf21.js",
    "revision": "1e3432742483a065f2416495e52d862c"
  },
  {
    "url": "assets/js/56.68331f97.js",
    "revision": "efe27f9b11de576eecd1401b2ee6ee6a"
  },
  {
    "url": "assets/js/57.72c684bf.js",
    "revision": "ed4c6b2529c4b003a52792a1f1f1ef19"
  },
  {
    "url": "assets/js/58.fde3bd15.js",
    "revision": "f9afd1cc80f85f905c58d9a57a99941a"
  },
  {
    "url": "assets/js/59.99fb5ffb.js",
    "revision": "e25d291ec0038ff240159e1b5ef40bbd"
  },
  {
    "url": "assets/js/6.7b856339.js",
    "revision": "a9a9f4d31de4e2f25eba1871c0ebbebc"
  },
  {
    "url": "assets/js/60.52163156.js",
    "revision": "9f4249d6baf593ed4150ba4cd4460653"
  },
  {
    "url": "assets/js/7.9351aa84.js",
    "revision": "4f7db1e6b3e60043719a3a7d7e7e9127"
  },
  {
    "url": "assets/js/8.b6e5358d.js",
    "revision": "f734f72a874ec85bc923c94d71a1edc0"
  },
  {
    "url": "assets/js/9.496eb723.js",
    "revision": "bf136730ccc2ecbb08350f44afff6413"
  },
  {
    "url": "assets/js/app.e5dbda49.js",
    "revision": "33f8d77fbf46cf0ec907b6bf4349598d"
  },
  {
    "url": "contributing/button-links.html",
    "revision": "ec3fead71e929711bd3566f724f17c1e"
  },
  {
    "url": "contributing/index.html",
    "revision": "b59776ee24c62410b119d95b0b5b5519"
  },
  {
    "url": "contributing/interactive-examples.html",
    "revision": "1de77706b28ced4817e5df035f9eda51"
  },
  {
    "url": "examples/all-features.html",
    "revision": "bc3ffd29f8cc9dbc5b048b203dde1ed5"
  },
  {
    "url": "examples/builtin-helper-each-block.html",
    "revision": "96003258b8899bc087d00449910be7f7"
  },
  {
    "url": "examples/builtin-helper-eachelse-block.html",
    "revision": "5e6af08cc9871cbd6811a611ae196871"
  },
  {
    "url": "examples/builtin-helper-if-block.html",
    "revision": "cf8dcf6d1eab6baad15500888c24a7de"
  },
  {
    "url": "examples/builtin-helper-ifelse-block.html",
    "revision": "a69734afa39c89731fd1a74c1f7a497f"
  },
  {
    "url": "examples/builtin-helper-unless-block.html",
    "revision": "8ed0272c53476a3dfa440e90b72e5834"
  },
  {
    "url": "examples/builtin-helper-with-block.html",
    "revision": "ca2b5a436fb864018b21982d20c9e120"
  },
  {
    "url": "examples/comments.html",
    "revision": "f5b51efa9bef75b0383661916ec1dbd3"
  },
  {
    "url": "examples/each-with.html",
    "revision": "ef1a33fa1f255020031e347327c9f165"
  },
  {
    "url": "examples/helper-block.html",
    "revision": "dbb95fa7e87f730c0a3734d8180e9236"
  },
  {
    "url": "examples/helper-data-name-conflict.html",
    "revision": "bfe12c8cc4a50c36bb39651a3e81f454"
  },
  {
    "url": "examples/helper-dynamic-parameters.html",
    "revision": "f3afec3768de36e464d6a571c729182e"
  },
  {
    "url": "examples/helper-hash-arguments.html",
    "revision": "b8137ce3e4dffd7147d57909d46ed6f6"
  },
  {
    "url": "examples/helper-literals.html",
    "revision": "028c44aacf466f7f2c2eb7be8d59b323"
  },
  {
    "url": "examples/helper-multiple-parameters.html",
    "revision": "91cfa58902f886b156a9c76f50bbcac5"
  },
  {
    "url": "examples/helper-safestring.html",
    "revision": "8c89adb4adab471369a64d27be139391"
  },
  {
    "url": "examples/helper-simple.html",
    "revision": "ba532abdb570c1b8a3447df614bf1b1a"
  },
  {
    "url": "examples/helper-this-context.html",
    "revision": "398617a768055c4fed59039ec23a1451"
  },
  {
    "url": "examples/html-escaping.html",
    "revision": "a8fbf5f321072acc180b13b60f10a5cb"
  },
  {
    "url": "examples/literal-segments.html",
    "revision": "4876fc951a4b9bbe99aae967299fccbc"
  },
  {
    "url": "examples/partials-register.html",
    "revision": "aaf81f75c72c7326c5e766ba31fa6a70"
  },
  {
    "url": "examples/partials.html",
    "revision": "874476c9b61e46abfb5e88ced053349f"
  },
  {
    "url": "examples/path-expressions-dot-dot-if.html",
    "revision": "83399147daef92d39707e859313a16f8"
  },
  {
    "url": "examples/path-expressions-dot-dot.html",
    "revision": "33fcdd46d33d8e0a1db47b6d4328eff9"
  },
  {
    "url": "examples/path-expressions-dot.html",
    "revision": "4bbdbe6df15af002d7f7498e8394ec63"
  },
  {
    "url": "examples/path-expressions-slash.html",
    "revision": "4a126b489f8a8b13d9f123f5a514c2ff"
  },
  {
    "url": "examples/raw-blocks.html",
    "revision": "8183d614e37e0b8be7c12b47f1e1c3fe"
  },
  {
    "url": "examples/simple-expressions.html",
    "revision": "952b3a123576485101a640e4dc6aabd9"
  },
  {
    "url": "guide/block-helpers.html",
    "revision": "34b379bb651f095319664b181436b78d"
  },
  {
    "url": "guide/builtin-helpers.html",
    "revision": "7963e55a2d835c31f1688b7920768729"
  },
  {
    "url": "guide/expressions.html",
    "revision": "4db832e29c97295a8a92d91910e4ade2"
  },
  {
    "url": "guide/index.html",
    "revision": "6c8bc607d355ce0552db329298b3514c"
  },
  {
    "url": "guide/partials.html",
    "revision": "9532ca7991f4fb7343ab53871f1951f6"
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
    "revision": "4684b69954ba60aa192ba7e99789fc1b"
  },
  {
    "url": "installation/index.html",
    "revision": "6ab01ce2a451f81f7bd5439e7cc2bcfd"
  },
  {
    "url": "installation/integrations.html",
    "revision": "cabd00a52f7db50e697e3f04fb0c5f71"
  },
  {
    "url": "installation/precompilation.html",
    "revision": "176d2834d9a65b72abe4ea67f1f19e9f"
  },
  {
    "url": "installation/when-to-use-handlebars.html",
    "revision": "e3f31b907597e5c64e2314e5a49b39d2"
  },
  {
    "url": "playground.html",
    "revision": "eb93967c494d048166249c734ec8de2f"
  },
  {
    "url": "topics/attic.html",
    "revision": "2de9f147b2ecfcf47c42fee7be29a716"
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
