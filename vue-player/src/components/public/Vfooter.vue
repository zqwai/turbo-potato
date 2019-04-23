<template>
  <v-footer
    height="auto"
    class="mt-1"
  >
    <v-card
      class="flex"
      flat
      tile
    >

      <v-card-actions class="justify-center">
        &copy; {{new Date().getFullYear()}} — <strong>david</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>

export default {
  name: 'vfooter',
  data () {
    return {
      // icons: 
    }
  }
}
</script>
