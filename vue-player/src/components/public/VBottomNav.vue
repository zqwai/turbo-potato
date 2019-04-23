<template>
<!-- absolute -->
  <v-bottom-nav fixed app>
      <v-btn
        color="teal"
        flat
        value="recent"
        v-for="(navbar, index) in navbars"
        :key="index"
        :to="navbar.link"
      >
        <span>{{navbar.text}}</span>
        <v-icon>fa-{{navbar.icon}}</v-icon>
        <!-- <font-awesome-icon :icon="navbar.icon" /> -->
      </v-btn>
    </v-bottom-nav>
</template>

<script>

export default {
  name: 'vbottomnav',
  data () {
    return {
      navbars:[
        {
          icon: 'home',
          text: '主页',
          link: '/'
        },
        {
          icon: 'list',
          text: '歌单',
          link: '/list'
        },
        {
          icon: 'star',
          text: '收藏',
          link: '/favorites'
        },
        {
          icon: 'user',
          text: '用户',
          link: '/user'
        },
      ],
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-icon
  font-size 1.4rem !important
</style>
