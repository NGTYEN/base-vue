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
import helloMixin from '../api/helloMixin'
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

<style lang="scss" scoped>
</style>