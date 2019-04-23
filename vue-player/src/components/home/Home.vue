<template>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <font-awesome-icon icon="heart" />
                  </v-btn>
                  <v-btn icon>
                    <font-awesome-icon icon="bookmark" />
                  </v-btn>
                  <v-btn icon>
                    <font-awesome-icon icon="play" />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faBookmark, faShare, faPlay } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart, faBookmark, faShare, faPlay)

  export default {
    data: () => ({
      cards: [
        { title: '欧美R&B ：新旧碰撞的迷幻浪潮', src: 'https://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu0oibQl7aic4ica96322ibeF7ujS0V4RY7SO2A/300?n=1', flex: 12 },
        { title: '热歌', src: 'https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000', flex: 6 },
        { title: '一人一首招牌歌', src: 'https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000', flex: 6 }
      ]
    })
  }
</script>
