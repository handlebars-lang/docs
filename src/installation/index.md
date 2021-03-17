# Installation

There are a variety of ways to install Handlebars, depending on the programming language and environment you are using.

## npm or yarn (recommended)

The reference implementation of Handlebars is written in JavaScript. It is most commonly installed using `npm` or
`yarn`:

```bash
npm install handlebars
# or
yarn add handlebars
```

You can then use Handlebars using `require`

```js
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));
```

::: tip

Using npm or yarn is the recommended way of using Handlebars. If you want to use Handlebars templates in the
web-browser, we recommend that you use a build-engine such as Webpack, Browserify or Parcel.

The [integrations](integrations.md) page contains a list of plugins for those loaders that allow you to automatically
precompile templates or use Handlebars otherwise.

!button[Learn more: Integrations](integrations.md)

:::

### Browser builds in the npm-package

The browser builds are located in the `node_modules/handlebars/dist/` directory. Making these accessible to the browser
will depend on what build system you are using but this may be as simple as copying the files to an accessible place.

This is the preferred method of installation when using the precompiler as it ensures that your precompiled templates
always run against the same version of the runtime.

## Downloading Handlebars

The following downloads are provided as a convenience to the community. They are not meant for production use, but they
can give you a quick-start without having to set up a build-engine.

### Latest release (version {{$handlebarsVersions.latest}})

<DownloadHandlebars>

Use this version as a quick start, if you want to compile your templates in the browser.

</DownloadHandlebars>

<DownloadHandlebars :runtimeOnly="true">

Use this version when you are using [precompiled templates](precompilation.md) in the browser. This version does not
include the compiler.

</DownloadHandlebars>

### Non-release builds

All of Handlebars' released versions and CI builds are available for download on S3 in our
[builds page](https://com.s3.amazonaws.com/builds.handlebarsjs/bucket-listing.html?sort=lastmod&sortdir=desc).

The latest passing master build is named `handlebars-latest.js` and each passing SHA on master will create a
`handlebars-gitSHA.js` file. While these all pass the CI, it's preferable to use one of the tagged releases.

**Note**: The builds page is provided as a convenience for the community, but you should not use it for hosting
Handlebars in production.

## CDNs

Handlebars is hosted on a number of free CDNs as well.

- [cdnjs](https://cdnjs.com/libraries/handlebars.js)
- [jsDelivr](http://www.jsdelivr.com/#!handlebarsjs). Advanced usage, such as
  [version aliasing & concocting](https://github.com/jsdelivr/jsdelivr#usage), is available.

## RubyGems

The official Handlebars build is available on https://rubygems.org/gems/handlebars-source

## Bower, Component, Composer, jspm

Handlebars can be enabled by using other package-managers as well, like

- Bower (deprecated)
- Component
- Composer
- jspm

see https://github.com/components/handlebars.js for details

## Usage

You can deliver a template to the browser by including it in a `<script>` tag.

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

::: warning Always use a script-tag for your template

If you use this method, you have to wrap your template with a script-tag. Otherwise the browser may remove or modify
parts of your template if you don't. Have a look at
["Unexpected markup in tables"](https://html.spec.whatwg.org/multipage/parsing.html#unexpected-markup-in-tables) for an
example.

:::

Compile a template in JavaScript by using Handlebars.compile

```js
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
```

Get the HTML result of evaluating a Handlebars template by executing the template with a context.

```js
var context = { title: "My New Post", body: "This is my first post!" };
var html = template(context);
```

results in

```html
<div class="entry">
  <h1>My New Post</h1>
  <div class="body">
    This is my first post!
  </div>
</div>
```

### Precompiling Templates

In the previous example, we have loaded the compiler-and-runtime version of Handlebars. It is much more efficient, to
compile your templates beforehand and include the precompiled version in your website. You can include the smaller
runtime and the browser does not have to compile the templates before running them.

!button[Learn More: Precompilation](precompilation.html)

## Bower (deprecated)

::: warning

[Bower is deprecated](https://bower.io/blog/2017/how-to-migrate-away-from-bower/)

Bower versions of Handlebars are still published (at the moment) for backwards compatibility. But if you are setting up
a new project, you should not use it anymore.

:::

## Other programming languages

There are handlebars implementations for many programming languages.

- TODO: Add list here
