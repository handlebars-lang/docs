---
layout: playground
example:
  template: |
    {{#each people}}
        {{../prefix}} {{firstname}} 
    {{/each}}
  partials:
  input:
    people:
      - firstname: Nils
      - firstname: Yehuda
    prefix: "Hello"
---
