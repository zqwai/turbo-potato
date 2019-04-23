<template>  
  
  <v-card>

    <v-list subheader>
      <v-subheader >A</v-subheader>
      <v-list-tile
        v-for="(artist, index) in artists"
        :key="index"
        avatar
      >
        <v-list-tile-avatar>
          <img :src="artist.singer_pic">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            {{artist.singer_name}}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ index }} - {{artist.country}}
          </v-list-tile-sub-title>
        </v-list-tile-content>

      </v-list-tile>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>B</v-subheader>

      <v-list-tile
        v-for="item in items2"
        :key="item.title"
        avatar
        
      >
        <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>

</template>

<script>

// import axios from "axios"

const artistData = require('../../assets/api/artist.js')

export default {
  name: 'artist',
  data: () => ({
    items: [
      { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
      { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
      { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
    ],
    items2: [
      { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }
    ],
    artists:[],
  }),
  methods:{
    cartView() {
      console.log(this.text)
    }
  },
  created () {
    // this.artists = artistData.artists;
    console.log(artistData.artists[0].singerList.data)
    // console.log(artistData.artists[0].singerList.data.singerlist)

    this.artists = artistData.artists[0].singerList.data.singerlist;
    console.log(this.artists)

      // axios.get('/static/api/artist.json')
      // .then(function(res) {
      //   // return this.artists = res
      //   console.log(res);
      // })
      // .catch(function (error) {
      //   console.log(error);
      //   // return error
      // });
  }
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
