---
layout: playground
example:
  template: |
    {{#if (isdefined value1)}}true{{else}}false{{/if}}
    {{#if (isdefined value2)}}true{{else}}false{{/if}}
  preparationScript: |
    Handlebars.registerHelper('isdefined', function (value) {
      return value !== undefined;
    });
  input:
    value1: {}
---
