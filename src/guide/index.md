# Introduction

## What is Handlebars?

Handlebars is a simple **templating language**.

It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular
text with embedded Handlebars expressions.

<Example examplePage="/examples/simple-expressions" show="template"/>

A handlebars expression is a <span v-pre>`{{`</span>, some contents, followed by a `}}`. When the template is executed,
these expressions are replaced with values from an input object.

[Learn More: Expressions](expressions.md)

## Installation

The fastest way to test Handlebars is to load it from a _CDN_ and embed it in an HTML file.

<<< @/snippets/compiler-and-runtime/simple-console-out.html

::: warning

This method can be used for small pages and for testing. There are several other ways to use Handlebars, when you target
real production systems.

[Learn more: Installation](installation/index.md)

:::

## Language features

### Simple expressions

As shown before, the following template defines two Handlebars expressions

<Example examplePage="/examples/simple-expressions" show="template"/>

If applied to the input object

<Example examplePage="/examples/simple-expressions" show="input"/>

the expressions will be replaced by the corresponding properties. The result is then

<Example examplePage="/examples/simple-expressions" show="output"/>

### Nested input objects

Sometimes, the input objects contains other objects or arrays. For example:

<Example examplePage="/examples/path-expressions-dot" show="input" />

In such a case, you can use a dot-notation to gain access to the nested properties

<Example examplePage="/examples/path-expressions-dot" show="template"/>

[Learn more: Expressions](./expressions.md)

Some built-in helpers allow you to change the current context to a nested object. You can then access this object as if
it were the root object

### Evaluation context

The built-in block-helpers `each` and `with` allow you to change the current evaluation context.

The `with`-helper dives into an object-property, giving you access to its properties

<Flex>
<Example examplePage="/examples/builtin-helper-with-block" show="template"/>
<Example examplePage="/examples/builtin-helper-with-block" show="input"/>
</Flex>

The `each`-helper iterates an array, allowing you to access the properties of each object via simple handlebars
expressions.

<Flex>
<Example examplePage="/examples/builtin-helper-each-block" show="template"/>
<Example examplePage="/examples/builtin-helper-each-block" show="input"/>
</Flex>

[Learn more: Built-in helpers](./builtin-helpers.md)

### Template comments

::: v-pre

You can use comments in your handlebars code just as you would in your code. Since there is generally some level of
logic, this is a good practice.

The comments will not be in the resulting output. If you'd like the comments to show up just use HTML comments, and they
will be output.

Any comments that must contain `}}` or other handlebars tokens should use the `{{!-- --}}` syntax.

:::

<Example examplePage="/examples/comments" show="template"/>

### Custom Helpers

Handlebars helpers can be accessed from any context in a template. You can register a helper with the
Handlebars.registerHelper method.

<Flex>
<Example examplePage="/examples/helper-simple" show="template" />
<Example examplePage="/examples/helper-simple" show="preparationScript" />
</Flex>

Helpers receive the current context as the `this`-context of the function.

<Flex>
<Example examplePage="/examples/helper-this-context" show="template" />
<Example examplePage="/examples/helper-this-context" show="preparationScript" />
</Flex>

### Block Helpers

Block expressions allow you to define helpers that will invoke a section of your template with a different context than
the current. These block helpers are identified by a `#` preceeding the helper name and require a matching closing
mustache, `/`, of the same name. Let's consider a helper that will generate an HTML list:

<Example examplePage="/examples/helper-block" show="preparationScript" />

The example creates a helper named `list` to generate our HTML list. The helper receives the `people` as its first
parameter, and an `options` hash as its second parameter. The options hash contains a property named `fn`, which you can
invoke with a context just as you would invoke a normal Handlebars template.

When executed, the template will render:

<Example examplePage="/examples/helper-block" show="output" />

Block helpers have more features, such as the ability to create an `else` section (used, for instance, by the built-in
`if` helper).

Since the contents of a block helper are escaped when you call `options.fn(context)`, Handlebars does not escape the
results of a block helper. If it did, inner content would be double-escaped!

[Learn More: Block Helpers](block-helpers.md)

### HTML Escaping

::: v-pre

Because it was originally designed to generate HTML, Handlebars escapes values returned by a `{{expression}}`. If you
don't want Handlebars to escape a value, use the "triple-stash", `{{{`.

:::

<Example examplePage="/examples/html-escaping" show="template" />

The special characters in the second line will be escaped:

<Example examplePage="/examples/html-escaping" show="output" />

Handlebars will not escape a `Handlebars.SafeString`. If you write a helper that generates its own HTML, you will
usually want to return a `new Handlebars.SafeString(result)`. In such a circumstance, you will want to manually escape
parameters.

<Example examplePage="/examples/helper-safestring" show="preparationScript" />

This will escape the passed in parameters, but mark the response as safe, so Handlebars will not try to escape it even
if the "triple-stash" is not used.

::: warning

Handlebars does not escape JavaScript strings. Using Handlebars to generate JavaScript, such as inline event handlers,
could potentially lead to cross-site scripting vulnerabilities.

:::

### Partials

Handlebars partials allow for code reuse by creating shared templates. You can register a partial using the
`registerPartial`-method:

<Example examplePage="/examples/partials/register" show="preparationScript" />

The following template and input:

<Flex>
<Example examplePage="/examples/partials/register" show="template" />
<Example examplePage="/examples/partials/register" show="input" />
</Flex>

will then provide the following result:

<Example examplePage="/examples/partials/register" show="output" />

[Learn More: Partials](partials.md)

### Built-In Helpers

Handlebars offers a variety of built-in helpers such as the if conditional and each iterator.

[Learn More: Built-In Helpers](builtin-helpers.md)

### API Reference

Handlebars offers a variety of APIs and utility methods for applications and helpers.

[Learn More: API Reference](./../api-reference/index.md)
