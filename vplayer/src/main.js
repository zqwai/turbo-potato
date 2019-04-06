import Vue from 'vue'
import './plugins/vuetify'
// import Vuetify from 'vuetify'
// import axios from 'axios'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// Helpers
// import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

// axios
// axios.defaults.baseURL = 'https://zqwde2013.firebaseio.com'
// Vue.use(Vuetify, {
//   theme: {
//     primary: colors.red.darken1, // #E53935
//     secondary: colors.red.lighten4, // #FFCDD2
//     accent: colors.indigo.base // #3F51B5
//   }
// })



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
