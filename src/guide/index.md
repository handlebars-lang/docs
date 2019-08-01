# Guide

[Installation](./installation.html)

## Getting Started

Handlebars templates look like regular HTML, with embedded handlebars expressions.

<Example examplePage="/examples/simple-expressions" />

A handlebars expression is a `{{`, some contents, followed by a `}}`

[Learn More: Expressions](expressions.html)

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

::: warning

It is important that you put the template inside a `<script>` tag. Do not put it into the HTML directly or the
HTML-parser might modify it (for example, if it contains a table).

:::

Compile a template in JavaScript by using `Handlebars.compile`

```js
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
```

::: warning

Please note that this approach is not recommended for production applications. A better way is to precompile your
templates. This will result in a smaller required runtime library and significant savings from not having to compile the
template in the browser. This can be especially important when working with mobile devices.

[Learn More: Precompilation](precompilation.html)

:::

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

[Learn More: Execution](execution.html)

## HTML Escaping

::: v-pre

Handlebars HTML-escapes values returned by a `{{expression}}`. If you don't want Handlebars to escape a value, use the
"triple-stash", `{{{`.

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

The builting block-helpers `{{#each}}` and `{{#with}}` allow you to change the current evaluation context.

- The `{{#each}}`-helper iterates an array, allowing to you access the properties of each object via simple handlebars
  expressions.
- The `{{#with}}`-helper dives into an object-property, giving you access to its properties

:::

<Example examplePage="/examples/each-with" showInputOutput="true" />

## Nested Handlebars Paths

::: v-pre

In addition to simple paths like `<p>{{name}}</p>`, Handlebars also supports nested paths. This allows you to look up
properties nested below the current context.

:::

<Example examplePage="/examples/path-expressions-dot" showInputOutput="true" />

This makes it possible to use Handlebars templates with more raw JSON objects. It is also possible, to use `/` as path
delimiter:

<Example examplePage="/examples/path-expressions-slash" />

Nested handlebars paths can also include `../` segments, which evaluate their paths against a parent context.

<Example examplePage="/examples/path-expressions-dot-dot" showInputOutput="true"/>

Even though the name is printed while in the context of a comment, it can still go back to the main context (the
root-object) to retrieve the prefix.

::: v-pre

::: warning

The exact value that `../` will resolve to varies based on the helper that is calling the block. Using `../` is only
necessary when context changes. Children of helpers such as `{{#each}}` would require the use of `../` while children of
helpers such as `{{#if}}` do not.

:::

In this example all of the above reference the same permalink value even though they are located within different
blocks. This behavior is new as of Handlebars 4, the release notes discuss the prior behavior as well as the migration
plan. Handlebars also allows for name conflict resolution between helpers and data fields via a this reference:

```handlebars
<p>{{./name}} or {{this/name}} or {{this.name}}</p>
```

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

```handlebars
{{agree_button "My Text" class="my-class" visible=true counter=4}}
```

## Block Expressions

Block expressions allow you to define helpers that will invoke a section of your template with a different context than
the current. These block helpers are identified by a `#` preceeding the helper name and require a matching closing
mustache, `/`, of the same name. Let's consider a helper that will generate an HTML list:

```handlebars
{{#list people}}{{firstName}} {{lastName}}{{/list}}
```

If we have the following context:

```json
{
  "people": [
    { "firstName": "Yehuda", "lastName": "Katz" },
    { "firstName": "Carl", "lastName": "Lerche" },
    { "firstName": "Alan", "lastName": "Johnson" }
  ]
}
```

we would create a helper named list to generate our HTML list. The helper receives the people as its first parameter,
and an options hash as its second parameter. The options hash contains a property named fn, which you can invoke with a
context just as you would invoke a normal Handlebars template.

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

[Learn More: Block Helpers](block-helpers.html)

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

[Learn More: Partials](partials.html)

## Built-In Helpers

Handlebars offers a variety of built-in helpers such as the if conditional and each iterator.

[Learn More: Built-In Helpers](builtin-helpers.html)

## API Reference

Handlebars offers a variety of APIs and utility methods for applications and helpers.

[Learn More: API Reference](api-reference.html)
