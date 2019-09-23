# Built-in Helpers

## The `if` block helper

You can use the `if` helper to conditionally render a block. If its argument returns `false`, `undefined`, `null`, `""`,
`0`, or `[]`, Handlebars will not render the block.

<ExamplePart examplePage="/examples/builtin-helper-if-block.md" show="template" />

When you pass the following input to the above template

<ExamplePart examplePage="/examples/builtin-helper-if-block.md" show="input" />

This will produce the result as below:

<ExamplePart examplePage="/examples/builtin-helper-if-block.md" show="output" />

If the input is an empty JSONObject `{}`, then `author` will become `undefined` and `if` condition fails, resulting in
the output as follow:

```html
<div class="entry"></div>
```

When using a block expression, you can specify a template section to run if the expression returns a falsy value. The
section, marked by `else` is called an "else section".

<ExamplePart examplePage="/examples/builtin-helper-ifelse-block.md" show="template" />

## The `unless` block helper

You can use the `unless` helper as the inverse of the `if` helper. Its block will be rendered if the expression returns
a falsy value.

<ExamplePart examplePage="/examples/builtin-helper-unless-block.md" show="template" />

If looking up `license` under the current context returns a falsy value, Handlebars will render the warning. Otherwise,
it will render nothing.

## The `each` block helper

You can iterate over a list using the built-in `each` helper. Inside the block, you can use `this` to reference the
element being iterated over.

<ExamplePart examplePage="/examples/builtin-helper-each-block.md" show="template" />

when used with this context:

<ExamplePart examplePage="/examples/builtin-helper-each-block.md" show="input" />

will result in:

<ExamplePart examplePage="/examples/builtin-helper-each-block.md" show="output" />

You can use the `this` expression in any context to reference the current context.

You can optionally provide an `else` section which will display only when the list is empty.

<ExamplePart examplePage="/examples/builtin-helper-eachelse-block.md" show="template" />

::: v-pre

When looping through items in `each`, you can optionally reference the current loop index via `{{@index}}`.

```html
{{#each array}} {{@index}}: {{this}} {{/each}}
```

Additionally for object iteration, `{{@key}}` references the current key name:

```html
{{#each object}} {{@key}}: {{this}} {{/each}}
```

The first and last steps of iteration are noted via the `@first` and `@last` variables when iterating over an array.
When iterating over an object only the `@first` is available. Nested each blocks may access the iteration variables via
depth based paths. To access the parent index, for example, `{{@../index}}` can be used.

:::
