---
layout: TryHandlebars
template: |
  {{#each people}}
  {{>person person=.}}
  {{each}}
partials:
  person: |
    The person {{person.name}} is {{person.age}} years old.
input:
  people:
    - name: Nils
      age: 20
    - name: Teddy
      age: 50
    - name: Nelson
      age: 30
---
