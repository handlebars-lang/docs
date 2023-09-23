---
layout: playground
example:
  template: |
    {{progress "Search" 10 false}}
    {{progress "Upload" 90 true}}
    {{progress "Finish" 100 false}}
  partials:
  preparationScript: |
    Handlebars.registerHelper('progress', function (name, percent, stalled) {
      var barWidth = percent / 5
      var bar = "********************".slice(0,barWidth)            
      return bar + " " + percent + "% " + name + " " +  (stalled ? "stalled" : "")
    })
  input: {}
---
