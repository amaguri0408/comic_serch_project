import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fifty from '../views/Fifty.vue'
import Search from '../views/Search.vue'


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
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
]

const router = new VueRouter({
  routes
})

export default router
