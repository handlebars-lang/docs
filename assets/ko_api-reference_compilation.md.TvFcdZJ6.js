import{_ as a,c as s,o as i,aj as t}from"./chunks/framework.BFa_AUiY.js";const k=JSON.parse('{"title":"(사전) 컴파일","description":"","frontmatter":{},"headers":[],"relativePath":"ko/api-reference/compilation.md","filePath":"ko/api-reference/compilation.md","lastUpdated":1717630644000}'),l={name:"ko/api-reference/compilation.md"};function p(o,e,n,d,c,h){return i(),s("div",null,e[0]||(e[0]=[t('<h1 id="사전-컴파일" tabindex="-1">(사전) 컴파일 <a class="header-anchor" href="#사전-컴파일" aria-label="Permalink to &quot;(사전) 컴파일&quot;">​</a></h1><h2 id="handlebars-compile-template-options" tabindex="-1"><code>Handlebars.compile(template, options)</code> <a class="header-anchor" href="#handlebars-compile-template-options" aria-label="Permalink to &quot;`Handlebars.compile(template, options)`&quot;">​</a></h2><p>템플릿을 컴파일하여 즉시 실행할 수 있게 합니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Handlebars.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{foo}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({});</span></span></code></pre></div><p>템플릿 실행 방식을 변경하는 다양한 옵션을 지원합니다.</p><div><ul><li><code>data</code>: <code>@data</code> 추적을 비활성화하려면 false로 설정합니다.</li><li><code>compat</code>: 재귀 필드 조회를 활성화하려면 true로 설정합니다.</li><li><code>knownHelpers</code>: 템플릿 실행 시 존재하는 것으로 알려진 헬퍼 목록을 포함하는 해시입니다. 이를 전달하면 컴파일러가 여러 경우를 최적화할 수 있습니다. 내장 헬퍼는 이 목록에 자동으로 포함되며 값을 <code>false</code>로 설정하여 생략할 수 있습니다.</li><li><code>knownHelpersOnly</code>: 알려진 헬퍼 목록을 기반으로 추가 최적화를 허용하려면 true로 설정합니다.</li><li><code>noEscape</code>: HTML 이스케이프를 하지 않으려면 true로 설정합니다.</li><li><code>strict</code>: 엄격 모드에서 실행합니다. 이 모드에서는 누락된 필드를 묵인하지 않고 예외를 발생시킵니다. 이로 인해 <code>{{^foo}}{{/foo}}</code>와 같은 역 연산이 데이터 소스 객체에 명시적으로 포함되지 않으면 비활성화됩니다.</li><li><code>assumeObjects</code>: 경로를 탐색할 때 객체 존재 여부 확인을 제거합니다. 이는 데이터 입력이 안전하다고 알려진 경우 최적화된 템플릿을 생성하는 엄격 모드의 하위 집합입니다.</li><li><code>preventIndent</code>: 기본적으로 들여쓰기된 부분 템플릿 호출은 전체 부분 템플릿 출력이 동일한 양으로 들여쓰기되게 합니다. 이는 부분 템플릿이 <code>pre</code> 태그를 작성할 때 예기치 않은 동작을 초래할 수 있습니다. 이 옵션을 <code>true</code>로 설정하면 자동 들여 쓰기 기능이 비활성화됩니다.</li><li><code>ignoreStandalone</code>: 설정 시 독립 태그 제거를 비활성화합니다. 설정하면 블록과 부분 템플릿이 각자 줄에 있을 때 해당 줄의 공백을 제거하지 않습니다.</li><li><code>explicitPartialContext</code>: 부분 템플릿의 암시적 컨텍스트를 비활성화합니다. 활성화되면 컨텍스트 값을 전달받지 않은 부분 템플릿은 빈 객체를 대상으로 실행됩니다.</li></ul></div><h2 id="handlebars-precompile-template-options" tabindex="-1"><code>Handlebars.precompile(template, options)</code> <a class="header-anchor" href="#handlebars-precompile-template-options" aria-label="Permalink to &quot;`Handlebars.precompile(template, options)`&quot;">​</a></h2><p>주어진 템플릿을 사전 컴파일하여 클라이언트로 전송한 후 컴파일 없이 실행할 수 있게 합니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> templateSpec </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Handlebars.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">precompile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{foo}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><code>Handlebars.compile</code> 메서드와 동일한 옵션 매개변수를 지원합니다. 추가적으로 다음을 전달할 수 있습니다:</p><ul><li><code>srcName</code>: 입력 파일의 소스 맵을 생성하기 위해 전달됩니다. 이렇게 실행되면 반환 구조는 <code>{code, map}</code>이며, <code>code</code>에는 템플릿 정의가 포함되고 <code>map</code>에는 소스 맵이 포함됩니다.</li><li><code>destName</code>: 소스 맵을 생성할 때 <code>srcName</code>과 함께 사용되는 선택적 매개변수로, 대상 파일 이름을 제공합니다.</li></ul><h2 id="handlebars-template-templatespec" tabindex="-1"><code>Handlebars.template(templateSpec)</code> <a class="header-anchor" href="#handlebars-template-templatespec" aria-label="Permalink to &quot;`Handlebars.template(templateSpec)`&quot;">​</a></h2><p><code>Handlebars.precompile</code>로 사전 컴파일된 템플릿을 설정합니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Handlebars.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(templateSpec);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({});</span></span></code></pre></div>',14)]))}const m=a(l,[["render",p]]);export{k as __pageData,m as default};
