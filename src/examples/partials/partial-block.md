---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{#> layout }}
    My Content
    {{/layout}}
  preparationScript: |
    Handlebars.registerPartial('layout', 'Site Content {{> @partial-block }}');
---
