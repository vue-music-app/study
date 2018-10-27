import Vue from 'vue'
import lesson from '@/view/lesson/lesson'
import class1 from '@/view/lesson/class/class'
import study from '@/view/study/study'
import find from '@/view/find/find'
import my from '@/view/my/my'
import Router from 'vue-router'
<<<<<<< HEAD
import cmpmy from '@/components/my/my'
=======
>>>>>>> 425d0bdfc74383ff3c2647ec1428cedb82d35974
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
<<<<<<< HEAD
      redirect: 'cmpmy'
    },
    {
      path: '/cmpmy',
      name: 'cmpmy',
      component: cmpmy
=======
      redirect: 'lesson'
>>>>>>> 425d0bdfc74383ff3c2647ec1428cedb82d35974
    }
  ]
})
