# Integrations

The following packages integrate Handlebars in different environments. These packages are **not** officially supported
by the Handlebars team.

There are multiple webpack-plugins that allow you to use Handlebars in a Webpack environment.

## Webpack: handlebars-loader

The [handlebars-loader](https://github.com/pcardune/handlebars-loader) allow you to import
[precompiled](./precompilation.html) template. Just write your handlebars-template into a `template.handlebars`-file and
import it using

```js
const compiledTemplate = require("./template.handlebars");
```

or

```js
import compiledTemplate from "./template.handlebars";
```

## Webpack: handlebars-webpack-plugin

The [handlebars-webpack-plugin](https://github.com/sagold/handlebars-webpack-plugin) uses Handlebars to build your
HTML-pages statically when compiling your application

## Webpack: html-bundler-webpack-plugin

The [html-bundler-webpack-plugin](https://github.com/webdiscus/html-bundler-webpack-plugin) uses various templating
engines, [including Handlebars](https://github.com/webdiscus/html-bundler-webpack-plugin#using-the-handlebars), to
render templates and bundle styles and scripts into generated HTML.

## Babel: handlebars-inline-precompile

The
[babel-plugin-handlebars-inline-precompile](https://github.com/jamiebuilds/babel-plugin-handlebars-inline-precompile)
precompiles Handlebars templates that are provided as template literals in the JavaScript source code:

```js
import hbs from "handlebars-inline-precompile";
const compiledTemplate = hbs`{{name}}`;
```

Please refer to the documentation of the package for setup instructions.

## Browserify: hbsfy

The [hbsfy](https://www.npmjs.com/package/hbsfy) package allows you to import precompiled templates in a browserify
environment:

```js
const compiledTemplate = require("./template.handlebars");
```

## Parcel: parcel-plugin-handlebars

There is an old plugin for parcel: https://www.npmjs.com/package/parcel-plugin-handlebars

But you should use one of the many forks of this package, which are more up-to-date:
https://www.npmjs.com/search?q=parcel-plugin-handlebars

The most recent one is: https://www.npmjs.com/package/@inventory/parcel-plugin-handlebars

## Parcel: parcel-plugin-handlebars-precompile

TODO: Write text here

https://www.npmjs.com/package/parcel-plugin-handlebars-precompile
