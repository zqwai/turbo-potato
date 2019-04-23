<template>  
  
  <v-card>
    <v-container grid-list-sm fluid>
      <v-layout row wrap>
        <v-flex
          v-for="n in 18"
          :key="n"
          xs4
          d-flex
        >
          <v-card flat tile class="d-flex">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-layout
                  fill-height
                  align-center
                  justify-center
                  ma-0
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
  
</template>

<script>
// import ListHeader from '@/components/list/ListHeader'

export default {
  name: 'artist',
  components: {
    // ListHeader,
  },
  data: () => ({
    lists: [
      {
        name: '雨纷纷',
        thumb: 'https://y.gtimg.cn/music/photo_new/T002R90x90M000002QmnEn3SGOsK.jpg?max_age=2592000',
        url: '#',
        playnum: '12312',
        time: '04:34',
        author: '双笙',
      },
      {
        name: '不如我先说',
        thumb: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001uBC4s0X5tVc.jpg?max_age=2592000',
        url: '#',
        playnum: '12312',
        time: '04:34',
        author: '李琦',
      }
    ], 
  })
}
</script>
<style lang="stylus" scoped>
.v-btn--floating.v-btn--small
  width 1.52rem
  height 1.52rem
  text-align center
  .v-icon
    font-size .76rem
</style>
