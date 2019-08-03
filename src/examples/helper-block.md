---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{#list people}}{{firstname}} {{lastname}}{{/list}}
  partials:
  preparationScript: |
    Handlebars.registerHelper("list", function(items, options) {
      return "<ul>\n" + items.map(asHtmlListItem).join("\n") + "\n</ul>";

      function asHtmlListItem(item) {
        return "<li>" + options.fn(item) + "</li>";
      }
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

```js
```
