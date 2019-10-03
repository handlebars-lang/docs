---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{bold text}}
  partials:
  preparationScript: |
    Handlebars.registerHelper("bold", function(text, url) {
      var result = "<b>" + Handlebars.Utils.escapeExpression(text) + "</b>";
      return new Handlebars.SafeString(result);
    });
  input:
    text: Isn't this great?
---
