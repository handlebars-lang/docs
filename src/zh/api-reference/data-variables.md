# `@data` 变量

The following `@data` variables are implemented by Handlebars and its builtin helpers.

## `@root`

Initial context with which the template was executed.

```handlebars
{{#each array}} {{@root.foo}} {{/each}}
```

Unless explicitly modified, this value is consistent across all portions of the page rendering, meaning it can be used
within partials where depthed parameters are unable to reference their parent templates.

## `@first`

Set to true by the `each` helper for the first step of iteration.

```handlebars
{{#each array}} {{#if @first}} First! {{/if}} {{/each}}
```

## `@index`

Zero-based index for the current iteration step. Set by the `each` helper.

```handlebars
{{#each array}} {{@index}} {{/each}}
```

## `@key`

Key name for the current iteration step. Set by the `each` helper when iterating over objects.

```handlebars
{{#each array}} {{@key}} {{/each}}
```

## `@last`

Set to true by the `each` helper for the last step of iteration.

```handlebars
{{#each array}} {{#if @last}} Last :( {{/if}} {{/each}}
```

## `@level`

Assigned log level.

```js
template({}, { data: { level: Handlebars.logger.WARN } });
```

May be set to one of `Handlebars.logger.DEBUG` , `Handlebars.logger.INFO` , `Handlebars.logger.WARN` , or
`Handlebars.logger.ERROR`

When set, the logger will include in its output only messages with a log level of `Handlebars.logger.level` or higher.
The default value is `Handlebars.logger.ERROR`.
