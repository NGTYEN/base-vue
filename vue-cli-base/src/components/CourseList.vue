<template>
  <div>
    <p v-if="courses.length === 0">没有任何内容</p>
    <div v-else class="cources-list">
      <transition-group name="fade">
        <div
          v-for="item in courses"
          :key="item.name"
          :class="{ active: selectedCource === item.name }"
          @click="selectedCource = item.name"
        >
          {{ item.name }}- {{ price(item.price, "$") }}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCource: "",
    };
  },
  props: {
    courses: {
      type: Array,
      default: function() {
          return []
      },
    },
  },
  methods: {
      price(price, currency) {
          return currency + price
      }
  },
};
</script>

<style scoped>
.active {
  background-color: #ccc;
}
</style>