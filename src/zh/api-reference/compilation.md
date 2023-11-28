# 编译和预编译

## `Handlebars.compile(template, options)`

编译一个模版以立即运行。

```js
const template = Handlebars.compile("{{foo}}");
template({});
```

支持多种选项以更改模版的执行方式。

::: v-pre

- `data`: 设置为 `false` 以终止 `@data` 跟踪。
- `compat`: 设置为 `true` 以允许递归领域查找。
- `knownHelpers`: 将已知在模版运行时会真实存在的助手代码列表 Hash 化。输入本参数会使编译器在一些情况下优化。内置助手代码
  已经在本列表里包含，但若设置本项为 `false`，内置的助手代码可能会被忽视。
- `knownHelpersOnly`: 设置为 `true` 以允许基于已知助手代码列表的进一步优化。
- `noEscape`: 设置为 `true` 以避免 HTML 的内容转义。
- `strict`: 在严格模式下运行。在这个模式下，模版将会对缺失参数抛出异常，而非静默忽略。同时，这种模式将会禁止逆操作，比如
  `{{^foo}}{{/foo}}`，除非领域被特意包含在源对象中。
- `assumeObjects`: 在遍历路径时，不再检查对象是否存在。这是严格模式的子集，本子集在已知输入安全的情况下会生成最优模版。
- `preventIndent`: 默认情况下，缩进的代码片段调用将会导致代码片段整体全部被缩进。在代码片段写入 `pre` 标签时，这会造成未
  预料到的结果。将本项设置成 `true` 可以避免这种自动缩进的功能。
- `ignoreStandalone`: 当设置为 `true` 时，将不会去除单独的标签。在这种情况下，不在同一行的代码块和代码片段将不会去除本行
  里的空格。
- `explicitPartialContext`: 对代码片段的上下文进行精确设置。当开启时，没有设置上下文的代码片段将会依托空对象执行。

:::

## `Handlebars.precompile(template, options)`

对一个模版进行预编译，这样可以直接将模版送到客户端并执行而不需要再编译。

```js
var templateSpec = Handlebars.precompile("{{foo}}");
```

与 `Handlebars.compile` 方法的参数相同，并且额外的参数有：

- `srcName`: 生成输入文件的源键值表。当运行时，返回的结构为 `{code, map}`。 `code` 包含模版的定义，`map` 包含源键值表。
- `destName`: 可选，本参数可以与 `srcName` 一起使用以在生成源键值表的时候同时提供目标文件的名称。

## `Handlebars.template(templateSpec)`

设置一个已经被 `Handlebars.precompile` 预编译的模版。

```js
var template = Handlebars.template(templateSpec);
template({});
```
