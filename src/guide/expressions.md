# Expressions

::: v-pre

Handlebars expressions are the basic unit of a Handlebars template. You can use them alone in a `{{mustache}}`, pass
them to a Handlebars helper, or use them as values in hash arguments.

:::

## Basic Usage

Handlebars expressions are some contents enclosed by double curly braces `{{}}`. In the below template, `firstname` is a
variable which is enclosed by double curly braces which is said to be an expression.

<ExamplePart examplePage="/examples/simple-expressions.md" show="template" />

If the below input object is applied to the template

<ExamplePart examplePage="/examples/simple-expressions.md" show="input" />

Expressions are compiled to produce the output as follows:

<ExamplePart examplePage="/examples/simple-expressions.md" show="output" />

## Path expressions

Handlebars expressions can also be dot-separated paths.

<ExamplePart examplePage="/examples/path-expressions-dot.md" show="template" />

This expression looks up the `person` property in the input object and inturn looks up the `firstname` and `lastname`
property within the `person` object.

Pass the below input object to the template <ExamplePart examplePage="/examples/path-expressions-dot.md" show="input" />

Output will be generated as below <ExamplePart examplePage="/examples/path-expressions-dot.md" show="output" />

Handlebars also supports a deprecated `/` syntax, so you could write the above template as:

<ExamplePart examplePage="/examples/path-expressions-slash.md" show="template" />

## Literal segments

Identifiers may be any unicode character except for the following:

Whitespace `!` `"` `#` `%` `&` `'` `(` `)` `*` `+` `,` `.` `/` `;` `<` `=` `>` `@` `[` `\` `]` `^` `` ` `` `{` `|` `}`
`~`

To reference a property that is not a valid identifier, you can use segment-literal notation, `[`:

<ExamplePart examplePage="/examples/literal-segments.md" show="template" />

In the example above, the template will treat the `each` parameter roughly equivalent to this javascript:
`articles[10]['#comments']`

You may not include a closing `]` in a path-literal, but all other characters are fair game.

JavaScript-style strings, `"` and `'`, may also be used vs. `[` pairs.

::: v-pre

In Handlebars, the values returned by the `{{expression}}` are HTML-escaped. Say, If the expression contains `&`, then
the returned HTML-escaped output is genarated as `&amp;` If you don't want Handlebars to escape a value, use the
"triple-stash", `{{{`:

::: In the below template, You can learn how to produce the HTML escaped and raw output.

<ExamplePart examplePage="/examples/html-escaping.md" show="template" />

Pass the special characters to the template

<ExamplePart examplePage="/examples/html-escaping.md" show="input" />

Expressions enclosed by "triple-stash" (`{{{`) produces the raw output otherwise HTML-escaped output is generated as
below.

<ExamplePart examplePage="/examples/html-escaping.md" show="output" />

## Helpers

A Handlebars helper call is a simple identifier, followed by zero or more parameters (separated by space). Each
parameter is a Handlebars expression.

```handlebars
{{link story}}
```

In this case, `link` is the name of a Handlebars helper, and story is a parameter to the helper. Handlebars evaluates
parameters in exactly the same way described above in "Basic Usage".

```js
Handlebars.registerHelper("link", function(object) {
  var url = Handlebars.escapeExpression(object.url),
    text = Handlebars.escapeExpression(object.text);

  return new Handlebars.SafeString("<a href='" + url + "'>" + text + "</a>");
});
```

When returning HTML from a helper, you should return a Handlebars SafeString if you don't want it to be escaped by
default. When using SafeString all unknown or unsafe data should be manually escaped with the `escapeExpression` method.

You can also pass a simple String, number, or boolean as a parameter to Handlebars helpers.

```handlebars
{{link "See more..." story.url}}
```

In this case, Handlebars will pass the link helper two parameters: the String `"See more..."` and the result of
evaluating `story.url` in the current context.

```js
Handlebars.registerHelper("link", function(text, url) {
  url = Handlebars.escapeExpression(url);
  text = Handlebars.escapeExpression(text);

  return new Handlebars.SafeString("<a href='" + url + "'>" + text + "</a>");
});
```

You could use the exact same helper with dynamic text based on the value of `story.text`:

```handlebars
{{link story.text story.url}}
```

Handlebars helpers can also receive an optional sequence of key-value pairs as their final parameter (referred to as
hash arguments in the documentation):

```handlebars
{{link "See more..." href=story.url class="story"}}
```

The keys in hash arguments must each be simple identifiers, and the values are Handlebars expressions. This means that
values can be simple identifiers, paths, or Strings.

```js
Handlebars.registerHelper("link", function(text, options) {
  var attrs = [];

  for (var prop in options.hash) {
    attrs.push(Handlebars.escapeExpression(prop) + '="' + Handlebars.escapeExpression(options.hash[prop]) + '"');
  }

  return new Handlebars.SafeString("<a " + attrs.join(" ") + ">" + Handlebars.escapeExpression(text) + "</a>");
});
```

Handlebars provides additional metadata, such as Hash arguments, to helpers as a final parameter.

Handlebars also offers a mechanism for invoking a helper with a block of the template. Block helpers can then invoke
that block zero or more times with any context it chooses.

[Learn More: Block Helpers](block_helpers.html)

## Subexpressions

Handlebars offers support for subexpressions, which allows you to invoke multiple helpers within a single mustache, and
pass in the results of inner helper invocations as arguments to outer helpers. Subexpressions are delimited by
parentheses.

```handlebars
{{outer-helper (inner-helper 'abc') 'def'}}
```

In this case, `inner-helper` will get invoked with the string argument `'abc'`, and whatever the `inner-helper` function
returns will get passed in as the first argument to `outer-helper` (and `'def'` will get passed in as the second
argument to `outer-helper`).

# Whitespace Control

Template whitespace may be omitted from either side of any mustache statement by adding a `~` character by the braces.
When applied all whitespace on that side will be removed up to the first handlebars expression or non-whitespace
character on that side.

```handlebars
{{#each nav ~}}
  <a href="{{url}}">
    {{~#if test}}
      {{~title}}
    {{~^~}}
      Empty
    {{~/if~}}
  </a>
{{~/each}}
```

with this context:

```js
{
  nav: [{ url: "foo", test: true, title: "bar" }, { url: "bar" }];
}
```

results in output sans newlines and formatting whitespace:

```html
<a href="foo">bar</a><a href="bar">Empty</a>
```

This expands the default behavior of stripping lines that are "standalone" helpers (only a block helper, comment, or
partial and whitespace).

```handlebars
{{#each nav}}
  <a href="{{url}}">
    {{#if test}}
      {{title}}
    {{^}}
      Empty
    {{/if}}
  </a>
{{~/each}}
```

will render

```html
<a href="foo">
  bar
</a>
<a href="bar">
  Empty
</a>
```

## Escaping

::: v-pre

Handlebars content may be escaped in one of two ways, inline escapes or raw block helpers. Inline escapes created by
prefixing a mustache block with `\`. Raw blocks are created using `{{{{` mustache braces.

:::

```handlebars
\{{escaped}}
{{{{raw}}}}
  {{escaped}}
{{{{/raw}}}}
```

Raw blocks operate in the same manner as other [block helpers](block-helpers.html) with the distinction of the child
content is treated as a literal string.
