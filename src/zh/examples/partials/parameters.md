---
layout: InteractivePlaygroundLayout
example:
  template: "{{> myPartial parameter=favoriteNumber }}"
  preparationScript: |
    Handlebars.registerPartial('myPartial', 'The result is {{parameter}}');
  input:
    favoriteNumber: 123
---
