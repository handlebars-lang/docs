# Contributing guide

This page describes how to contribute to the Handlebars documentation, not the Handlebars.js library.

## How can I contribute?

For **simple changes** like correcting typos and changing small paragraphs of text, you can simply use the **Github-frontend** to edit the corresponding markdown files. This will create a pull-request to the _master_-branch. Once the pull-request is accepted, Travis-CI will build and update the site.

For **larger changes**, do the following:

- make sure you have NodeJS installed, preferable the latest LTS version.
- fork and clone [the site's repository](https://github.com/handlebars-lang/docs)
- Run `npm install` to install the required dependencies
- Run `npm run dev` to start a development http-server with live-reload.
- The open your browser at the URL that is displayed in the console (usually http://localhost:8080/).

A few notes on the site and the build processes

- The site is built with Vuepress 1.x (beta). A lot of documentation is available at https://v1.vuepress.vuejs.org
- The site uses the Vuepress default-theme with a few custom styles.
- The default-theme uses [stylus](http://stylus-lang.com/) to compile CSS.
- Most of the non-content files (styles, assets, config) can be found in the `.vuepress`-directory
  of this repository.
- Markdown files in this repository automatically become HTML-files on the site.
- Most files are formatted with [Prettier](https://prettier.io) and linted with
  [eslint](https://eslint.org) in a precommit hook, so you don't have to worry too much about
  code style in JavaScript files.

When you are done with your changes, please create a pull-request to merge them into the master

## What can I contribute?

- **Move content from http://handlebarsjs.com to the new site**. Although there are many
  complaints about the old site, there is still a lot of content.
  [@wycats](https://github.com/wycats/) has specifically asked to have a walkthrough guide
  on the new site as well. The main index page should have about the same contents as
  the main page on the old site.
- **Look for issues labeled as [docs-needed](https://github.com/wycats/handlebars.js/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Adocs-needed+) in the [handlebars.js](https://github.com/wycats/handlebars.js)-repository.** Those are issues that describe something that should be documented.
- **Propose and submit new content.** If you are unsure about your proposal, you can create an issue
  before submitting a pull-request. This might save you from wasting time.
- **Improve existing content.** You can propose changes to the navigation, fix typos, improve language and
  correct wrong content.
- **Fix CSS-styling issues.** The styling on this page is far from perfect. If you feel like improving it,
  please go ahead. For larger changes, please get in touch by opening an issue.
