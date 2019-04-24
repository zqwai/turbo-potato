<template>  
<v-layout relative>

  <v-card>
    <v-list subheader>
      <v-subheader >热门</v-subheader>
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
  </v-card>


  <v-navigation-drawer
    v-model="drawer"
    class="pb-0"
    hide-overlay
    stateless
    width="64"
    temporary
    right
    fixed
    height="310"
    style="top:104px"
  >
    <v-layout >
      <v-list class="grow">
        <v-list-tile
          v-for="(tag, index) in tags"
          :key="index"
        >
          <v-list-tile-title v-text="tag.name"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-navigation-drawer>

</v-layout>
</template>

<script>

// import axios from "axios"

const artistData = require('../../assets/api/artist.js');

export default {
  name: 'artist',
  data: () => ({
    drawer: true,
    artists:[],
    tags:[],
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
    this.tags = artistData.artists[0].singerList.data.tags.index;
    // console.log(this.artists)

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
