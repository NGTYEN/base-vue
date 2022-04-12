<template>
  <div>
    <p v-if="courses.length === 0">没有任何内容</p>
    <div v-else :class="$style.red">
      <transition-group name="fade">
        <div
          v-for="item in courses"
          :key="item.name"
          :class="{ [$style.active]: selectedCourse === item.name }"
          @click="onClick(item)"
        >
        {{ item.name }}- {{ price(item.price, "$") }}
          <!-- <router-link :to="`admin/detail/${item.name}`">
            {{ item.name }}- {{ price(item.price, "$") }}
          </router-link> -->
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
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      selectedCourse: "",
    };
  },
  methods: {
    price(price, currency) {
      return currency + price;
    },
    onClick(item) {
      this.selectedCourse = item.name
      // this.$router.push({path: `/admin/detail/${item.name}`})
      this.$router.push(
        {
          name: 'Detail',
          params: { name: item.name }
        }
      )
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