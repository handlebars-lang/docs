---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{link text url}}
  partials:
  preparationScript: |
    Handlebars.registerHelper("link", function(text, url) {
      text = Handlebars.Utils.escapeExpression(text);
      url = Handlebars.Utils.escapeExpression(url);
      var result = '<a href="' + url + '">' + text + "</a>";
      return new Handlebars.SafeString(result);
    });
  input:
    text: Yehuda's homepage
    url: https://yehudakatz.com/
---
