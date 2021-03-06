import Vue from 'vue'
import Router from 'vue-router'
import List from '../views/List'
import Detail from '../views/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
