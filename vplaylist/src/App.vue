<template>
  <div id="app">
    <AppHeader v-bind:navs="navs" v-bind:logo="logo"></AppHeader>
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
      logo: 
        {
          path: require('@/assets/images/logo.png'),
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
<style scoped>
#app{
  margin-top: 60px
}
</style>

