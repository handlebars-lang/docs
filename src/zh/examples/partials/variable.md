---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{> (lookup . 'myVariable') }}
  preparationScript: |
    Handlebars.registerPartial('lookupMyPartial', 'Found!');
  input:
    myVariable: lookupMyPartial
---
