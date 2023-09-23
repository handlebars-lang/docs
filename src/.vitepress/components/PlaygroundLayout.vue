<template>
  <div v-if="parsedExampleWithEnsuredPreparationScript !== undefined">
    <workspace
      :parsed-example="parsedExampleWithEnsuredPreparationScript"
      :interactive="true"
      :show-input-output="true"
    />
  </div>
</template>

<script>
import Workspace from "./playground/Workspace.vue";
import { deindent, parseExample } from "./playground/lib/utils.js";

export default {
  components: { Workspace },
  data() {
    return {
      parsedExampleWithEnsuredPreparationScript: undefined,
    };
  },
  created() {
    this.parseFrontMatter();
  },
  methods: {
    async parseFrontMatter() {
      const parsedExample = await parseExample(this.$frontmatter.example);
      this.parsedExampleWithEnsuredPreparationScript = {
        ...parsedExample,
        preparationScript: parsedExample.preparationScript || this.emptyPreparationScript(),
      };
    },
    emptyPreparationScript() {
      return deindent`
      // Handlebars.registerHelper('loud', function(string) {
      //    return string.toUpperCase()
      // });
      `;
    },
  },
};
</script>
