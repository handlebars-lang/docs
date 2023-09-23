# Handlebars 运行时

## `Handlebars.registerPartial(name, partial)`

注册可以被当前环境内任意模版访问的代码片段。

```js
Handlebars.registerPartial("foo", partial);
```

同时支持一次性注册多个代码片段。

```js
Handlebars.registerPartial({ foo: partial, bar: partial });
```

如果导入整个库，代码片段的值可能是按需编译的字符串。如果只是在运行时导入，代码片段必须为通过 `Handlebars.template` 预编
译过的模版。

## `Handlebars.unregisterPartial(name)`

注销之前注册过的代码片段。

```js
Handlebars.unregisterPartial("foo");
```

## `Handlebars.registerHelper(name, helper)`

注册可以被当前环境中任意模版访问的助手代码。

```js
Handlebars.registerHelper("foo", function () {});
```

支持同时注册多个助手代码。

```js
Handlebars.registerHelper({ foo: function () {}, bar: function () {} });
```

## `Handlebars.unregisterHelper(name)`

注销之前的注册的助手代码。

```js
Handlebars.unregisterHelper("foo");
```

## `Handlebars.registerDecorator(name, helper)` (deprecated)

::: warning 弃用警告

自定义装饰器已经被废弃，并且可能会在 Handlebars 的下个主要版本消失。自定义装饰器关联了非常多的内部 API，而这会对导入其他
语言造成不便，并且代码也变得难以维护。

:::

注册一个可以被环境内任意模版访问的装饰器。

```js
Handlebars.registerDecorator("foo", function () {});
```

支持同时注册多个装饰器。

```js
Handlebars.registerDecorator({ foo: function () {}, bar: function () {} });
```

## `Handlebars.unregisterDecorator(name)`

注销一个之前注册的装饰器。

```js
Handlebars.unregisterDecorator("foo");
```

## `Handlebars.create()`

创建一个独立的 Handlebars 环境。

```js
var OtherHandlebars = Handlebars.create();
```

每个环境都有它独立的助手代码和代码片段。本函数只在需要独立的助手代码或代码片段时有用。通常来说，`Handlebars` 环境已经足
够。

在当前环境中创建的模版属于当前环境。这意味着如果想要在多个环境中运行当前模版，必须用 `Handlebars.template` 对每个环境重
新编译或重新构造。以上描述对于代码片段也是一样的。

## `Handlebars.noConflict()`

从全局命名域中删除当前的 Handlebars 实例，重置全局 `Handlebars` 变量。

```js
var myHandlebars = Handlebars.noConflict();
```

允许在无视版本冲突的情况下同时应用独立版本的库。
