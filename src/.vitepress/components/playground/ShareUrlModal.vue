<template>
  <Modal :show="show" @close="$emit('close')">
    <template v-slot:header>Share this example </template>
    <p>You can paste this URL into GitHub issues in order to share your setup when filing bugs or questions.</p>
    <div class="url-for-sharing">
      <input ref="urlInput" type="text" :value="urlForSharing" onfocus="this.select()" />
      <button @click="copyToClipboard">Copy to clipboard</button>
    </div>
    <div v-show="successNotification" class="url-shared-info">{{ successNotification }}</div>
    <div class="share">
      <a href="https://github.com/handlebars-lang/handlebars.js/security/advisories/new" target="_blank"
        >Report a security issue</a
      >
      <a href="https://github.com/handlebars-lang/handlebars.js/discussions/new/choose">Ask a question on GitHub</a>
      <a href="https://github.com/handlebars-lang/handlebars.js/issues/new">File a bug on GitHub</a>
    </div>
  </Modal>
</template>

<script>
import { nextTick } from "vue";
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  props: {
    urlForSharing: { type: String, required: false, default: null },
  },
  data() {
    return {
      successNotification: null,
    };
  },
  computed: {
    show() {
      return this.$props.urlForSharing != null;
    },
  },
  watch: {
    show() {
      nextTick(() => this.$refs.urlInput.select());
    },
  },
  methods: {
    copyToClipboard() {
      this.$refs.urlInput.select();
      document.execCommand("copy");
      this.notifySuccess("URL has been copied to clipboard!");
    },
    notifySuccess(message) {
      this.$data.successNotification = message;
      setTimeout(() => (this.successNotification = null), 2000);
    },
  },
};
</script>

<style scoped>
.url-for-sharing {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.url-for-sharing input {
  width: 100%;
  padding: 0.2rem 0.6rem;
  border: 1px solid var(--vp-local-search-result-border);
  border-radius: 3px;
}
.url-for-sharing button {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}
.url-shared-info {
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border-color: var(--vp-custom-block-info-border);
  color: var(--vp-custom-block-info-text);
  background-color: var(--vp-custom-block-info-bg);
  border-radius: 6px;
}

.share {
  display: flex;
  gap: 0.6rem;
  margin-top: 2rem;
}
.share a {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

a,
button {
  font-size: small;
  line-height: normal;
  flex-shrink: 0;
  padding: 0.4rem 0.8rem;
  border-radius: 0.2rem;
}
</style>
