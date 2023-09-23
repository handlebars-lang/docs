---
layout: playground
example:
  template: |-
    <div class="entry">
    {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
    {{/if}}
    </div>
  input:
    author: true
    firstName: Yehuda
    lastName: Katz
---
