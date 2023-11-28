---
layout: playground
example:
  template: |
    {{lookupOrDefault this 'firstname' 'Name not found'}}
  partials:
  preparationScript: |
    Handlebars.registerHelper('lookupOrDefault', function (object, propertyName, defaultValue, options) {
        var result = options.lookupProperty(object, propertyName)
        if (result != null) {
            return result
        }
        return defaultValue
    })
  input:
    firstname: Yehuda
---
