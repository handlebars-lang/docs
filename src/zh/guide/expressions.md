# 表达式

::: v-pre

Handlebars 表达式是 Handlebars 模板的基本单位。 您可以在 `{{mustache}}` 中单独使用它们或将它们用作 Handlebars 助手代码，
或将其用作 Hash 参数中的值。

:::

## 基本用法

Handlebars 表达式是一些以双花括号 `{{}}` 括起来的内容。在以下的模版中，`firstname` 是一个被声明为表达式的变量，且被双花
括号括起来。

<Example examplePage="/zh/examples/simple-expressions.md" show="template" />

如果将以下对象输入模板：

<Example examplePage="/zh/examples/simple-expressions.md" show="input" />

表达式会编译为如下输出：

<Example examplePage="/zh/examples/simple-expressions.md" show="output" />

## 路径表达式

Handlebars 表达式亦可为以句点分隔的路径。

<Example examplePage="/zh/examples/path-expressions-dot.md" show="template" />

这个表达式将会在输入对象中查找 `person` 属性，然后查找 `person` 对象中的 `firstname` 和`lastname`属性。 person 对象内的
属性。

将如下输入传入模版：

<Example examplePage="/zh/examples/path-expressions-dot.md" show="input" />

会获得如下输出：

<Example examplePage="/zh/examples/path-expressions-dot.md" show="output" />

Handlebars 同时支持一个已弃用的 `/` 语法，因此你可以将上面的例子这样写：

<Example examplePage="/zh/examples/path-expressions-slash.md" show="template" />

## 更改上下文

一些诸如 `#with` and `#each` 的助手代码使你能够操作嵌套的对象。当你在路径中包含 `../` 时，Handlebars 将转回父级上下文。

<Example examplePage="/zh/examples/path-expressions-dot-dot" show="template" />

即使在注释的上下文中输出了名称，它仍然可以返回到主上下文（根对象）以检索前缀。

::: v-pre

::: warning

`../` 解析的确切值根据调用该代码块的助手代码不同而有所不同。仅在上下文更改必要时使用 `../`。诸如 `{{#each}}` 之类的子助
手代码将需要使用 `../` ，而诸如 `{{#if}}` 之类的助手代码则不需要。

```handlebars
{{permalink}}
{{#each comments}}
  {{../permalink}}

  {{#if title}}
    {{../permalink}}
  {{/if}}
{{/each}}
```

在此示例中，以上所有引用相同的前缀值，即使它们位于不同的块中也是如此。这样的行为是从 Handlebars 4 开始的，
[发行说明](https://github.com/handlebars-lang/handlebars.js/blob/master/release-notes.md) 也讨论了先前的行为作为迁移计
划。Handlebars 还允许通过 `this` 来解决助手和数据字段之间的名称冲突。参考：

:::

## 文字

除了以下字符，标识符可以是任何 Unicode 文本：

_Whitespace_ `!` `"` `#` `%` `&` `'` `(` `)` `*` `+` `,` `.` `/` `;` `<` `=` `>` `@` `[` `\` `]` `^` `` ` `` `{` `|` `}`
`~`

除此之外，`true`, `false`, `null` 和 `undefined` 只允许在路径表达式的开头出现。

若想引用一个并非合法的标识符，你可以使用 `[`。在路径表达式中你不必使用 `]` 来关闭它，但其他表达式中是需要的。

JavaScript 样式的字符串如 `"` 和 `'` 也可用于替代 `[`。

<Example examplePage="/zh/examples/literal-segments.md" show="template" />

## HTML 转义

::: v-pre

在 Handlebars 中，由 `{{expression}}` 返回的值是 HTML 转义的。也就是说，如果一个表达式包含 `&`，那么返回的 HTML 转义的内
容将会包含 `&amp;`。如果你不希望 Handlebars 转义字符的话，请使用 `{{{`。

:::

在以下模板中，你将了解如何生成 HTML 转义的和原始的输出。

<Example examplePage="/zh/examples/html-escaping.md" show="template" />

将如下特殊的输入传入模版：

<Example examplePage="/zh/examples/html-escaping.md" show="input" />

::: v-pre

使用 `{{{` 会输出原始结果。否则将会输出 HTML 转义之后的结果，如下面的例子所示。

:::

<Example examplePage="/zh/examples/html-escaping.md" show="output" />

## 助手代码

助手代码可以实现一些并非 Handlesbars 语言本身的功能。

在运行时可以用 `HandleBars.registerHelper` 可以注册助手代码。例如为了将字符串中的所有字符转换为大写。

<Example examplePage="/zh/examples/helper-simple.md" show="preparationScript" />

Handlebars 助手代码的调用需要一个简单标识符，且可紧接一个或多个参数（以空格分割）。每一参数为一个 Handlebars 表达式，且
将会用于上方“基本用法”中相同的方法来计算。

<Example examplePage="/zh/examples/helper-simple.md" show="template" />

此例子中，`load` 是助手代码的名称，而 `lastname` 为传递给助手代码的参数。此模板，将会将输入的 `uppercase` 属性正确地转换
为大写：

<Flex>
<Example examplePage="/zh/examples/helper-simple.md" show="input" />
<Example examplePage="/zh/examples/helper-simple.md" show="output" />
</Flex>

### 避免助手代码的返回值被 HTML 转义

::: v-pre

即使当使用 `{{` 而非 `{{{` 来调用助手代码时，当你的助手代码返回一个 `Handlebars.Safestring` 的实例，返回值也并不会被转
义。你需要留心将所有参数正确地使用 `Handlebars.escapeExpression` 来转义。

:::

<Example examplePage="/zh/examples/helper-safestring.md" show="preparationScript" />

### 具有多个参数的助手代码

我们观察一下另一个具有两个参数的助手代码：

<Example examplePage="/zh/examples/helper-multiple-parameters.md" show="template" />

此例子中，Handlebars 将把两个参数传递给 `link` 助手代码：字符串 `See Website` 与从下面提供的 `people` 输入对象中的
`people.value`。

<Example examplePage="/zh/examples/helper-multiple-parameters.md" show="input" />

如同代码中所述，此助手代码 `link` 用于生成一个超链接。

<Example examplePage="/zh/examples/helper-multiple-parameters.md" show="preparationScript" />

我们会从上面的输入获得如下输出：

<Example examplePage="/zh/examples/helper-multiple-parameters.md" show="output" />

在此例中，你可以使用同一助手代码，但使用基于 `people.text` 的值的动态文本：

<Flex>
<Example examplePage="/zh/examples/helper-dynamic-parameters.md" show="template" />
<Example examplePage="/zh/examples/helper-dynamic-parameters.md" show="input" />
</Flex>

### 字面量参数

帮助代码调用亦可含字面量，作为参数抑或是 Hash 参数。支持的字面量有数字、字符串、`true`, `false`, `null` 及 `undefined`：

<Flex>
<Example examplePage="/zh/examples/helper-literals" show="template" />
</Flex>

### 含有 Hash 参数的助手代码

Handlebars 提供了额外的元数据，例如 Hash 参数来作为助手代码的最后一个参数。

<Example examplePage="/zh/examples/helper-hash-arguments.md" show="template" />

在此模版中，最后一个参数 `href=people.url class="people"` 为传送至助手代码的 Hash 参数。

Hash 参数中的键必须为简单标识符，且值为 Handlebars 表达式。这意味着值可以为简单标识符，路径或字符串。

若将如下输入传入模版，其中 `person.url` 的值可以从 `person` 中获取。

<Example examplePage="/zh/examples/helper-hash-arguments.md" show="input" />

正如以下助手代码中的描述，Hash 参数可以从最后一个参数 `options` 获取，以用于助手代码内部的进一步处理。

<Example examplePage="/zh/examples/helper-hash-arguments.md" show="preparationScript" />

上述助手代码产生的输出如下：

<Example examplePage="/zh/examples/helper-hash-arguments.md" show="output" />

Handlebars 亦提供了使用一个模版块来调用助手代码的机制。块助手代码可用于执行任意次数（包括零次）的代码块并且使用它所选择
的任意上下文。

[了解更多：块助手代码](block-helpers.html)

### 助手代码和属性查找时的消歧义

如果助手代码注册时的名称和一个输入的属性名重复，则助手代码的优先级更高。如果你想使用输入的属性，请在其名称前加 `./` 或
`this.`。（或是已弃用的 `this/`。）

<Flex>
<Example examplePage="/zh/examples/helper-data-name-conflict" show="template" />
<Example examplePage="/zh/examples/helper-data-name-conflict" show="input" />
<Example examplePage="/zh/examples/helper-data-name-conflict" show="preparationScript" />
</Flex>

## 子级表达式

Handlebars 对子级表达式提供了支持，这使你可以在单个 Mustache 模板中调用多个助手代码，并且将内部助手代码调用的返回值作为
外部助手代码的参数传递。子级表达式使用括号定界。

```handlebars
{{outer-helper (inner-helper "abc") "def"}}
```

上例中，`inner-helper` 会被调用并带有字符串参数 `'abc'`，同时不论 `inner-helper` 返回了什么，返回值都将被作为第一个参数
传递给 `outer-helper`（同时 `'def'` 会作为第二个参数传递）。

## 空格控制

通过在括号中添加一个 `~` 字符，你可以从任何 Mustache 模板代码块的任何一侧省略模板中的空格。应用之后，该侧的所有空格将被
删除，直到第一个位于同一侧的 Handlebars 表达式或非空格字符出现。

```handlebars
{{#each nav~}}
  <a href="{{url}}">
    {{~#if test}}
      {{~title}}
    {{~else~}}
      Empty
    {{~/if~}}
  </a>
{{~/each}}
```

以及如下内容：

```js
{
  nav: [{ url: "foo", test: true, title: "bar" }, { url: "bar" }];
}
```

输出没有换行符并格式化了空格的结果：

```html
<a href="foo">bar</a><a href="bar">Empty</a>
```

这扩展了「独立」助手代码（块助手代码、注释、代码片段或是空白符）在换行符时的默认行为。

```handlebars
{{#each nav}}
  <a href="{{url}}">
    {{#if test}}
      {{title}}
    {{else}}
      Empty
    {{/if}}
  </a>
{{~/each}}
```

将会渲染

```html
<a href="foo"> bar </a> <a href="bar"> Empty </a>
```

## 转义 Handlebars 表达式

::: v-pre

Handlebars 可以从这两种方式中的任何一种转义：「内联转义」或「RAW 块助手代码」。内联转义通过 Mustache 代码块前置 `\` 实
现，而 RAW 代码块通过使用 `{{{{` 实现。

:::

```handlebars
\{{escaped}}
{{#raw}}
  \{{escaped}}
{{/raw}}
```

RAW 代码块的操作方式与其他 [块助手代码](block-helpers.html) 均相同，但区别在于它的子内容被 Handlebars 视为一段字符串。
