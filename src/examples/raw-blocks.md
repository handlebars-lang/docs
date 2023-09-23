---
layout: playground
example:
  template: |
    {{{{raw-loud}}}}
      {{bar}}
    {{{{/raw-loud}}}}
  preparationScript: |
    Handlebars.registerHelper('raw-loud', function(options) {
        return options.fn().toUpperCase()
    });
---
