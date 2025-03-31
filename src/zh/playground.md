---
layout: playground
example:
  template: |
    {{firstname}} {{loud lastname}}
  partials:
  preparationScript: |
    Handlebars.registerHelper('loud', function (aString) {
      return aString.toUpperCase()
    })
  input:
    firstname: 张
    lastname: 三
---
