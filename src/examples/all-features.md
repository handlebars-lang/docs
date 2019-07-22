---
layout: InteractivePlaygroundLayout
example:
  template: |
    {{>header}}
    <hr/>
    {{#each persons}}
    {{>person person=.}}
    {{/each}}
  partials:
    header: |
      {{persons.length}} persons found
    person: |
      The person {{loud person.name}} is {{person.age}} years old.
  preparationScript: |
    Handlebars.registerHelper('loud', function (aString) {
        return aString.toUpperCase()
    })
  input:
    persons:
      - name: Nils
        age: 20
      - name: Teddy
        age: 10
      - name: Nelson
        age: 40
---

This example shows all the features that can be used in Handlebars

TODO: Add a decorator.
