/* eslint-env node */
/* eslint-disable no-console */
import { storeHandlebarsVersionAtVuePrototype } from "./plugins/inject-handlebars-versions";
import { interactiveExamples } from "./plugins/interactive-examples";
import { buttonLink } from "./plugins/button-link";
import { updateHandlebarsCliHelp } from "./plugins/update-handlebars-cli-help";
import { useHighlightJsForCode } from "./plugins/use-highlightjs-for-code";

export default {
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Handlebars",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Handlebars",
    },
  },
  head: [
    ["link", { rel: "shortcut icon", type: "image/png", href: `/images/favicon.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],
  dest: "target/",
  themeConfig: {
    algolia: {
      apiKey: "ceae3bc4e38c4b10f99cc802d1e6db96",
      indexName: "handlebarsjs",
    },
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        nav: [
          { text: "Language Guide", link: "/guide/" },
          { text: "Installation", link: "/installation/" },
          { text: "API reference", link: "/api-reference/" },
          { text: "Improve the docs", link: "/contributing/" },
          {
            text: "Other sources",
            items: [
              { text: "The old handlebars-website", link: "https://handlebars-archive.knappi.org/" },
              { text: "Release notes", link: "https://github.com/wycats/handlebars.js/blob/master/release-notes.md" },
              {
                text: "Issues with label 'docs-needed'",
                link: "https://github.com/wycats/handlebars.js/issues?q=is%3Aopen+is%3Aissue+label%3Adocs-needed",
              },
            ],
          },
        ],
        sidebar: {
          "/installation/": ["", "precompilation.md", "integrations.md", "when-to-use-handlebars.md"],
          "/guide/": ["", "expressions.md", "partials.md", "block-helpers.md", "builtin-helpers.md", "hooks.md"],
          "/api-reference/": [
            "",
            "compilation.md",
            "runtime-options.md",
            "runtime.md",
            "utilities.md",
            "data-variables.md",
            "helpers.md",
          ],
          "/contributing/": ["", "interactive-examples.md", "button-links.md"],
        },
        displayAllHeaders: false,
        repo: "wycats/handlebars.js",
        lastUpdated: "Last Updated",
        editLinks: true,
        editLinkText: "Propose a change to this page!",
        docsRepo: "handlebars-lang/docs",
        docsDir: "src",
      },
      "/zh/": {
        selectText: "语言",
        label: "中文",
        ariaLabel: "语言",
        nav: [
          { text: "语言指南", link: "/zh/guide/" },
          { text: "安装", link: "/zh/installation/" },
          { text: "API 参考", link: "/zh/api-reference/" },
          { text: "改进文档", link: "/zh/contributing/" },
          {
            text: "其他资源",
            items: [
              { text: "Handlebars 网站（旧）", link: "https://handlebars-archive.knappi.org/" },
              { text: "发行说明", link: "https://github.com/wycats/handlebars.js/blob/master/release-notes.md" },
              {
                text: "带有 'docs-needed' 标签的 Issues",
                link: "https://github.com/wycats/handlebars.js/issues?q=is%3Aopen+is%3Aissue+label%3Adocs-needed",
              },
            ],
          },
        ],
        sidebar: {
          "/zh/installation/": ["", "precompilation.md", "integrations.md", "when-to-use-handlebars.md"],
          "/zh/guide/": ["", "expressions.md", "partials.md", "block-helpers.md", "builtin-helpers.md", "hooks.md"],
          "/zh/api-reference/": [
            "",
            "compilation.md",
            "runtime-options.md",
            "runtime.md",
            "utilities.md",
            "data-variables.md",
            "helpers.md",
          ],
          "/zh/contributing/": ["", "interactive-examples.md", "button-links.md"],
        },
        displayAllHeaders: false,
        repo: "wycats/handlebars.js",
        lastUpdated: "最后更新",
        editLinks: true,
        editLinkText: "向这个页面提交更改！",
        docsRepo: "handlebars-lang/docs",
        docsDir: "src/zh",
      },
    },
    repo: "wycats/handlebars.js",
    docsRepo: "handlebars-lang/docs",
    docsDir: "src",
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "playground",
        defaultTitle: "",
        before: (content) => `<div class="playground">${content}`,
        after: "</div>",
      },
    ],
    storeHandlebarsVersionAtVuePrototype,
    interactiveExamples,
    buttonLink,
    updateHandlebarsCliHelp,
    useHighlightJsForCode,
  ],
};
