# Utility functions

## Helper utilities

These methods come handy when you implement custom helpers.

### `Handlebars.SafeString(string)`

Prevents `string` from being escaped when the template is rendered.

```js
new Handlebars.SafeString("<div>HTML Content!</div>");
```

When constructing the string that will be marked as safe, any external content should be properly escaped using the
`Handlebars.escapeExpression` method to avoid potential security concerns.

### `Handlebars.escapeExpression(string)`

HTML escapes the passed string, making it safe for rendering as text within HTML content.

```js
Handlebars.Utils.escapeExpression(string);
```

Replaces `&`, `<`, `>`, `"`, `'`, `` ` ``, `=` with the HTML entity equivalent value for string values. `SafeString`
values are left untouched.

The output of all expressions except for triple-braced expressions are passed through this method. Helpers should also
use this method when returning HTML content via a `SafeString` instance, to prevent possible code injection.

This method is aliased at `Handlebars.Utils.escapeExpression`.

### `Handlebars.createFrame(data)`

Used by block helpers to create child data objects.

```js
if (options.data) {
  var data = Handlebars.createFrame(options.data);
  data.foo = "bar";
  options.data = data;
}
```

Helpers that modify the data state should create a new frame when doing so, to isolate themselves and avoid corrupting
the state of any parents. Generally, only one frame needs to be created per helper execution. For example, the `each`
iterator creates a single frame which is reused for all child execution.

## General Utilities

Handlebars offers a variety of utility methods that are exposed through the `Handlebars.Utils` object.

### `Handlebars.Utils.isEmpty(value)`

Determines if a given value is empty.

Handlebars.Utils.isEmpty(value)

This is used by the built-in `if` and `with` helpers to control their execution flow. The Handlebars definition of empty
is any of:

- Array with length 0
- falsy values other than 0

This is intended to match the [Mustache behavior](http://mustache.github.io/mustache.5.html#Sections).

### `Handlebars.Utils.extend(obj, value)`

Simple utility method to augment `obj` with all keys defined on `value`.

Handlebars.Utils.extend(foo, {bar: true})

Will set the key `bar` on object `foo` with the value `true`.

### `Handlebars.Utils.toString(obj)`

Generic `toString` method.

### `Handlebars.Utils.isArray(obj)`

Determines if an object is an array.

### `Handlebars.Utils.isFunction(obj)`

Determines if an object is a function.

### `Handlebars.log(level, message)`

Logger used by the `log` helper.

May be overridden if desired.
