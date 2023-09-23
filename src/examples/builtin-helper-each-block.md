---
layout: playground
example:
  template: |-
    <ul class="people_list">
      {{#each people}}
        <li>{{this}}</li>
      {{/each}}
    </ul>
  input:
    people:
      - Yehuda Katz
      - Alan Johnson
      - Charles Jolley
---
