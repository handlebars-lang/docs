# Interactive examples

Interactive examples can be added to every page by adding and "Example"-tag to the markdown content.

```markdown
<Example examplePage="/examples/all-features" :showInputOutput="true" />
```

Attributes:

- `examplePage`: path to the example page below the `src`-folder
- `showInputOutput`: (optional, default: false) wether or not to show the "input" and "output" fields in this page.
- `hidePreparationScript`: (optional, default: false) if set to true, the preparation script will not be shown even if
  it exists.

The example itself is defined in the frontmatter of the referenced example page. See
[src/examples/all-features.md][all-features-example-raw] for a complete demonstration of all features.

The following frontmatter properties are supported:

- `layout`: Must always be `InteractivePlaygroundLayout`
- `example`: Contains the example
  - `template`: The main Handlebars template
  - `partials`: An object with on property for each registered partial, the key is the partial-name, the value is the
    partial content
  - `preparationScript`: A script that is executed before compiling and running the template. `Handlebars` is available
    as global variable in this script.
  - `input`: The template-input as embedded YAML-object.

The above line will import the example defined in the markdown file `src/examples/simple-expressions.md` and display the
following example.

<Example examplePage="/examples/all-features" :showInputOutput="true" />
