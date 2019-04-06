<template>
    <section>
        <v-navigation-drawer 
        v-model="drawer"
        clipped
        fixed
        right
        app>
            <v-list dense>

                <v-list-tile 
                    v-for="sidemenu in sidemenus" 
                    :key="sidemenu.text"
                    :to='sidemenu.url'
                >
                    <v-list-tile-action>
                        <v-icon>{{ sidemenu.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                        {{ sidemenu.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>


            <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>


            <v-list>
                <v-list-tile 
                    v-for="user in users" 
                    :key="user.text" 
                    avatar 
                >
                    <v-list-tile-avatar>
                    <img :src="`https://randomuser.me/api/portraits/men/${user.picture}.jpg`" alt="">
                    </v-list-tile-avatar>
                    <v-list-tile-title v-text="user.text"></v-list-tile-title>
                </v-list-tile>
            </v-list>


            <v-list-tile class="mt-3">
                <v-list-tile-action>
                    <v-icon color="grey darken-1">add_circle_outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
            </v-list-tile>


            <v-list-tile>
                <v-list-tile-action>
                    <v-icon color="grey darken-1">settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
            </v-list-tile>

        </v-navigation-drawer>


        <v-toolbar  
            app fixed clipped-right flat
            :color='globeThemeColors.nav'
        >
            
            <router-link :to='topNavs[0].url' class="vlogo"></router-link>
            

            <v-spacer></v-spacer>
            
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                 flat
                 class="white--text"
                 v-for="(nav, index) in topNavs"
                 :key="index" v-bind:to='nav.url'
                >
                    {{nav.name}}
                </v-btn>
            </v-toolbar-items>
            
            <v-toolbar-side-icon 
                dark
                @click.stop="drawer = !drawer"
            >
            </v-toolbar-side-icon>
            
        </v-toolbar>
    </section>
    
</template>

<script>

export default {
    props: {
        
        globeThemeColors: {
            type: Object,
            required: true,
        },

        sidemenus: {
            type: Array,
            required: true,
        },
        users: {
            type: Array,
            required: true,
        },
        topNavs: {
            type: Array,
            required: true,
        }
    },
    data: () => {
        return {
            drawer: false,
        }
    },
    methods: {
        // menus:() =>{
        //     console.log('menus')
        // },
        // users:() =>{
        //     console.log('users')
        // },
        // addCircle:() =>{
        //     console.log('addCircle')
        // },
        // settings:() =>{
        //     console.log('settings')
        // }
    },
    created:function(){

        // console.log(this.users)
    }
}
</script>

<style lang="stylus" scoped>
.vlogo
  z-index 4
  position relative
  display inline-block
  background-size 75px 32px
  background-repeat no-repeat
  background-position center center
  background-color white
  -webkit-mask-box-image url(../../assets/images/logo.png)
  mask-image url(../../assets/images/logo.png)
  mask-size contain
  width 75px
  height 32px
  vertical-align middle
</style>
