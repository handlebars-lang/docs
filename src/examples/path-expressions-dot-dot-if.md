---
layout: playground
example:
  template: |
    {{#each people}}
        {{#if creator}}
            {{../prefix}} {{firstname}}
        {{/if}} 
    {{/each}}
  partials:
  input:
    people:
      - firstname: Nils
      - firstname: Yehuda
        creator: true
    prefix: "Hello"
---
