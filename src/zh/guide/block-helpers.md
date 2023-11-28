# 代码片段

块助手代码使得调用通过传递上下文参数的代码块的迭代器或自定义函数成为可能。

## 基本代码块

出于演示目的，让我们先定义一个和没有块助手代码一样的块助手代码。

```handlebars
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{#noop}}{{body}}{{/noop}}
  </div>
</div>
```

`noop` 助手代码（“no operation”的缩写）将收到一个 options 参数。这个 options 参数包含一个函数（`options.fn`），这个函数
和普通的 Handlebars 模板的效果是一样的。具体来说，这个函数接收一个上下文参数，并返回一个字符串。

```js
Handlebars.registerHelper("noop", function (options) {
  return options.fn(this);
});
```

Handlebars 将 `this` 指针作为上下文传递，因此你可以使用 `this` 调用该代码块以在上下文内使用代码块。

通过这种方式定义的任何助手代码将优先于上下文中定义的字段。若要访问助手代码中的字段，可以使用路径引用。在上面的示例中，上
下文对象上名为 `noop` 的字段可以这样引用：

```handlebars
{{./noop}}
```

## 基本代码块的变化

为了更好地说明语法，让我们定义另一个块助手代码，为包装的文本添加一些标记。

```handlebars
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{#bold}}{{body}}{{/bold}}
  </div>
</div>
```

粗体助手代码将添加标记以使其文本变为粗体。和以前一样，该函数将上下文作为输入并返回一个字符串。

```js
Handlebars.registerHelper("bold", function (options) {
  return new Handlebars.SafeString('<div class="mybold">' + options.fn(this) + "</div>");
});
```

## `with` 助手代码

`with` 助手代码演示了如何将参数传递给你的助手代码。当将参数传递给助手代码时，模板传入的任何上下文中都会接收该参数。

```handlebars
<div class="entry">
  <h1>{{title}}</h1>
  {{#with story}}
    <div class="intro">{{{intro}}}</div>
    <div class="body">{{{body}}}</div>
  {{/with}}
</div>
```

如果你的 JSON 对象中包含深层嵌套属性，你就会发现这样的助手代码很有用。想要避免重复父名称。上面的模板可能要与这样的 JSON
搭配使用：

```js
{
  title: "First Post",
  story: {
    intro: "Before the jump",
    body: "After the jump"
  }
}

```

::: v-pre

实现这样的助手代码并不像实现 `noop` 一样。助手代码可以获取参数，并且参数的计算就像直接在 `{{mustache}}` 代码块中直接使用
的表达式一样。

:::

```js
Handlebars.registerHelper("with", function (context, options) {
  return options.fn(context);
});
```

参数按照其传递的顺序传递给助手代码，最后是 options。

## 简单迭代

块助手代码的一个常见用法是使用它们来定义自定义迭代器。实际上，所有 Handlebars 内置助手代码都被定义为是常规的 Handlebars
帮助器。让我们看一下内置的 `each` 助手代码的工作方式。

```handlebars
<div class="entry">
  <h1>{{title}}</h1>
  {{#with story}}
    <div class="intro">{{{intro}}}</div>
    <div class="body">{{{body}}}</div>
  {{/with}}
</div>
<div class="comments">
  {{#each comments}}
    <div class="comment">
      <h2>{{subject}}</h2>
      {{{body}}}
    </div>
  {{/each}}
</div>
```

这种情况下，我们要为 comments 数组中的每个元素调用一次 `each` 的代码块。

```js
Handlebars.registerHelper("each", function (context, options) {
  var ret = "";

  for (var i = 0, j = context.length; i < j; i++) {
    ret = ret + options.fn(context[i]);
  }

  return ret;
});
```

这种情况下，我们遍历传递的参数中的项目，对每个项目调用一次该代码块。遍历完毕之后，我们建立一个 String 结果，然后返回它。

此模式可用于实现更高级的迭代器。例如，让我们创建一个迭代器 `<ul>` 包装器，并将每个结果元素包装在 `<li>` 中。

```handlebars
{{#list nav}}
  <a href="{{url}}">{{title}}</a>
{{/list}}
```

你将使用类似以下内容的上下文来使用该模板：

```js
{
  nav: [
    { url: "http://www.yehudakatz.com", title: "Katz Got Your Tongue" },
    { url: "http://www.sproutcore.com/block", title: "SproutCore Blog" },
  ];
}
```

这个助手代码类似于原始的 `each` 助手代码。

```js
Handlebars.registerHelper("list", function (context, options) {
  var ret = "<ul>";

  for (var i = 0, j = context.length; i < j; i++) {
    ret = ret + "<li>" + options.fn(context[i]) + "</li>";
  }

  return ret + "</ul>";
});
```

使用诸如 underscore.js 或是 SproutCore 的 Runtime Library 之类的库可能会使它更漂亮。例如，这是使用 SproutCore 的运行时库
时的情景：

```js
Handlebars.registerHelper("list", function (context, options) {
  return (
    "<ul>" +
    context
      .map(function (item) {
        return "<li>" + options.fn(item) + "</li>";
      })
      .join("\n") +
    "</ul>"
  );
});
```

## 条件

块助手代码的另一个常见用例是计算条件表达式。与迭代器一样，Handlebars 内置有 `if` 和 `unless` 块助手代码。

```handlebars
{{#if isActive}}
  <img src="star.gif" alt="Active" />
{{/if}}
```

控制结构通常不更改当前上下文，而是基于一些变量决定是否调用该代码块。

```js
Handlebars.registerHelper("if", function (conditional, options) {
  if (conditional) {
    return options.fn(this);
  }
});
```

编写条件代码块时，你通常会希望模板可以提供“如果条件的计算结果为 false” 时助手代码应插入的 HTML 代码。Handlebars 通过提供
`else` 来解决这个问题。

```handlebars
{{#if isActive}}
  <img src="star.gif" alt="Active" />
{{else}}
  <img src="cry.gif" alt="Inactive" />
{{/if}}
```

Handlebars 使用 `options.inverse` 为 `else` 片段提供了代码块。你不需要检查是否存在 `else` 片段：Handlebars 将自动检测并
注册一个 `noop` 函数。

```js
Handlebars.registerHelper("if", function (conditional, options) {
  if (conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
```

Handlebars 通过 options 参数给块助手代码提供附加元数据。下文有更多示例。

通通过将后续的助手代码调用包含在 `else` 模板中，也可以连接条件语句。

```handlebars
{{#if isActive}}
  <img src="star.gif" alt="Active" />
{{else if isInactive}}
  <img src="cry.gif" alt="Inactive" />
{{/if}}
```

后续调用中不必使用相同的助手代码，除非可以在 `else` 块中该助手代码可以和其他的助手代码一同使用。当助手代码不同时，关闭模
板语法应与打开的助手代码名称相匹配。

## Hash 参数

与普通的助手代码一样，块助手代码可以接受可选的 Hash 作为其最终参数。让我们重新看看 `list` 帮助器并使我们可以将任意数量的
可选属性添加到将要创建的 `<ul>` 元素中。

```handlebars
{{#list nav id="nav-bar" class="top"}}
  <a href="{{url}}">{{title}}</a>
{{/list}}
```

Handlebars 在 `options.hash` 中提供最后一个 Hash。这样可以更轻松地接受可变数量的参数，同时也接受可选的 Hash。如果模板未
提供 Hash 参数，则 Handlebars 将自动传递空对象（`{}`），因此你无需检查 Hash 参数是否存在。

```js
Handlebars.registerHelper("list", function (context, options) {
  var attrs = Object.keys(options.hash)
    .map(function (key) {
      return key + '="' + options.hash[key] + '"';
    })
    .join(" ");

  return (
    "<ul " +
    attrs +
    ">" +
    context
      .map(function (item) {
        return "<li>" + options.fn(item) + "</li>";
      })
      .join("\n") +
    "</ul>"
  );
});
```

Hash 参数提供了一种强大的方法，可以为块助手代码提供许多可选参数，而无需使得这件事因为参数位置的问题而变得更复杂。

块助手代码还可以将局部变量注入其子模板。这对于添加不在上下文中的其他数据很有用。

例如，当遍历列表时，你可以提供一个当前索引作为局部变量。

```handlebars
{{#list array}}
  {{@index}}.
  {{title}}
{{/list}}
```

```js
Handlebars.registerHelper("list", function (context, options) {
  var out = "<ul>",
    data;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  for (var i = 0; i < context.length; i++) {
    if (data) {
      data.index = i;
    }

    out += "<li>" + options.fn(context[i], { data: data }) + "</li>";
  }

  out += "</ul>";
  return out;
});
```

通过 `data` 选项提供的局部变量在所有子作用域中都可用。

可以通过路径查询来访问父范围中定义的局部变量。若要访问父级的 `index` ，可以使用 `@../index`。

确保你创建的数据模型中每个助手代码只能接触到其自己的局部变量。否则，内层的助手代码可能意外地改变了外层的变量。

还要在使用 `data` 前确保 `data` 已经被定义。局部变量很可能是按情况编译的，某些模板可能不会创建某些变量。

## 代码块参数

这是 Handlebars 3.0 中的新增功能，可以从支持的助手代码中接收命名参数。

```handlebars
{{#each users as |user userId|}}
  Id:
  {{userId}}
  Name:
  {{user.name}}
{{/each}}
```

在这个示例中，`user` 将具有与当前上下文相同的值，而 `userId` 将具有索引迭代的值。

这使得嵌套的助手代码能够避免一些可能因为局部变量命名的问题导致的冲突。

```handlebars
{{#each users as |user userId|}}
  {{#each user.book as |book bookId|}}
    User Id:
    {{userId}}
    Book Id:
    {{bookId}}
  {{/each}}
{{/each}}
```

许多 [内置助手代码](builtin-helpers.html) 支持代码块参数，而任何自定义的助手代码都可以通过 `blockParams` 字段提供参数。

助手代码可以通过 `options.fn.blockParams` 字段确定模板引用的代码块参数的数量（整数）。这个值表示了子模板可以引用的代码块
参数的数量。超出此数量的参数将不会被引用，并且可以根据需要安全地忽略。这是可选的，并且传递给模板的所有其他参数都将被忽
略。

## RAW 代码块

RAW 代码块可用于处理不经由 mustache 模板处理的代码块。

<Example examplePage="/zh/examples/raw-blocks.md" show="template"/>

```handlebars
{{#raw-helper}}
  \{{bar}}
{{/raw-helper}}
```

将会执行 `raw-helper` 助手代码而不解释其内容。

```js
Handlebars.registerHelper("raw-helper", function (options) {
  return options.fn();
});
```

将会渲染

```
{{bar}}
```
