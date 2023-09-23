---
layout: playground
example:
  template: |
    {{link "See Website" url}}
  preparationScript: |
    Handlebars.registerHelper("link", function(text, url) {
          var url = Handlebars.escapeExpression(url),
              text = Handlebars.escapeExpression(text)
              
         return new Handlebars.SafeString("<a href='" + url + "'>" + text +"</a>");
    });
  input:
    url: "https://yehudakatz.com/"
---
