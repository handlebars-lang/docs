---
layout: InteractivePlaygroundLayout
example:
  template: "{{> myPartial myOtherContext }}"
  preparationScript: |
    Handlebars.registerPartial('myPartial', '{{information}}');
  input:
    myOtherContext:
      information: Interesting!
---
