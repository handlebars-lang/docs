---
layout: playground
example:
  template: |
    {{#list people}}{{firstname}} {{lastname}}{{/list}}
  preparationScript: |
    Handlebars.registerHelper("list", function(items, options) {
      const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
      return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
    });
  input:
    people:
      - firstname: Yehuda
        lastname: Katz
      - firstname: Carl
        lastname: Lerche
      - firstname: Alan
        lastname: Johnson
---
