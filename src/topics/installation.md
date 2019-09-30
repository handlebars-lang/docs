# Installation

## Quick start

The fastest route is to manually download the package and copy into your project. You can use this way to test
Handlebars without having to setup a packager.

<DownloadHandlebars :runtimeOnly="false" />

You can also use a CDN to omit the download completely

<<< @/src/usage-examples/compiler-and-runtime/index.html

::: warning Not recommended for production

If you want to use Handlebars in a production environment, please use a packaging tool or precompiled templates.

:::

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

## In the Web-Browser

::: warning Think twice before using Handlebars-templates in the browser

There are far more advanced frameworks like Ember, Vue.js, React and Angular. They are updating the page faster and
provide a much more complete set of tools. They can not only render, but also to handle inputs.

In contrast, Handlebars is a pure rendering engine. It works well if you want to allow people to write templates for
rendering HTML-pages, e-mails or markdown files. Such things are mostly done on the server or in a command-line
interface, executed in NodeJS or in another language for which an [implementation exists](#other-implementations)

:::

### Precompiling Templates

In the first example, we have loaded the compiler-and-runtime version of Handlebars. It is much more efficient, to
compile your templates beforehand and include the precompiled version in your website. You can include the smaller
runtime and the browser does not have to compile the templates before running them.

!button[Learn More: Precompilation](precompilation.html)

### Webpack

TODO Add contents

### Browserify

TODO Add content

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
