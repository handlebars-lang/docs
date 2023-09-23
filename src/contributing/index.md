# Improving the documentation

<script setup>
import { useData } from 'vitepress';
const { theme } = useData();
</script>

Handlebars is an open-source project. There is no _"documentation department"_ that keeps the docs up-to-date. This
documentation site requires your help to be a good and helpful site.

- [Release notes](https://github.com/handlebars-lang/handlebars.js/blob/master/release-notes.md)
- [Issues with label 'docs-needed'](https://github.com/handlebars-lang/handlebars.js/issues?q=is%3Aopen+is%3Aissue+label%3Adocs-needed)
- [The old Handlebars website](https://handlebars-archive.knappi.org)

The following sections should help you help us improve the documentation.

## How do I submit contributions?

This site is hosted on [Github](https://github.com/handlebars-lang/docs) and rendered with
[VitePress](https://vitepress.dev/)

- Please create a [pull requests](https://help.github.com/en/articles/about-pull-requests) for any change that you would
  like to see on the page.
- If your change only affects the contents of a single page, you can simply click the link `{{theme.editLink.text}}` at
  the bottom of this page (see
  [Editing files in another user's repository](https://help.github.com/en/articles/editing-files-in-another-users-repository))
  for details.
- For more complex changes (styling, multiple pages, new pages, fixing build problems), you should
  [fork the repository](https://help.github.com/en/articles/fork-a-repo) and submit a pull request when you are done.
  The [CONTRIBUTING.md page in the repo][contributing-page-in-repo] contains more information about. This approach
  allows you to use a dev-server and preview your changes before submitting them.

## How do I write content?

The documentation is written in Markdown and rendered with [VitePress](https://vitepress.dev/). VitePress uses the
`markdown-it` package to render markdown. `markdown-it` implements the CommonMark dialect.

This means that you can use syntax described in these sources:

- [CommonMark help](https://commonmark.org/help/)
- [syntax extensions added by markdown-it](https://github.com/markdown-it/markdown-it#syntax-extensions)
- [syntax extensions added by VitePress](https://vitepress.dev/)

In addition to all those extensions, this site adds some custom Vue-components that can be embedded in source files.

- [Interactive Examples](interactive-examples.md)

## How should I behave?

::: danger

- **Respect intellectual property**: Please only submit texts and other media if you have created it yourself or if you
  have copied it from [handlebarsjs.com](https://handlebarsjs.com). There are many blog posts about Handlebars, but the
  text from these posts is intellectual property of their authors.
- **License**: By submitting content, you agree that it is published on this site under the license of this site.

- **Code of conduct**: Please be respectful to others and avoid sexualized or coarse language.

:::

## What can I contribute?

- **Look for issues labeled as
  [docs-needed](https://github.com/handlebars-lang/handlebars.js/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Adocs-needed+)
  in the [handlebars.js](https://github.com/handlebars-lang/handlebars.js)-repository.** Those are issues that describe
  something that should be documented.
- **Propose and submit new content.** If you are unsure about your proposal, you can create an issue before submitting a
  pull-request. This might save you from wasting time.
- **Improve existing content.** You can propose changes to the navigation, fix typos, improve language and correct wrong
  content.
- **Fix CSS-styling issues.** The styling on this page is far from perfect. If you feel like improving it, please go
  ahead. For larger changes, please get in touch by opening an issue.

[contributing-page-in-repo]: https://github.com/handlebars-lang/docs/blob/master/CONTRIBUTING.md
[all-features-example-raw]: https://raw.githubusercontent.com/handlebars-lang/docs/master/src/examples/all-features.md
