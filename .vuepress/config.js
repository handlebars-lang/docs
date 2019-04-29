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
        href: `${basePath}images/favicon.png`
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Improve the docs", link: "/CONTRIBUTING.html" },
      {
        text: "Other sources",
        items: [{ text: "handlebarsjs.com", link: "https://handlebarsjs.com" }]
      }
    ],
    repo: "handlebars-lang/docs",
    lastUpdated: "Last Updated",
    editLinks: true
  },
  plugins: [require("./plugins/determine-handlebars-version")]
};
