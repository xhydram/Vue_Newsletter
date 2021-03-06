import Vue from 'vue'
import Router from 'vue-router'
import AllCategories from '@/views/AllCategories.vue'
import About from '@/views/About.vue'
import Categorie from '@/views/Categorie.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: AllCategories
    },

    {
      path: '/about',
      component: About
    },

    {
      path: '/categorie/:slug',
      component: Categorie
    }

  ]
})
