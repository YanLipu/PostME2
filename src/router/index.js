import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Atividades from '../views/Atividades'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/atividades',
    name: 'atividades',
    component: Atividades
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
