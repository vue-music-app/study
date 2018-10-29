import Vue from 'vue'
import lesson from '@/view/lesson/lesson'
import class1 from '@/view/lesson/class/class'
import study from '@/view/study/study'
import find from '@/view/find/find'
import my from '@/view/my/my'
import Balance from '@/view/my/balance/balance'
import Indent from '@/view/my/indent/indent'
import set from '@/view/my/set'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/lesson',
      component: lesson,
      children: [
        {
          path: 'class',
          component: class1
        },
        {
          path: '',
          redirect: 'class'
        }
      ]
    },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/my',
      component: my,
      children: [
        {
          path: 'balance',
          component: Balance
        },
        {
          path: 'indent',
          component: Indent
        },
        {
          path: 'set',
          component: set
        }
      ]
    },
    {
      path: '/',
      redirect: '/lesson'
    }
  ]
})
