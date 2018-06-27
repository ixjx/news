import Vue from 'vue'
import Router from 'vue-router'
import Baidu from '@/components/Baidu'
import Sina from '@/components/Sina'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'news',
      component: Baidu,Sina
    }
  ]
})
