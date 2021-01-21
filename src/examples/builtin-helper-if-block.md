---
layout: InteractivePlaygroundLayout
example:
  template: |-
    <div class="entry">
    {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
    {{/if}}
    {{#if zeroValue}}
    <h1>Does not render</h1>
    {{/if}}
    {{#if zeroValue includeZero=true}}
    <h1>Does render</h1>
    {{/if}}
    </div>
  input:
    author: true
    firstName: Yehuda
    lastName: Katz
    zeroValue: 0
---
