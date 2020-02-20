---
layout: InteractivePlaygroundLayout
example:
  template: "{{> myPartial }}"
  preparationScript: |
    Handlebars.registerPartial('myPartial', '{{name}}');
  input:
    name: Nils
---
