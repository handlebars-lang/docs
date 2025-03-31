import{_ as e,c as a,o as i,aj as t}from"./chunks/framework.BFa_AUiY.js";const c=JSON.parse('{"title":"런타임 옵션","description":"","frontmatter":{},"headers":[],"relativePath":"ko/api-reference/runtime-options.md","filePath":"ko/api-reference/runtime-options.md","lastUpdated":1695492225000}'),l={name:"ko/api-reference/runtime-options.md"};function n(p,s,r,o,h,d){return i(),a("div",null,s[0]||(s[0]=[t(`<h1 id="런타임-옵션" tabindex="-1">런타임 옵션 <a class="header-anchor" href="#런타임-옵션" aria-label="Permalink to &quot;런타임 옵션&quot;">​</a></h1><div><p><code>Handlebars.compile</code> 및 <code>Handlebars.precompile</code> 함수는 함수를 생성합니다. 이 함수는 <code>template(context, options)</code>로 호출 될수 있으며, 여기서 <code>context</code>는 입력 객체입니다.</p><p><code>options</code> 는 다음 속성을 가질 수 있는 객체입니다.</p><ul><li><code>data</code> : 사용자 정의 <code>@variable</code> 프라이빗 변수를 정의하기 위해 객체를 전달합니다.</li><li><code>helpers</code> 전역적으로 정의된 헬퍼 외에 사용자 정의 헬퍼를 제공하기 위해 전달합니다. 이 객체에 정의된 값은 템플릿 실행동 안 전역 객체에 정의된 값을 대체합니다.</li><li><code>partials</code> 전역적으로 정의된 부분 템플릿 외에 사용자 정의 부분 템플릿을 제공하기 위해 전달합니다. 이 객체에 정의된 값 은 템플릿 실행 동안 전역 객체에 정의된 값을 대체합니다.</li><li><code>allowCallsToHelperMissing</code>(4.3.0 이후, 안전하지 않음)：<code>true</code>로 설정하면 <code>{{helperMissing}}</code> 및 <code>{{blockHelperMissing}}</code>와 같은 호출이 허용됩니다. 이 옵션을 설정하면 템플릿 작성자가 Handlebars를 실행하는 환경에서원 격 코드 실행을 위한 템플릿을 제작할 수 있으므로 주의해야 합니다 (자세한 내용은 여기를 참조하세요 <a href="https://github.com/handlebars-lang/handlebars.js/issues/1558" target="_blank" rel="noreferrer">https://github.com/handlebars-lang/handlebars.js/issues/1558</a>).</li></ul></div><h2 id="프로토타입-접근을-제어하는-옵션" tabindex="-1">프로토타입 접근을 제어하는 옵션 <a class="header-anchor" href="#프로토타입-접근을-제어하는-옵션" aria-label="Permalink to &quot;프로토타입 접근을 제어하는 옵션&quot;">​</a></h2><p>버전 4.6.0부터 Handlebars는 기본적으로 컨텍스트 객체의 프로토타입 속성 및 메서드에 대한 접근을 금지합니다. 이는 이러한가 능성에서 발생하는 다양한 보안 문제 때문입니다. 다음 옵션을 사용하여 이 접근을 제어할 수 있습니다.</p><div class="danger custom-block"><p class="custom-block-title">이러한 속성을 사용하는 것은 보안 허점을 열 수 있습니다.</p><p>프로토타입 속성을 허용하면 템플릿 작성자가 Handlebars가 실행되는 환경에서 임의의 코드를 실행할 수 있습니다. 일부 제한이 있더라도 공격자는 Handlebars 템플릿을 제작하여 머신을 충돌시킬 수 있습니다.</p><p>자세한 내용은 npm 보안 권고 <a href="https://www.npmjs.com/advisories/755" target="_blank" rel="noreferrer">755</a>, <a href="https://www.npmjs.com/advisories/1164" target="_blank" rel="noreferrer">1164</a>, <a href="https://www.npmjs.com/advisories/1316" target="_blank" rel="noreferrer">1316</a>, <a href="https://www.npmjs.com/advisories/1324" target="_blank" rel="noreferrer">1324</a> 및 <a href="https://www.npmjs.com/advisories/1325" target="_blank" rel="noreferrer">1325</a> 그리고 <a href="http://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html" target="_blank" rel="noreferrer">Mahmoud Gamal</a>의 블로그 기사를 참조 하세요.</p></div><ul><li><p><code>allowProtoMethodsByDefault</code>(4.7.0 이후)：기본적으로 객체의 프로토타입에 정의된 메서드가 해석 가능해야 하는지 여부를정 의하는 부울 값 (기본값: false).</p><p><code>constructor</code>，<code>__defineGetter__</code>，<code>__defineSetter__</code>，<code>__lookupGetter__</code>, <code>__lookupSetter__</code> 메서드는 이 옵션이 <code>true</code>로 설정되어 있어도 금지됩니다. 이러한 메서드는 allowedProtoMethods에서 해당 키가 <code>true</code>로 설정된 경우에만 접근할 수 있습니다.</p></li></ul><p>이 옵션을 설정하면 프로토타입 메서드 접근이 시도되고 금지되었을 때 Handlebars가 콘솔에 기록하는 경고를 비활성화합니다.</p><ul><li><p><code>allowedProtoMethods</code>(4.6.0 이후)：부모 객체의 메서드인 경우 허용되는 속성 이름의 문자열-부울 맵입니다. 정의되지 않은 값은 <code>allowProtoMethodsByDefault</code>에서 정의된 값으로 되돌아갑니다.</p></li><li><p><code>allowProtoPropertiesByDefault</code>(4.7.0 이후)：본적으로 객체의 프로토타입에 정의된 비메서드 속성이 해석 가능해야 하는지 여부를 정의하는 부울 값 (기본값: false).</p></li></ul><p><code>__proto__</code> 속성은 이 옵션이 <code>true</code>로 설정되어 있어도 금지됩니다. 이 속성은 <code>allowedProtoProperties</code>에서 해당 키가 <code>true</code>로 설정된 경우에만 접근할 수 있습니다.</p><p>이 옵션을 설정하면 프로토타입 속성 접근이 시도되고 금지되었을 때 Handlebars가 콘솔에 기록하는 경고를 비활성화합니다.</p><ul><li><p><code>allowedProtoProperties</code>(4.6.0 이후): 부모 객체의 메서드가 아닌 속성인 경우 허용되는 속성 이름의 문자열-부울 맵입니다. 정의되지 않은 값은 <code>allowProtoPropertiesByDefault</code>에서 정의된 값으로 되돌아갑니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> handlebars.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{aString.trim}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ aString: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;  abc  &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// result is empty, because trim is defined at String prototype</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> handlebars.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{aString.trim}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { aString: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;  abc  &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    allowedProtoMethods: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      trim: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// result = &#39;abc&#39;</span></span></code></pre></div></li></ul><p>런타임 옵션을 전달할 수 없는 경우, <a href="https://www.npmjs.com/package/express-handlebars" target="_blank" rel="noreferrer">express-handlebars</a> 와 같은 경우에 는 <a href="https://www.npmjs.com/package/@handlebars/allow-prototype-access" target="_blank" rel="noreferrer">@handlebars/allow-prototype-access</a> 패키지를 사용 하여 4.5.3 버전의 동작으로 되돌릴 수 있습니다.</p>`,12)]))}const g=e(l,[["render",n]]);export{c as __pageData,g as default};
