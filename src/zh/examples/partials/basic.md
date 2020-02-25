---
layout: InteractivePlaygroundLayout
example:
  template: "{{> myPartial }}"
  preparationScript: |
    Handlebars.registerPartial('myPartial', '{{prefix}}');
  input:
    prefix: Hello
---
