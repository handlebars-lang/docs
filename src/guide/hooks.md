# Hooks

There are several places where you can hook into Handlebars function calls.

## helperMissing

This hook is called when a mustache or a block-statement

- a simple mustache-expression is not a registered helper AND
- is not a property of the current evaluation context.

you can add custom handling for those situations by registering the helper `helperMissing`:

<Example examplePage="/examples/hook-helper-missing.md" show="template" />
<Example examplePage="/examples/hook-helper-missing.md" show="preparationScript" />
<Example examplePage="/examples/hook-helper-missing.md" show="output" />

The helper receives the same arguments and options (`hash`, `name` etc) as any custom helper or block-helper. The
`options.name` is the name of the helper being called.

### Default behavior

If no parameters are passed to the mustache, the default behavior is to do nothing and ignore the whole mustache
expression or the whole block:

<Flex>
<Example examplePage="/examples/hook-helper-missing-default-no-param.md" show="template" />
<Example examplePage="/examples/hook-helper-missing-default-no-param.md" show="output" />
</Flex>

If parameter is passed to the mustache, Handlebars with throw an exception:

<Flex>
<Example examplePage="/examples/hook-helper-missing-default-param.md" show="template" />
<Example examplePage="/examples/hook-helper-missing-default-param.md" show="error" />
</Flex>

## blockHelperMissing

This hook is called, when a

- block-expression calls a helper that is not registered,
- but the name matches a property in the current evaluation context.

You can handle this situation by registering a helper named `blockHelperMissing`.

<Example examplePage="/examples/hook-block-helper-missing.md" show="template" />
<Example examplePage="/examples/hook-block-helper-missing.md" show="preparationScript" />
<Example examplePage="/examples/hook-block-helper-missing.md" show="output" />

### Default behavior

The hook will be called with the resolved property value on the current context and the `options.name` field set to the
name of the property.

If the hook is not overridden, then the default implementation will mimic the behavior of Mustache and just call the
block.

<Example examplePage="/examples/hook-block-helper-missing-default.md" show="template" />
<Example examplePage="/examples/hook-block-helper-missing-default.md" show="output" />
