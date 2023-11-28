# 钩子

你可以在几个地方使用钩子挂接到 Handlebars 的函数调用。

## helperMissing

当 Mustache 或表达式是如下情况时钩子会被调用：

- Mustache 表达式不是一个已经注册的助手代码，**并且**
- 不是当前上下文的计算属性。

你可以通过注册 `helperMissing` 助手代码为这些情况添加自定义处理：

<Example examplePage="/zh/examples/hook-helper-missing.md" show="template" />
<Example examplePage="/zh/examples/hook-helper-missing.md" show="preparationScript" />
<Example examplePage="/zh/examples/hook-helper-missing.md" show="output" />

与任何自定义助手代码或块助手代码一样，该助手代码接收相同的参数和选项（`hash`，`name`等）。 `option.name` 是被调用的助手
代码的名称。

### 默认行为

如果没有参数传递给 Mustache，则默认行为是不执行任何操作并忽略整个表达式或代码块：

<Flex>
<Example examplePage="/zh/examples/hook-helper-missing-default-no-param.md" show="template" />
<Example examplePage="/zh/examples/hook-helper-missing-default-no-param.md" show="output" />
</Flex>

如果有参数传递给 Mustache，则 Handlebars 将引发异常：

<Flex>
<Example examplePage="/zh/examples/hook-helper-missing-default-param.md" show="template" />
<Example examplePage="/zh/examples/hook-helper-missing-default-param.md" show="error" />
</Flex>

## blockHelperMissing

遇到如下情况时，钩子将会被调用：

- 代码块表达式尝试调用未注册的助手代码，
- 但是这个助手代码的名称与当前计算上下文中的某个属性相同。

你可以通过注册一个名为 `blockHelperMissing` 的助手代码来处理这种情况。

<Example examplePage="/zh/examples/hook-block-helper-missing.md" show="template" />
<Example examplePage="/zh/examples/hook-block-helper-missing.md" show="preparationScript" />
<Example examplePage="/zh/examples/hook-block-helper-missing.md" show="output" />

### 默认行为

钩子将在当前上下文中使用已解析的属性值作为参数进行调用，并且将 `options.name` 字段设置为属性的名称。

如果钩子没有被覆盖，则默认实现将模仿 Mustache 的行为：只调用代码块。

<Example examplePage="/zh/examples/hook-block-helper-missing-default.md" show="template" />
<Example examplePage="/zh/examples/hook-block-helper-missing-default.md" show="output" />
