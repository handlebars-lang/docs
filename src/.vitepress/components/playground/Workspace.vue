<template>
  <div class="workspace">
    <ExportYamlModal :yaml="exportedYaml" @close="deleteExportedYaml"></ExportYamlModal>
    <ShareUrlModal :url-for-sharing="urlForSharing" @close="deleteUrlForSharing"></ShareUrlModal>
    <div v-if="interactive" class="workspace-header">
      <div class="version-chooser">
        <label for="handlebars-version-chooser">Handlebars:</label>
        <handlebars-version-chooser v-model="currentExample.handlebarsVersion" @input="executeExample" />
        <button @click="addPartial">Add partial</button>
        <button @click="copyAsYaml">Copy as YAML</button>
        <button @click="share">Share (Experimental)</button>
      </div>
    </div>
    <div class="workspace-row">
      <workspace-element
        v-model="currentExample.template"
        title="Template"
        language="handlebars"
        :interactive="interactive"
        @input="executeExample"
      />
      <workspace-element
        v-for="(partial, index) in currentExample.partials"
        v-model="partial.content"
        :key="partial.name"
        :title="partial.name"
        language="handlebars"
        :interactive="interactive"
        :can-be-renamed="true"
        @renameTo="renamePartialTo(partial, $event)"
        @delete="deletePartial(index)"
        @input="executeExample"
      />
    </div>
    <div v-if="currentExample.preparationScript && !hidePreparationScript" class="workspace-row">
      <workspace-element
        v-model="currentExample.preparationScript"
        title="Preparation-Script"
        language="javascript"
        :interactive="interactive"
        @input="executeExample"
      />
    </div>
    <div v-if="showInputOutput" class="workspace-row">
      <workspace-element
        v-model="currentExample.input"
        title="Input"
        language="json"
        :interactive="interactive"
        @input="executeExample"
      />
      <workspace-error v-if="currentError" :error="currentError" />
      <workspace-element v-else v-model="currentExample.output" title="Output" language="html" :interactive="false" />
    </div>
  </div>
</template>

<script>
import { nextTick } from "vue";
import { data as handlebars } from "./../../../handlebars.data.js";
import WorkspaceElement from "./WorkspaceElement.vue";
import WorkspaceError from "./WorkspaceError.vue";
import HandlebarsVersionChooser from "./HandlebarsVersionChooser.vue";
import { serializeToYaml } from "./lib/example-serializer";
import ExportYamlModal from "./ExportYamlModal.vue";
import { createSharedUrl, loadFromSharedUrl } from "./lib/share-utils.js";
import ShareUrlModal from "./ShareUrlModal.vue";

export default {
  components: { ShareUrlModal, WorkspaceElement, WorkspaceError, HandlebarsVersionChooser, ExportYamlModal },
  props: {
    parsedExample: { type: Object, required: true },
    interactive: { type: Boolean, default: false },
    showInputOutput: { type: Boolean, default: false },
    hidePreparationScript: { type: Boolean, default: false },
  },
  data() {
    let parsedExample = this.$props.parsedExample;

    return {
      currentExample: createCopyOfExample(this.$props.parsedExample, handlebars.versions.latest),
      currentError: parsedExample.error || null,
      createdPartialCounter: 0,
      exportedYaml: null,
      urlForSharing: null,
    };
  },
  mounted() {
    import("./lib/in-browser-example-executor/client").then((module) => {
      this.$executeExample = module.executeExample;
      this.loadSharedData();
    });
  },
  methods: {
    addPartial() {
      if (this.currentExample.partials == null) {
        this.currentExample.partials = [];
      }
      this.currentExample.partials.push({
        name: "new_partial",
        content: "",
      });
      this.exampleContentChanged();
    },
    deletePartial(index) {
      this.currentExample.partials.splice(index, 1);
      this.exampleContentChanged();
    },
    renamePartialTo(partial, newName) {
      partial.name = newName;
      this.exampleContentChanged();
    },
    exampleContentChanged() {
      this.executeExample();
    },
    copyAsYaml() {
      this.$data.exportedYaml = serializeToYaml(this.currentExample);
    },
    deleteExportedYaml() {
      this.$data.exportedYaml = null;
    },
    executeExample() {
      nextTick(async () => {
        try {
          const example = this.getPostMessageCompatibleExample(handlebars.versions.latest);
          this.currentExample.output = await this.$executeExample(example);
          this.currentError = null;
        } catch (error) {
          this.currentError = { message: error.message, stack: error.stack };
        }
      });
    },
    share() {
      this.urlForSharing = createSharedUrl(this.$data.currentExample);
    },
    deleteUrlForSharing() {
      this.urlForSharing = null;
    },
    loadSharedData() {
      const newExample = loadFromSharedUrl();
      if (newExample) {
        this.$data.currentExample = newExample;
        this.executeExample();
      }
    },
    getPostMessageCompatibleExample(handlebarsVersion) {
      return {
        template: this.currentExample.template,
        partials: this.currentExample.partials.map((partial) => ({ content: partial.content, name: partial.name })),
        input: this.currentExample.input || null,
        output: this.currentExample.output,
        preparationScript: this.currentExample.preparationScript,
        handlebarsVersion,
      };
    },
  },
};

function createCopyOfExample(parsedExample, handlebarsVersion) {
  return {
    template: parsedExample.template,
    partials: [...parsedExample.partials],
    input: parsedExample.input,
    output: parsedExample.output,
    preparationScript: parsedExample.preparationScript,
    handlebarsVersion,
  };
}
</script>

<style>
.workspace-header {
  padding: 1rem 1.4rem;
  background-color: var(--vp-c-bg-soft);
  margin-bottom: 0.5rem;
}

.version-chooser {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.version-chooser button {
  padding: 0.2rem 0.8rem;
  border-radius: 0.2rem;
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.workspace-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
}
</style>
