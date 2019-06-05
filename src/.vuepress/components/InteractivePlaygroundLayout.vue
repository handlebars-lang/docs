<template>
  <div>
    <Layout>
      <template v-slot:page-top>
        <div class="try-handlebars">
          <workspace
            :parsed-example="$frontmatter.parsedExample"
            :interactive="interactive"
            :show-input-output="true"
          />
        </div>
      </template>
    </Layout>
  </div>
</template>
<script>
import Layout from "@theme/layouts/Layout.vue";
import Workspace from "../private-components/try-handlebars/Workspace.vue";

export default {
  components: { Layout, Workspace },
  data() {
    return {
      interactive: false
    };
  },
  computed: {},
  mounted() {
    this.interactive = true;
  }
};
</script>
<style lang="stylus">
.try-handlebars {
    margin-top: $navbarHeight;
}
</style>
