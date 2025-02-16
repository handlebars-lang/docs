---
layout: playground
example:
  template: |-
    {{#each people as |person|}}
      {{#> childEntry}}
        {{person.firstname}}
      {{/childEntry}}
    {{/each}}
  input:
    people:
      - firstname: Nils
      - firstname: Yehuda
      - firstname: Carl
---
