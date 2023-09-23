# 介绍

## 什么是 Handlebars？

Handlebars 是一种简单的 **模板语言**。

它使用模板和输入对象来生成 HTML 或其他文本格式。Handlebars 模板看起来像常规的文本，但是它带有嵌入式的 Handlebars 表达
式。

<Example examplePage="/zh/examples/simple-expressions" show="template"/>

Handlebars 表达式是一个 <span v-pre>`{{`</span>，一些内容，后跟一个 `}}`。执行模板时，这些表达式会被输入对象中的值所替
换。

[了解更多: 表达式](expressions.md)

## 安装

测试 Handlebars 的最快方法是使用 _CDN_ 加载它并将其嵌入 HTML 文件中。

<<< @/snippets/compiler-and-runtime/simple-console-out.html

::: warning

此方法可用于小页面和测试用途。在生产环境中还有其他几种使用 Handlebars 的方法。

[了解更多: 安装](installation/index.md)

:::

# 语言特性

## 简单的表达式

如上文所示，以下模板定义了两个 Handlebars 表达式：

<Example examplePage="/zh/examples/simple-expressions" show="template"/>

如果应用于输入对象：

<Example examplePage="/zh/examples/simple-expressions" show="input"/>

则表达式将被相应的属性替换。结果是：

<Example examplePage="/zh/examples/simple-expressions" show="output"/>

## 嵌套输入对象

有时，输入对象包含其他对象或数组。例如：

<Example examplePage="/zh/examples/path-expressions-dot" show="input" />

在这种情况下，你可以使用点符号来访问嵌套属性：

<Example examplePage="/zh/examples/path-expressions-dot" show="template"/>

[了解更多: 表达式](expressions.md)

一些内置的助手代码允许你将当前上下文更改为嵌套对象。然后，你就可以像访问根对象一样访问该对象了。

## 计算上下文

内置的块助手代码 `each` 和 `with` 允许你更改当前代码块的值。

`with` 助手代码注入到对象的属性中，使你可以访问其属性。

<Flex>
<Example examplePage="/zh/examples/builtin-helper-with-block" show="template"/>
<Example examplePage="/zh/examples/builtin-helper-with-block" show="input"/>
</Flex>

`each` 助手代码会迭代一个数组，使你可以通过 Handlebars 简单访问每个对象的属性表达式。

<Flex>
<Example examplePage="/zh/examples/builtin-helper-each-block" show="template"/>
<Example examplePage="/zh/examples/builtin-helper-each-block" show="input"/>
</Flex>

[了解更多: 内置助手代码](builtin-helpers.md)

## 模板注释

::: v-pre

你可以像在其他语言的代码中一样在 Handlebars 代码中使用注释。由于 Handlebars 代码中通常存在一定程度的逻辑，因此这是一个好
习惯。

注释将不会出现在结果输出中。如果你想显示注释。只需使用 html 注释。它们将被输出。

任何包含 `}}` 或其他 Handlebars 标记的注释都应该使用 `{{!--}}` 语法。

:::

<Example examplePage="/zh/examples/comments" show="template"/>

## 自定义助手

通过调用 Handlebars.registerHelper 方法，你可以从模板中的任何上下文中访问 Handlebars 助手代码。

<Flex>
<Example examplePage="/zh/examples/helper-simple" show="template" />
<Example examplePage="/zh/examples/helper-simple" show="preparationScript" />
</Flex>

助手代码将当前上下文作为函数的 `this` 指针接收。

<Flex>
<Example examplePage="/zh/examples/helper-this-context" show="template" />
<Example examplePage="/zh/examples/helper-this-context" show="preparationScript" />
</Flex>

## 块助手代码

代码块表达式使你可以自定义这样的助手代码：这个助手代码可以使用与当前上下文不同的上下文来调用模板。这些块助手代码在名称前
以 # 号标识，并且需要一个名称相同的结束模板 `/`。让我们考虑一个生成 HTML 列表的助手代码：

<Example examplePage="/zh/examples/helper-block" show="preparationScript" />

这个示例创建了一个名为 `list` 的助手代码来生成我们的 HTML 列表。助手代码接收一个 `people` 参数和一个 `options` 参
数。`options` 包含一个名为 `fn` 的属性，这个属性使你能够像调用普通的 Handlebars 模板一样调用代码块的上下文。

执行后，模板将渲染：

<Example examplePage="/zh/examples/helper-block" show="output" />

块助手代码具有其他功能，例如能够创建 `else` （例如，由内置的 `if` 函数使用）

因为调用 `options.fn(context)` 时 Handlebars 会转义块助手代码的内容，因此 Handlebars 不会转义块助手代码的返回结果。如果
这样做，代码块内部的内容将被两次转义。

[了解更多: 块助手代码](block-helpers.md)

## HTML 转义

::: v-pre

因为 Handlebars 最初是设计用来生成 HTML 的，所以它会转义由 `{{expression}}` 返回的值。如果你不想让 Handlebars 转义某个
值，请使用“三重隐藏”（`{{{`）。

:::

<Example examplePage="/zh/examples/html-escaping" show="template" />

第二行中的特殊字符将被转义：

<Example examplePage="/zh/examples/html-escaping" show="output" />

Handlebars 不会转义 `Handlebars.SafeString`。如果你正在编写一个自己的生成 HTML 的助手代码，你通常会想返回一个
`new Handlebars.SafeString(result)`。这种情况下，你将需要手动转义参数。

<Example examplePage="/zh/examples/helper-safestring" show="preparationScript" />

这将转义传入的参数，但是 response 会被标记为 safe，因此即使未使用“三重隐藏”， Handlebars 也不会尝试转义它。

::: warning

Handlebars 不会转义 JavaScript 字串。使用 Handlebars 生成 JavaScript（例如内联事件处理程序），可能会产生跨域脚本攻击漏
洞。

:::

## 代码片段

Handlebars 代码片段通过创建共享模板允许代码复用。你可以使用 `registerPartial` 方法：

<Example examplePage="/zh/examples/partials/register" show="preparationScript" />

以下模板和输入：

<Flex>
<Example examplePage="/zh/examples/partials/register" show="template" />
<Example examplePage="/zh/examples/partials/register" show="input" />
</Flex>

将渲染得到以下结果：

<Example examplePage="/zh/examples/partials/register" show="output" />

[了解更多: 代码片段](partials.md)

## 内置助手代码

Handlebars 提供了各种内置助手代码，例如 `if` 条件代码块和 `each` 迭代器。

[了解更多: 内置助手代码](builtin-helpers.md)

## API 参考

Handlebars 为应用程序和助手代码提供了各种 API 和实用的方法。

[了解更多: API 参考](./../api-reference/index.md)
