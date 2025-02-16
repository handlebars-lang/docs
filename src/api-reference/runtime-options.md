# Runtime options

::: v-pre

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
  `{{blockHelperMissing}}` will be allowed. Please note that this allows template authors to fabricate templates for
  Remote Code Execution on the environment running Handlebars (see
  https://github.com/handlebars-lang/handlebars.js/issues/1558)

:::

## Options to control prototype access:

From version 4.6.0 on, Handlebars forbids accessing prototype properties and methods of the context object by default.
The reason are various security issues that arise from this possibility. The following options can be used to control
this access.

::: danger Using these properties may open security holes.

Allowing prototype properties may allow template authors to execute arbitray code on you the machine where Handlebars is
running. Even with some restrictions in place, an attacker may fabricate Handlebars templates that crash your machine.

Details can be found in the npm-security advisories [755](https://www.npmjs.com/advisories/755),
[1164](https://www.npmjs.com/advisories/1164), [1316](https://www.npmjs.com/advisories/1316),
[1324](https://www.npmjs.com/advisories/1324) and [1325](https://www.npmjs.com/advisories/1325) and in the blog-article
of [Mahmoud Gamal](http://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html).

:::

- `allowProtoMethodsByDefault` (since 4.7.0): a boolean (default: false) that defines whether methods that are define on
  the prototype of an object should be resolvable or not, by default.

  The methods `constructor`, `__defineGetter__`, `__defineSetter__`, `__lookupGetter__` and `__lookupSetter__` are
  forbidden, even if this option is set to `true`. They can be accessed only if the corresponding key in
  `allowedProtoMethods` is set to `true`.

  Setting this option to any value disables the warning that Handlebars writes to the console if a proto-method-access
  is attempted and forbidden.

- `allowedProtoMethods` (since 4.6.0): a string-to-boolean map of property-names that are allowed if they are methods of
  the parent object. Undefined values revert the the value defined in `allowProtoMethodsByDefault`.
- `allowProtoPropertiesByDefault` (since 4.7.0): a boolean (default: false) that defines whether non-method properties
  that are defined on the prototype of an object should be resolvable or not, by default.

  The property `__proto__` is forbidden, even if this option is set to `true`. It can only be accessed if the
  corresponding key in `allowedProtoProperties` is set to `true`.

  Setting this option to any value disables the warning that Handlebars writes to the console if a proto-property-access
  is attempted and forbidden.

- `allowedProtoProperties` (since 4.6.0): a string-to-boolean map of property-names that are allowed if they are
  properties but not methods of the parent object. Undefined values revert to the value defined in
  `allowProtoPropertiesByDefault`

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
        trim: true,
      },
    },
  );
  // result = 'abc'
  ```

You can also use the package
[@handlebars/allow-prototype-access](https://www.npmjs.com/package/@handlebars/allow-prototype-access) revert to 4.5.3
behavior in cases where you cannot pass runtime-options, like in
[express-handlebars](https://www.npmjs.com/package/express-handlebars).
