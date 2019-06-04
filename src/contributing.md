# Contributing guide

This page describes how to contribute to the Handlebars documentation, not the Handlebars.js library.

Contributing to the page is done through [pull requests](https://help.github.com/en/articles/about-pull-requests) on
GitHub. You need a GitHub account in order to do that.

:::tip

This page is rendered with [VuePress](https://v1.vuepress.vuejs.org/). The content is primarily written in Markdown. For
the syntax, please refer to the following documentation

- [CommonMark help](https://commonmark.org/help/)
- [markdown-it syntax extensions](https://github.com/markdown-it/markdown-it#syntax-extensions)
- [Vuepress markdown syntax extensions](https://v1.vuepress.vuejs.org/guide/markdown.html)

:::

## Correcting small changes

At the bottom of each page, there is a link named `{{$themeConfig.editLinkText}}`. This link will allow you to propose
changes to the page directly on Github.

::: tip

Further reading:
[Editing files in another user's repository](https://help.github.com/en/articles/editing-files-in-another-users-repository)

:::

## Making larger changes

If you want to create new pages of documentation, or fix styling issues, you should  
create a fork of the repository and submit a pull-request when you are done.

Have a look at the [documentation of the development setup][contributing-page-in-repo] to learn how to use the
appropriate tools.

::: tip

Further reading

- [Fork a repo](https://help.github.com/en/articles/fork-a-repo)
- [Development setup for this site][contributing-page-in-repo]
- [About pull-requests](https://help.github.com/en/articles/about-pull-requests)

:::

## Rules

::: danger

- **Respect intellectual property**: Please only submit texts and other media if you have created it yourself or you
  have copied it from [handlebarsjs.com](https://handlebarsjs.com). There are many blog posts about Handlebars, but the
  text from these posts is intellectual property of their authors.
- **License**: By submitting content, you agree that it is published on this site under the license of this site.

- **Code of conduct**: Please be respectful to others and avoid sexualized or coarse language.

:::

## What can I contribute?

- **Move content from http://handlebarsjs.com to the new site**. Although there are many complaints about the old site,
  there is still a lot of content. [@wycats](https://github.com/wycats/) has specifically asked to have a walkthrough
  guide on the new site as well. The main index page should have about the same contents as the main page on the old
  site.
- **Look for issues labeled as
  [docs-needed](https://github.com/wycats/handlebars.js/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Adocs-needed+) in the
  [handlebars.js](https://github.com/wycats/handlebars.js)-repository.** Those are issues that describe something that
  should be documented.
- **Propose and submit new content.** If you are unsure about your proposal, you can create an issue before submitting a
  pull-request. This might save you from wasting time.
- **Improve existing content.** You can propose changes to the navigation, fix typos, improve language and correct wrong
  content.
- **Fix CSS-styling issues.** The styling on this page is far from perfect. If you feel like improving it, please go
  ahead. For larger changes, please get in touch by opening an issue.

[contributing-page-in-repo]: https://github.com/handlebars-lang/docs/blob/master/CONTRIBUTING.md
