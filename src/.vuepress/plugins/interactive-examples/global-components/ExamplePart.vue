<template>
  <div
    v-if="examplePartAsString != null"
    class="handlebars-example-part"
    title="Click to try out"
    @click="openInPlayground"
  >
    <span class="title">{{ title }}</span>
    <router-link class="show-in-playground" :to="normalizedPath">
      <TryoutIcon />
    </router-link>
    <highlighted-code class="example-part-code" :language="language" :value="examplePartAsString" />
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
import HighlightedCode from "../workspace/HighlightedCode";
import TryoutIcon from "../workspace/TryoutIcon";

const partToLanguage = {
  input: "json",
  preparationScript: "javascript",
  template: "handlebars",
  partial: "handlebars",
  output: "html",
  error: "text"
};

export default {
  components: { HighlightedCode, TryoutIcon },
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
      switch (this.$props.show) {
        case "partial":
          return this.referencedPartial.content;
        case "error":
          return this.exampleData.error && this.exampleData.error.message;
        default:
          return this.exampleData[this.$props.show];
      }
    },
    referencedPartial() {
      return this.exampleData.partials && this.exampleData.partials.find(partial => partial.name === this.$props.name);
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

codebox-label() {
    position: absolute;
    z-index: 3;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    transition: color 2 *$hoverTransitionDuration;
}

$hoverTransitionDuration = 0.25s;

.handlebars-example-part {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: stretch;
    margin-bottom: 0.5rem;
    border-radius: 6px;
    background-color: #000;
    transition: background-color $hoverTransitionDuration, box-shadow $hoverTransitionDuration;


    @media (max-width: 419px) {
        margin: 0.5rem -1.5rem;
        border-radius: 0;
    }


    > .show-in-playground {
        codebox-label();
        top: 0.25rem;
        right: 0.25rem;
    }

    > .title {
        codebox-label();
        top: 0.8em;
        right: 2.5em;
    }


    > .example-part-code {
        width: 100%;
        margin: 0;
        padding-top: 1.5rem;
        border-radius: 6px;
        background: transparent;
    }

    &:hover {
        box-shadow: $baseColor 0 0 10px inset;
        background-color: darken($baseColor, 90%);

        > .show-in-playground, > .title {
            color: $baseColor;
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
