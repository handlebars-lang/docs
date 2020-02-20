---
layout: InteractivePlaygroundLayout
example:
  template: "{{> myPartial parameter=value }}"
  preparationScript: |
    Handlebars.registerPartial('myPartial', 'The result is {{parameter}}');
  input:
    value: 123
---
