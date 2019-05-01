const Prism = require("prismjs");
const loadLanguages = require("prismjs/components/index");

module.exports = {
  highlightHandlebars,
  highlightJson,
  highlightHtml
};

loadLanguages(["handlebars", "json"]);

function highlightHandlebars(code) {
  return checkNullAndHighlight(code, Prism.languages.handlebars, "handlebars");
}

function highlightJson(code) {
  return checkNullAndHighlight(code, Prism.languages.json, "json");
}

function highlightHtml(html) {
  return checkNullAndHighlight(html, Prism.languages.html, "html");
}

function checkNullAndHighlight(value, grammar, language) {
  if (value == null) {
    throw new Error(`Value in language "${language}" may not be null`);
  }
  if (grammar == null) {
    throw new Error(`Grammar for language "${language}" may not be null`);
  }
  return Prism.highlight(value, grammar, language);
}
