# Runtime options

The function 'Handlebars.compile' and 'Handlebars.precompile' create a function. This function can be called as
`template(context, options)` where `context` is the input object.

`options` is an object that can have any of the following properties

- `data` Pass in an object to define custom `@variable` private variables.
- `helpers` Pass in to provide custom helpers in addition to the globally defined helpers.  
  Values defined in this object will replace any values defined in the global object for the duration of the template
  execution.
- `partials` Pass in to provide custom partials in addition to the globally defined partials.  
  Values defined in this object will replace any values defined in the global object for the duration of the template
  execution.
- `allowCallsToHelperMissing` (since 4.3.0, insecure): If set to `true`, calls like `{{helperMissing}}` and
  `{{blockHelperMissing}}` will be allowed. Please not that this allows template authors to fabricate templates for
  Remote Code Execution on the environment running Handlebars (see https://github.com/wycats/handlebars.js/issues/1558)
- `allowedProtoMethods` (since 4.6.0): a string-to-boolean map of property-names that are allowed if they are methods of
  the parent object.
- `allowedProtoProperties` (since 4.6.0): a string-to-boolean map of property-names that are allowed if they are
  properties but not methods of the parent object.

  ```js
  const template = handlebars.compile("{{aString.trim}}");
  const result = template({ aString: "  abc  " });
  // result is empty, because trim is defined at String prototype
  ```

  ```js
  const template = handlebars.compile("{{aString.trim}}");
  const result = template(
    { aString: "  abc  " },
    {
      allowedProtoMethods: {
        trim: true
      }
    }
  );
  // result = 'abc'
  ```

```

```
