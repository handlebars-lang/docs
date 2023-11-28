---
layout: playground
example:
  template: |
    {{bold text}}
  partials:
  preparationScript: |
    Handlebars.registerHelper("bold", function(text) {
      var result = "<b>" + Handlebars.escapeExpression(text) + "</b>";
      return new Handlebars.SafeString(result);
    });
  input:
    text: Isn't this great?
---
