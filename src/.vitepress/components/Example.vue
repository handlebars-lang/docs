<template>
  <div v-if="examplePartAsString !== null" class="handlebars-example">
    <span class="title">{{ title }}</span>
    <a class="example-try-out-link" :href="normalizedPath">
      <span>Click to try out</span>
      <TryoutIcon />
    </a>
    <highlighted-code :language="language" :value="examplePartAsString" />
  </div>
  <div v-else-if="exampleData === null" class="handlebars-example not-found">
    <header>Example "{{ normalizedPath }}" not found</header>
    <section>Please verify that the path is correct.</section>
  </div>
  <div v-else-if="show === 'partial'" class="handlebars-example not-found">
    <section>Partial "{{ name }}" not found in example "{{ normalizedPath }}"</section>
  </div>
</template>

<script>
import { data as examples } from "./../../examples.data.js";
import HighlightedCode from "./playground/HighlightedCode.vue";
import TryoutIcon from "./TryoutIcon.vue";
import { parseExample } from "./playground/lib/utils.js";

const partToLanguage = {
  input: "json",
  preparationScript: "javascript",
  template: "handlebars",
  partial: "handlebars",
  output: "html",
  error: "text",
};

export default {
  components: { HighlightedCode, TryoutIcon },
  props: {
    examplePage: { type: String, required: true },
    show: {
      type: String,
      required: true,
      validator: function (value) {
        // The value must match one of these strings
        return partToLanguage[value] !== null;
      },
    },
    name: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      exampleData: undefined,
    };
  },
  created() {
    this.parseFrontMatter();
  },
  computed: {
    examplePartAsString() {
      switch (this.$props.show) {
        case "partial":
          return this.referencedPartial && this.referencedPartial.content;
        case "error":
          return this.exampleData && this.exampleData.error && this.exampleData.error.message;
        default:
          return this.exampleData && this.exampleData[this.$props.show];
      }
    },
    referencedPartial() {
      return (
        this.exampleData &&
        this.exampleData.partials &&
        this.exampleData.partials.find((partial) => partial.name === this.$props.name)
      );
    },
    language() {
      return partToLanguage[this.$props.show];
    },
    normalizedPath() {
      return this.$props.examplePage.replace(/\.(html|md)$/, "") + ".html";
    },
    title() {
      if (this.$props.show === "partial") {
        return "partial: " + this.$props.name;
      }
      return this.$props.show;
    },
  },
  methods: {
    async parseFrontMatter() {
      const examplePage = examples.find((page) => page.url === this.normalizedPath);
      const parsedExample = await parseExample(examplePage?.frontmatter?.example);
      this.exampleData = parsedExample
        ? {
            ...parsedExample,
            preparationScript: parsedExample?.preparationScript || "",
          }
        : null;
    },
  },
};
</script>
<style scoped>
.handlebars-example {
  position: relative;
  display: flex;
  align-items: stretch;
  min-height: 4rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  color: var(--vp-c-text-1);
  background-color: var(--vp-code-block-bg);
}
.handlebars-example.not-found {
  display: block;
  padding: 1rem;
  background-color: var(--vp-c-danger-3);
}
.handlebars-example .title {
  position: absolute;
  bottom: 0.4rem;
  right: 0.5rem;
  font-size: small;
  color: var(--vp-code-lang-color);
}

.example-try-out-link {
  position: absolute;
  display: flex;
  gap: 0.1rem;
  font-size: small;
  line-height: normal;
  top: 0.3rem;
  right: 0.2rem;
}
</style>
