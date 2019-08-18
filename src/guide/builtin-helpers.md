# Built-in Helpers 

## The `if` block helper
You can use the `if` helper to conditionally render a block. If its argument returns `false`, `undefined`, `null`, `""`, `0`, or `[]`, Handlebars will not render the block.

```html
<div class="entry">
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{/if}}
</div>
```

when used with an empty `({})` context, `author` will be `undefined`, resulting in:
```html
<div class="entry">
</div>
```

::: v-pre

When using a block expression, you can specify a template section to run if the expression returns a falsy value. The section, marked by `{{else}}` is called an "else section".

```html
<div class="entry">
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{/if}}
</div>
```

:::


## The `unless` block helper
You can use the `unless` helper as the inverse of the `if` helper. Its block will be rendered if the expression returns a falsy value.

```html
<div class="entry">
  {{#unless license}}
  <h3 class="warning">WARNING: This entry does not have a license!</h3>
  {{/unless}}
</div>
```

If looking up `license` under the current context returns a falsy value, Handlebars will render the warning. Otherwise, it will render nothing.

## The `each` block helper
You can iterate over a list using the built-in `each` helper. Inside the block, you can use `this` to reference the element being iterated over.

```html
<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

when used with this context:

```js
{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley"
  ]
}
```

will result in:

```html
<ul class="people_list">
  <li>Yehuda Katz</li>
  <li>Alan Johnson</li>
  <li>Charles Jolley</li>
</ul>
```

You can use the `this` expression in any context to reference the current context.

::: v-pre

You can optionally provide an `{{else}}` section which will display only when the list is empty.

```html
{{#each paragraphs}}
  <p>{{this}}</p>
{{else}}
  <p class="empty">No content</p>
{{/each}}
```

:::

When looping through items in `each`, you can optionally reference the current loop index via `{{@index}}`.

```html
{{#each array}}
  {{@index}}: {{this}}
{{/each}}
```

Additionally for object iteration, `{{@key}}` references the current key name:

```html
{{#each object}}
  {{@key}}: {{this}}
{{/each}}
```

The first and last steps of iteration are noted via the `@first` and `@last` variables when iterating over an array. When iterating over an object only the `@first` is available.
Nested each blocks may access the iteration variables via depth based paths. To access the parent index, for example, `{{@../index}}` can be used.


[Turndown](http://domchristie.github.io/turndown/) can be a great help converting the HTML of the old page to Markdown.
