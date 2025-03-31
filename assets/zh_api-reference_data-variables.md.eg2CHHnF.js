import{_ as a,c as i,o as e,aj as h}from"./chunks/framework.BFa_AUiY.js";const c=JSON.parse('{"title":"@data 变量","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api-reference/data-variables.md","filePath":"zh/api-reference/data-variables.md","lastUpdated":1695492225000}'),t={name:"zh/api-reference/data-variables.md"};function l(n,s,p,k,d,r){return e(),i("div",null,s[0]||(s[0]=[h('<h1 id="data-变量" tabindex="-1"><code>@data</code> 变量 <a class="header-anchor" href="#data-变量" aria-label="Permalink to &quot;`@data` 变量&quot;">​</a></h1><p>下面的<code>@data</code>变量是由 Handlebars 及其内建助手代码实现的。</p><h2 id="root" tabindex="-1"><code>@root</code> <a class="header-anchor" href="#root" aria-label="Permalink to &quot;`@root`&quot;">​</a></h2><p>初始化模版被执行时的上下文。</p><div class="language-handlebars vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">handlebars</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#each</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> array</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">@root.foo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/each</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span></span></code></pre></div><p>除非特意改变，对于页面渲染时的每一部分，本项的值恒定。因此，当深度参数不能够引用它们的父模版时，本项可以在代码片段内使用。</p><h2 id="first" tabindex="-1"><code>@first</code> <a class="header-anchor" href="#first" aria-label="Permalink to &quot;`@first`&quot;">​</a></h2><p>本项会被 <code>each</code> 助手代码在迭代的第一步被设置为 true。</p><div class="language-handlebars vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">handlebars</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#each</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> array</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#if</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> @first</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> First! </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/each</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span></span></code></pre></div><h2 id="index" tabindex="-1"><code>@index</code> <a class="header-anchor" href="#index" aria-label="Permalink to &quot;`@index`&quot;">​</a></h2><p>从零开始的编号，表示当前的迭代次数。由 <code>each</code> 助手代码设置。</p><div class="language-handlebars vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">handlebars</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#each</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> array</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">@index</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/each</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span></span></code></pre></div><h2 id="key" tabindex="-1"><code>@key</code> <a class="header-anchor" href="#key" aria-label="Permalink to &quot;`@key`&quot;">​</a></h2><p>当前迭代次数的键。在遍历对象时被 <code>each</code> 助手代码设置。</p><div class="language-handlebars vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">handlebars</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#each</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> array</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">@key</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/each</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span></span></code></pre></div><h2 id="last" tabindex="-1"><code>@last</code> <a class="header-anchor" href="#last" aria-label="Permalink to &quot;`@last`&quot;">​</a></h2><p>在迭代的最后一步被 <code>each</code> 助手代码设置为 true。</p><div class="language-handlebars vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">handlebars</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#each</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> array</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#if</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> @last</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Last :( </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/each</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}}</span></span></code></pre></div><h2 id="level" tabindex="-1"><code>@level</code> <a class="header-anchor" href="#level" aria-label="Permalink to &quot;`@level`&quot;">​</a></h2><p>设定 log 的输出级别。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}, { data: { level: Handlebars.logger.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WARN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } });</span></span></code></pre></div><p>可以为以下值：<code>Handlebars.logger.DEBUG</code>，<code>Handlebars.logger.INFO</code>，<code>Handlebars.logger.WARN</code> 或者 <code>Handlebars.logger.ERROR</code></p><p>当设定时，程序会按照设定的级别选择输出的信息。默认值为 <code>Handlebars.logger.ERROR</code>。</p>',23)]))}const g=a(t,[["render",l]]);export{c as __pageData,g as default};
