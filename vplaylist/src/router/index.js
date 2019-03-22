import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddBlog from '@/components/AddBlog'
import Err404 from '@/components/public/404'

Vue.use(Router)

export const routers = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/addblog',
    name: 'addblog',
    component: AddBlog
  },
  {
    path: '/404',
    name: '404',
    component: Err404
  },
  {
    path: '*', 
    redirect: '/404',
  }
]

export default new Router({
  mode: 'history',
  routes: routers,
  
})
