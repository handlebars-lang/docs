# Precompiling templates

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

<<< @/src/usage-examples/precompilation/example.handlebars

Run the precompiler.

```bash
handlebars example.handlebars -f example.precompiled.js
```

Include the Handlebars runtime and the precompile javascript.

<<< @/src/usage-examples/precompilation/index.html

The runtime is also available for download on the [installation page](./installation.md#downloading-handlebars).

## Optimizations

TODO: Copy from http://handlebarsjs.com/precompilation.html

## Precompiling Templates Inside NodeJS

TODO: Copy from http://handlebarsjs.com/precompilation.html
