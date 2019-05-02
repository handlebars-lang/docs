<template>
  <div class="workspace">
    <div v-if="interactive" class="workspace-header">
      <div class="version-chooser">
        Handlebars:
        <handlebars-version-chooser v-model="currentExample.handlebarsVersion" />
      </div>
    </div>
    <div class="workspace-row">
      <workspace-element
        title="Template"
        styleClass="workspace-template"
        language="handlebars"
        v-model="currentExample.template"
        @input="debounceExecuteExample"
        :interactive="interactive"
      />
      <workspace-element
        v-for="partial in currentExample.partials"
        :key="partial.name"
        :title="partialTitle(partial.name)"
        styleClass="workspace-partial"
        language="handlebars"
        v-model="partial.content"
        @input="debounceExecuteExample"
        :interactive="interactive"
      />
    </div>
    <div class="workspace-row">
      <workspace-element
        title="Input"
        styleClass="workspace-input"
        language="json"
        v-model="currentExample.input"
        @input="debounceExecuteExample"
        :interactive="interactive"
      />
      <workspace-error v-if="currentError" :error="currentError" />
      <workspace-element
        v-else
        title="Output"
        styleClass="workspace-output"
        language="html"
        :value="currentExample.output"
        :interactive="false"
      />
    </div>
  </div>
</template>
<script>
import Layout from "@theme/layouts/Layout.vue";
import WorkspaceElement from "./WorkspaceElement.vue";
import WorkspaceError from "./WorkspaceError.vue";
import HandlebarsVersionChooser from "./HandlebarsVersionChooser.vue";
import {debounceExecuteExample} from "./execute-example";

export default {
  components: { Layout, WorkspaceElement, WorkspaceError, HandlebarsVersionChooser },
  props: ["parsedExample", "interactive"],
  data() {
    let parsedExample = this.$props.parsedExample;
    return {
      currentExample: {
        template: parsedExample.template,
        partials: [ ...parsedExample.partials ],
        input: parsedExample.input,
        output: parsedExample.output,
        handlebarsVersion: this.$handlebarsVersions.latest
      },
      currentError: null
    };
  },
  methods: {
    partialTitle(name) {
      return `{{>${name}}}`;
    },
    async debounceExecuteExample() {
      try {
        await debounceExecuteExample(this.currentExample)
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
