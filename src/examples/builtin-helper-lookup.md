---
layout: playground
example:
  template: |+
    {{#each people}}
       {{.}} lives in {{lookup ../cities @index}}
    {{/each}}
  input:
    people:
      - Nils
      - Yehuda
    cities:
      - Darmstadt
      - San Francisco
---
