---
layout: playground
example:
  template: |-
    {{#> layout }}
    My Content
    {{/layout}}
  partials:
    layout: Site Content {{> @partial-block }}
---
