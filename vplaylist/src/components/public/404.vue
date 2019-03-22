<template>
  <div class="err">
    {{err}}
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      err: '页面找不到'
    }
  }
}
</script>
<style lang="stylus" scoped>
.err
    width 20rem
    height 5rem
    line-height 5rem
    text-align center
    background-color #f0f0f0
    color #999
    margin 2rem auto
</style>
