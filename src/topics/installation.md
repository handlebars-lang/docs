# Installation

There are a variety of ways to install Handlebars, depending on the programming language and environment you are using.

## Node.js

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

## In the web-browser

::: warning Do you really need Handlebars?

Handlebars is a pure rendering engine. It works well if you want to allow people to write templates for rendering
HTML-pages, e-mails or markdown files.

If you want to build a single-page application and you want to handle user-input, you should probably look for a
framework like Angular, Ember, Ractive, React or Vue.js.

:::

### Webpack

TODO Add contents

### Browserify

TODO Add content

### Download Handlebars

<DownloadHandlebars/>

::: warning Not for production

The following method is not meant for production. In production, you should use Webpack, browserify or another bundler.
If you don't want to do that, you should at least use [precompilation](precompilation.html)

:::

You can deliver a template to the browser by including it in a `<script>` tag (it has to be a `<script>`-tag, because
this is the only way the browser won't modify the DOM).

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

In the first example, we have loaded the compiler-and-runtime version of Handlebars. It is much more efficient, to
compile your templates beforehand and include the precompiled version in your website. You can include the smaller
runtime and the browser does not have to compile the templates before running them.

!button[Learn More: Precompilation](precompilation.html)

## Bower (deprecated)

::: warning

[Bower is deprecated](https://bower.io/blog/2017/how-to-migrate-away-from-bower/). You should use the npm-version along
with a bundler like webpack, browserify or parceljs if you want to use Handlebars in the browser.

Bower versions of Handlebars are still created (at the moment) for backwards compatibility. But if you are setting up a
new project, you should not use it anymore.

:::

## Manual Download (deprecated)

All of Handlebar's released versions and CI builds are available for download on S3 in our
[builds page](https://com.s3.amazonaws.com/builds.handlebarsjs/bucket-listing.html?sort=lastmod&sortdir=desc).

The latest passing master build is named `handlebars-latest.js` and each passing SHA on master will create a
`handlebars-gitSHA.js` file. While these all pass the CI, it's preferrable to use one of the tagged releases.

**Note**: The S3 builds page is provided as a convenience for the community, but you should not use it for hosting
Handlebars in production.

## CDNs

Handlebars is hosted on a number of free CDNs as well.

- [cdnjs](https://cdnjs.com/libraries/handlebars.js)
- [jsDelivr](http://www.jsdelivr.com/#!handlebarsjs). Advanced usage, such as
  [version aliasing & concocting](https://github.com/jsdelivr/jsdelivr#usage), is available.

## Browser builds in the npm-package

The browser builds are located in the `node_modules/handlebars/dist/` directory. Making these accessible to the browser
will depend on what build system you are using but this may be as simple as copying the files to an acessible place.

This is the preferred method of installation when using the precompiler as it ensures that your precompiled templates
always run against the same version of the runtime.

### TODO Any other tools worth mentioning?

## Other implementations

There are handlebars implementations for many programming languages.

- TODO: Add list here
