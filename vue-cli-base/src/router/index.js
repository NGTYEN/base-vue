import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  // {
  //   path: '/admin',
  //   name: 'Admin',
  //   meta: { auth: true },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/Admin.vue'),
  //   children: [
  //     {
  //       name: 'Detail',
  //       path: 'detail/:name',
  //       component: () => import('@/views/Detail.vue')
  //     }
  //   ],
  //   // beforeEnter(to, from, next){
  //   //   if(window.isLogin) {
  //   //     next()
  //   //   } else {
  //   //     next('/login?redirect='+to.fullPath)
  //   //   }
  //   // }
  // },
  {
    path: '/detail/:name',
    component: () => import ('@/views/Detail.vue')
  }
  ,
  {
    path: '*',
    component: () => import ('@/views/404.vue')
  }
]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.meta.auth) {
//     if(window.isLogin) {
//       next()
//     } else {
//       next('/login?redirect='+to.fullPath)
//     }
//   } else {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  // if(window.isLogin) {
  //   if(to.path === '/login'){
  //     next('/')
  //   } else{
  //     next()
  //   }
  // } else {
  //   if(to.path === '/login'){
  //     next()
  //   } else{
  //     next('/login?redirect='+to.fullPath)
  //   }
  // }
  if(store.state.user.isLogin) {
    if(to.path === '/login'){
      next('/')
    } else{
      next()
    }
  } else {
    if(to.path === '/login'){
      next()
    } else{
      next('/login?redirect='+to.fullPath)
    }
  }
})

export default router

