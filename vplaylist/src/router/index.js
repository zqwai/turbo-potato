import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import ShowBlogs from '@/components/ShowBlogs'
import SingleBlogs from '@/components/SingleBlogs'
import AddBlog from '@/components/AddBlog'
import EditBlog from '@/components/EditBlog'
import Err404 from '@/components/public/404'

Vue.use(Router)

export const routers = [
  {
    path: '/',
    name: 'ShowBlogs',
    component: ShowBlogs,
  },
  {
    path: '/blog/:id',
    name: 'SingleBlogs',
    component: SingleBlogs,
  },
  {
    path: '/addblog',
    name: 'addblog',
    component: AddBlog
  },
  {
    path: '/edit/:id',
    name: 'editblog',
    component: EditBlog
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
