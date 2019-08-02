<template>
  <div class="workspace">
    <div class="workspace-header" v-if="interactive">
      <div class="version-chooser">
        Handlebars:
        <handlebars-version-chooser v-model="currentExample.handlebarsVersion" @input="executeExample" />
        <button @click="addPartial">
          Add partial
        </button>
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
        v-for="(partial, index) in currentExample.partials"
        :key="partial.name"
        v-model="partial.content"
        :title="partial.name"
        style-class="workspace-partial"
        header-css-class="workspace-partial-header"
        language="handlebars"
        :interactive="interactive"
        :can-be-renamed="true"
        @renameTo="renamePartialTo(partial, $event)"
        @delete="deletePartial(index)"
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
import Vue from "vue";
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
      currentError: parsedExample.error || null,
      createdPartialCounter: 0
    };
  },
  methods: {
    executeExample() {
      Vue.nextTick(async () => {
        try {
          await executeExample(this.currentExample);
          this.currentError = null;
        } catch (err) {
          this.currentError = err;
        }
      });
    },
    addPartial() {
      if (this.currentExample.partials == null) {
        this.currentExample.partials = [];
      }
      this.currentExample.partials.push({
        name: "new_partial",
        content: ""
      });
      this.executeExample();
    },
    deletePartial(index) {
      this.currentExample.partials.splice(index, 1);
      this.executeExample();
    },
    renamePartialTo(partial, newName) {
      partial.name = newName;
      this.executeExample();
    }
  }
};
</script>
<style lang="stylus">

.workspace-partial-header {
    &:before {
        content: '{{>';
    }

    &:after {
        content: '}}';
    }
}

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
