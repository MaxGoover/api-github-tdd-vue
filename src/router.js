import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      component: () => import('@/views/UserView'),
      path: '/'
    }
  ]
})
