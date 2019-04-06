<template>
  <v-app>

    <AppHeader 
    :globeThemeColors='globeThemeColors' 
    :sidemenus='sidemenus'
    :users='users'
    :topNavs='topNavs'
    />

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <AppFooter :globeThemeColors='globeThemeColors' :globeDatas='globeDatas'/>
    
  </v-app>
</template>

<script>

import AppHeader from './components/public/App-Header'
import AppFooter from './components/public/App-Footer'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    
    AppHeader,
    AppFooter
  },
  data () {
    return {
      globeThemeColors:{},
      globeDatas:{},
      sidemenus: [
        { url: '#1', icon: 'trending_up', text: 'Most Popular' },
        { url: '#2', icon: 'subscriptions', text: 'Subscriptions' },
        { url: '#3', icon: 'history', text: 'History' },
        { url: '#4', icon: 'featured_play_list', text: 'Playlists' },
        { url: '#5', icon: 'watch_later', text: 'Watch Later' }
      ],
      users: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ],
      topNavs: [
        {
          url:'/',
          name: 'home',
        },
        {
          url: '/about',
          name: 'about',
        },
        {
          url: '/product',
          name: 'product',
        }
      ],

    }
  },
  methods:{    
  },
  created:function(){
    // console.log('创建:created');
    let vm = this
    // 获取皮肤
    axios.get('./color/color.primary.json')
      .then((data) => {
        // console.log(globeThemeColors.data)
        vm.globeThemeColors = data.data
      })

    // 获取全局参数配置
    axios.get('./db/globedata.json')
      .then((globeDatas) => {
        // console.log(globeDatas.data)
        vm.globeDatas = globeDatas.data
      })
    // console.log(this.users)

  },
  mounted () {
    // console.log('mounted')
  }
  
}
</script>

