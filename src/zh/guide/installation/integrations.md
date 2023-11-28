# 集成

以下软件包在不同的环境中集成了 Handlebars。这些软件包 **并非** 由 Handlebars 团队负责。

有多个 Webpack 插件，可让你在 Webpack 环境中使用 Handlebars。

## Webpack: handlebars-loader

[handlebars-loader](https://github.com/pcardune/handlebars-loader) 允许你导入 [预编译](./precompilation.html) 模板。只需
将你的 handlebars-template 写入 `template.handlebars` 文件中，然后使用

```js
const compiledTemplate = require("./template.handlebars");
```

或是

```js
import compiledTemplate from "./template.handlebars";
```

## Webpack: handlebars-webpack-plugin

[handlebars-webpack-plugin](https://github.com/sagold/handlebars-webpack-plugin) 使用 Handlebars 构建你的静态 HTML 页面

## Webpack: html-bundler-webpack-plugin

[html-bundler-webpack-plugin](https://github.com/webdiscus/html-bundler-webpack-plugin) 支持使用包括
[Handlebars](https://github.com/webdiscus/html-bundler-webpack-plugin#using-the-handlebars) 在内的几种模板引擎来渲染模
板，并将样式和脚本打包到生成的 HTML 文件中。

## Babel: handlebars-inline-precompile

[babel-plugin-handlebars-inline-precompile](https://github.com/jamiebuilds/babel-plugin-handlebars-inline-precompile) 提
供了预编译的 Handlebars 模板，这些模板在 JavaScript 源代码中作为模板文本提供：

```js
import hbs from "handlebars-inline-precompile";
const compiledTemplate = hbs`{{name}}`;
```

请参阅包文档以获取设置说明。

## Browserify: hbsfy

[hbsfy](https://www.npmjs.com/package/hbsfy) 包可让你在浏览器中导入预编译的模板环境：

```js
const compiledTemplate = require("./template.handlebars");
```

## 包：parcel-plugin-handlebars

这里有一个较老的插件包： https://www.npmjs.com/package/parcel-plugin-handlebars

但是你应该使用这些 forks 里面的其中一个，因为它们较新： https://www.npmjs.com/search?q=parcel-plugin-handlebars

最新的一个包是： https://www.npmjs.com/package/@inventory/parcel-plugin-handlebars

## 包：parcel-plugin-handlebars-precompile

TODO: 在此填写

https://www.npmjs.com/package/parcel-plugin-handlebars-precompile
