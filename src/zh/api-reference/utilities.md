# 实用方法

## 助手代码实用方法

这些方法会帮你更轻松地实现自定义助手代码。

### `Handlebars.SafeString(string)`

防止 `string` 在模版渲染时转义。

```js
new Handlebars.SafeString("<div>HTML Content!</div>");
```

当构建将会被标记为安全的字符串时，为安全起见，任何外部内容都应该使用 `Handlebars.escapeExpression` 方法转义。

### `Handlebars.escapeExpression(string)`

::: v-pre

HTML 转义输入的字符串，使得字符串可以安全地在 HTML 内容中渲染为文字。

```js
Handlebars.Utils.escapeExpression(string);
```

将字符串值里的`&`, `<`, `>`, `"`, `'`, `` ` ``, `=` 用 HTML 实体的等效值替换。`SafeString` 的值保持不变。

除了 `{{{` 表达式之外的表达式都将被本方法处理。为了防止可能的代码注入，帮助函数也应该在返回 HTML 内容时通过一个
`SafeString` 的实例来使用本函数。

本函数是 `Handlebars.Utils.escapeExpression` 的别名。

:::

### `Handlebars.createFrame(data)`

由块助手代码使用以创建子数据对象。

```js
if (options.data) {
  var data = Handlebars.createFrame(options.data);
  data.foo = "bar";
  options.data = data;
}
```

更改数据状态的助手代码应会同时创建一个新的框架以将它们自己隔离并且避免和任何父程序的状态冲突。通常来说，在执行时，对每个
助手代码来说只有一个框架需要被创建。比如，`each` 迭代器创建一个会被所有子执行程序应用的框架。

## General Utilities

Handlebars 提供了一大批由 `Handlebars.Utils` 对象暴露的应用函数。

### `Handlebars.Utils.isEmpty(value)`

判断给定的值是否为空。

Handlebars.Utils.isEmpty(value)

以上函数被内建的 `if` 与 `with` 助手代码应用以控制执行流。Handlebars 对于「空」的定义如下:

- 长度为 0 的数组
- 除了 0 以外的虚值

以上是为了和 [Mustache behavior](http://mustache.github.io/mustache.5.html#Sections) 匹配。

### `Handlebars.Utils.extend(obj, value)`

简单的应用函数，用于使用 `value` 里定义的所有键来增强 `obj` 。

Handlebars.Utils.extend(foo, {bar: true})

将会将 `foo` 对象内的键 `bar` 对应的值设定为 `true`。

### `Handlebars.Utils.toString(obj)`

通用的 `toString` 方法。

### `Handlebars.Utils.isArray(obj)`

判断对象是否为数组。

### `Handlebars.Utils.isFunction(obj)`

判断对象是否为函数。

### `Handlebars.log(level, message)`

被 `log` 助手代码使用的输出程序。

可能会在需要时被重载。
