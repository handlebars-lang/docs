# 创建交互式示例

我们可以定义交互式示例。示例或示例的一部分可以 **嵌入任何页面**。一种自动生成的链接使访问者可以在 **Playground** 中打开
示例，在这里访问者可以更改模板，局部变量，输入等，并可以看到结果输出。

## 创建示例

为了定义示例，请在 `examples` 目录中创建一个新的 Markdown 文件。示例数据在引用示例页面的索引处。参见
[all-features-example-raw](../../examples/all-features.md) 演示所有功能。

支持以下 Frontmatter 属性：

-`layout`: 必须始终为 `InteractivePlaygroundLayout` -`example`: 包含示例   -`template`: 主 Handlebars 模板
  -`partials`: 一个对象，每个注册的代码片段都具有该属性，键是 partial-name，值是 partial content   -`preparationScript`:
在编译和运行模板之前执行的脚本。`Handlebars` 可      作为此脚本中的全局变量。   -`input`: 作为嵌入式 YAML 对象的模板。
  -`errorExpected`: 一个布尔值（默认值： `false`），它指定此示例是否应抛出错误。通过      默认情况下，在执行过程中引发错
误的示例会导致整个网站的构建失败。如果你需要创建一个      描述错误的示例，您需要将此选项设置为 `true`。

使用最新版本的 Handlebars 自动渲染示例的输出。

## 示例数据

如果可能的话，示例应该使用通用数据集中提供的变量。因此，文件
[src/\_examples/\_example-base-data.yaml](https://github.com/handlebars-lang/docs/blob/master/src/_examples/_example-base-data.yaml)
包含了可重复使用并适用于每个示例的数据。如果该文件中的数据不足，请添加新的数据，但请确保它们之间存在关联。

## 嵌入示例

`<ExamplePart>` 组件允许您在当前段落中显示示例的一部分。

```md
<Example examplePage="/zh/examples/builtin-helper-each-block" show="template"/>
```

将渲染

<Example examplePage="/zh/examples/builtin-helper-each-block" show="template"/>

该组件的属性有：

- `examplePage`: src 文件夹下面的示例页面的路径
- `show`: 示例中应插入页面的部分。可能为 `template`，`input`，   `output`, `error`, `preparationScript` 或 `partial`
- `name` （可选）: 仅当`show =“ partial”`时才需要此道具。它定义了应该是的部分名称    插入到示例中。

如果您想将示例的各个部分嵌入流文本中，则该组件非常有用。您可以插入输入的 JSON 使用
`<Example examplePage="/zh/examples/all-features" show="input" />`，以下代码段将出现在页面中：

<Example examplePage="/zh/examples/all-features" show="input" />

然后，为了向读者显示模板，您可以将 `show="template"` 与相同的 `examplePage` 一起使用。

<Example examplePage="/zh/examples/all-features" show="template" />

您可以使用例如 `show=partial` 和 `name=person`来局部渲染。

<Example examplePage="/zh/examples/all-features" show="partial" name="person"/>

如果您有助手代码的示例，则可能还需要包括脚本：

<Example examplePage="/zh/examples/all-features" show="preparationScript" />

## 水平布局

如果要水平放置两个示例部件，则可以使用 `<Flex>` 组件。

```md
<Flex>
<Example examplePage="/zh/examples/builtin-helper-each-block" show="template"/>
<Example examplePage="/zh/examples/builtin-helper-each-block" show="input"/>
</Flex>
```

将渲染

<Flex>
<Example examplePage="/zh/examples/builtin-helper-each-block" show="template"/>
<Example examplePage="/zh/examples/builtin-helper-each-block" show="input"/>
</Flex>
