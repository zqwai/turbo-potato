<template>
  <header class="header">
    <!-- <a :href="urlHome.path" class="image-logo"></a> -->
    <router-link :to='urlHome.path' class="image-logo">></router-link>
    <!-- <img :src="logo.path" v-bind:alt="logo.name" v-bind:title="logo.name"> -->
    <ul>
      <li v-for="(nav, index) in navs" :key="index">
        <router-link :to='nav.path' exact>{{nav.name}}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Index',
  props:{
    navs: {
      type: Array,
      required: true,
    },
    urlHome: {
      type: Object,
      required: true,
    }
  },
  // ['navs','logo'],
  data () {
    return {
      
    }
  },
}
</script>
<style lang="stylus" scoped>
.header
  display flex
  width 100%
  height 64px
  background-color #ff6347
  padding 16px 
  line-height 32px
  ul
    flex 1  
    margin 0
    text-align right 
    li  
      display inline-block
      .router-link-active
        background-color rgba(255,255,255,.3)
        color #fff
      a
        display inline-block
        color #fff
        padding 0 .5rem
        font-size 1.4rem
        border-radius .3rem
      
      a.active,
      a:hover
        background-color rgba(255,255,255,.2)
      

.image-logo
  z-index 4
  position relative
  display inline-block
  background-size 75px 32px
  background-repeat no-repeat
  background-position center center
  background-color white
  -webkit-mask-box-image url(./../../assets/images/logo.png)
  mask-image url(./../../assets/images/logo.png)
  mask-size contain
  width 75px
  height 32px
</style>