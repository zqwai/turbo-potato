<template>

<section id="list">
    
  <ListHeader />
  <router-view></router-view>

</section>
  
</template>

<script>
import ListHeader from '@/components/list/ListHeader'

export default {
  name: 'list',
  components: {
    ListHeader,
  },
  data () {
    return {
      // 
    }
  }
}
</script>
