---
layout: playground
example:
  template: |
    {{#each persons as | person |}}
        {{name}} lives in {{#with (lookup ../cities [resident-in])~}}
          {{name}} ({{country}})
        {{/with}}
    {{/each}}
  input:
    persons:
      - name: Nils
        resident-in: darmstadt
      - name: Yehuda
        resident-in: san-francisco
    cities:
      darmstadt:
        name: Darmstadt
        country: Germany
      san-francisco:
        name: San Francisco
        country: USA
---
