<template>
  <div>
    <input
      ref="inp"
      type="text"
      :value="value"
      @input="onInput"
      @keydown.enter="addToCources"
      v-focus
    />
    <button @click="addToCourses()">添加</button>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    addToCourses() {
      this.$emit("add-to-cources");
    },
    onInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>