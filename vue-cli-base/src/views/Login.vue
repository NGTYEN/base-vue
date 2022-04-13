<template>
  <div>
    <button v-if="!isLogin" @click="login">登录</button>
    <button v-else @click="loginOut">注销</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    login() {
      // window.isLogin = true;
      // 提交mutation变更状态
      // this.$store.commit('login')
      // 模块化后
      // this.$store.commit('user/login')
      //派发动作，触发actions
      // this.$store.dispatch('login', 'admin').then(() => {
      //
      // }
      // 模块化后
      // this.$store.dispatch('user/login', 'admin').then(() => {
      this['user/login']( 'admin').then(() => {
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
      }).catch(() => {
        alert('用户角色错误')
      })
    },
    loginOut() {
      // window.isLogin = false;
      this.$store.commit('user/logout')
      this.$router.push("/");
    },
    ...mapActions(['user/login'])
  },
  computed: {
    // isLogin() {
    //   // return window.isLogin;
    //   // return this.$store.state.isLogin
    //   //  模块化后
    //   return this.$store.state.user.isLogin
    // },
    ...mapState('user', ['isLogin'])
  },
};
</script>

<style lang="scss" scoped>
</style>
