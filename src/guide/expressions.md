# Expressions

::: v-pre

Handlebars expressions are the basic unit of a Handlebars template. You can use them alone in a `{{mustache}}`, pass
them to a Handlebars helper, or use them as values in hash arguments.

:::

## Basic Usage

Handlebars expressions are some contents enclosed by double curly braces `{{}}`. In the below template, `firstname` is a
variable that is enclosed by double curly braces, which is said to be an expression.

<Example examplePage="/examples/simple-expressions.md" show="template" />

If the below input object is applied to the template

<Example examplePage="/examples/simple-expressions.md" show="input" />

Expressions are compiled to produce the output as follows:

<Example examplePage="/examples/simple-expressions.md" show="output" />

## Path expressions

Handlebars expressions can also be dot-separated paths.

<Example examplePage="/examples/path-expressions-dot.md" show="template" />

This expression looks up the `person` property in the input object and in turn looks up the `firstname` and `lastname`
property within the `person` object.

Pass the below input object to the template <Example examplePage="/examples/path-expressions-dot.md" show="input" />

Output will be generated as below <Example examplePage="/examples/path-expressions-dot.md" show="output" />

Handlebars also supports a deprecated `/` syntax, so you could write the above template as:

<Example examplePage="/examples/path-expressions-slash.md" show="template" />

## Changing the context

Some helpers like `#with` and `#each` allow you to dive into nested objects. When you include `../` segments in your
path, Handlebars will change back into the parent context.

<Example examplePage="/examples/path-expressions-dot-dot" show="template" />

Even though the name is printed while in the context of a comment, it can still go back to the main context (the
root-object) to retrieve the prefix.

::: v-pre

::: warning

The exact value that `../` will resolve to varies based on the helper that is calling the block. Using `../` is only
necessary when context changes. Children of helpers such as `{{#each}}` would require the use of `../` while children of
helpers such as `{{#if}}` do not.

```handlebars
{{permalink}}
{{#each comments}}
  {{../permalink}}

  {{#if title}}
    {{../permalink}}
  {{/if}}
{{/each}}
```

In this example all of the above reference the same prefix value even though they are located within different blocks.
This behavior is new as of Handlebars 4; the
[release notes](https://github.com/handlebars-lang/handlebars.js/blob/master/release-notes.md) discuss the prior
behavior as well as the migration plan. Handlebars also allows for name conflict resolution between helpers and data
fields via a `this` reference:

:::

## Literal segments

Identifiers may be any unicode character except for the following:

_Whitespace_ `!` `"` `#` `%` `&` `'` `(` `)` `*` `+` `,` `.` `/` `;` `<` `=` `>` `@` `[` `\` `]` `^` `` ` `` `{` `|` `}`
`~`

In addition, the words `true`, `false`, `null` and `undefined` are only allowed in the first part of a path expression.

To reference a property that is not a valid identifier, you can use segment-literal notation, `[`. You may not include a
closing `]` in a path-literal, but all other characters are allowed.

JavaScript-style strings, `"` and `'`, may also be used instead of `[` pairs.

<Example examplePage="/examples/literal-segments.md" show="template" />

## HTML-escaping

::: v-pre

In Handlebars, the values returned by the `{{expression}}` are HTML-escaped. Say, if the expression contains `&`, then
the returned HTML-escaped output is generated as `&amp;`. If you don't want Handlebars to escape a value, use the
"triple-stash", `{{{`:

:::

In the below template, you can learn how to produce the HTML escaped and raw output.

<Example examplePage="/examples/html-escaping.md" show="template" />

Pass the special characters to the template

<Example examplePage="/examples/html-escaping.md" show="input" />

::: v-pre

Expressions enclosed by "triple-stash" (`{{{`) produce the raw output. Otherwise, HTML-escaped output is generated as
below.

:::

<Example examplePage="/examples/html-escaping.md" show="output" />

## Helpers

Helpers can be used to implement functionality that is not part of the Handlebars language itself.

A helper can be registered at runtime via `Handlebars.registerHelper`, for example in order to uppercase all characters
of a string.

<Example examplePage="/examples/helper-simple.md" show="preparationScript" />

A Handlebars helper call is a simple identifier, followed by zero or more parameters (separated by a space). Each
parameter is a Handlebars expression that is evaluated exactly the same way as described above in "Basic Usage":

<Example examplePage="/examples/helper-simple.md" show="template" />

In this case, `loud` is the name of a helper, and `lastname` is a parameter to the helper. The template will uppercase
the `lastname` property of the input:

<Flex>
<Example examplePage="/examples/helper-simple.md" show="input" />
<Example examplePage="/examples/helper-simple.md" show="output" />
</Flex>

### Prevent HTML-escaping of helper return values

::: v-pre

When your helper returns an instance of `Handlebars.Safestring` the return-value is not escaped, even if the helper is
called with <span v-pre>`{{`</span> instead of `{{{`. You have to take care that all parameters are escaped properly
using `Handlebars.escapeExpression`.

:::

<Example examplePage="/examples/helper-safestring.md" show="preparationScript" />

### Helpers with Multiple Parameters

Let us see another example of helpers with two parameters

<Example examplePage="/examples/helper-multiple-parameters.md" show="template" />

In this case, Handlebars will pass the link helper two parameters: the String `See Website` and the value of
`people.url` from the below provided input `people` object.

<Example examplePage="/examples/helper-multiple-parameters.md" show="input" />

The helper function `link` is used to generate a hyperlink as described in the script.

<Example examplePage="/examples/helper-multiple-parameters.md" show="preparationScript" />

We will obtain the output using the input parameters

<Example examplePage="/examples/helper-multiple-parameters.md" show="output" />

In the above example, You could use the exact same helper with dynamic text based on the value of `people.text`:

<Flex>
<Example examplePage="/examples/helper-dynamic-parameters.md" show="template" />
<Example examplePage="/examples/helper-dynamic-parameters.md" show="input" />
</Flex>

### Literal arguments

Helper calls may also have literal values passed to them either as parameter arguments or hash arguments. Supported
literals include numbers, strings, `true`, `false`, `null` and `undefined`:

<Flex>
<Example examplePage="/examples/helper-literals" show="template" />
</Flex>

### Helpers with Hash arguments

Handlebars provides additional metadata, such as Hash arguments, to helpers as a final parameter.

<Example examplePage="/examples/helper-hash-arguments.md" show="template" />

In that template,the final parameter `href=people.url class="people"` are hash arguments sent to the helper.

The keys in hash arguments must each be simple identifiers, and the values are Handlebars expressions. This means that
values can be simple identifiers, paths, or Strings.

If we pass the below input to the template, the value of `person.url` can be obtained from the `person` object.

<Example examplePage="/examples/helper-hash-arguments.md" show="input" />

As described in the helper script below, the hash arguments can be obtained from the last parameter `options` for
further processing within the helper.

<Example examplePage="/examples/helper-hash-arguments.md" show="preparationScript" />

The output of above helper is generated as below

<Example examplePage="/examples/helper-hash-arguments.md" show="output" />

Handlebars also offers a mechanism for invoking a helper with a block of the template. Block helpers can then invoke
that block zero or more times with any context it chooses.

[Learn More: Block Helpers](block-helpers.html)

### Disambiguating helpers calls and property lookup

If a helper is registered by the same name as a property of an input object, the helper has priority over the input
property. If you want to resolve the input property instead, you can prefix its name with `./` or `this.` (or the
deprecated `this/`)

<Flex>
<Example examplePage="/examples/helper-data-name-conflict" show="template" />
<Example examplePage="/examples/helper-data-name-conflict" show="input" />
<Example examplePage="/examples/helper-data-name-conflict" show="preparationScript" />
</Flex>

## Subexpressions

Handlebars offers support for subexpressions, which allows you to invoke multiple helpers within a single mustache, and
pass in the results of inner helper invocations as arguments to outer helpers. Subexpressions are delimited by
parentheses.

```handlebars
{{outer-helper (inner-helper "abc") "def"}}
```

In this case, `inner-helper` will get invoked with the string argument `'abc'`, and whatever the `inner-helper` function
returns will get passed in as the first argument to `outer-helper` (and `'def'` will get passed in as the second
argument to `outer-helper`).

## Whitespace Control

Template whitespace may be omitted from either side of any mustache statement by adding a `~` character by the braces.
When applied all whitespace on that side will be removed up to the first handlebars expression or non-whitespace
character on that side.

```handlebars
{{#each nav~}}
  <a href="{{url}}">
    {{~#if test}}
      {{~title}}
    {{~else~}}
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
    {{else}}
      Empty
    {{/if}}
  </a>
{{~/each}}
```

will render

```html
<a href="foo"> bar </a> <a href="bar"> Empty </a>
```

## Escaping Handlebars expressions

::: v-pre

Handlebars content may be escaped in one of two ways, inline escapes or raw block helpers. Inline escapes created by
prefixing a mustache block with `\`. Raw blocks are created using `{{{{` mustache braces.

:::

```handlebars
\{{escaped}}
{{#raw}}
  \{{escaped}}
{{/raw}}
```

Raw blocks operate in the same manner as other [block helpers](block-helpers.html) with the distinction of the child
content is treated as a literal string.
