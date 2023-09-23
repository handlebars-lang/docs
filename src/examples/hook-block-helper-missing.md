---
layout: playground
example:
  template: |-
    {{#person}}
      {{firstname}} {{lastname}}
    {{/person}}
  preparationScript: |
    Handlebars.registerHelper('blockHelperMissing', function(context, options) {
        return "Helper '"+options.name+"' not found. " 
          + "Printing block: " + options.fn(context); 
    });
  input:
    person:
      firstname: Yehuda
      lastname: Katz
---
