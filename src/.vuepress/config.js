/* eslint-env node */
/* eslint-disable no-console */

const basePath = process.env.VUEPRESS_BASE || "/";

console.log(`basePath: ${basePath}`);
module.exports = {
  base: basePath,
  title: "Handlebars (draft)",
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        type: "image/png",
        href: `/images/favicon.png`
      }
    ]
  ],
  dest: "target/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Improve the docs", link: "/contributing/" },
      {
        text: "Other sources",
        items: [{ text: "handlebarsjs.com", link: "https://handlebarsjs.com" }]
      }
    ],
    sidebar: [
      "/",
      "guide/",
      "guide/installation.md",
      "guide/expressions.md",
      "guide/execution.md",
      "guide/precompilation.md",
      "guide/partials.md",
      "guide/block-helpers.md",
      "guide/decorators.md",
      "guide/builtin-helpers.md",
      "guide/api-reference.md"
    ],
    displayAllHeaders: false,
    repo: "handlebars-lang/docs",
    lastUpdated: "Last Updated",
    editLinks: true,
    editLinkText: "Propose a change to this page!",
    docsDir: "src"
  },
  plugins: [require("./plugins/inject-handlebars-versions"), require("./plugins/add-parsed-examples-to-page")]
};
