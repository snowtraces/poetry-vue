import Vue from 'vue'
import Router from 'vue-router'
import Layouts from '@/components/Layouts'
import List from '@/components/List'
import Single from '@/components/Single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layouts',
      component: Layouts
    },
    {
      path: '/search/:keyword/page/:page',
      name: 'List',
      component: List
    },
    {
      path: '/poetry/:id',
      name: 'Single',
      component: Single
    }
  ]
})
