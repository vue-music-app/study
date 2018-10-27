import Vue from 'vue'
import Router from 'vue-router'
import cmpmy from '@/components/my/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'cmpmy'
    },
    {
      path: '/cmpmy',
      name: 'cmpmy',
      component: cmpmy
    }
  ]
})
