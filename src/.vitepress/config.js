import { defineConfig } from "vitepress";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Handlebars",
  description: "Minimal templating on steroids",

  head: [
    ["link", { rel: "icon", type: "image/png", href: `/favicon.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],

  locales: {
    root: {
      lang: "en-US",
      label: "English",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/guide/" },
          { text: "Reference", link: "/api-reference/" },
          { text: "Improve the docs", link: "/contributing/" },
        ],
        sidebar: {
          "/guide/": {
            base: "/guide/",
            items: [
              {
                text: "Language Guide",
                collapsed: false,
                items: [
                  { text: "Introduction", link: "." },
                  { text: "Expressions", link: "expressions" },
                  { text: "Partials", link: "partials" },
                  { text: "Block Helpers", link: "block-helpers" },
                  { text: "Built-in Helpers", link: "builtin-helpers" },
                  { text: "Hooks", link: "hooks" },
                ],
              },
              {
                text: "Installation & Precompilation",
                base: "/guide/installation/",
                collapsed: false,
                items: [
                  { text: "Installation", link: "." },
                  { text: "Precompiling templates", link: "precompilation" },
                  { text: "Integrations", link: "integrations" },
                  { text: "When (not) to use Handlebars?", link: "when-to-use-handlebars" },
                ],
              },
            ],
          },
          "/api-reference/": {
            base: "/api-reference/",
            items: [
              {
                text: "API Reference",
                collapsed: false,
                items: [
                  { text: "Index", link: "." },
                  { text: "(Pre-)Compilation", link: "compilation" },
                  { text: "Runtime Options", link: "runtime-options" },
                  { text: "Handlebars Runtime", link: "runtime" },
                  { text: "Utility Functions", link: "utilities" },
                  { text: "@data variables", link: "data-variables" },
                  { text: "Helpers", link: "helpers" },
                ],
              },
            ],
          },
          "/contributing/": {
            base: "/contributing/",
            items: [
              {
                text: "Contributing",
                collapsed: false,
                items: [
                  { text: "Improving the documentation", link: "." },
                  { text: "Creating interactive examples", link: "interactive-examples" },
                ],
              },
            ],
          },
        },
        editLink: {
          pattern: "https://github.com/handlebars-lang/docs/tree/master/src/:path",
          text: "Suggest changes to this page",
        },
        footer: {
          message: "MIT licensed",
          copyright: `Copyright © 2011-${new Date().getFullYear()} Yehuda Katz`,
        },
      },
    },
    zh: {
      lang: "zh-CN",
      label: "中文",
      link: "/zh/",

      themeConfig: {
        nav: [
          { text: "指南", link: "/zh/guide/" },
          { text: "参考", link: "/zh/api-reference/" },
          { text: "改进文档", link: "/zh/contributing/" },
        ],
        sidebar: {
          "/zh/guide/": {
            base: "/zh/guide/",
            items: [
              {
                text: "语言指南",
                collapsed: false,
                items: [
                  { text: "介绍", link: "." },
                  { text: "表达式", link: "expressions" },
                  { text: "代码片段", link: "partials" },
                  { text: "代码片段", link: "block-helpers" },
                  { text: "内置助手代码", link: "builtin-helpers" },
                  { text: "钩子", link: "hooks" },
                ],
              },
              {
                text: "安装 & 预编译模板",
                base: "/zh/guide/installation/",
                collapsed: false,
                items: [
                  { text: "安装", link: "." },
                  { text: "预编译模板", link: "precompilation" },
                  { text: "集成", link: "integrations" },
                  { text: "什么时候使用/不使用 Handlebars？", link: "when-to-use-handlebars" },
                ],
              },
            ],
          },
          "/zh/api-reference/": {
            base: "/zh/api-reference/",
            items: [
              {
                text: "API 参考",
                collapsed: false,
                items: [
                  { text: "索引", link: "." },
                  { text: "编译和预编译", link: "compilation" },
                  { text: "运行时参数", link: "runtime-options" },
                  { text: "Handlebars 运行时", link: "runtime" },
                  { text: "实用方法", link: "utilities" },
                  { text: "@data 变量", link: "data-variables" },
                  { text: "助手代码", link: "helpers" },
                ],
              },
            ],
          },
          "/zh/contributing/": {
            base: "/zh/contributing/",
            items: [
              {
                text: "贡献",
                collapsed: false,
                items: [
                  { text: "帮助改进此文档", link: "." },
                  { text: "创建交互式示例", link: "interactive-examples" },
                ],
              },
            ],
          },
        },
        editLink: {
          pattern: "https://github.com/handlebars-lang/docs/tree/master/src/zh/:path",
          text: "为此页提供修改建议",
        },
        lastUpdated: {
          text: "最后更新",
        },
        footer: {
          message: "MIT 许可",
          copyright: `Copyright © 2011-${new Date().getFullYear()} Yehuda Katz`,
        },
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [{ icon: "github", link: "https://github.com/handlebars-lang/handlebars.js" }],
    lastUpdated: true,

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
    },
  },

  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "./../node_modules/shiki/",
            dest: ".",
          },
        ],
      }),
    ],
  },
});
