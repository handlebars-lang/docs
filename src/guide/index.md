# Language Guide

Handlebars is a simple templating language. If was first written for JavaScript, but has been ported to other languages
like Java and even Rust.

It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular
text, with embedded handlebars expressions.

<Example examplePage="/examples/simple-expressions" :showInputOutput="true"/>

A handlebars expression is a `{{`, some contents, followed by a `}}`

!button[Learn More: Expressions](expressions.html)

## Installing and using Handlebars

The easiest way to use Handlebars in the browser is to load the script from a CDN. We have created a
[JSFiddle](https://jsfiddle.net/L3ynz8ow/2/) to get you started quickly.

::: warning Production setup

We do not recommend this approach for any production use. If you want to use Handlebars in production however, you have
a variety of options like

- rendering HTML in a NodeJS-server,
- precompiling templates at build-time, or
- using a plugin for a build took like the `handlebars-loader` for Webpack

!button[Lern More: Installing and using handlebars](/topics/installation.html)

:::

## HTML Escaping

::: v-pre

Because it was originally designed to generate HTML, Handlebars escapes values returned by a `{{expression}}`. If you
don't want Handlebars to escape a value, use the "triple-stash", `{{{`.

:::

<Example examplePage="/examples/html-escaping" :showInputOutput="true" />

Handlebars will not escape a `Handlebars.SafeString`. If you write a helper that generates its own HTML, you will
usually want to return a `new Handlebars.SafeString(result)`. In such a circumstance, you will want to manually escape
parameters.

<Example examplePage="/examples/helper-safestring" :showInputOutput="false" />

This will escape the passed in parameters, but mark the response as safe, so Handlebars will not try to escape it even
if the "triple-stash" is not used.

## Evaluation context

::: v-pre

The built-in block-helpers `{{#each}}` and `{{#with}}` allow you to change the current evaluation context.

- The `{{#each}}`-helper iterates an array, allowing to you access the properties of each object via simple handlebars
  expressions.
- The `{{#with}}`-helper dives into an object-property, giving you access to its properties

:::

<Example examplePage="/examples/each-with" :showInputOutput="true" />

## Nested Handlebars Paths

::: v-pre

In addition to simple paths like `<p>{{name}}</p>`, Handlebars also supports nested paths. This allows you to look up
properties nested below the current context.

:::

<Example examplePage="/examples/path-expressions-dot" :showInputOutput="true" />

This makes it possible to use Handlebars templates with more raw JSON objects. It is also possible, to use `/` as path
delimiter:

<Example examplePage="/examples/path-expressions-slash" />

Nested handlebars paths can also include `../` segments, which evaluate their paths against a parent context.

<Example examplePage="/examples/path-expressions-dot-dot" :showInputOutput="true"/>

Even though the name is printed while in the context of a comment, it can still go back to the main context (the
root-object) to retrieve the prefix.

::: v-pre

::: warning

The exact value that `../` will resolve to varies based on the helper that is calling the block. Using `../` is only
necessary when context changes. Children of helpers such as `{{#each}}` would require the use of `../` while children of
helpers such as `{{#if}}` do not.

:::

In this example all of the above reference the same prefix value even though they are located within different blocks.
This behavior is new as of Handlebars 4, the release notes discuss the prior behavior as well as the migration plan.
Handlebars also allows for name conflict resolution between helpers and data fields via a this reference:

<Example examplePage="/examples/helper-data-name-conflict" :hidePreparationScript="true" />

Any of the above would cause the name field on the current context to be used rather than a helper of the same name.

## Template comments

::: v-pre

You can use comments in your handlebars code just as you would in your code. Since there is generally some level of
logic, this is a good practice.

The comments will not be in the resulting output. If you'd like the comments to show up. Just use html comments, and
they will be output.

Any comments that must contain `}}` or other handlebars tokens should use the `{{!-- --}}` syntax.

:::

<Example examplePage="/examples/comments" />

## Helpers

Handlebars helpers can be accessed from any context in a template. You can register a helper with the
Handlebars.registerHelper method.

<Example examplePage="/examples/helper-simple" :showInputOutput="false" />

Helpers receive the current context as the `this`-context of the function.

<Example examplePage="/examples/helper-this-context" :showInputOutput="false" />

### Literals

Helper calls may also have literal values passed to them either as parameter arguments or hash arguments. Supported
literals include numbers, strings, `true`, `false`, `null` and ? `undefined`.

<Example examplePage="/examples/helper-literals" :showInputOutput="false" />

## Block Helpers

Block expressions allow you to define helpers that will invoke a section of your template with a different context than
the current. These block helpers are identified by a `#` preceeding the helper name and require a matching closing
mustache, `/`, of the same name. Let's consider a helper that will generate an HTML list:

<Example examplePage="/examples/helper-block" :showInputOutput="true" />

The example creates a helper named `list` to generate our HTML list. The helper receives the `people` as its first
parameter, and an `options` hash as its second parameter. The options hash contains a property named `fn`, which you can
invoke with a context just as you would invoke a normal Handlebars template.

```js
Handlebars.registerHelper("list", function(items, options) {
  var out = "<ul>";

  for (var i = 0, l = items.length; i < l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});
```

When executed, the template will render:

```html
<ul>
  <li>Yehuda Katz</li>
  <li>Carl Lerche</li>
  <li>Alan Johnson</li>
</ul>
```

Block helpers have more features, such as the ability to create an `else` section (used, for instance, by the built-in
`if` helper).

Since the contents of a block helper are escaped when you call `options.fn(context)`, Handlebars does not escape the
results of a block helper. If it did, inner content would be double-escaped!

!button[Learn More: Block Helpers](block-helpers.html)

## Partials

Handlebars partials allow for code reuse by creating shared templates. Rendering this template

```handlebars
<div class="post">
  {{> userMessage tagName="h1" }}

  <h1>Comments</h1>

  {{#each comments}}
    {{> userMessage tagName="h2" }}
  {{/each}}
</div>
```

when using this partial and context:

```js
Handlebars.registerPartial(
  "userMessage",
  "<{{tagName}}>By {{author.firstName}} {{author.lastName}}</{{tagName}}>" + '<div class="body">{{body}}</div>'
);

var context = {
  author: { firstName: "Alan", lastName: "Johnson" },
  body: "I Love Handlebars",
  comments: [
    {
      author: { firstName: "Yehuda", lastName: "Katz" },
      body: "Me too!"
    }
  ]
};
```

results in:

```html
<div class="post">
  <h1>By Alan Johnson</h1>
  <div class="body">I Love Handlebars</div>

  <h1>Comments</h1>

  <h2>By Yehuda Katz</h2>
  <div class="body">Me Too!</div>
</div>
```

!button[Learn More: Partials](partials.html)

## Built-In Helpers

Handlebars offers a variety of built-in helpers such as the if conditional and each iterator.

!button[Learn More: Built-In Helpers](builtin-helpers.html)

## API Reference

Handlebars offers a variety of APIs and utility methods for applications and helpers.

!button[Learn More: API Reference](api-reference.html)
