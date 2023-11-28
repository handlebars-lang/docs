# 安装

<script setup>
import DownloadHandlebars from '../../../.vitepress/components/DownloadHandlebars.vue';
import { data as handlebars } from '../../../handlebars.data.js';
</script>

有多种安装 Handlebars 的方法，具体取决于你所使用的编程语言和环境。

## npm 或 yarn （推荐）

Handlebars 引擎使用 JavaScript 编写。我们最常使用 `npm` 或 `yarn` 来安装：

```bash
npm install handlebars
```

或者

```bash
yarn add handlebars
```

之后，你可以导入 Handlebars 来使用它。

```js
import Handlebars from "handlebars";
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "张三" }));
```

如果你在 CommonJS 环境下使用 Handlebars，你可以使用 `require`：

```js
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "张三" }));
```

::: tip

建议使用 npm 或 yarn 来使用 Handlebars。如果你想在浏览器上使用，建议你使用 Webpack、Browserify 或 Parcel 等构建引擎。

[集成](integrations.md) 页面包含了一份使你能够使用自动预编译或仅使用 Handlebars 的插件列表。

[了解更多：集成](integrations.md)

:::

### 内置在 npm-package 中的浏览器预编译版本

浏览器预编译版本位于 `node_modules/handlebars/dist/` 让 Handlebars 可供浏览器使用取决于你所使用的编译系统，但使用预编译
的话事情就会变得像复制文件一样简单。

这是使用预编译器时的首选安装方法，因为它可以确保预编译的模板始终在相同版本的运行时上运行。

## 下载 Handlebars

以下下载内容是为了方便社区。它们不是供生产使用的，但是它们无需设置构建引擎即可快速入门。

### 最新版本 （{{ handlebars.versions.latest }}）

<DownloadHandlebars>

如果要在浏览器中编译模板，请使用此版本作为快速入门。

</DownloadHandlebars>

<DownloadHandlebars :runtimeOnly="true">

若要在浏览器中使用 [预编译模板](precompilation.md)，请使用此版本。这个版本不包括编译器。

</DownloadHandlebars>

### 非发行版

所有 Handlebars 的发行版本和 CI 版本都可以在我们的 S3 上下载
[Build 页面](https://s3.amazonaws.com/builds.handlebarsjs.com/index.html)。

最新通过的主版本的名称是 `handlebars-latest.js` ，master 上的每个通过的 SHA 都会创建一个 `handlebars-gitSHA.js` 文件。尽
管所有文件都通过了 CI，你仍应使用带标记的发行版。

**注意**: 构建页面是为了方便社区而提供的，你不应将其用于生产环境。

## CDNs

Handlebars 也托管在许多免费的 CDN 上。

- [cdnjs](https://cdnjs.com/libraries/handlebars.js)
- [jsDelivr](http://www.jsdelivr.com/#!handlebarsjs)。高级用法，例如
    [version aliasing & concocting](https://github.com/jsdelivr/jsdelivr#usage)。

## RubyGems

可在 <https://rubygems.org/gems/handlebars-source> 上获得官方的 Handlebars 构建。

## Bower, Component, Composer, jspm

也可以使用其他包管理器来安装 Handlebars，例如

- Bower (已弃用)
- Component
- Composer
- jspm

有关详细信息，请参见 <https://github.com/components/handlebars.js>。

## 用法

你可以通过将模板包含在 `<script>` 标签中来将模板传递给浏览器。

```html
<script id="entry-template" type="text/x-handlebars-template">
  <div class="entry">
    <h1>{{title}}</h1>
    <div class="body">
      {{body}}
    </div>
  </div>
</script>
```

::: warning 必须对模板使用 script 标签

如果使用此方法，则必须使用 script 标签包装模板。否则浏览器可能会删除或修改如果没有，则模板的各个部分。看一下
[“表格中的意外标记”](https://html.spec.whatwg.org/multipage/parsing.html#unexpected-markup-in-tables) 例。

:::

使用 Handlebars.compile 在 JavaScript 中编译模板

```js
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
```

通过调用 Handlebars.compile 并传递一个模板参数来获得 HTML。

```js
var context = { title: "我的新文章", body: "这是我的第一篇文章！" };
var html = template(context);
```

结果：

```html
<div class="entry">
  <h1>我的新文章</h1>
  <div class="body">这是我的第一篇文章！</div>
</div>
```

### 预编译模板

在前面的示例中，我们加载了 Handlebars 的编译器和运行时版本。预编译模板在你的网站中包含预编译的版本要高效得多。你可以引用
较小的运行时让浏览器不必在运行模板之前对其进行编译。

[了解更多：预编译](precompilation.html)

## Bower （已弃用）

::: warning

[不推荐使用 Bower](https://bower.io/blog/2017/how-to-migrate-away-from-bower/)

为了向后兼容，目前仍在发布了 Bower 版本的 Handlebars。但是如果你要开启一个新项目，你不应再使用它。

:::

## 其他语言

许多语言都实现了 Handlebars。

- [.Net](https://github.com/Handlebars-Net/Handlebars.Net)
- [C](https://github.com/jbboehr/handlebars.c)
- [Go](https://github.com/aymerick/raymond)
- [Java](https://github.com/jknack/handlebars.java)
- [PHP (LightnCandy)](https://github.com/zordius/lightncandy)
- [Python](https://github.com/wbond/pybars3)
- [Ruby](https://github.com/cowboyd/handlebars.rb)
- [Rust](https://github.com/sunng87/handlebars-rust)
