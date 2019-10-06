---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{link people}}
  preparationScript: |
    Handlebars.registerHelper("link", function(object) {
       var url = Handlebars.escapeExpression(object.url),
          firstname = Handlebars.escapeExpression(object.firstname);
          lastname  = Handlebars.escapeExpression(object.lastname);

       return new Handlebars.SafeString("<a href='" + url + "'>" + firstname +" "+ lastname +"</a>");
    });
  input:
    people:
      firstname: Yehuda
      lastname: Katz
      url: "https://yehudakatz.com/"
---
