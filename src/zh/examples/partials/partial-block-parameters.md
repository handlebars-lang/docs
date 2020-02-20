---
layout: InteractivePlaygroundLayout
example:
  template: |-
    {{#each children as |child|}}
      {{#> childEntry}}
        {{child.value}}
      {{/childEntry}}
    {{/each}}
  input:
    children:
      - value: 1
      - value: 2
      - value: 3
---
