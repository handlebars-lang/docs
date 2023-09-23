---
layout: playground
example:
  template: |-
    {{#*inline "myPartial"}}
      My Content
    {{/inline}}
    {{#each people}}
      {{> myPartial}}
    {{/each}}
  input:
    people:
      - firstname: Nils
      - firstname: Yehuda
---
