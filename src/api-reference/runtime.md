# The Handlebars runtime

## `Handlebars.registerPartial(name, partial)`

Registers partials accessible by any template in the environment.

```js
Handlebars.registerPartial("foo", partial);
```

Also supports registering multiple partials at once.

```js
Handlebars.registerPartial({ foo: partial, bar: partial });
```

If loading the whole library, the partials may be string values which will be compiled on demand. If only loading the
runtime, the partials must be a precompiled template that has been set up properly using the `Handlebars.template`
method.

## `Handlebars.unregisterPartial(name)`

Unregisters a previously registered partial.

```js
Handlebars.unregisterPartial("foo");
```

## `Handlebars.registerHelper(name, helper)`

Registers helpers accessible by any template in the environment.

```js
Handlebars.registerHelper("foo", function () {});
```

Also supports registering multiple helpers at once.

```js
Handlebars.registerHelper({ foo: function () {}, bar: function () {} });
```

## `Handlebars.unregisterHelper(name)`

Unregisters a previously registered helper.

```js
Handlebars.unregisterHelper("foo");
```

## `Handlebars.registerDecorator(name, helper)` (deprecated)

::: warning Deprecation notice

Custom decorators are deprecated and may vanish in the next major version of Handlebars. They expose a too large part of
the internal API which is difficult to port to other languages and makes to code harder to maintain.

:::

Registers a decorator accessible by any template in the environment.

```js
Handlebars.registerDecorator("foo", function () {});
```

Also supports registering multiple decorators at once.

```js
Handlebars.registerDecorator({ foo: function () {}, bar: function () {} });
```

## `Handlebars.unregisterDecorator(name)`

Unregisters a previously registered decorator.

```js
Handlebars.unregisterDecorator("foo");
```

## `Handlebars.create()`

Creates an isolated Handlebars environment.

```js
var OtherHandlebars = Handlebars.create();
```

Each environment has its own helpers and partials. This is only necessary for use cases that demand distinct helpers or
partials. Most use cases can use the root `Handlebars` environment directly.

Templates created for a given environment are bound to that environment. This means that templates that need to run in
multiple environments will need to be recompiled or reconstructed via `Handlebars.template` for each environment. This
applies to partials as well.

## `Handlebars.noConflict()`

Removes this Handlebars instance from the global namespace, restoring the global `Handlebars` variable to its previous
value.

```js
var myHandlebars = Handlebars.noConflict();
```

This allows for distinct versions of the library to be used simultaneously without concern for version conflicts.
