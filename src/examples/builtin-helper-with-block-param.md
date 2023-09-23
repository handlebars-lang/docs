---
layout: playground
example:
  template: |-
    {{#with city as | city |}}
      {{#with city.location as | loc |}}
        {{city.name}}: {{loc.north}} {{loc.east}}
      {{/with}}
    {{/with}}
  input:
    city:
      name: San Francisco
      summary: San Francisco is the <b>cultural center</b> of <b>Northern California</b>
      location:
        north: "37.73,"
        east: -122.44
      population: 883305
---
