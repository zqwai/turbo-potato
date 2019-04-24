<template>
  <v-app
    dark
  >
  <v-layout justify-center>
    <v-flex xs12>

    <v-content>
      <router-view></router-view>
    </v-content>

    <VBottomNav />

    <VuetifyAudio 
      :song="song"
      
      :ended="audioFinish"
    ></VuetifyAudio>
  
    </v-flex>
  </v-layout>
  </v-app>
</template>

<script>
import VBottomNav from '@/components/public/VBottomNav'
import VuetifyAudio from '@/components/player/VuetifyAudio'
export default {
  name: 'App',
  components: {
    VBottomNav,
    VuetifyAudio
  },
  methods: {
    audioFinish () {
      console.log('播放结束');
    }
  },
  data () {
    return {

      song:{
        thumb: 'http://pic.xiami.net/images/album/img50/480050/4800501532480051.jpg@!c-400-400',
        url: 'http://m128.xiami.net/511/1511/2103842553/1804120461_1532656680066.mp3?auth_key=1556679600-0-0-90c6f362cff6f8ab92e47e01d92f5ddb',
        title: '心如止水',
        anthor: '心如止水',
      }

    }
  },
  
}
</script>