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
  
    </v-flex>
  </v-layout>
  </v-app>
</template>

<script>
import VBottomNav from '@/components/public/VBottomNav'
export default {
  name: 'App',
  components: {
    VBottomNav,
  },
  data () {
    return {
      //
    }
  }
}
</script>