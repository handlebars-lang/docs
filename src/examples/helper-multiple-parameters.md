---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{link "See Website" people.url}}
  preparationScript: |
    Handlebars.registerHelper("link", function(text, url) {
          var url = Handlebars.escapeExpression(url),
              text = Handlebars.escapeExpression(text)
              
         return new Handlebars.SafeString("<a href='" + url + "'>" + text +"</a>");
    });
  input:
    people:
      firstname: Yehuda
      lastname: Katz
      url: "https://yehudakatz.com/"
---
