<template>
  <div id="app">
    <AppHeader v-bind:navs="navs" v-bind:urlHome="urlHome"></AppHeader>
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
// public components
import AppHeader from '@/components/public/App-header'
import AppFooter from '@/components/public/App-footer'

export default {
  name: 'App',
  components:{
    AppHeader,
    AppFooter
  },
  data(){
    return {
      // routers: routers
      urlHome: 
        {
          path: '/',
          name: 'vue demo'
        },
      navs:[
        {
          path:'/',
          name:'首页',
        },
        {
          path:'/addblog',
          name:'添加博客',
        }
      ]
    }
  },
}
</script>
<style lang="stylus">
#app
  width 100%
</style>

