<template>
  <v-app
    dark
  >
  <v-layout justify-center>
    <v-flex xs12>

    <v-content>
      <router-view></router-view>
      <Vfooter />
      </v-content>

    <VBottomNav />
  
    </v-flex>
  </v-layout>
  </v-app>
</template>

<script>
import Vfooter from '@/components/public/Vfooter'
import VBottomNav from '@/components/public/VBottomNav'
export default {
  name: 'App',
  components: {
    Vfooter,
    VBottomNav,
  },
  data () {
    return {
      //
    }
  }
}
</script>