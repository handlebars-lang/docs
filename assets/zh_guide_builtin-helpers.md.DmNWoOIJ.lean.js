import{_ as h,C as p,c as d,o,aj as t,G as s,j as e,a as i,w as r}from"./chunks/framework.BFa_AUiY.js";const y=JSON.parse('{"title":"内置助手代码","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/builtin-helpers.md","filePath":"zh/guide/builtin-helpers.md","lastUpdated":1695492225000}'),k={name:"zh/guide/builtin-helpers.md"};function u(g,l,m,b,x,F){const a=p("Example"),n=p("Flex");return o(),d("div",null,[l[0]||(l[0]=t("",3)),s(a,{examplePage:"/zh/examples/builtin-helper-if-block.md",show:"template"}),l[1]||(l[1]=e("p",null,"当你将以下输入传递给上述模板时",-1)),s(a,{examplePage:"/zh/examples/builtin-helper-if-block.md",show:"input"}),l[2]||(l[2]=e("p",null,"将得出如下结果：",-1)),s(a,{examplePage:"/zh/examples/builtin-helper-if-block.md",show:"output"}),l[3]||(l[3]=t("",3)),s(a,{examplePage:"/zh/examples/builtin-helper-ifelse-block.md",show:"template"}),l[4]||(l[4]=t("",7)),s(a,{examplePage:"/zh/examples/builtin-helper-if-subexpression.md",show:"preparationScript"}),l[5]||(l[5]=e("p",null,"然后将助手代码用作子表达式：",-1)),s(a,{examplePage:"/zh/examples/builtin-helper-if-subexpression.md",show:"template"}),l[6]||(l[6]=e("h2",{id:"unless",tabindex:"-1"},[i("#unless "),e("a",{class:"header-anchor",href:"#unless","aria-label":'Permalink to "#unless"'},"​")],-1)),l[7]||(l[7]=e("p",null,[i("你可以将 "),e("code",null,"unless"),i(" 助手代码看作与 "),e("code",null,"if"),i(" 助手代码相反。如果表达式返回 false 则将渲染代码块。")],-1)),s(a,{examplePage:"/zh/examples/builtin-helper-unless-block.md",show:"template"}),l[8]||(l[8]=e("p",null,[i("如果在当前上下文中查找 "),e("code",null,"license"),i(" 返回 false，则 Handlebars 将提供警告。除此以外，它不会进行渲染。")],-1)),l[9]||(l[9]=e("h2",{id:"each",tabindex:"-1"},[i("#each "),e("a",{class:"header-anchor",href:"#each","aria-label":'Permalink to "#each"'},"​")],-1)),l[10]||(l[10]=e("p",null,[i("你可以使用内置的 "),e("code",null,"each"),i(" 助手代码遍历列表。在块内，你可以使用 "),e("code",null,"this"),i(" 来引用被迭代的元素。")],-1)),s(a,{examplePage:"/zh/examples/builtin-helper-each-block.md",show:"template"}),l[11]||(l[11]=e("p",null,"当与此上下文一起使用时：",-1)),s(a,{examplePage:"/zh/examples/builtin-helper-each-block.md",show:"input"}),l[12]||(l[12]=e("p",null,"将导致：",-1)),s(a,{examplePage:"/zh/examples/builtin-helper-each-block.md",show:"output"}),l[13]||(l[13]=e("p",null,[i("你可以在任何上下文中使用 "),e("code",null,"this"),i(" 指针来引用当前上下文。")],-1)),l[14]||(l[14]=e("p",null,[i("你可以选择提供一个 "),e("code",null,"else"),i("，该代码块将只会在列表为空时显示。")],-1)),s(a,{examplePage:"/zh/examples/builtin-helper-eachelse-block.md",show:"template"}),l[15]||(l[15]=e("div",null,[e("p",null,[i("当遍历 "),e("code",null,"each"),i(" 中的项目时，你可以选择通过 "),e("code",null,"{{@index}}"),i(" 引用当前循环的索引。")]),e("div",{class:"language-handlebars vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"handlebars"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{{"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#each"),e("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," array"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}}"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," {{"),e("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"@index"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}}"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{{"),e("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"this"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}}"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," {{"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/each"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}}")])])])]),e("p",null,[i("此外，对于对象迭代，可以使用 "),e("code",null,"{{@key}}"),i(" 引用当前的键名：")]),e("div",{class:"language-handlebars vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"handlebars"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{{"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#each"),e("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," object"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}}"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," {{"),e("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"@key"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}}"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{{"),e("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"this"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}}"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," {{"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/each"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"}}")])])])])],-1)),l[16]||(l[16]=t("",4)),s(a,{examplePage:"/zh/examples/builtin-helper-with-block.md",show:"template"}),l[17]||(l[17]=e("p",null,"当与此上下文一起使用时：",-1)),s(a,{examplePage:"/zh/examples/builtin-helper-with-block.md",show:"input"}),l[18]||(l[18]=e("p",null,"将得到以下结果：",-1)),s(a,{examplePage:"/zh/examples/builtin-helper-with-block.md",show:"output"}),l[19]||(l[19]=e("p",null,[e("code",null,"with"),i(" 还可与代码块参数一起使用来以定义当前代码块中的已知引用。例如，上面的例子可以转换成")],-1)),s(a,{examplePage:"/zh/examples/builtin-helper-with-block-param.md",show:"template"}),l[20]||(l[20]=e("p",null,[i("这使得复杂的模板可以提供比 n "),e("code",null,"../"),i(" 深度引用更清晰的代码。")],-1)),l[21]||(l[21]=e("div",null,[e("p",null,[i("你可以选择提供一个 "),e("code",null,"{{else}}"),i(" ，该代码块仅在传递的值为空时渲染。")])],-1)),s(n,null,{default:r(()=>[s(a,{examplePage:"/zh/examples/builtin-helper-with-else.md",show:"template"}),s(a,{examplePage:"/zh/examples/builtin-helper-with-else.md",show:"input"})]),_:1}),l[22]||(l[22]=e("h2",{id:"lookup",tabindex:"-1"},[i("lookup "),e("a",{class:"header-anchor",href:"#lookup","aria-label":'Permalink to "lookup"'},"​")],-1)),l[23]||(l[23]=e("p",null,[e("code",null,"lookup"),i(" 助手代码允许使用 Handlebars 变量进行动态的参数解析。")],-1)),l[24]||(l[24]=e("p",null,"这对于解析数组索引的值非常有用。",-1)),s(a,{examplePage:"/zh/examples/builtin-helper-lookup.md",show:"template"}),l[25]||(l[25]=e("p",null,[i("它也可以用于基于输入的数据查找对象属性。以下是一个更复杂的示例：它在子表达式中使用 "),e("code",null,"lookup"),i(" 将上下文表达式更改为另一个 “属性-值” 的对象。")],-1)),s(a,{examplePage:"/zh/examples/builtin-helper-lookup-dynamic-property.md",show:"template"}),l[26]||(l[26]=e("h2",{id:"log",tabindex:"-1"},[i("log "),e("a",{class:"header-anchor",href:"#log","aria-label":'Permalink to "log"'},"​")],-1)),l[27]||(l[27]=e("p",null,[e("code",null,"log"),i(" 助手代码允许在执行模板时记录上下文的状态。")],-1)),s(a,{examplePage:"/zh/examples/builtin-helper-log.md",show:"template"}),l[28]||(l[28]=e("p",null,[i("它将委托给 "),e("code",null,"Handlebars.logger.log"),i(" ，而 "),e("code",null,"Handlebars.logger.log"),i(" 可以被覆盖以执行自定义日志记录。")],-1)),l[29]||(l[29]=e("p",null,"可以将任何数量的参数传递给此方法，并且所有参数都将转发给 logger。",-1)),s(a,{examplePage:"/zh/examples/builtin-helper-log-multiple-params.md",show:"template"}),l[30]||(l[30]=t("",2)),s(a,{examplePage:"/zh/examples/builtin-helper-log-loglevel.md",show:"template"})])}const C=h(k,[["render",u]]);export{y as __pageData,C as default};
