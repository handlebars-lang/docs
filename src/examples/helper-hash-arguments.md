---
layout: playground
example:
  template: |
    {{link "See Website" href=person.url class="person"}}
  preparationScript: |
    Handlebars.registerHelper("link", function(text, options) {
        var attributes = [];

        Object.keys(options.hash).forEach(key => {
            var escapedKey = Handlebars.escapeExpression(key);
            var escapedValue = Handlebars.escapeExpression(options.hash[key]);
            attributes.push(escapedKey + '="' + escapedValue + '"');
        })
        var escapedText = Handlebars.escapeExpression(text);
        
        var escapedOutput ="<a " + attributes.join(" ") + ">" + escapedText + "</a>";
        return new Handlebars.SafeString(escapedOutput);
    });
  input:
    person:
      firstname: Yehuda
      lastname: Katz
      url: "https://yehudakatz.com/"
---
