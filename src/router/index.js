import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import( '../page/activity.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
