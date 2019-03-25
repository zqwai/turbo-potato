<template>
  <section class="showblogs">
    <h2>博客总览</h2>
    <input type="text" v-model="search" class="input-search" placeholder="搜索">
    <div class="single-blog" v-for="(blog, index) in filteredBlogs" :key='index' :data-id='blog.id'>
      
        <h3 class="title" v-rainbow>
          <router-link :to='"/blog/" + blog.id'>
            {{blog.title | to-uppercase}}
          </router-link>
        </h3>
        <article class="article">
          {{blog.content | to-snippet}}
        </article>
      
    </div>
      <div class="nolist" v-if="blogShow">
        对不起！没有您想查找的博客。
      </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShowBlogs',
  data () {
    return {
      singleblogs:[],
      search: '',
      blogShow: false
    }
  },
  created () {
    let vm = this
    axios.get('/posts.json',vm.blog)
      .then((blogs) => {
        // console.log(blogs.data)
        return blogs.data
        // vm.singleblogs = blogs.data.slice(0,10)
      })
      .then((blogs) => {
        let blogsArray = []
        for(let key in blogs){
          blogs[key].id = key
          blogsArray.push(blogs[key])
        }
        vm.singleblogs = blogsArray
        // console.log(vm.singleblogs)
      })

    // this.$http.get('https://zqwde2013.firebaseio.com/posts.json',vm.blog)
    //   .then((blogs) => {
    //     // console.log(blogs.json())
    //     return blogs.json()
    //     // vm.singleblogs = blogs.data.slice(0,10)
    //   })
    //   .then((data) => {
    //     let blogsArray = []
    //     for(let key in data){
    //       // console.log(key)
    //       // console.log(data[key])
    //       data[key].id = key
    //       blogsArray.push(data[key])
    //     }
    //     // console.log(blogsArray)
    //     vm.singleblogs = blogsArray
    //     console.log(vm.singleblogs)
    //   })
  },
  computed:{
    filteredBlogs:function(){
      return this.singleblogs.filter((blog) => {
        // console.log(blog.title.match(this.search))
        // let a = blog.title.match(this.search)
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    toUppercase:function(value){
      return value.toUpperCase().slice(0,40)
    },
    // toUppercase(value){ //方法形式
    //   return value.toUpperCase().slice(0,50) + '...'
    // },
    toSnippet(value){
      return value.slice(0,200) + '...'
    }
  },
  directives:{
    rainbow: { //对象形式
      bind(el,binding,vnode){
        el.style.color = "#" + Math.random().toString(16).slice(3,9)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.showblogs
  width 90%
  margin 0 auto
  font-size 1.2rem
  h2
    width 100%
  .input-search
    width 100%
    height 3rem
    margin-bottom 1rem
    font-size 1.2rem
    padding .2rem 1rem
    border 1px solid #ededed
  .input-search:focus
    outline none
    border 1px solid #f60
  .single-blog
    background-color #fff
    padding 1rem 2rem
    margin-bottom 2rem
    border-radius .5rem
    text-align left
    line-height 2.6rem
    .title
      margin 0
      border-bottom 1px solid #ededed
      font-size 1.4rem
    .article
      width 100%
  .nolist
    background-color #fff
    color #f30
    padding 1rem
</style>
