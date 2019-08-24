<template>
  <div class="modal-container">
    <transition name="fade">
      <div v-show="show" class="modal-background"></div>
    </transition>
    <transition name="fade">
      <div v-show="show" class="modal-content">
        <header>
          <slot name="header"></slot>
          <button class="modal-close-x" @click="close">x</button>
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
<script lang="js">
export default {
  components: {},
  props: {
    show: { type: Boolean, required: true }
  },
  computed: {},
  watch: {
    show(newValue) {
      if (newValue === true) {
        this.$closeKeyListener = function(e) {
          if (e.key === 'Escape') {
            this.close()
            e.preventDefault()
          }
        };
        this.$closeKeyListener = this.$closeKeyListener.bind(this)
        window.addEventListener('keydown',this.$closeKeyListener);
      } else {
        window.removeEventListener('keydown',this.$closeKeyListener);
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
};
</script>
<style scoped lang="stylus">


$modalBorderColor = darken(white, 10%);
$modalFooterColor = darken(white, 10%);


.modal-background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.2;
    z-index: 1000;

    &.fade-enter-active, &.fade-leave-active {
        transition: opacity 0.2s;
        opacity: 0.2;
    }

    &.fade-enter, &.fade-leave-to
    {
        opacity: 0;
    }
}

.modal-content {
    position: fixed;
    top: 20%;
    bottom: 20%;
    left: 20%;
    right: 20%;
    background-color: white;
    z-index: 1000;
    box-shadow: 5px 5px 30px black;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    border: 2px solid $baseColor;

    header {
        background-color: $baseColor;
        font-size: 1.5rem;
        padding: 0.5rem;
        flex: 0 0 auto;

        .modal-close-x {
            float: right;
            background: none;
            border: none;
            font-size: 1.2rem;
            color: white;
            font-weight: bold;
            margin: 1px;
            padding: 0px 5px;

            &:hover {
                border: 1px dashed white;
                margin: 0px;
            }
        }
    }

    main {
        flex: 1 0 50%;
        overflow: auto;
        padding: 0.5rem
    }

    footer {
        background-color: $modalFooterColor;
        height: 2rem;
        padding: 0.5rem;
        flex: 0 0 auto;
    }

    &.fade-enter-active, &.fade-leave-active {
        transition: opacity 0.2s;
    }

    &.fade-enter, &.fade-leave-to
    {
        opacity: 0;
    }
}
</style>
