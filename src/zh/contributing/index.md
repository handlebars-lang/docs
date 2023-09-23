# 帮助改进此文档

<script setup>
import { useData } from 'vitepress';
const { theme } = useData();
</script>

Handlebars 是一个开源项目。没有 _“文档部门”_ 使文档保持最新。 Handlebars 文档站需要你的帮助才能变得更加优秀.

- [发行说明](https://github.com/handlebars-lang/handlebars.js/blob/master/release-notes.md)
- [带有 'docs-needed' 标签的 Issues](https://github.com/handlebars-lang/handlebars.js/issues?q=is%3Aopen+is%3Aissue+label%3Adocs-needed)
- [Handlebars 网站（旧](https://handlebars-archive.knappi.org)

以下各节将帮助你帮助我们改进文档。

## 如何提交更改？

该站点托管在 [Github](https://github.com/handlebars-lang/docs) 上，并使用 [VitePress](https://vitepress.dev/)。

- 请为你要进行的影响此文档的任何更改创建一个 [pull requests](https://help.github.com/en/articles/about-pull-requests)。
- 如果更改仅影响单页内容，则只需单击该页面底部的 `{{theme.editLink.text}}` 按钮。（请参阅
   [编辑另一个用户存储库中的文件](https://help.github.com/en/articles/editing-files-in-another-users-repository)。）
- 对于更复杂的更改（样式，多个页面，新页面，修复构建问题），你应该
   [fork repo](https://help.github.com/en/articles/fork-a-repo) 并在完成之后提交 Pull Request。 [Contributing
  页][contributing-page-in-repo] 包含更多信息。它可以让你使用开发服务器并在提交更改之前预览更改。

## 如何编写内容？

该文档使用 Markdown 编写，并使用 [VitePress](https://vitepress.dev/) 渲染。 VitePress 使用 `markdown-it` 包来渲染
markdown。markdown-it 实现了 CommonMark 语法。

这意味着你可以使用以下资源中描述的语法：

- [CommonMark 帮助](https://commonmark.org/help/)
- [markdown-it 添加的语法扩展](https://github.com/markdown-it/markdown-it#syntax-extensions)
- [VitePress 添加的语法扩展](https://vitepress.dev/)

除这些扩展之外，本站还添加了一些可以嵌入到源文件中的自定义 Vue 组件。

- [互动示例](interactive-examples.md)

## 我应该怎么做？

::: danger

- **尊重知识产权**: 提交的文本必须是你自己创建或是从 [handlebarsjs.com](https://handlebarsjs.com) 上复制的。有很多关于
  Handlebars 的博客文章，但这些文章的知识产权归其作者所有。
- **许可**: 提交内容即表示你同意在本网站的许可下将其发布在本网站上。

- **行为准则**: 请尊重他人，避免使用色情或粗俗语言。

:::

## 我能贡献什么？

- **在 [handlebars.js](https://github.com/handlebars-lang/handlebars.js) 存储库中寻找标记为
  [docs-needed](https://github.com/handlebars-lang/handlebars.js/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Adocs-needed+)
  的内容**。这些 Issues 描述了一些应当出现在文档中的内容。
- **提出并提交新内容。** 如果不确定的话，可以先提出 Issue，然后再提交 Pull Requests。这样可以节省你的时间。
- **改善现有内容。** 你可以提出导航栏的改进建议，修正错别字，改善语言并纠正错误内容。
- **修复 CSS 样式问题。** 此页面上的样式绝非完美。请继续完善这个页面的样式。如需更大的更改，请先打开一个 Issue 以取得联
  系。

[contributing-page-in-repo]: https://github.com/handlebars-lang/docs/blob/master/CONTRIBUTING.md
[all-features-example-raw]: https://raw.githubusercontent.com/handlebars-lang/docs/master/src/examples/all-features.md
