# 预编译模板

<script setup>
import { data as handlebars } from '../../../handlebars.data.js';
</script>

使用 Handlebars 预编译器，你可以预编译 Handlebars 模板以节省客户端时间并减少 Handlebars 库所需的运行时大小。

## 入门

首先，你需要 _Node.js 和 npm_ 。转到 [https://nodejs.org/en/download/](https://nodejs.org/en/download/) 了解如何在你的操
作系统上执行此操作。

接下来，安装 Handlebars npm 软件包，其中包含了预编译器。

```bash
npm install -g handlebars
```

创建一个文件 `example.handlebars` 来包含模板：

<<< @/snippets/precompilation/example.handlebars

运行预编译器。

```bash
handlebars example.handlebars -f example.precompiled.js
```

引用 Handlebars 运行时和预编译的 JavaScript。

<<< @/snippets/precompilation/index.html

也可以在 [安装页面](index.md#downloading-handlebars) 上下载运行时。

## 优化

因为你在预编译模板，所以你还可以对编译器进行多种优化。首先你可以指定一个已知 helper 的列表：

```bash
handlebars <input> -f <output> -k each -k if -k unless
```

Handlebars 编译器将优化对这些 helper 的访问以提高性能。当所有 helper 都在编译时时候，`--knownOnly` 选项提供了最小的生成
代码，也提供了最快的执行速度。

## 用法

```txt-vue
{{ handlebars.cliHelp }}
```

如果使用预编译器的 normal 模式，则预编译结果将存储到 `Handlebars.templates` 对象下对应的模板名称（不带扩展名）的对象中。
这些预编译模板可以以和普通模板相同的方式执行。如果使用 simple 模式，预编译器将生成一个 JavaScript 方法。要执行此方法，必
须将其传递给 `Handlebars.template()` 方法，生成的对象也可以以相同的方式使用。

## 在 Node.js 中预编译模板

如果你希望从 Node.js 内部预编译模板而无需从命令行调用 Handlebars，则可以使用 Handlebars.precompile 完成。将此函数的字符
串结果传递给你的前端，前端即可使用 Handlebars.template 来解析。

<<< @/snippets/precompilation/precompile-in-nodejs.js

输出如下：

<<< @/snippets/precompilation/precompile-in-nodejs.output.js

在客户端，你将通过以下方式使用 JavaScript。

```js
Handlebars.partials["test1"] = Handlebars.template({
  /** 在此处插入编译的输出 **/
});
```

最后，你可以在 JavaScript 中动态引用这些模板。

```js
var result = Handlebars.partials["test1"]({ name: "yourname" });
// 使用得到的 result
```

## 集成

一些 npm 包可用于将 Handlebars 预编译器集成到你的构建系统中（如 Webpack， Browserify ...）。参阅 集成 页面：

[了解更多：集成](integrations.md)
