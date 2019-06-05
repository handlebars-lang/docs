<template>
  <div class="handlebars-example">
    <router-link class="example-show-in-playground" :to="normalizedPath">
      Open in interactive playground!
    </router-link>
    <workspace :parsed-example="exampleData" :show-input-output="Boolean(showInputOutput)" />
  </div>
</template>
<script>
import Workspace from "../private-components/try-handlebars/Workspace.vue";

export default {
  components: { Workspace },
  props: {
    examplePage: { type: String, required: true },
    showInputOutput: { type: [Boolean, String], default: false }
  },
  computed: {
    exampleData() {
      const pageData = this.findPageByHtmlOrMarkdownPath();
      return pageData.frontmatter.parsedExample;
    },
    normalizedPath() {
      return this.$props.examplePage.replace(/\.(html|md)$/, "") + ".html";
    }
  },
  methods: {
    findPageByHtmlOrMarkdownPath() {
      const pageData = this.$site.pages.find(page => {
        return page.regularPath === this.normalizedPath;
      });
      if (pageData == null) {
        throw new Error(`Page ${this.normalizedPath} not found`);
      }
      return pageData;
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
}
</style>
