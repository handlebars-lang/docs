---
layout: playground
example:
  template: |
    helper: {{name}}
    data: {{./name}} or {{this/name}} or {{this.name}}
  partials:
  preparationScript: |
    Handlebars.registerHelper('name', function () {
        return "Nils"
    })
  input:
    name: Yehuda
---
