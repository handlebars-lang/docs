# Helpers

## The `options`-parameter

In addition to the parameters used in the helper-call, an `options`-object is passed to the helper as additional
parameter.

- `lookupProperty(object, propertyName)`: a function that returns an "own property" of an object. Whitelists specified
  in `allowedProtoProperties` and `allowedProtoMethods` are respected by this function. Example:

  <Example examplePage="/examples/helper-lookup-property.md" show="preparationScript" />

- TODO: Describe all options that are passed to helpers
