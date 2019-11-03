/* eslint-env node */
/* eslint-disable no-console */
import { storeHandlebarsVersionAtVuePrototype } from "./plugins/inject-handlebars-versions";
import { interactiveExamples } from "./plugins/interactive-examples";
import { buttonLink } from "./plugins/button-link";
import { updateHandlebarsCliHelp } from "./plugins/update-handlebars-cli-help";

const isDraft = process.env.DRAFT === "true";

export default {
  base: "/",
  title: isDraft ? "Handlebars (draft)" : "Handlebars",
  head: [
    ["link", { rel: "shortcut icon", type: "image/png", href: `/images/favicon.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }]
  ],
  dest: "target/",
  themeConfig: {
    nav: [
      { text: "Language Guide", link: "/guide/" },
      { text: "Installation", link: "/installation/" },
      { text: "API reference", link: "/api-reference/" },
      { text: "Improve the docs", link: "/contributing/" },
      {
        text: "Other sources",
        items: [
          { text: "The old handlebars-website", link: "https://handlebars-old.knappi.org" },
          { text: "Release notes", link: "https://github.com/wycats/handlebars.js/blob/master/release-notes.md" },
          {
            text: "Issues with label 'docs-needed'",
            link: "https://github.com/wycats/handlebars.js/issues?q=is%3Aopen+is%3Aissue+label%3Adocs-needed"
          }
        ]
      }
    ],
    sidebar: {
      "/installation/": ["", "precompilation.md", "integrations.md", "when-to-use-handlebars.md"],
      "/guide/": ["", "expressions.md", "partials.md", "block-helpers.md", "builtin-helpers.md", "hooks.md"],
      "/api-reference/": ["", "compilation.md", "runtime.md", "utilities.md", "data-variables.md"],
      "/contributing/": ["", "interactive-examples.md", "button-links.md"]
    },
    displayAllHeaders: false,
    repo: "wycats/handlebars.js",
    lastUpdated: "Last Updated",
    editLinks: true,
    editLinkText: "Propose a change to this page!",
    docsRepo: "handlebars-lang/docs",
    docsDir: "src"
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    storeHandlebarsVersionAtVuePrototype,
    interactiveExamples,
    buttonLink,
    updateHandlebarsCliHelp
  ]
};
