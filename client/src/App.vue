<template>
  <div id="app">
    <AppHeader />
    <router-view/>
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from '@/components/App_Header.vue';
import AppFooter from '@/components/App_Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  // data(){
  //   return {
  //     data: '',
  //   }
  // }
};
</script>
