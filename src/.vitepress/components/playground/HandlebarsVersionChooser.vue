<template>
  <select id="handlebars-version-chooser" v-model="selected">
    <option disabled value="">Please select one</option>
    <option v-for="version in versions" :key="version" :value="version">
      {{ version }}
    </option>
  </select>
</template>

<script>
import { data as handlebars } from "./../../../handlebars.data.js";

export default {
  data() {
    return {
      versions: handlebars.versions.allVersions,
      selected: handlebars.versions.latest,
    };
  },
};
</script>

<style>
select {
  padding: 0.4rem 0.8rem;
  border-radius: 0.2rem;
  -webkit-appearance: revert;
}
</style>
