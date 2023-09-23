# Precompiling templates

<script setup>
import { data as handlebars } from '../../handlebars.data.js';
</script>

Using the Handlebars precompiler, you can precompile your Handlebars templates to save time on the client and reduce the
required runtime size of the handlebars library.

## Getting started

First, you will need to have _Node.js and npm_. Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
to find out how to do that on your OS.

Next, install the Handlebars npm package, which contains the precompiler.

```bash
npm install -g handlebars
```

Create a file name `example.handlebars` containing your template:

<<< @/snippets/precompilation/example.handlebars

Run the precompiler.

```bash
handlebars example.handlebars -f example.precompiled.js
```

Include the Handlebars runtime and the precompile javascript.

<<< @/snippets/precompilation/index.html

The runtime is also available for download on the [installation page](index.md#downloading-handlebars).

## Optimizations

Because you are precompiling templates, you can also apply several optimizations to the compiler. The first allows you
to specify a list of the known helpers to the compiler

```bash
handlebars <input> -f <output> -k each -k if -k unless
```

The Handlebars compiler will optimize accesses to those helpers for performance. When all helpers are known at compile
time, the `--knownOnly` option provides the smallest generated code that also provides the fastest execution.

## Usage

```txt-vue
{{ handlebars.cliHelp }}
```

If using the precompiler's normal mode, the resulting templates will be stored to the `Handlebars.templates` object
using the relative template name sans the extension. These templates may be executed in the same manner as templates. If
using the simple mode the precompiler will generate a single javascript method. To execute this method it must be passed
to the `Handlebars.template()` method and the resulting object may be used as normal.

## Precompiling Templates Inside Node.js

If you wish to precompile templates from inside Node.js--without invoking "handlebars" from the command line--that can
be done with Handlebars.precompile. Transmit the string result of this function to your clients, and they can in turn
parse that with Handlebars.template.

<<< @/snippets/precompilation/precompile-in-nodejs.js

The output will be the following:

<<< @/snippets/precompilation/precompile-in-nodejs.output.js

On the client side you have Javascript along the lines of the following.

```js
Handlebars.partials["test1"] = Handlebars.template({
  /** insert compiled output here **/
});
```

Finally, you can reference these templates dynamically in your Javascript.

```js
var result = Handlebars.partials["test1"]({ name: "yourname" });
// do whatever you want with the result
```

## Integrations

Some npm-packages can be used to integrate the Handlebars precompiler into your build system (i.e. Webpack,
Browserify...). Have a look at the integrations page:

[Learn more: Integrations](integrations.md)
