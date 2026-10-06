---
layout: playground
example:
  template: |
    {{{{raw}}}}
        {{raw block}}
    {{{{/raw}}}}
  preparationScript: |
    Handlebars.registerHelper('raw', function(options) {
        return options.fn()
    });
---
