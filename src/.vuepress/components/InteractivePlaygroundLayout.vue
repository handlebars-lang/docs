<template>
  <div>
    <Layout>
      <template v-slot:page-top>
        <div class="try-handlebars">
          <workspace
            :parsed-example="parsedExampleWithEnsuredPreparationScript"
            :interactive="true"
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
import { deindent } from "../private-components/utils";

export default {
  components: { Layout, Workspace },
  data() {
    return {
      nonInteractiveForPrerendering: true
    };
  },
  computed: {
    parsedExampleWithEnsuredPreparationScript() {
      return {
        ...this.$frontmatter.parsedExample,
        preparationScript: this.$frontmatter.parsedExample.preparationScript || this.emptyPreparationScript()
      };
    }
  },
  mounted() {
    this.nonInteractiveForPrerendering = false;
  },
  methods: {
    emptyPreparationScript() {
      return deindent`
      // Handlebars.registerHelper('loud', function(string) {
      //    return string.toUpperCase()
      // });
      `;
    }
  }
};
</script>
<style lang="stylus">
.try-handlebars {
    margin-top: $navbarHeight;
}
</style>
