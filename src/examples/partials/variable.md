---
layout: playground
example:
  template: |
    {{> (lookup . 'myVariable') }}
  partials:
    lookupMyPartial: Found!
  input:
    myVariable: lookupMyPartial
---
