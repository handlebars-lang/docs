---
layout: playground
example:
  template: |
    {{link people.text people.url}}
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
      text: "See Website"
---
