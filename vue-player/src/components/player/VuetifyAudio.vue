<template>
  <section class="vplay-ui">

  <v-slider
    class="playbar" 
    @click.native="setPosition()" 
    v-model="percentage" 
    dark 
    :disabled="!loaded"
  ></v-slider>

    <audio
      id="player"
      ref="player"
      class="hide"
      name="media"
      :src="song.url"
    >
    </audio>

    <v-list
      width="100%"
    >
      <v-list-tile>
        <v-list-tile-avatar>
          <img :src="song.thumb">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            {{song.title}} - <small>{{song.anthor}}</small>
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ currentTime }}-{{ duration }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
        
        <v-btn 
          outline icon
          class="pui-btn"
          @click.native="playing ? pause() : play()" 
          :disabled="!loaded"
        >
          <v-icon v-if="!playing || paused">fa-play</v-icon>
          <v-icon v-else>fa-pause</v-icon>
        </v-btn>

        <v-btn 
          outline icon 
          class="pui-btn hide"
          @click.native="stop()" 
          :disabled="!loaded"
        >
          <v-icon>fa-stop</v-icon>
        </v-btn>

        <v-btn 
          outline icon 
          class="pui-btn hide" 
          @click.native="mute()" 
          :disabled="!loaded"
        >
            <v-icon v-if="!isMuted">fa-volume-up</v-icon>
            <v-icon v-else>fa-volume-off</v-icon>
        </v-btn>

        <v-btn 
          outline icon 
          class="pui-btn hide" 
          @click.native="loaded ? download() : reload()"
        >
            <v-icon v-if="!loaded">fa-refresh</v-icon>
            <v-icon v-else>fa-download</v-icon>
        </v-btn>
        
      </v-list-tile>
    </v-list>
  </section>
</template>

<script>
const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);

export default {
  name: 'vuetify-audio',
  props: {
    song: {
      file: {
        type: String,
        default: null
      },
      thumb:{
        type: String,
        default: null
      },
      anthor:{
        type: String,
        default: null
      }
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    ended: {
      type: Function,
      default: () => {},
    },
    canPlay: {
      type: Function,
      default: () => {},
    },
  },
  data () {
    return {
      firstPlay: true,
      isMuted: false,
      loaded: false,
      playing: false,
      paused: false,
      percentage: 0,
      currentTime: '00:00:00',
      audio: undefined,
      totalDuration: 0,
    }
  },
  methods: {
    setPosition () {
      this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage);
      
      // if (this.playing) return
      this.paused = false
      this.audio.play().then(() => this.playing = true)
    },
    stop () {
      this.paused = this.playing = false
      this.audio.pause()
      this.audio.currentTime = 0
    },
    play () {
      if (this.playing) return
      this.paused = false
      this.audio.play().then(() => this.playing = true)
    },
    pause () {
      this.paused = !this.paused;
      (this.paused) ? this.audio.pause() : this.audio.play()
    },
    download () {
      this.audio.pause()
      window.open(this.file, 'download')
    },
    mute () {
      this.isMuted = !this.isMuted
      this.audio.muted = this.isMuted
      this.volumeValue = this.isMuted ? 0 : 75
    },
    reload () {
      this.audio.load();
    },

    // 初始化
    _handleLoaded: function () {
      // 监听所处状态
      if (this.audio.readyState >= 2) {
          if (this.audio.duration === Infinity) {
              this.audio.currentTime = 1e101;
              this.audio.ontimeupdate = () => {
                  this.audio.ontimeupdate = () => {}
                  this.audio.currentTime = 0
                  this.totalDuration = parseInt(this.audio.duration)
                  this.loaded = true;
              }
          } else {
              this.totalDuration = parseInt(this.audio.duration)
              this.loaded = true
          }
          if (this.autoPlay) this.audio.play()
      } else {
          throw new Error('Failed to load sound file')
      }
    },
    // 进度条
    _handlePlayingUI: function () {
      this.percentage = this.audio.currentTime / this.audio.duration * 100
      this.currentTime = formatTime(this.audio.currentTime)
    },

    _handlePlayPause: function (e) {
      if (e.type === 'play' && this.firstPlay) {
          // in some situations, audio.currentTime is the end one on chrome
          this.audio.currentTime = 0;
          if (this.firstPlay) {
              this.firstPlay = false;
          }
      }
      if (e.type === 'pause' && this.paused === false && this.playing === false) {
          this.currentTime = '00:00:00'
      }
    },

    _handleEnded () {
      this.paused = this.playing = false;
    },
    init: function () {
      this.audio.addEventListener('timeupdate', this._handlePlayingUI);
      this.audio.addEventListener('loadeddata', this._handleLoaded);
      this.audio.addEventListener('pause', this._handlePlayPause);
      this.audio.addEventListener('play', this._handlePlayPause);
      this.audio.addEventListener('ended', this._handleEnded);
    },
    
  },
  computed: {
    duration: function () {
      return this.audio ? formatTime(this.totalDuration) : ''
    },
  },
  mounted () {
    this.audio = this.$refs.player;
    this.init();
  },
  created () {
    // const fullscreen = window.screen.width;
    // console.log(fullscreen)
  },
  beforeDestroy () {
    this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
    this.audio.removeEventListener('loadeddata', this._handleLoaded)
    this.audio.removeEventListener('pause', this._handlePlayPause)
    this.audio.removeEventListener('play', this._handlePlayPause)
    this.audio.removeEventListener('ended', this._handleEnded);
  }
  
}
</script>

<style lang="stylus" scoped>
.vplay-ui
  width 100%
  height 70px
  padding-top 7px
  background-color rgba(30,30,30,.8);
  position fixed
  bottom 50px
  left 0
  z-index 5
  .pui-btn
    .v-icon
      font-size 1.2rem
  .hide
    display none
  .theme--dark.v-list
    background none
  .playbar
    position absolute
    top -15px
    left 0
    width 100%
    margin 0
    height auto
    .v-input__slot
      margin-bottom 0
    // .playline
    //   width 100%
    //   height 0.25rem
    //   background rgba(0,0,0,.8);
    //   position relative
    //   overflow hidden
    //   .playline_clone
    //     width 40%
    //     height 100%
    //     background rgba(155,155,155,.8);

</style>
