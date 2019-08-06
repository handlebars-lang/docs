const MarkdownIt = require("markdown-it");

const md = new MarkdownIt();
require("./button-link")
  .buttonLink()
  .extendMarkdown(md);

console.log(
  md.render(`

# Test

[A link](http://www.google.de)

!button[Learn More: About tests](./learnmore.html)

test

`)
);
