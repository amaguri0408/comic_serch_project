import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fifty from '../views/Fifty.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fifty/:char',
    name: 'Fifty',
    component: Fifty
  },
]

const router = new VueRouter({
  routes
})

export default router
