---
layout: playground
example:
  template: "{{> (whichPartial) }}"
  preparationScript: |
    Handlebars.registerHelper('whichPartial', function(context, options) { return 'dynamicPartial' });
  partials:
    dynamicPartial: Dynamo!
---
