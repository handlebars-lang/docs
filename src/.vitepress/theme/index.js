// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import Flex from "../components/Flex.vue";
import Example from "../components/Example.vue";
import PlaygroundLayout from "../components/PlaygroundLayout.vue";
import "./style.css";

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  async enhanceApp({ app, router, siteData }) {
    // https://vitepress.dev/guide/custom-theme#theme-interface
    app.component("playground", PlaygroundLayout);
    app.component("Flex", Flex);
    app.component("Example", Example);
  },
};
