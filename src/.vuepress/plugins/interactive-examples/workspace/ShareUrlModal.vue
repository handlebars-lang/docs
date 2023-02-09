<template>
  <Modal :show="show" @close="$emit('close')">
    <template v-slot:header>Share this example </template>
    <p>
      You can paste this URL into github issues to order to share your setup when filing bugs or questions
    </p>
    <hr />
    <input ref="urlInput" type="text" :value="urlForSharing" class="url-for-sharing" onfocus="this.select()" />
    <button @click="copyToClipboard">Copy to clipboard</button>
    <div class="share">
      <button @click="reportSecurityIssue">Report a security issue</button>
      <button @click="askQuestion">Ask question at github</button>
      <button @click="fileBug">File bug at github</button>
    </div>
    <div v-show="successNotification" class="success-notification">{{ successNotification }}</div>
  </Modal>
</template>
<script lang="js">
  import Modal from "../../../private-components/Modal.vue";
  import Vue from "vue";

  export default {
    components: { Modal },
    props: {
      urlForSharing: { type: String, required: false, default: null }
    },
    data() {
      return {
        successNotification: null
      };
    },
    computed: {
      show() {
        return this.$props.urlForSharing != null;
      }
    },
    watch: {
      show() {
        Vue.nextTick(() => this.$refs.urlInput.select());
      }
    },
    methods: {
      copyToClipboard() {
        this.$refs.urlInput.select();
        document.execCommand("copy");
        this.notifySuccess("URL has been copied to clipboard");
      },
      notifySuccess(message) {
        this.$data.successNotification = message;
        setTimeout(() => this.successNotification = null, 2000);
      },

      askQuestion() {
        const issueBody = `
* [ ] This is NOT a security issues!! If it is, please file a report at https://www.npmjs.com/advisories/report?package=handlebars**

# Example link

${this.$props.urlForSharing}

# Question

`;
        document.location.href = `https://github.com/handlebars-lang/handlebars.js/issues/new?body=${encodeURIComponent(issueBody)}`;
      },
      fileBug() {
        const issueBody = `
* [ ] This is NOT a security issues!! If it is, please file a report at https://www.npmjs.com/advisories/report?package=handlebars**

# Bug description

# Example link

${this.$props.urlForSharing}

# Expected outcome

# Actual outcome`;
        document.location.href = `https://github.com/handlebars-lang/handlebars.js/issues/new?body=${encodeURIComponent(issueBody)}`;
      },
      reportSecurityIssue() {
        const body = `

--Insert description here--

Here is a URL to verify the issue:

${this.$props.urlForSharing}

`;
        document.location.href = `mailto:security@npmjs.com?body=${encodeURIComponent(body)}`;
      }
    }
  };
</script>
<style scoped lang="stylus">
.url-for-sharing {
    width: 100%;
}

.success-notification {
    color: green;
    border: 1px solid green;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

.share {
    border: 1px dashed $baseColor;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-top: 0.5rem;
}
</style>
