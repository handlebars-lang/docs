# Creating interactive examples

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
  - `errorExpected`: A boolean (default: `false`) that specifies that this example is expected to throw an error. By
    default, examples that throw an error during execution, cause the build of the whole site to fail. If you write an
    example that describes an error, you need to set this flag to `true`.

The output of the example is automatically computed using the latest release version of Handlebars.

## Example data

If possible, examples should use variations of a common data set. Therefore, the file
[src/\_examples/\_example-base-data.yaml](https://github.com/handlebars-lang/docs/blob/master/src/_examples/_example-base-data.yaml)
contains data that can be reused and adapted to each example. If the data in that file is insufficient, please add new
data, but please make sure it is somehow related.

## Embedding parts of an example.

The `<ExamplePart>`-component allows you to show a part of the example in the current part.

```md
<Example examplePage="/examples/builtin-helper-each-block" show="template"/>
```

will result in

<Example examplePage="/examples/builtin-helper-each-block" show="template"/>

The props for this component are:

- `examplePage`: path to the example page below the `src`-folder
- `show`: The part of the example that should be inserted into the page. Possible values are `template`, `input`,
  `output`, `error`, `preparationScript` and `partial`
- `name` (optional): This prop is needed only when `show="partial"`. It defines the name of the partial that should be
  inserted into the example.

The component is very useful if you want to embed the parts of an example into flowing text, You can insert the input
JSON by using `<Example examplePage="/examples/all-features" show="input" />` and the following code snippet will appear
in the page:

<Example examplePage="/examples/all-features" show="input" />

Then, in order to show the reader the template you can use `show="template"` with the same `examplePage`.

<Example examplePage="/examples/all-features" show="template" />

You can render a partial using for example `show=partial` and `name=person`

<Example examplePage="/examples/all-features" show="partial" name="person"/>

If you have an example with helpers, you might also want to include the preparation script:

<Example examplePage="/examples/all-features" show="preparationScript" />

## Horizontal layout

If you want to layout two example-parts horizontally, you can use the `<Flex>`-component.

```md
<Flex>
<Example examplePage="/examples/builtin-helper-each-block" show="template"/>
<Example examplePage="/examples/builtin-helper-each-block" show="input"/>
</Flex>
```

becomes

<Flex>
<Example examplePage="/examples/builtin-helper-each-block" show="template"/>
<Example examplePage="/examples/builtin-helper-each-block" show="input"/>
</Flex>
