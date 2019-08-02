<template>
  <div v-if="exampleData" class="handlebars-example">
    <router-link class="example-show-in-playground" :to="normalizedPath">
      Open in interactive playground!
    </router-link>
    <workspace
      :parsed-example="exampleData"
      :show-input-output="showInputOutput"
      :hide-preparation-script="hidePreparationScript"
    />
  </div>
  <div v-else class="handlebars-example error">
    <header>Error while parsing example "{{ normalizedPath }}":</header>
    <section>{{ error.stack }}</section>
  </div>
</template>
<script>
import Workspace from "../private-components/try-handlebars/Workspace.vue";

export default {
  components: { Workspace },
  props: {
    examplePage: { type: String, required: true },
    showInputOutput: { type: [Boolean], default: false },
    hidePreparationScript: { type: [Boolean], default: false }
  },
  computed: {
    error() {
      if (this.examplePageData == null) {
        return new Error(`Page "${this.normalizedPath}" not found`);
      }
      return this.examplePageData.frontmatter.errorWhileParsingExample;
    },
    exampleData() {
      return this.examplePageData && this.examplePageData.frontmatter.parsedExample;
    },
    examplePageData() {
      return this.$site.pages.find(page => {
        return page.regularPath === this.normalizedPath;
      });
    },
    normalizedPath() {
      return this.$props.examplePage.replace(/\.(html|md)$/, "") + ".html";
    }
  }
};
</script>
<style lang="stylus">
.handlebars-example {
    position: relative;

    > .example-show-in-playground {
        position: absolute;
        z-index: 10;
        top: $exampleWorkspaceDefaultMargin;
        left: $exampleWorkspaceDefaultMargin;
        color: $baseColor;
        vertical-align: middle;
        text-align: center;
        font-size: 0.8rem;
        border: 0.25rem solid $baseColor;
        padding: 0.25rem;
    }

  &.error {
    color: darkred;
    border: 1px solid darkred;

    > header {
      font-weight: bold;
      border-bottom: 1px dashed red;
      padding: 0.25rem 0.5rem;
    }

    > section {
      padding: 0.25rem 0.5rem;
      white-space pre;
      overflow: auto
      line-height: 1.25em;
    }
  }
}
</style>
