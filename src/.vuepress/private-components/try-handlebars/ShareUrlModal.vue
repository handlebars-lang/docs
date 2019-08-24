<template>
  <Modal :show="show" @close="$emit('close')">
    <template v-slot:header
      >Share this example
    </template>
    <p>
      You can paste this URL into github issues to order to share your setup when filing bugs or questions
    </p>
    <hr />
    <input ref="urlInput" type="text" :value="urlForSharing" class="url-for-sharing" onfocus="this.select()" />
    <button @click="copyToClipboard">Copy to clipboard</button>
    <div v-show="successNotification" class="success-notification">{{ successNotification }}</div>
  </Modal>
</template>
<script lang="js">
import Modal from "../Modal.vue";
import Vue from 'vue'

export default {
  components: { Modal },
  props: {
    urlForSharing: { type: String, required: false }
  },
  data() {
    return {
      successNotification: null
    }
  },
  computed: {
    show() {
      return this.$props.urlForSharing != null;
    }
  },
  watch: {
    show() {
      Vue.nextTick(() => this.$refs.urlInput.select())
    }
  },
  methods: {
    copyToClipboard() {
      this.$refs.urlInput.select()
      document.execCommand('copy')
      this.notifySuccess("URL has been copied to clipboard")
    },
    notifySuccess(message) {
      this.$data.successNotification = message;
      setTimeout(() => this.successNotification = null, 2000);
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
</style>
