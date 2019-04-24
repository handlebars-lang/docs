const basePath = process.env.VUEPRESS_BASE || "/";

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
      {
        text: "Other sources",
        items: [{ text: "handlebarsjs.com", link: "https://handlebarsjs.com" }]
      }
    ],
    lastUpdated: "Last Updated"
  }
};
