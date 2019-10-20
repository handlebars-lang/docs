<template>
  <select v-model="selected">
    <option disabled value="">
      Please select one
    </option>
    <option v-for="version in versions" :key="version" :value="version">
      {{ version }}
    </option>
  </select>
</template>
<script>
export default {
  props: { value: { type: String, default: "" } },
  data() {
    return {
      versions: this.$handlebarsVersions.allVersions,
      selected: this.$props.value
    };
  },
  watch: {
    selected(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.$data.selected = newValue;
    }
  }
};
</script>
<style lang="stylus"></style>
