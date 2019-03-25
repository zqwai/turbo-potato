// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import axios from 'axios'

import App from './App'
import router from './router'

// public components
import '@/assets/stylus/public.styl'

Vue.config.productionTip = false
// vue-resource
// Vue.use(VueResource)

// axios
axios.defaults.baseURL = 'https://zqwde2013.firebaseio.com'

// 自定义全局指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString(16).slice(3,9);
//   }
// })

// 自定义过全局滤器
// Vue.filter('to-uppercase', function(data){
//   return data.toUpperCase().slice(0, 50) + '...';
// })
// Vue.filter('snippet', function(data){
//   return data.slice(0, 200) + '...';
// })

// let config = {
//   apiKey: "apiKey",
//   authDomain: "zqwdeapp.firebaseapp.com",
//   databaseURL: "https://databaseName.firebaseio.com",
//   storageBucket: "bucket.appspot.com"
// };
// firebase.initializeApp(config);

// // Get a reference to the database service
// export let database = firebase.database();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
