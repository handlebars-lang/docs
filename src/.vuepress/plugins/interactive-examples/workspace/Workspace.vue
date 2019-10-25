<template>
  <div class="workspace">
    <ExportYamlModal :yaml="exportedYaml" @close="deleteExportedYaml"></ExportYamlModal>
    <ShareUrlModal :url-for-sharing="urlForSharing" @close="deleteUrlForSharing"></ShareUrlModal>
    <div v-if="interactive" class="workspace-header">
      <div class="version-chooser">
        Handlebars:
        <handlebars-version-chooser v-model="currentExample.handlebarsVersion" @input="executeExample" />
        <button @click="addPartial">
          Add partial
        </button>
        <button @click="copyAsYaml">
          Copy as YAML
        </button>
        <button @click="share">
          Share (Experimental)
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
    <div v-if="currentExample.preparationScript && !hidePreparationScript" class="workspace-row">
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
        :interactive="interactive"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import WorkspaceElement from "./WorkspaceElement.vue";
import WorkspaceError from "./WorkspaceError.vue";
import HandlebarsVersionChooser from "./HandlebarsVersionChooser.vue";
import { serializeToYaml } from "../lib/example-serializer";
import ExportYamlModal from "./ExportYamlModal";
import { createSharedUrl, loadFromSharedUrl } from "./share-utils";
import ShareUrlModal from "./ShareUrlModal";

export default {
  components: { ShareUrlModal, WorkspaceElement, WorkspaceError, HandlebarsVersionChooser, ExportYamlModal },
  props: {
    parsedExample: { type: Object, required: true },
    interactive: { type: Boolean, default: false },
    showInputOutput: { type: Boolean, default: false },
    hidePreparationScript: { type: Boolean, default: false }
  },
  data() {
    let parsedExample = this.$props.parsedExample;
    return {
      currentExample: createCopyOfExample(this.$props.parsedExample, this.$handlebarsVersions.latest),
      currentError: parsedExample.error || null,
      createdPartialCounter: 0,
      exportedYaml: null,
      urlForSharing: null
    };
  },
  mounted() {
    import("../lib/in-browser-example-executor/client").then(module => {
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
        content: ""
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
      Vue.nextTick(async () => {
        try {
          this.currentExample.output = await this.$executeExample(this.currentExample);
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
      }
      this.executeExample();
    }
  }
};

function createCopyOfExample(parsedExample, handlebarsVersion) {
  return {
    template: parsedExample.template,
    partials: [...parsedExample.partials],
    input: parsedExample.input,
    output: parsedExample.output,
    preparationScript: parsedExample.preparationScript,
    handlebarsVersion
  };
}
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
