# Creating interactive examples

[[toc]]

It is possible to define interactive examples. Examples or parts of an example can be **embedded in any page**. A
auto-generated link enables the visitor to open the example in a **playground** where she can change the template,
partials, input, and so on and can see the resulting output.

## Creating examples

In order to define an example, create a new markdown file in the `examples`-directory. The example data is defined in
the frontmatter of the referenced example page. See [all-features-example-raw](../examples/all-features.md) for a
complete demonstration of all features.

The following frontmatter properties are supported:

- `layout`: Must always be `InteractivePlaygroundLayout`
- `example`: Contains the example
  - `template`: The main Handlebars template
  - `partials`: An object with on property for each registered partial, the key is the partial-name, the value is the
    partial content
  - `preparationScript`: A script that is executed before compiling and running the template. `Handlebars` is available
    as global variable in this script.
  - `input`: The template-input as embedded YAML-object.

The output of the example is automatically computed using the latest release version of Handlebars.

## Embedding parts of an example.

The `<ExamplePart>`-component allows you to show a part of the example in the current part.

```md
<ExamplePart examplePage="/examples/builtin-helper-each-block" show="template"/>
```

will result in

<ExamplePart examplePage="/examples/builtin-helper-each-block" show="template"/>

The props for this component are:

- `examplePage`: path to the example page below the `src`-folder
- `show`: The part of the example that should be inserted into the page. Possible values are `template`, `input`,
  `output`, `preparationScript` and `partial`
- `name` (optional): This prop is needed only when `show="partial"`. It defines the name of the partial that should be
  inserted into the example.

The component is very useful if you want to embed the parts of an example into flowing text, You can insert the input
JSON by using `<ExamplePart examplePage="/examples/all-features" show="input" />` and the following code snippet will
appear in the page:  
<ExamplePart examplePage="/examples/all-features" show="input" />

Then, in order to show the reader the template you can use `show="template"` with the same `examplePage`.

<ExamplePart examplePage="/examples/all-features" show="template" />

If you have an example with helpers, you might also want to include the preparation script:

<ExamplePart examplePage="/examples/all-features" show="preparationScript" />

## Horizontal layout

If you want to layout two example-parts horizontally, you can use the `<Flex>`-component.

```md
<Flex>
<ExamplePart examplePage="/examples/builtin-helper-each-block" show="template"/>
<ExamplePart examplePage="/examples/builtin-helper-each-block" show="input"/>
</Flex>
```

becomes

<Flex>
<ExamplePart examplePage="/examples/builtin-helper-each-block" show="template"/>
<ExamplePart examplePage="/examples/builtin-helper-each-block" show="input"/>
</Flex>

## Embedding the complete example

If you want to embed the whole examples, not just parts of it, you can use the `<Example>`-component.

::: warning Deprecation notice This was the original way for embedding examples, but you are more flexible by using

`<ExamplePart>`

:::

```vue
<Example examplePage="/examples/all-features" :showInputOutput="true" />
```

Attributes:

- `examplePage`: path to the example page below the `src`-folder
- `showInputOutput`: (optional, default: false) wether or not to show the "input" and "output" fields in this page.
- `hidePreparationScript`: (optional, default: false) if set to true, the preparation script will not be shown even if
  it exists.

The above line will import the example defined in the markdown file `src/examples/simple-expressions.md` and display the
following example.

<Example examplePage="/examples/all-features" :showInputOutput="true" />
