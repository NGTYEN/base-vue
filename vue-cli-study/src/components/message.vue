<template>
  <div>
    <transition name="fade">
      <div v-if="show" class="message-box">
        <strong><slot name="title" title="来自message的title"></slot></strong>
        <slot></slot>
        <span class="message-box-close" @click="toggle">X</span>
      </div>
    </transition>
  </div>
</template>

<script>
import helloMixin from "../api/helloMixin";
export default {
  mixins: [helloMixin],
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    // this.$bus.$on("message-close", () => {
    //   this.toggle;
    // });
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.message-box {
  padding: 10px 20px;
  width: 300px;
}

.message-box-close {
  float: right;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>