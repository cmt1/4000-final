import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sunrise from '@/components/Sunrise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      
      {
      path: '/Sunrise',
      name: 'Sunrise',
      component: Sunrise
      }
  ]
})
