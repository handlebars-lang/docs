# `@data` 变量

下面的`@data`变量是由 Handlebars 及其内建助手代码实现的。

## `@root`

初始化模版被执行时的上下文。

```handlebars
{{#each array}} {{@root.foo}} {{/each}}
```

除非特意改变，对于页面渲染时的每一部分，本项的值恒定。因此，当深度参数不能够引用它们的父模版时，本项可以在代码片段内使
用。

## `@first`

本项会被 `each` 助手代码在迭代的第一步被设置为 true。

```handlebars
{{#each array}} {{#if @first}} First! {{/if}} {{/each}}
```

## `@index`

从零开始的编号，表示当前的迭代次数。由 `each` 助手代码设置。

```handlebars
{{#each array}} {{@index}} {{/each}}
```

## `@key`

当前迭代次数的键。在遍历对象时被 `each` 助手代码设置。

```handlebars
{{#each array}} {{@key}} {{/each}}
```

## `@last`

在迭代的最后一步被 `each` 助手代码设置为 true。

```handlebars
{{#each array}} {{#if @last}} Last :( {{/if}} {{/each}}
```

## `@level`

设定 log 的输出级别。

```js
template({}, { data: { level: Handlebars.logger.WARN } });
```

可以为以下值：`Handlebars.logger.DEBUG`，`Handlebars.logger.INFO`，`Handlebars.logger.WARN` 或者
`Handlebars.logger.ERROR`

当设定时，程序会按照设定的级别选择输出的信息。默认值为 `Handlebars.logger.ERROR`。
