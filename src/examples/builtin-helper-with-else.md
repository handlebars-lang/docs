---
layout: playground
example:
  template: |+
    {{#with city}}
    {{city.name}} (not shown because there is no city)
    {{else}}
    No city found
    {{/with}}
  input:
    person:
      firstname: Yehuda
      lastname: Katz
---
