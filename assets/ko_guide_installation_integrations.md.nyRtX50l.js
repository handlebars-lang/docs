import{_ as e,c as s,o as i,aj as l}from"./chunks/framework.BFa_AUiY.js";const k=JSON.parse('{"title":"통합","description":"","frontmatter":{},"headers":[],"relativePath":"ko/guide/installation/integrations.md","filePath":"ko/guide/installation/integrations.md","lastUpdated":1695492225000}'),p={name:"ko/guide/installation/integrations.md"};function r(n,a,t,h,d,o){return i(),s("div",null,a[0]||(a[0]=[l('<h1 id="통합" tabindex="-1">통합 <a class="header-anchor" href="#통합" aria-label="Permalink to &quot;통합&quot;">​</a></h1><p>다음 패키지들은 다양한 환경에서 Handlebars를 통합합니다. 이 패키지들은 Handlebars 팀에 의해 <strong>공식으로 지원되지 않습니 다</strong>.</p><p>Webpack 환경에서 Handlebars를 사용할 수 있게 해주는 여러 Webpack 플러그인이 있습니다.</p><h2 id="webpack-handlebars-loader" tabindex="-1">Webpack: handlebars-loader <a class="header-anchor" href="#webpack-handlebars-loader" aria-label="Permalink to &quot;Webpack: handlebars-loader&quot;">​</a></h2><p><a href="https://github.com/pcardune/handlebars-loader" target="_blank" rel="noreferrer">handlebars-loader</a> 는 <a href="./precompilation.html">precompiled</a> 템플릿을 import 할 수 있게 해줍니다. handlebars 템플릿을 <code>template.handlebars</code> 파일에 작성하세요. 그리고</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> compiledTemplate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./template.handlebars&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>또는</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> compiledTemplate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./template.handlebars&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>를 사용해 임포트하세요.</p><h2 id="webpack-handlebars-webpack-plugin" tabindex="-1">Webpack: handlebars-webpack-plugin <a class="header-anchor" href="#webpack-handlebars-webpack-plugin" aria-label="Permalink to &quot;Webpack: handlebars-webpack-plugin&quot;">​</a></h2><p><a href="https://github.com/sagold/handlebars-webpack-plugin" target="_blank" rel="noreferrer">handlebars-webpack-plugin</a>는 애플리케이션을 컴파일할 때 Handlebars 를 사용하여 HTML 페이지를 정적으로 빌드합니다.</p><h2 id="webpack-html-bundler-webpack-plugin" tabindex="-1">Webpack: html-bundler-webpack-plugin <a class="header-anchor" href="#webpack-html-bundler-webpack-plugin" aria-label="Permalink to &quot;Webpack: html-bundler-webpack-plugin&quot;">​</a></h2><p><a href="https://github.com/webdiscus/html-bundler-webpack-plugin" target="_blank" rel="noreferrer">html-bundler-webpack-plugin</a> 은 <a href="https://github.com/webdiscus/html-bundler-webpack-plugin#using-the-handlebars" target="_blank" rel="noreferrer">Handlebars를 포함한</a> 다양한 템플릿 엔진 을사용하여 템플릿을 렌더링하고 생성된 HTML에 스타일 및 스크립트를 번들링합니다.</p><h2 id="babel-handlebars-inline-precompile" tabindex="-1">Babel: handlebars-inline-precompile <a class="header-anchor" href="#babel-handlebars-inline-precompile" aria-label="Permalink to &quot;Babel: handlebars-inline-precompile&quot;">​</a></h2><p><a href="https://github.com/jamiebuilds/babel-plugin-handlebars-inline-precompile" target="_blank" rel="noreferrer">babel-plugin-handlebars-inline-precompile</a> JavaScript 소스 코드에서 템플릿 리터럴로 제공되는 Handlebars 템플릿을 사전 컴파일합니다:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hbs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;handlebars-inline-precompile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> compiledTemplate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hbs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`{{name}}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>설치 지침은 패키지의 문서를 참조하십시오.</p><h2 id="browserify-hbsfy" tabindex="-1">Browserify: hbsfy <a class="header-anchor" href="#browserify-hbsfy" aria-label="Permalink to &quot;Browserify: hbsfy&quot;">​</a></h2><p><a href="https://www.npmjs.com/package/hbsfy" target="_blank" rel="noreferrer">hbsfy</a> 패키지를 사용하면 browserify 환경에서 사전 컴파일된 템플릿을 가져올 수 있습 니다：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> compiledTemplate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./template.handlebars&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="parcel-parcel-plugin-handlebars" tabindex="-1">Parcel：parcel-plugin-handlebars <a class="header-anchor" href="#parcel-parcel-plugin-handlebars" aria-label="Permalink to &quot;Parcel：parcel-plugin-handlebars&quot;">​</a></h2><p>Parcel용 옛 플러그인이 있습니다 : <a href="https://www.npmjs.com/package/parcel-plugin-handlebars" target="_blank" rel="noreferrer">https://www.npmjs.com/package/parcel-plugin-handlebars</a></p><p>그러나 더 최신 상태인 여러 패키지 중 하나를 사용하는 것이 좋습니다： <a href="https://www.npmjs.com/search?q=parcel-plugin-handlebars" target="_blank" rel="noreferrer">https://www.npmjs.com/search?q=parcel-plugin-handlebars</a></p><p>가장 최신 버전： <a href="https://www.npmjs.com/package/@inventory/parcel-plugin-handlebars" target="_blank" rel="noreferrer">https://www.npmjs.com/package/@inventory/parcel-plugin-handlebars</a></p><h2 id="parcel-parcel-plugin-handlebars-precompile" tabindex="-1">Parcel：parcel-plugin-handlebars-precompile <a class="header-anchor" href="#parcel-parcel-plugin-handlebars-precompile" aria-label="Permalink to &quot;Parcel：parcel-plugin-handlebars-precompile&quot;">​</a></h2><p>TODO: 여기에 텍스트를 작성하세요</p><p><a href="https://www.npmjs.com/package/parcel-plugin-handlebars-precompile" target="_blank" rel="noreferrer">https://www.npmjs.com/package/parcel-plugin-handlebars-precompile</a></p>',27)]))}const b=e(p,[["render",r]]);export{k as __pageData,b as default};
