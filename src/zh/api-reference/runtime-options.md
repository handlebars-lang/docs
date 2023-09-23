# 运行时参数

::: v-pre

'Handlebars.compile' 与 'Handlebars.precompile' 函数构造了另一个函数。构造的函数可以用 `template(context, options)` 调
用。`context` 是输入的对象。

`options` 是可能具有以下属性的对象：

- `data` 输入一个对象以设定自定义的 `@variable` 的私有值。
- `helpers` 输入以提供自定义助手代码以及全局的助手代码。在模版运行时，本项所定义的值将会替换全局对象所定义的任何值。
- `partials` 输入以提供自定义代码片段以及全局定义的代码片段。在模版运行时，本项所定义的值将会替换全局对象所定义的任何
  值。
- `allowCallsToHelperMissing` （从 4.3.0 开始, 不安全）：如果设置为 `true`，类似 `{{helperMissing}}` 或
  `{{blockHelperMissing}}` 的调用将会被允许。请注意，这允许模版作者假造模版并在运行 Handlebars 的环境下远程执行代码。
  （见https://github.com/handlebars-lang/handlebars.js/issues/1558）

:::

## 控制原型访问的选项

从 4.6.0 版本开始，由于各种安全原因， Handlebars 默认禁止访问原型的属性以及上下文对象的方法。以下选项可以用来控制原型的
可访问性。

::: danger 使用以下选项有安全风险。

允许这些属性可能会使得模版作者可以在运行 Handlebars 的机器上执行任意代码。尽管有限制，攻击者还是可能假造模版并且使得机器
崩溃。

详细情况可以在 npm-security 中以及博客文章中找到（英文文档）：

[1164](https://www.npmjs.com/advisories/1164)，[1316](https://www.npmjs.com/advisories/1316)，
[1324](https://www.npmjs.com/advisories/1324) 和 [1325](https://www.npmjs.com/advisories/1325) 以及博客文章
[Mahmoud Gamal](http://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html)。

:::

- `allowProtoMethodsByDefault` （自 4.7.0 开始）：默认为 false 的布尔值，定义了在对象的原型中定义的方法是否可以被解析。

  即使本项被设置为 `true`，`constructor`，`__defineGetter__`，`__defineSetter__`，`__lookupGetter__` 与
  `__lookupSetter__` 还是会被禁止。只有在 `allowedProtoMethods` 内对应键被设置为 `true` 时，以上方法才可以被访问。

  对本项给定任何值都会禁止 Handlebars 在一个 proto-method-access 尝试并失败的情况下向控制台写入警告。

- `allowedProtoMethods` （自 4.6.0 开始）：一个储存「字符串-布尔」类型的映射表。若「属性-名称」是父对象的方法，则将会被
  包含在表中。若未定义，将会使用　`allowProtoMethodsByDefault` 内定义的值。

- `allowProtoPropertiesByDefault` （自 4.7.0 开始）：默认为 false 的布尔变量。决定了在对象原型中定义的非方法的属性是否可
  以被解析。

  即使该选项被设定为 `true`，属性 `__proto__` 依旧会被禁止。只有 `allowedProtoProperties` 中的对应键值被设定为 `true` 的
  时候它才能被访问。

  对本项给定任何值都会禁止 Handlebars 在一个 proto-method-access 尝试并失败的情况下向控制台写入警告。

- `allowedProtoProperties` （自 4.6.0 开始）：一个储存「字符串-布尔」类型的映射表。若一个属性不是父对象的方法，则「属性-
  名称」对将会被包含在这个表里。若未定义，将会使用 `allowProtoPropertiesByDefault` 内定义的值。

  ```js
  const template = handlebars.compile("{{aString.trim}}");
  const result = template({ aString: "  abc  " });
  // result is empty, because trim is defined at String prototype
  ```

  ```js
  const template = handlebars.compile("{{aString.trim}}");
  const result = template(
    { aString: "  abc  " },
    {
      allowedProtoMethods: {
        trim: true,
      },
    },
  );
  // result = 'abc'
  ```

如果你在某些地方无法传递运行时选项，例如在 [express-handlebars](https://www.npmjs.com/package/express-handlebars) 的情况
下，你也可以使用这个包：
[@handlebars/allow-prototype-access](https://www.npmjs.com/package/@handlebars/allow-prototype-access) 使 Handlebars 回
退到 4.5.3 时的表现。
