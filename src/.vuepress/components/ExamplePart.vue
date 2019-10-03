<template>
  <div v-if="examplePartAsString != null" class="handlebars-example-part" @click="openInPlayground">
    <span class="title">{{ title }}</span>
    <router-link class="show-in-playground" :to="normalizedPath"> Click to try out</router-link>
    <highlighted-code class="code" :language="language" :value="examplePartAsString" />
  </div>
  <div v-else-if="exampleData == null" class="handlebars-example-part not-found">
    <header>Example {{ normalizedPath }} not found</header>
    <section>Please verify that the path is correct.</section>
  </div>
  <div v-else-if="show === 'partial'" class="handlebars-example-part not-found">
    <header>Partial "{{ name }}" not found</header>
    <section>Partial: {{ partialName }} not found in example {{ normalizedPath }}.</section>
  </div>
</template>
<script>
import HighlightedCode from "../private-components/try-handlebars/HighlightedCode";

const partToLanguage = {
  input: "json",
  preparationScript: "javascript",
  template: "handlebars",
  partial: "handlebars",
  output: "html"
};

export default {
  components: { HighlightedCode },
  props: {
    examplePage: { type: String, required: true },
    show: {
      type: String,
      required: true,
      validator: function(value) {
        // The value must match one of these strings
        return partToLanguage[value] != null;
      }
    },
    name: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    examplePartAsString() {
      if (this.$props.show === "partial") {
        return (
          this.exampleData.partials &&
          this.exampleData.partials.find(partial => partial.name === this.$props.name).content
        );
      }
      return this.exampleData[this.$props.show];
    },
    language() {
      return partToLanguage[this.$props.show];
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
    },
    title() {
      if (this.$props.show === "partial") {
        return "partial: " + this.$props.name;
      }
      return this.$props.show;
    }
  },
  methods: {
    openInPlayground() {
      this.$router.push(this.normalizedPath);
    }
  }
};
</script>
<style lang="stylus">
.handlebars-example-part {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: stretch;

    > .show-in-playground {
        position: absolute;
        z-index: 10;
        bottom: 0;
        right: $exampleWorkspaceDefaultMargin;
        color: gray;
        float: right;
        vertical-align: middle;
        font-size: 0.7rem;
        padding: 0.25rem;
        overflow: hidden;
        height: 0.8rem;
    }

    > .title {
      position: absolute;
      z-index: 10;
      top: 0;
      right: $exampleWorkspaceDefaultMargin;
      color: gray;
      float: right;
      vertical-align: middle;
      font-size: 0.7rem;
      padding: 0.25rem;
      overflow: hidden;
      height: 0.8rem;
    }


  > .code {
      width: 100%;
      margin: 0;
      padding-top: 2rem;
    }

    &:hover {
        > .code {
            box-shadow: inset 2px 2px 5px $baseColor;
        }

        > .show-in-playground {
            color: $baseColor;
            text-decoration: underline;
        }
    }

    &.not-found {
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
