<template>
  <v-layout row wrap>
      <UserHeader />
    
      <UserMenu />
  </v-layout>
</template>

<script>
import UserHeader from '@/components/user/UserHeader'
import UserMenu from '@/components/user/UserMenu'
export default {
  name: 'user',
  components: {
    UserHeader,
    UserMenu,
  },
  data () {
    return {

    }
  }
}
</script>
