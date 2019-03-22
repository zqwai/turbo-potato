<template>
  <footer class="footer">
    <p @click="showAnthor">
      {{copyright}}
      <span v-show="anthorshow">{{anthor}}</span>
    </p>
    
  </footer>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      copyright: 'copyright 2019',
      anthor: '- 气味视界',
      anthorshow: false,
    }
  },
  methods:{
    showAnthor(){
      this.anthorshow = !this.anthorshow;
    }
  }
}
</script>
<style lang="stylus" scoped>
.footer
    width 100%
    height 2rem
    line-height 2rem
    text-align center
    background-color #f2f2f2
    color #ccc
</style>
