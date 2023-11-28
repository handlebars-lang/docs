# 代码片段

Handlebars 允许代码片段的复用。代码片段是一段普通的 Handlebars 模板，但它们可以直接由其他模板调用。

## 基本代码片段

一个代码片段必须通过 `Handlebars.registerPartial` 注册。

<Example examplePage="/zh/examples/partials/basic.md" show="preparationScript"/>

这个方法将注册代码片段 `myPartial`。可以对代码片段进行预编译，并将预编译的模板传到第二个参数。

调用代码片段是通过「代码片段调用语法」完成的：

<Example examplePage="/zh/examples/partials/basic.md" show="template"/>

将渲染名为 `myPartial` 的代码片段。当代码片段执行时，它会在当前的代码块的上下文中运行。

## 动态代码片段

使用子表达式语法可以动态选择要执行的部分。

<Example examplePage="/zh/examples/partials/dynamic.md" show="template"/>

这将计算 `whichPartial`，然后渲染以函数的返回值作为名称的代码片段。

子表达式不会解析变量，因此 `whichPartial` 必须是一个函数。如果代码片段的名称是储存在一个变量里面的，则可以通过 `lookup`
助手代码来解决它。

<Example examplePage="/zh/examples/partials/variable.md" show="template"/>

## 代码片段上下文

通过将上下文传递给代码片段，你可以在自定义上下文中执行代码片段。

<Example examplePage="/zh/examples/partials/other-context.md" show="template"/>

## 代码片段参数

可以通过 Hash 参数将自定义数据传递到代码片段。

<Example examplePage="/zh/examples/partials/parameters.md" show="template"/>

代码片段运行时会将参数设置为 `value`。

这对于把数据从父级传递到代码片段的上下文中的时候特别有用：

<Example examplePage="/zh/examples/partials/parent-context.md" show="template"/>

## 代码片段代码块

一般来讲，尝试渲染一个未注册的代码片段会抛出错误。如果需要阻止错误抛出，可以在代码块中嵌套代码片段。

<Example examplePage="/zh/examples/partials/failover.md" show="template"/>

如果代码片段 `myPartial` 尚未注册，则 `Failover content` 将被渲染。

这种代码块的语法也可以用于将模板传递到代码片段中。有专门的代码片段执行此操作：`@partial-block`。考虑如下模板：

<Example examplePage="/zh/examples/partials/partial-block.md" show="template"/>

`layout` 代码片段包含

<Example examplePage="/zh/examples/partials/partial-block.md" show="partial" name="layout"/>

这将渲染：

<Example examplePage="/zh/examples/partials/partial-block.md" show="output"/>

当以这种方式调用时，代码块将在 **调用时代码片段中的上下文** 中执行。此时深度路径查询和代码块参数是相对于代码片段的，而非
代码片段的模板。

<Example examplePage="/zh/examples/partials/partial-block-parameters.md" show="template"/>

这将渲染模板中的 `person.firstname` 而非代码片段。

## 内联代码片段

模板可以通过 `inline` 修饰符定义代码块范围之内的代码片段。

<Example examplePage="/zh/examples/partials/inline.md" show="template"/>

这将为每个 child 渲染 `myPartial`。

每个内联代码片段均可用于当前代码块和所有子代码块（包括代码片段）。这使得「布局模板」和其他类似的功能成为可能：

<Example examplePage="/zh/examples/partials/inline-blocks.md" show="template"/>

其中 `layout` 可能是：

<Example examplePage="/zh/examples/partials/inline-blocks.md" show="partial" name="layout"/>
