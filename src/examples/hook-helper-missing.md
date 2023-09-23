---
layout: playground
example:
  template: |-
    {{foo}}
    {{foo true}}
    {{foo 2 true}}
    {{#foo true}}{{/foo}}
    {{#foo}}{{/foo}}
  preparationScript: >
    Handlebars.registerHelper('helperMissing', function( /* dynamic arguments */) {
      var options = arguments[arguments.length-1];
      var args = Array.prototype.slice.call(arguments, 0,arguments.length-1)
      return new Handlebars.SafeString("Missing: "+options.name+"("+args+")")
    })
---
