# 内置助手代码

## #if

你可以使用 `if` 助手代码来根据条件渲染代码块。如果其参数返回 `false`、`undefined`、`null`、`""`、 `0` 或者
`[]`，Handlebars 将不会渲染该块。

<Example examplePage="/zh/examples/builtin-helper-if-block.md" show="template" />

当你将以下输入传递给上述模板时

<Example examplePage="/zh/examples/builtin-helper-if-block.md" show="input" />

将得出如下结果：

<Example examplePage="/zh/examples/builtin-helper-if-block.md" show="output" />

如果输入是空的 JSONObject `{}`，则 author 将变为 undefined 并且 `if` 条件失败。输出如下：

```html
<div class="entry"></div>
```

使用代码块时，如果表达式返回 false，你可以通过标注 `else` 的方式指定要运行的模板。

<Example examplePage="/zh/examples/builtin-helper-ifelse-block.md" show="template" />

### includeZero

设置 `includeZero=true` 可将 `0` 视为非空值，这可以控制 `0` 在条件判断时是作为 true 还是 false。

```handlebars
{{#if 0 includeZero=true}}
  <h1>这里会渲染</h1>
{{/if}}
```

### 子表达式

建议使用助手代码向模板添加逻辑。你可以编写助手代码并将其应用到子表达式中。

例如，在检查变量的初始化时，内置的 `#if` 检查可能不合适，因为它对于空集合返回 false（参见
[Utils.isEmpty](/zh/api-reference/utilities.html#handlebars-utils-isempty-value)）。

你可以写一段助手代码来检查 "undefined"，如：

<Example examplePage="/zh/examples/builtin-helper-if-subexpression.md" show="preparationScript" />

然后将助手代码用作子表达式：

<Example examplePage="/zh/examples/builtin-helper-if-subexpression.md" show="template" />

## #unless

你可以将 `unless` 助手代码看作与 `if` 助手代码相反。如果表达式返回 false 则将渲染代码块。

<Example examplePage="/zh/examples/builtin-helper-unless-block.md" show="template" />

如果在当前上下文中查找 `license` 返回 false，则 Handlebars 将提供警告。除此以外，它不会进行渲染。

## #each

你可以使用内置的 `each` 助手代码遍历列表。在块内，你可以使用 `this` 来引用被迭代的元素。

<Example examplePage="/zh/examples/builtin-helper-each-block.md" show="template" />

当与此上下文一起使用时：

<Example examplePage="/zh/examples/builtin-helper-each-block.md" show="input" />

将导致：

<Example examplePage="/zh/examples/builtin-helper-each-block.md" show="output" />

你可以在任何上下文中使用 `this` 指针来引用当前上下文。

你可以选择提供一个 `else`，该代码块将只会在列表为空时显示。

<Example examplePage="/zh/examples/builtin-helper-eachelse-block.md" show="template" />

::: v-pre

当遍历 `each` 中的项目时，你可以选择通过 `{{@index}}` 引用当前循环的索引。

```handlebars
{{#each array}} {{@index}}: {{this}} {{/each}}
```

此外，对于对象迭代，可以使用 `{{@key}}` 引用当前的键名：

```handlebars
{{#each object}} {{@key}}: {{this}} {{/each}}
```

:::

在数组上进行迭代时，通过 [`@first`](../api-reference/data-variables.md#first) 和
[`@last`](../api-reference/data-variables.md#last) 变量记录迭代的第一项和最后一项。

::: v-pre

嵌套的每个块都可以通过基于深度的路径来访问迭代变量。例如，要访问父级的索引，可以使用 `{{@../index}}`。

:::

## #with

`with` 助手代码允许你更改 `template-part` 的上下文表达式。

<Example examplePage="/zh/examples/builtin-helper-with-block.md" show="template" />

当与此上下文一起使用时：

<Example examplePage="/zh/examples/builtin-helper-with-block.md" show="input" />

将得到以下结果：

<Example examplePage="/zh/examples/builtin-helper-with-block.md" show="output" />

`with` 还可与代码块参数一起使用来以定义当前代码块中的已知引用。例如，上面的例子可以转换成

<Example examplePage="/zh/examples/builtin-helper-with-block-param.md" show="template" />

这使得复杂的模板可以提供比 n `../` 深度引用更清晰的代码。

::: v-pre

你可以选择提供一个 `{{else}}` ，该代码块仅在传递的值为空时渲染。

:::

<Flex>
<Example examplePage="/zh/examples/builtin-helper-with-else.md" show="template" />
<Example examplePage="/zh/examples/builtin-helper-with-else.md" show="input" />
</Flex>

## lookup

`lookup` 助手代码允许使用 Handlebars 变量进行动态的参数解析。

这对于解析数组索引的值非常有用。

<Example examplePage="/zh/examples/builtin-helper-lookup.md" show="template" />

它也可以用于基于输入的数据查找对象属性。以下是一个更复杂的示例：它在子表达式中使用 `lookup` 将上下文表达式更改为另一个 “
属性-值” 的对象。

<Example examplePage="/zh/examples/builtin-helper-lookup-dynamic-property.md" show="template" />

## log

`log` 助手代码允许在执行模板时记录上下文的状态。

<Example examplePage="/zh/examples/builtin-helper-log.md" show="template" />

它将委托给 `Handlebars.logger.log` ，而 `Handlebars.logger.log` 可以被覆盖以执行自定义日志记录。

可以将任何数量的参数传递给此方法，并且所有参数都将转发给 logger。

<Example examplePage="/zh/examples/builtin-helper-log-multiple-params.md" show="template" />

可以使用 `level` 参数设置日志级别。支持的值为 `debug`、`info`、`warn` 和 `error`（`info` 是默认值）。

记录是基于 `level` 参数和在 `Handlebars.logger.level` 中设置的值（默认为 `info`）的条件。所有比选定级别更高的记录将被输
出。

<Example examplePage="/zh/examples/builtin-helper-log-loglevel.md" show="template" />
