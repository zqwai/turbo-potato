<template>
  <section>
    <Vheader/>
    <!-- carousel -->
    <v-carousel
      prev-icon="fa fa-angle-left"
      next-icon="fa fa-angle-right"
      height="128"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- /carousel -->

    <Home />

    <SongList />

    <Vfooter />
    
  </section>
</template>

<script>
// @ is an alias to /src
import Vheader from '@/components/public/Vheader'
import Home from '@/components/home/Home.vue'
import SongList from '@/components/list/SongList.vue'
import Vfooter from '@/components/public/Vfooter'

export default {
  name: 'home',
  components: {
    Vheader,
    Home,
    SongList,
    Vfooter,
  },
  data () {
    return {
      items: [
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1247597.jpg'
        },
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1248529.jpg'
        },
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1248444.jpg'
        },
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1247320.jpg'
        },
        {
          src: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1245474.jpg'
        }
      ]
    }
  },
}
</script>
