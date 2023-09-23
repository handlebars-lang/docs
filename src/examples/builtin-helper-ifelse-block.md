---
layout: playground
example:
  template: |-
    <div class="entry">
    {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
    {{else}}
    <h1>Unknown Author</h1>
    {{/if}}
    </div>
  input:
    author: false
    firstName: Yehuda
    lastName: Katz
---
