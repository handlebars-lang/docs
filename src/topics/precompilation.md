# Precompiling templates

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

You also download the runtime if you do not want to use a CDN:

<DownloadHandlebars :runtimeOnly="true"/>
