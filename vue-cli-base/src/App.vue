<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">About</router-link>
    </div>
    <span v-if="isLogin">{{ welcome }}<button>注销</button></span>
    <keep-alive include="adminPage">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('user',['isLogin']),
    ...mapGetters('user', ['welcome'])
  },
}
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
