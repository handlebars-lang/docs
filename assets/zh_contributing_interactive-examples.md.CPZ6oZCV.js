import{_ as n,C as p,c as r,o as d,aj as s,G as a,j as l,a as o,w as c}from"./chunks/framework.BFa_AUiY.js";const E=JSON.parse('{"title":"创建交互式示例","description":"","frontmatter":{},"headers":[],"relativePath":"zh/contributing/interactive-examples.md","filePath":"zh/contributing/interactive-examples.md","lastUpdated":1695492225000}'),h={name:"zh/contributing/interactive-examples.md"};function m(u,e,x,g,b,_){const t=p("Example"),i=p("Flex");return d(),r("div",null,[e[0]||(e[0]=s('<h1 id="创建交互式示例" tabindex="-1">创建交互式示例 <a class="header-anchor" href="#创建交互式示例" aria-label="Permalink to &quot;创建交互式示例&quot;">​</a></h1><p>我们可以定义交互式示例。示例或示例的一部分可以 <strong>嵌入任何页面</strong>。一种自动生成的链接使访问者可以在 <strong>Playground</strong> 中打开示例，在这里访问者可以更改模板，局部变量，输入等，并可以看到结果输出。</p><h2 id="创建示例" tabindex="-1">创建示例 <a class="header-anchor" href="#创建示例" aria-label="Permalink to &quot;创建示例&quot;">​</a></h2><p>为了定义示例，请在 <code>examples</code> 目录中创建一个新的 Markdown 文件。示例数据在引用示例页面的索引处。参见 <a href="./../../examples/all-features.html">all-features-example-raw</a> 演示所有功能。</p><p>支持以下 Frontmatter 属性：</p><p>-<code>layout</code>: 必须始终为 <code>InteractivePlaygroundLayout</code> -<code>example</code>: 包含示例   -<code>template</code>: 主 Handlebars 模板   -<code>partials</code>: 一个对象，每个注册的代码片段都具有该属性，键是 partial-name，值是 partial content   -<code>preparationScript</code>: 在编译和运行模板之前执行的脚本。<code>Handlebars</code> 可      作为此脚本中的全局变量。   -<code>input</code>: 作为嵌入式 YAML 对象的模板。  -<code>errorExpected</code>: 一个布尔值（默认值： <code>false</code>），它指定此示例是否应抛出错误。通过      默认情况下，在执行过程中引发错误的示例会导致整个网站的构建失败。如果你需要创建一个      描述错误的示例，您需要将此选项设置为 <code>true</code>。</p><p>使用最新版本的 Handlebars 自动渲染示例的输出。</p><h2 id="示例数据" tabindex="-1">示例数据 <a class="header-anchor" href="#示例数据" aria-label="Permalink to &quot;示例数据&quot;">​</a></h2><p>如果可能的话，示例应该使用通用数据集中提供的变量。因此，文件 <a href="https://github.com/handlebars-lang/docs/blob/master/src/_examples/_example-base-data.yaml" target="_blank" rel="noreferrer">src/_examples/_example-base-data.yaml</a> 包含了可重复使用并适用于每个示例的数据。如果该文件中的数据不足，请添加新的数据，但请确保它们之间存在关联。</p><h2 id="嵌入示例" tabindex="-1">嵌入示例 <a class="header-anchor" href="#嵌入示例" aria-label="Permalink to &quot;嵌入示例&quot;">​</a></h2><p><code>&lt;ExamplePart&gt;</code> 组件允许您在当前段落中显示示例的一部分。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;Example examplePage=&quot;/zh/examples/builtin-helper-each-block&quot; show=&quot;template&quot;/&gt;</span></span></code></pre></div><p>将渲染</p>',13)),a(t,{examplePage:"/zh/examples/builtin-helper-each-block",show:"template"}),e[1]||(e[1]=s("<p>该组件的属性有：</p><ul><li><code>examplePage</code>: src 文件夹下面的示例页面的路径</li><li><code>show</code>: 示例中应插入页面的部分。可能为 <code>template</code>，<code>input</code>，   <code>output</code>, <code>error</code>, <code>preparationScript</code> 或 <code>partial</code></li><li><code>name</code> （可选）: 仅当<code>show =“ partial”</code>时才需要此道具。它定义了应该是的部分名称    插入到示例中。</li></ul><p>如果您想将示例的各个部分嵌入流文本中，则该组件非常有用。您可以插入输入的 JSON 使用 <code>&lt;Example examplePage=&quot;/zh/examples/all-features&quot; show=&quot;input&quot; /&gt;</code>，以下代码段将出现在页面中：</p>",3)),a(t,{examplePage:"/zh/examples/all-features",show:"input"}),e[2]||(e[2]=l("p",null,[o("然后，为了向读者显示模板，您可以将 "),l("code",null,'show="template"'),o(" 与相同的 "),l("code",null,"examplePage"),o(" 一起使用。")],-1)),a(t,{examplePage:"/zh/examples/all-features",show:"template"}),e[3]||(e[3]=l("p",null,[o("您可以使用例如 "),l("code",null,"show=partial"),o(" 和 "),l("code",null,"name=person"),o("来局部渲染。")],-1)),a(t,{examplePage:"/zh/examples/all-features",show:"partial",name:"person"}),e[4]||(e[4]=l("p",null,"如果您有助手代码的示例，则可能还需要包括脚本：",-1)),a(t,{examplePage:"/zh/examples/all-features",show:"preparationScript"}),e[5]||(e[5]=s(`<h2 id="水平布局" tabindex="-1">水平布局 <a class="header-anchor" href="#水平布局" aria-label="Permalink to &quot;水平布局&quot;">​</a></h2><p>如果要水平放置两个示例部件，则可以使用 <code>&lt;Flex&gt;</code> 组件。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;Flex&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;Example examplePage=&quot;/zh/examples/builtin-helper-each-block&quot; show=&quot;template&quot;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;Example examplePage=&quot;/zh/examples/builtin-helper-each-block&quot; show=&quot;input&quot;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/Flex&gt;</span></span></code></pre></div><p>将渲染</p>`,4)),a(i,null,{default:c(()=>[a(t,{examplePage:"/zh/examples/builtin-helper-each-block",show:"template"}),a(t,{examplePage:"/zh/examples/builtin-helper-each-block",show:"input"})]),_:1})])}const P=n(h,[["render",m]]);export{E as __pageData,P as default};
