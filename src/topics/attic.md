# These texts are currently looking for a new place in the docs:

Nested handlebars paths can also include `../` segments, which evaluate their paths against a parent context.

<Example examplePage="/examples/path-expressions-dot-dot" :showInputOutput="true"/>

Even though the name is printed while in the context of a comment, it can still go back to the main context (the
root-object) to retrieve the prefix.

::: v-pre

::: warning

The exact value that `../` will resolve to varies based on the helper that is calling the block. Using `../` is only
necessary when context changes. Children of helpers such as `{{#each}}` would require the use of `../` while children of
helpers such as `{{#if}}` do not.

:::

In this example all of the above reference the same prefix value even though they are located within different blocks.
This behavior is new as of Handlebars 4, the release notes discuss the prior behavior as well as the migration plan.
Handlebars also allows for name conflict resolution between helpers and data fields via a this reference:

<Example examplePage="/examples/helper-data-name-conflict" :hidePreparationScript="true" />

Any of the above would cause the name field on the current context to be used rather than a helper of the same name.

## TODO: Move to "helpers"

### Literals

Helper calls may also have literal values passed to them either as parameter arguments or hash arguments. Supported
literals include numbers, strings, `true`, `false`, `null` and ? `undefined`.

<Example examplePage="/examples/helper-literals" :showInputOutput="false" />
