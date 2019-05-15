# Installation

The reference implementation of Handlebars is written in JavaScript. It is most commonly installed using `npm` or `yarn`:

```bash
npm install handlebars

## or

yarn add handlebars
```

You can then `require` or `import` handlebars from your modules:

```js
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));
```

or, if your are using EcmaScript-modules,

```js
import Handlebars from "handlebars/dist/cjs/handlebars";
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));
```

::: warning Think twice before using Handlebars-templates in the browser

There are far more advanced frameworks like Ember, Vue.js, React and Angular. They are updating
the page faster and provide a much more complete set of tools. They can not only render, but also
to handle inputs.

In contrast, Handlebars is a pure rendering engine. It works well if you want to allow people to write
templates for rendering HTML-pages, e-mails or markdown files. Such things are mostly done on the
server or in a command-line interface, executed in NodeJS or in another language for which an [implementation exists](#other-implementations)

:::

## Bower

## Other implementations

There are handlebars implementations for many programming languages.

- TODO: Add list here
