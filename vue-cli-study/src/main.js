import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted(el) {
      el.focus()
  }
})
const role = 'admin'
Vue.directive('permission', {
  inserted(el, padding) {
      if (role !== padding.value) {
          el.parentElement.removeChild(el)
      }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
