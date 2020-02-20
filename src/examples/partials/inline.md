---
layout: InteractivePlaygroundLayout
example:
  template: |-
    {{#*inline "myPartial"}}
      My Content
    {{/inline}}
    {{#each children}}
      {{> myPartial}}
    {{/each}}
  input:
    children:
      - 1
      - 2
---
