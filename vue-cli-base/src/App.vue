<template>
  <div>
    <message ref="msgSuccess" class="success">
      <template v-slot:title>恭喜</template>
      <template>新增成功！</template>
    </message>
    <message ref="msgWarning" class="warning">
      <template v-slot:title>警告</template>
      <template>请输入课程名称！</template>
    </message>
    <course-add v-model="course" @add-to-cources="addToCourses"></course-add>
    <course-list :courses="courses"></course-list>
  </div>
</template>

<script>
import Message from "@/components/message.vue";
import CourseList from "@/components/CourseList.vue";
import CourseAdd from "@/components/CourseAdd.vue";
import { getCourses } from "@/api/cource.js";

export default {
  name: "App",
  components: {
    Message,
    CourseList,
    CourseAdd,
  },
  data() {
    return {
      title: "开课吧购物车",
      course: "",
      courses: [],
      totalCount: 0,
      isShowSuccess: false,
      isShowWaining: false,
      price: 0,
    };
  },
  async created() {
    const courses = await getCourses();
    this.courses = courses;
    this.batchUpdate();
  },
  methods: {
    batchUpdate() {
      this.courses.forEach((course) => {
        Object.assign(course, { price: this.price });
      });
    },
    addToCourses() {
      if (this.course) {
        this.courses.push({ name: this.course });
        this.batchUpdate();
        this.course = "";
        this.$refs.msgSuccess.toggle();
      } else {
        this.$refs.msgWarning.toggle();
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.success {
  background: #4fc08d;
  /* border: 1px solid #42b983; */
  width: 400px;
}

.warning {
  background: #d151a6;
  /* border: 1px solid #d44c80; */
  width: 400px;
}
</style>
