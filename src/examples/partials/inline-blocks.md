---
layout: playground
example:
  template: |-
    {{#> layout}}
      {{#*inline "nav"}}
        My Nav
      {{/inline}}
      {{#*inline "content"}}
        My Content
      {{/inline}}
    {{/layout}}
  partials:
    layout: |-
      <div class="nav">
        {{> nav}}
      </div>
      <div class="content">
        {{> content}}
      </div>
---
