<template>
  <div>
    <p v-if="courses.length === 0">没有任何内容</p>
    <div v-else :class="$style.red">
      <transition-group name="fade">
        <div
          v-for="item in courses"
          :key="item.name"
          :class="{ [$style.active]: selectedCourse === item.name }"
          @click="selectedCourse = item.name"
        >
          {{ item.name }}- {{ price(item.price, "$") }}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      default: function() {
          return []
      },
    },
  },
  data() {
    return {
      selectedCourse: "",
    };
  },
  created() {
    console.log(this.courses)
  },
  methods: {
      price(price, currency) {
          return currency + price
      }
  },
};
</script>

<style module scoped>
.active {
  background-color: #ccc;
}
.red {
  color: red;
}
</style>