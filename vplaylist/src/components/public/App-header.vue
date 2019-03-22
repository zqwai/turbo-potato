<template>
  <header class="header">
    <img :src="logo.path" v-bind:alt="logo.name" v-bind:title="logo.name">
    <ul>
      <li v-for="(nav, index) in navs" :key="index">
        <router-link :to='nav.path'>{{nav.name}}</router-link>
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
    logo: {
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
li  
  display inline-block
</style>

