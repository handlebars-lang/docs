# (Pre-)Compilation

## `Handlebars.compile(template, options)`

Compiles a template so it can be executed immediately.

```js
const template = Handlebars.compile("{{foo}}");
template({});
```

Supports a variety of options that alter how the template executes.

::: v-pre

- `data`: Set to `false` to disable `@data` tracking.
- `compat`: Set to `true` to enable recursive field lookup.
- `knownHelpers`: Hash containing list of helpers that are known to exist (truthy) at template execution time. Passing
  this allows the compiler to optimize a number of cases. Builtin helpers are automatically included in this list and
  may be omitted by setting that value to `false`.
- `knownHelpersOnly`: Set to `true` to allow further optimizations based on the known helpers list.
- `noEscape`: Set to `true` to not HTML escape any content.
- `strict`: Run in strict mode. In this mode, templates will throw rather than silently ignore missing fields. This has
  the side effect of disabling inverse operations such as `{{^foo}}{{/foo}}` unless fields are explicitly included in
  the source object.
- `assumeObjects`: Removes object existence checks when traversing paths. This is a subset of `strict` mode that
  generates optimized templates when the data inputs are known to be safe.
- `preventIndent`: By default, an indented partial-call causes the output of the whole partial being indented by the
  same amount. This can lead to unexpected behavior when the partial writes `pre`-tags. Setting this option to `true`
  will disable the auto-indent feature.
- `ignoreStandalone`: Disables standalone tag removal when set to `true`. When set, blocks and partials that are on
  their own line will not remove the whitespace on that line.
- `explicitPartialContext`: Disables implicit context for partials. When enabled, partials that are not passed a context
  value will execute against an empty object.

:::

## `Handlebars.precompile(template, options)`

Precompiles a given template so it can be sent to the client and executed without compilation.

```js
var templateSpec = Handlebars.precompile("{{foo}}");
```

Supports all of the same options parameters as the `Handlebars.compile` method. Additionally may pass:

- `srcName`: Passed to generate the source map for the input file. When run in this manner, the return structure is
  `{code, map}` with `code` containing the template definition and `map` containing the source map.
- `destName`: Optional parameter used in conjunction with `srcName` to provide a destination file name when generating
  source maps.

## `Handlebars.template(templateSpec)`

Sets up a template that was precompiled with `Handlebars.precompile`.

```js
var template = Handlebars.template(templateSpec);
template({});
```
