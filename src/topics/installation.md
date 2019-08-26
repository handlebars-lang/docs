# Installing and using Handlebars

[[toc]]

## JavaScript (NodeJS)

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

## JavaScript (Browser)

::: warning Think twice before using Handlebars-templates in the browser

There are far more advanced frameworks like Ember, Vue.js, React and Angular. They are updating the page faster and
provide a much more complete set of tools. They can not only render, but also to handle inputs.

In contrast, Handlebars is a pure rendering engine. It works well if you want to allow people to write templates for
rendering HTML-pages, e-mails or markdown files. Such things are mostly done on the server or in a command-line
interface, executed in NodeJS or in another language for which an [implementation exists](#other-implementations)

:::

The simplest way to use Handlebars, although **not recommended for production**, is from a CDN. You can deliver a
template to the browser by including it in a `<script>` tag.

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>

<script id="entry-template" type="text/x-handlebars-template">
  <div class="entry">
    <h1>{{title}}</h1>
    <div class="body">
      {{body}}
    </div>
  </div>
</script>
```

::: warning

It is important that you put the template inside a `<script>` tag. Do not put it into the HTML directly or the
HTML-parser might modify it (for example, if it contains a table).

:::

Compile a template in JavaScript by using `Handlebars.compile`

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

You can also download it and use that file instead of the CDN:

<DownloadHandlebars type="full">Download Handlebars {{$handlebarsVersions.latest}}</DownloadHandlebars>

### Precompiling templates

A better way is to precompile your templates. This will result in a smaller required runtime library and significant
savings from not having to compile the template in the browser. This can be especially important when working with
mobile devices.

!button[Learn More: Precompilation](./precompilation.html)

TODO: Add instructions for precompilation

If you are using precompiled templates in you HTML, you don't need to include the compiler in your website. The runtime
is smaller and can be downloaded separately:

<DownloadHandlebars type="runtime">Download Handlebars runtime {{$handlebarsVersions.latest}}</DownloadHandlebars>

### Webpack

TODO Add contents

### Browserify

TODO Add content

### TODO Any other tools worth mentioning?

### Deprecated tools

#### Bower

::: warning Bower is deprecated

Although Bower has been deprecated in favor of using `yarn` in combination with `webpack`.

:::

## Other implementations

There are handlebars implementations for many programming languages.

- TODO: Add list here
