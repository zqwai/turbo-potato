
<template>
  <v-footer
    app fixed clipped-right
    :dark = 'globeThemeColors.skinstatus'
    :color='globeThemeColors.nav'
    height="auto"
    class="pl-3 pr-3"
  >
  <div>
    &copy; {{globeDatas.author}} 
    {{ new Date().getFullYear() }} — <strong>{{ new Date().getFullYear() + 10 }}</strong>
  </div>
  <v-spacer></v-spacer>
  <div>
    v-{{globeDatas.version}}  
  </div>
  </v-footer>
</template>

<script>
  export default {
    props: {
      globeDatas: {
        type: Object,
        required: true,
      },
      globeThemeColors: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>
