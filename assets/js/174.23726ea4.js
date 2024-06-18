(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{648:function(t,e,a){"use strict";a.r(e);var s=a(53),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"运行时参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行时参数"}},[t._v("#")]),t._v(" 运行时参数")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("'Handlebars.compile' 与 'Handlebars.precompile' 函数构造了另一个函数。构造的函数可以用 "),a("code",[t._v("template(context, options)")]),t._v(" 调用\n。"),a("code",[t._v("context")]),t._v(" 是输入的对象。")]),t._v(" "),a("p",[a("code",[t._v("options")]),t._v(" 是可能具有以下属性的对象：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data")]),t._v(" 输入一个对象以设定自定义的 "),a("code",[t._v("@variable")]),t._v(" 的私有值。")]),t._v(" "),a("li",[a("code",[t._v("helpers")]),t._v(" 输入以提供自定义助手代码以及全局的助手代码。在模版运行时，本项所定义的值将会替换全局对象所定义的任何值。")]),t._v(" "),a("li",[a("code",[t._v("partials")]),t._v(" 输入以提供自定义代码片段以及全局定义的代码片段。在模版运行时，本项所定义的值将会替换全局对象所定义的任何值\n。")]),t._v(" "),a("li",[a("code",[t._v("allowCallsToHelperMissing")]),t._v(" （从 4.3.0 开始, 不安全）：如果设置为 "),a("code",[t._v("true")]),t._v("，类似 "),a("code",[t._v("{{helperMissing}}")]),t._v(" 或\n"),a("code",[t._v("{{blockHelperMissing}}")]),t._v(" 的调用将会被允许。请注意，这允许模版作者假造模版并在运行 Handlebars 的环境下远程执行代码。（\n见https://github.com/handlebars-lang/handlebars.js/issues/1558）")])])]),a("h2",{attrs:{id:"控制原型访问的选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制原型访问的选项"}},[t._v("#")]),t._v(" 控制原型访问的选项")]),t._v(" "),a("p",[t._v("从 4.6.0 版本开始，由于各种安全原因， Handlebars 默认禁止访问原型的属性以及上下文对象的方法。以下选项可以用来控制原型的\n可访问性。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("使用以下选项有安全风险。")]),t._v(" "),a("p",[t._v("允许这些属性可能会使得模版作者可以在运行 Handlebars 的机器上执行任意代码。尽管有限制，攻击者还是可能假造模版并且使得机器\n崩溃。")]),t._v(" "),a("p",[t._v("详细情况可以在 npm-security 中以及博客文章中找到（英文文档）：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/advisories/1164",target:"_blank",rel:"noopener noreferrer"}},[t._v("1164"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"https://www.npmjs.com/advisories/1316",target:"_blank",rel:"noopener noreferrer"}},[t._v("1316"),a("OutboundLink")],1),t._v("，\n"),a("a",{attrs:{href:"https://www.npmjs.com/advisories/1324",target:"_blank",rel:"noopener noreferrer"}},[t._v("1324"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://www.npmjs.com/advisories/1325",target:"_blank",rel:"noopener noreferrer"}},[t._v("1325"),a("OutboundLink")],1),t._v(" 以及博客文章\n"),a("a",{attrs:{href:"http://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mahmoud Gamal"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("allowProtoMethodsByDefault")]),t._v(" （自 4.7.0 开始）：默认为 false 的布尔值，定义了在对象的原型中定义的方法是否可以被解析。")]),t._v(" "),a("p",[t._v("即使本项被设置为 "),a("code",[t._v("true")]),t._v("，"),a("code",[t._v("constructor")]),t._v("，"),a("code",[t._v("__defineGetter__")]),t._v("，"),a("code",[t._v("__defineSetter__")]),t._v("，"),a("code",[t._v("__lookupGetter__")]),t._v(" 与\n"),a("code",[t._v("__lookupSetter__")]),t._v(" 还是会被禁止。只有在 "),a("code",[t._v("allowedProtoMethods")]),t._v(" 内对应键被设置为 "),a("code",[t._v("true")]),t._v(" 时，以上方法才可以被访问。")]),t._v(" "),a("p",[t._v("对本项给定任何值都会禁止 Handlebars 在一个 proto-method-access 尝试并失败的情况下向控制台写入警告。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("allowedProtoMethods")]),t._v(" （自 4.6.0 开始）：一个储存「字符串-布尔」类型的映射表。若「属性-名称」是父对象的方法，则将会被\n包含在表中。若未定义，将会使用　"),a("code",[t._v("allowProtoMethodsByDefault")]),t._v(" 内定义的值。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("allowProtoPropertiesByDefault")]),t._v(" （自 4.7.0 开始）：默认为 false 的布尔变量。决定了在对象原型中定义的非方法的属性是否可\n以被解析。")]),t._v(" "),a("p",[t._v("即使该选项被设定为 "),a("code",[t._v("true")]),t._v("，属性 "),a("code",[t._v("__proto__")]),t._v(" 依旧会被禁止。只有 "),a("code",[t._v("allowedProtoProperties")]),t._v(" 中的对应键值被设定为 "),a("code",[t._v("true")]),t._v(" 的\n时候它才能被访问。")]),t._v(" "),a("p",[t._v("对本项给定任何值都会禁止 Handlebars 在一个 proto-method-access 尝试并失败的情况下向控制台写入警告。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("allowedProtoProperties")]),t._v(" （自 4.6.0 开始）：一个储存「字符串-布尔」类型的映射表。若一个属性不是父对象的方法，则「属性-\n名称」对将会被包含在这个表里。若未定义，将会使用 "),a("code",[t._v("allowProtoPropertiesByDefault")]),t._v(" 内定义的值。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" handlebars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{aString.trim}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("aString")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  abc  "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result is empty, because trim is defined at String prototype")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" handlebars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{aString.trim}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("aString")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  abc  "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("allowedProtoMethods")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("trim")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result = 'abc'")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("如果你在某些地方无法传递运行时选项，例如在 "),a("a",{attrs:{href:"https://www.npmjs.com/package/express-handlebars",target:"_blank",rel:"noopener noreferrer"}},[t._v("express-handlebars"),a("OutboundLink")],1),t._v(" 的情况\n下，你也可以使用这个包：\n"),a("a",{attrs:{href:"https://www.npmjs.com/package/@handlebars/allow-prototype-access",target:"_blank",rel:"noopener noreferrer"}},[t._v("@handlebars/allow-prototype-access"),a("OutboundLink")],1),t._v(" 使 Handlebars 回\n退到 4.5.3 时的表现。")])])}),[],!1,null,null,null);e.default=r.exports}}]);