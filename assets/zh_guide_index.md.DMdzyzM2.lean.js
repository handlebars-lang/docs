import{_ as h,C as r,c as o,o as d,j as a,G as s,aj as p,a as i,w as n}from"./chunks/framework.BFa_AUiY.js";const f=JSON.parse('{"title":"介绍","description":"","frontmatter":{"outline":[1,3]},"headers":[],"relativePath":"zh/guide/index.md","filePath":"zh/guide/index.md","lastUpdated":1695492225000}'),k={name:"zh/guide/index.md"};function m(u,e,x,b,g,E){const l=r("Example"),t=r("Flex");return d(),o("div",null,[e[0]||(e[0]=a("h1",{id:"介绍",tabindex:"-1"},[i("介绍 "),a("a",{class:"header-anchor",href:"#介绍","aria-label":'Permalink to "介绍"'},"​")],-1)),e[1]||(e[1]=a("h2",{id:"什么是-handlebars",tabindex:"-1"},[i("什么是 Handlebars？ "),a("a",{class:"header-anchor",href:"#什么是-handlebars","aria-label":'Permalink to "什么是 Handlebars？"'},"​")],-1)),e[2]||(e[2]=a("p",null,[i("Handlebars 是一种简单的 "),a("strong",null,"模板语言"),i("。")],-1)),e[3]||(e[3]=a("p",null,"它使用模板和输入对象来生成 HTML 或其他文本格式。Handlebars 模板看起来像常规的文本，但是它带有嵌入式的 Handlebars 表达式。",-1)),s(l,{examplePage:"/zh/examples/simple-expressions",show:"template"}),e[4]||(e[4]=p("",9)),s(l,{examplePage:"/zh/examples/simple-expressions",show:"template"}),e[5]||(e[5]=a("p",null,"如果应用于输入对象：",-1)),s(l,{examplePage:"/zh/examples/simple-expressions",show:"input"}),e[6]||(e[6]=a("p",null,"则表达式将被相应的属性替换。结果是：",-1)),s(l,{examplePage:"/zh/examples/simple-expressions",show:"output"}),e[7]||(e[7]=a("h3",{id:"嵌套输入对象",tabindex:"-1"},[i("嵌套输入对象 "),a("a",{class:"header-anchor",href:"#嵌套输入对象","aria-label":'Permalink to "嵌套输入对象"'},"​")],-1)),e[8]||(e[8]=a("p",null,"有时，输入对象包含其他对象或数组。例如：",-1)),s(l,{examplePage:"/zh/examples/path-expressions-dot",show:"input"}),e[9]||(e[9]=a("p",null,"在这种情况下，你可以使用点符号来访问嵌套属性：",-1)),s(l,{examplePage:"/zh/examples/path-expressions-dot",show:"template"}),e[10]||(e[10]=p("",5)),s(t,null,{default:n(()=>[s(l,{examplePage:"/zh/examples/builtin-helper-with-block",show:"template"}),s(l,{examplePage:"/zh/examples/builtin-helper-with-block",show:"input"})]),_:1}),e[11]||(e[11]=a("p",null,[a("code",null,"each"),i(" 助手代码会迭代一个数组，使你可以通过 Handlebars 简单访问每个对象的属性表达式。")],-1)),s(t,null,{default:n(()=>[s(l,{examplePage:"/zh/examples/builtin-helper-each-block",show:"template"}),s(l,{examplePage:"/zh/examples/builtin-helper-each-block",show:"input"})]),_:1}),e[12]||(e[12]=p("",3)),s(l,{examplePage:"/zh/examples/comments",show:"template"}),e[13]||(e[13]=a("h3",{id:"自定义助手",tabindex:"-1"},[i("自定义助手 "),a("a",{class:"header-anchor",href:"#自定义助手","aria-label":'Permalink to "自定义助手"'},"​")],-1)),e[14]||(e[14]=a("p",null,"通过调用 Handlebars.registerHelper 方法，你可以从模板中的任何上下文中访问 Handlebars 助手代码。",-1)),s(t,null,{default:n(()=>[s(l,{examplePage:"/zh/examples/helper-simple",show:"template"}),s(l,{examplePage:"/zh/examples/helper-simple",show:"preparationScript"})]),_:1}),e[15]||(e[15]=a("p",null,[i("助手代码将当前上下文作为函数的 "),a("code",null,"this"),i(" 指针接收。")],-1)),s(t,null,{default:n(()=>[s(l,{examplePage:"/zh/examples/helper-this-context",show:"template"}),s(l,{examplePage:"/zh/examples/helper-this-context",show:"preparationScript"})]),_:1}),e[16]||(e[16]=a("h3",{id:"块助手代码",tabindex:"-1"},[i("块助手代码 "),a("a",{class:"header-anchor",href:"#块助手代码","aria-label":'Permalink to "块助手代码"'},"​")],-1)),e[17]||(e[17]=a("p",null,[i("代码块表达式使你可以自定义这样的助手代码：这个助手代码可以使用与当前上下文不同的上下文来调用模板。这些块助手代码在名称前以 # 号标识，并且需要一个名称相同的结束模板 "),a("code",null,"/"),i("。让我们考虑一个生成 HTML 列表的助手代码：")],-1)),s(l,{examplePage:"/zh/examples/helper-block",show:"preparationScript"}),e[18]||(e[18]=a("p",null,[i("这个示例创建了一个名为 "),a("code",null,"list"),i(" 的助手代码来生成我们的 HTML 列表。助手代码接收一个 "),a("code",null,"people"),i(" 参数和一个 "),a("code",null,"options"),i(" 参数。"),a("code",null,"options"),i(" 包含一个名为 "),a("code",null,"fn"),i(" 的属性，这个属性使你能够像调用普通的 Handlebars 模板一样调用代码块的上下文。")],-1)),e[19]||(e[19]=a("p",null,"执行后，模板将渲染：",-1)),s(l,{examplePage:"/zh/examples/helper-block",show:"output"}),e[20]||(e[20]=p("",5)),s(l,{examplePage:"/zh/examples/html-escaping",show:"template"}),e[21]||(e[21]=a("p",null,"第二行中的特殊字符将被转义：",-1)),s(l,{examplePage:"/zh/examples/html-escaping",show:"output"}),e[22]||(e[22]=a("p",null,[i("Handlebars 不会转义 "),a("code",null,"Handlebars.SafeString"),i("。如果你正在编写一个自己的生成 HTML 的助手代码，你通常会想返回一个 "),a("code",null,"new Handlebars.SafeString(result)"),i("。这种情况下，你将需要手动转义参数。")],-1)),s(l,{examplePage:"/zh/examples/helper-safestring",show:"preparationScript"}),e[23]||(e[23]=a("p",null,"这将转义传入的参数，但是 response 会被标记为 safe，因此即使未使用“三重隐藏”， Handlebars 也不会尝试转义它。",-1)),e[24]||(e[24]=a("div",{class:"warning custom-block"},[a("p",{class:"custom-block-title"},"WARNING"),a("p",null,"Handlebars 不会转义 JavaScript 字串。使用 Handlebars 生成 JavaScript（例如内联事件处理程序），可能会产生跨域脚本攻击漏洞。")],-1)),e[25]||(e[25]=a("h3",{id:"代码片段",tabindex:"-1"},[i("代码片段 "),a("a",{class:"header-anchor",href:"#代码片段","aria-label":'Permalink to "代码片段"'},"​")],-1)),e[26]||(e[26]=a("p",null,[i("Handlebars 代码片段通过创建共享模板允许代码复用。你可以使用 "),a("code",null,"registerPartial"),i(" 方法：")],-1)),s(l,{examplePage:"/zh/examples/partials/register",show:"preparationScript"}),e[27]||(e[27]=a("p",null,"以下模板和输入：",-1)),s(t,null,{default:n(()=>[s(l,{examplePage:"/zh/examples/partials/register",show:"template"}),s(l,{examplePage:"/zh/examples/partials/register",show:"input"})]),_:1}),e[28]||(e[28]=a("p",null,"将渲染得到以下结果：",-1)),s(l,{examplePage:"/zh/examples/partials/register",show:"output"}),e[29]||(e[29]=p("",7))])}const H=h(k,[["render",m]]);export{f as __pageData,H as default};
