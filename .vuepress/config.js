const basePath = process.env.VUEPRESS_BASE || "/";

console.log(`basePath: ${basePath}`);
module.exports = {
  base: basePath,
  title: "Handlebars.js (draft)",
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
    lastUpdated: "Last Updated",
    editLinks: true,
    editLinkText: "Edit this page on Github"
  }
};