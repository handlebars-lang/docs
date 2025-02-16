---
layout: playground
example:
  template: |
    {{#each people}}
      {{> myPartial prefix=../prefix firstname=firstname lastname=lastname}}.
    {{/each}}
  partials:
    myPartial: "{{prefix}}, {{firstname}} {{lastname}}"
  input:
    people:
      - firstname: Nils
        lastname: Knappmeier
      - firstname: Yehuda
        lastname: Katz
    prefix: Hello
---
