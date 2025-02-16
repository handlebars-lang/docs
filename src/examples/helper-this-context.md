---
layout: playground
example:
  template: |
    {{#each people}}
       {{print_person}}
    {{/each}}
  partials:
  preparationScript: |
    Handlebars.registerHelper('print_person', function () {
        return this.firstname + ' ' + this.lastname
    })
  input:
    people:
      - firstname: Nils
        lastname: Knappmeier
      - firstname: Yehuda
        lastname: Katz
---
