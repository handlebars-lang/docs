<template>
  <div class="modal-container">
    <transition name="fade">
      <div v-show="show" class="modal-background"></div>
    </transition>
    <transition name="fade">
      <div v-show="show" class="modal-content">
        <header>
          <slot name="header"></slot>
          <button class="modal-close-x" @click="close">⨯</button>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
          <button @click="close">Close</button>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    show: { type: Boolean, required: true },
  },
  computed: {},
  watch: {
    show(newValue) {
      if (newValue === true) {
        this.$closeKeyListener = function (e) {
          if (e.key === "Escape") {
            this.close();
            e.preventDefault();
          }
        };
        this.$closeKeyListener = this.$closeKeyListener.bind(this);
        window.addEventListener("keydown", this.$closeKeyListener);
      } else {
        window.removeEventListener("keydown", this.$closeKeyListener);
      }
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  inset: 0;
  background-color: var(--vp-backdrop-bg-color);
  z-index: 100;
}
.modal-background.fade-enter-active,
.modal-background.fade-leave-active {
  transition: opacity 0.2s;
  opacity: 0.2;
}

.modal-background.fade-enter,
.modal-background.fade-leave-to {
  opacity: 0;
}

.modal-content {
  position: fixed;
  inset: 20%;
  display: flex;
  gap: 1rem;
  background-color: var(--vp-local-search-bg);
  z-index: 200;
  border-radius: 6px;
  flex-direction: column;
  align-content: stretch;
  padding: 1rem;
}
.modal-content header {
  font-size: 1.4rem;
  padding: 0.5rem;
  flex: 0 0 auto;
}
.modal-content main {
  flex: 1 0 50%;
  overflow: auto;
  padding: 0.5rem;
}
.modal-content footer {
  height: 2rem;
  padding: 0.5rem;
  flex: 0 0 auto;
  border-top: 1px solid var(--vp-c-divider);
  text-align: right;
}

.modal-close-x {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1.6rem;
  padding: 1rem;
}
</style>
