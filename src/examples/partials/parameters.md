---
layout: playground
example:
  template: "{{> myPartial parameter=favoriteNumber }}"
  partials:
    myPartial: "The result is {{parameter}}"
  input:
    favoriteNumber: 123
---
