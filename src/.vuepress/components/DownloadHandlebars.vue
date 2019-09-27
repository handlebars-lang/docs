<template>
  <a :href="href">
    <slot />
  </a>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    const version = this.$handlebarsVersions.latest;
    return {
      urlForType: {
        full: `https://unpkg.com/handlebars@${version}/dist/handlebars.min.js`,
        runtime: `https://unpkg.com/handlebars@${version}/dist/handlebars-runtime.min.js`
      }
    };
  },
  computed: {
    href() {
      const url = this.urlForType[this.$props.type];
      if (url == null) {
        throw new Error("Unkown url type for DownloadHandlebars: " + this.$props.type);
      }
      return url;
    }
  }
};
</script>
<style></style>
