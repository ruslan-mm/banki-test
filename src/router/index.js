import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '@/components/Catalog.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Catalog
  },
  {
    path: '*',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
