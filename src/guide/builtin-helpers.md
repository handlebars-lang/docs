# Built-in Helpers

## #if

You can use the `if` helper to conditionally render a block. If its argument returns `false`, `undefined`, `null`, `""`,
`0`, or `[]`, Handlebars will not render the block.

<Example examplePage="/examples/builtin-helper-if-block.md" show="template" />

When you pass the following input to the above template

<Example examplePage="/examples/builtin-helper-if-block.md" show="input" />

This will produce the result as below:

<Example examplePage="/examples/builtin-helper-if-block.md" show="output" />

If the input is an empty JSONObject `{}`, then `author` will become `undefined` and `if` condition fails, resulting in
the output as follow:

```html
<div class="entry"></div>
```

When using a block expression, you can specify a template section to run if the expression returns a falsy value. The
section, marked by `else` is called an "else section".

<Example examplePage="/examples/builtin-helper-ifelse-block.md" show="template" />

### includeZero

The `includeZero=true` option may be set to treat the conditional as not empty. This effectively determines if `0` is
handled by the positive or negative path.

```handlebars
{{#if 0 includeZero=true}}
  <h1>Does render</h1>
{{/if}}
```

### Sub-Expressions

Helpers are the proposed way to add custom logic to templates. You can write any helper and use it in a sub-expression.

For example, in checking for initialization of a variable the built-in `#if` check might not be appropriate as it
returns false for empty collections (see [Utils.isEmpty](/api-reference/utilities.html#handlebars-utils-isempty-value)).

You could write a helper that checks for "undefined" such as:

<Example examplePage="/examples/builtin-helper-if-subexpression.md" show="preparationScript" />

Then use your helper as a sub-expression:

<Example examplePage="/examples/builtin-helper-if-subexpression.md" show="template" />

## #unless

You can use the `unless` helper as the inverse of the `if` helper. Its block will be rendered if the expression returns
a falsy value.

<Example examplePage="/examples/builtin-helper-unless-block.md" show="template" />

If looking up `license` under the current context returns a falsy value, Handlebars will render the warning. Otherwise,
it will render nothing.

## #each

You can iterate over a list using the built-in `each` helper. Inside the block, you can use `this` to reference the
element being iterated over.

<Example examplePage="/examples/builtin-helper-each-block.md" show="template" />

when used with this context:

<Example examplePage="/examples/builtin-helper-each-block.md" show="input" />

will result in:

<Example examplePage="/examples/builtin-helper-each-block.md" show="output" />

You can use the `this` expression in any context to reference the current context.

You can optionally provide an `else` section which will display only when the list is empty.

<Example examplePage="/examples/builtin-helper-eachelse-block.md" show="template" />

::: v-pre

When looping through items in `each`, you can optionally reference the current loop index via `{{@index}}`.

```handlebars
{{#each array}} {{@index}}: {{this}} {{/each}}
```

Additionally for object iteration, `{{@key}}` references the current key name:

```handlebars
{{#each object}} {{@key}}: {{this}} {{/each}}
```

:::

The first and last steps of iteration are noted via the [`@first`](../api-reference/data-variables.md#first) and
[`@last`](../api-reference/data-variables.md#last) variables when iterating over an array.

::: v-pre

Nested `each` blocks may access the iteration variables via depth based paths. To access the parent index, for example,
`{{@../index}}` can be used.

:::

## #with

The `with`-helper allows you to change the evaluation context of template-part.

<Example examplePage="/examples/builtin-helper-with-block.md" show="template" />

when used with this context:

<Example examplePage="/examples/builtin-helper-with-block.md" show="input" />

will result in:

<Example examplePage="/examples/builtin-helper-with-block.md" show="output" />

`with` can also be used with block parameters to define known references in the current block. The example above can be
converted to

<Example examplePage="/examples/builtin-helper-with-block-param.md" show="template" />

Which allows for complex templates to potentially provide clearer code than `../` depthed references allow for.

::: v-pre

You can optionally provide an `{{else}}` section which will display only when the passed value is empty.

:::

<Flex>
<Example examplePage="/examples/builtin-helper-with-else.md" show="template" />
<Example examplePage="/examples/builtin-helper-with-else.md" show="input" />
</Flex>

## lookup

The `lookup` helper allows for dynamic parameter resolution using Handlebars variables.

This is useful for resolving values for array indexes.

<Example examplePage="/examples/builtin-helper-lookup.md" show="template" />

It can also be used to lookup properties of object based on data from the input. The following is a more complex example
that uses `lookup` in a sub-expression to change the evaluation context to another object based on a property-value.

<Example examplePage="/examples/builtin-helper-lookup-dynamic-property.md" show="template" />

## log

The `log` helper allows for logging of context state while executing a template.

<Example examplePage="/examples/builtin-helper-log.md" show="template" />

It delegates to `Handlebars.logger.log` which may be overridden to perform custom logging.

Any number of arguments may be passed to this method and all will be forwarded to the logger.

<Example examplePage="/examples/builtin-helper-log-multiple-params.md" show="template" />

The log level may be set using the level hash parameter. Supported values are debug, info, warn, and error. When
omitted, info is the default value,

Logging is conditional based on the level and to value set in `Handlebars.logger.level`, which defaults to `info`. All
log statements at or above the current level will be output.

<Example examplePage="/examples/builtin-helper-log-loglevel.md" show="template" />
