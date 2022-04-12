<template>
  <div>
    <button v-if="!isLogin" @click="login">登录</button>
    <button v-else @click="loginOut">注销</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      window.isLogin = true;
      this.$router.addRoutes([
        {
          path: "/admin",
          name: "Admin",
          meta: { auth: true },
          component: () => import("@/views/Admin"),
          children: [
            {
              name: "Detail",
              path: "detail/:name",
              component: () => import("@/views/Detail"),
            },
          ],
        },
      ]);
      this.$router.push(this.$route.query.redirect);
    },
    loginOut() {
      window.isLogin = false;
      this.$router.push("/");
    },
  },
  computed: {
    isLogin() {
      return window.isLogin;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>