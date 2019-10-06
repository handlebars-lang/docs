---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{link "See Website" href=people.url class="people"}}
  preparationScript: |
    Handlebars.registerHelper("link", function(text, options) {
        var attrs = [];

        for (var prop in options.hash) {
            attrs.push(Handlebars.escapeExpression(prop) + '="' + Handlebars.escapeExpression(options.hash[prop]) + '"');
        }

        return new Handlebars.SafeString("<a " + attrs.join(" ") + ">" + Handlebars.escapeExpression(text) + "</a>");
    });
  input:
    people:
      firstname: Yehuda
      lastname: Katz
      url: "https://yehudakatz.com/"
---
