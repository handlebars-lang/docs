<template>
  <div class="workspace">
    <div v-if="interactive" class="workspace-header">
      <div class="version-chooser">
        Handlebars:
        <handlebars-version-chooser v-model="currentExample.handlebarsVersion" @input="executeExample" />
      </div>
    </div>
    <div class="workspace-row">
      <workspace-element
        v-model="currentExample.template"
        title="Template"
        style-class="workspace-template"
        language="handlebars"
        :interactive="interactive"
        @input="executeExample"
      />
      <workspace-element
        v-for="partial in currentExample.partials"
        :key="partial.name"
        v-model="partial.content"
        :title="partialTitle(partial.name)"
        style-class="workspace-partial"
        language="handlebars"
        :interactive="interactive"
        @input="executeExample"
      />
    </div>
    <div v-if="currentExample.preparationScript" class="workspace-row">
      <workspace-element
        v-model="currentExample.preparationScript"
        title="Preparation-Script"
        style-class="workspace-partial"
        language="javascript"
        :interactive="interactive"
        @input="executeExample"
      />
    </div>
    <div v-if="showInputOutput" class="workspace-row">
      <workspace-element
        v-model="currentExample.input"
        title="Input"
        style-class="workspace-input"
        language="json"
        :interactive="interactive"
        @input="executeExample"
      />
      <workspace-error v-if="currentError" :error="currentError" />
      <workspace-element
        v-else
        title="Output"
        style-class="workspace-output"
        language="html"
        :value="currentExample.output"
        :interactive="false"
      />
    </div>
  </div>
</template>
<script>
import WorkspaceElement from "./WorkspaceElement.vue";
import WorkspaceError from "./WorkspaceError.vue";
import HandlebarsVersionChooser from "./HandlebarsVersionChooser.vue";
import { executeExample } from "./execute-example";

export default {
  components: { WorkspaceElement, WorkspaceError, HandlebarsVersionChooser },
  props: {
    parsedExample: { type: Object, required: true },
    interactive: { type: Boolean, default: false },
    showInputOutput: { type: Boolean, default: false }
  },
  data() {
    let parsedExample = this.$props.parsedExample;
    return {
      currentExample: {
        template: parsedExample.template,
        partials: [...parsedExample.partials],
        input: parsedExample.input,
        output: parsedExample.output,
        preparationScript: parsedExample.preparationScript,
        handlebarsVersion: this.$handlebarsVersions.latest
      },
      currentError: null
    };
  },
  methods: {
    partialTitle(name) {
      return `{{>${name}}}`;
    },
    async executeExample() {
      try {
        await executeExample(this.currentExample);
        this.currentError = null;
      } catch (err) {
        this.currentError = err;
      }
    }
  }
};
</script>
<style lang="stylus">

.workspace-header {
    margin: $exampleWorkspaceDefaultMargin;
    background-color: #fff;
    padding: 0.5rem;
    display: flex;
}

.workspace-row {
    display: flex;
    flex-wrap: wrap;
}

.workspace-execution-iframe {
    display: none;
}
</style>
