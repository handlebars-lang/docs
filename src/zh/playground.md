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

<!--
 This page acts as entry-page for shared examples. The main goal or having such a page is that its URL does not
 change in order to keep old shared URLs valid.
-->
