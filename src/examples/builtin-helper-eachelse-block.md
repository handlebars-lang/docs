---
layout: playground
example:
  template: |-
    {{#each paragraphs}}
    <p>{{this}}</p>
    {{else}}
    <p class="empty">No content</p>
    {{/each}}
  input: {}
---
