import Vue from 'vue'
import lesson from '@/view/lesson/lesson'
import class1 from '@/view/lesson/class/class'
import study from '@/view/study/study'
import find from '@/view/find/find'
import my from '@/view/my/my'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/lesson',
      name: 'lesson',
      component: lesson,
      children: [
        {
          path: 'class',
          component: class1
        },
        {
          path: '/',
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
      name: 'my',
      component: my
    },
    {
      path: '/',
      redirect: 'lesson'
    }
  ]
})
