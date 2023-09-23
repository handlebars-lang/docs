<template>
  <div class="download-handlebars">
    <div class="download-links">
      <a :title="uncompressedTitle" class="uncompressed-download" :href="linkPrefix + uncompressedFilename">
        {{ label }}
      </a>
      <a :title="minifiedTitle" class="minified-download" :href="linkPrefix + minifiedFilename">minified </a>
    </div>
    <div class="description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { data as handlebars } from "./../../handlebars.data.js";

export default {
  props: {
    runtimeOnly: {
      type: Boolean,
      required: false,
      defaultValue: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    uncompressedTitle() {
      return "Download " + this.label;
    },
    minifiedTitle() {
      return "Download minified " + this.label;
    },
    label() {
      return this.$props.runtimeOnly
        ? `Handlebars ${this.version} (runtime only)`
        : `Handlebars ${this.version} (compiler + runtime)`;
    },
    uncompressedFilename() {
      return this.$props.runtimeOnly ? `handlebars.runtime-v${this.version}.js` : `handlebars-v${this.version}.js`;
    },
    minifiedFilename() {
      return this.$props.runtimeOnly
        ? `handlebars.runtime.min-v${this.version}.js`
        : `handlebars.min-v${this.version}.js`;
    },
    linkPrefix() {
      return "https://s3.amazonaws.com/builds.handlebarsjs.com/";
    },
    version() {
      return handlebars.versions.latest;
    },
  },
};
</script>

<style scoped>
.download-handlebars {
  border-radius: 0.2rem;
  border: 1px solid var(--vp-button-brand-bg);
  margin-top: 1rem;
  padding: 1rem;
}

.download-links {
  display: flex;
  gap: 1rem;
}

.minified-download,
.uncompressed-download {
  text-align: center;
  border-radius: 0.2rem;
  padding: 0 20px;
  line-height: 38px;
  text-decoration: none;
}

.minified-download:hover,
.uncompressed-download:hover {
  color: inherit;
  text-decoration: underline;
}

.uncompressed-download {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.minified-download {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.description:deep(p) {
  margin-bottom: 0;
}
</style>
