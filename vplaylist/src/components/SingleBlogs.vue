<template>
    
  <section class="showblogs">
    <div class="single-blog">
      <h3 class="title" >
        {{blog.title}}
      </h3>
      <article class="article">
        {{blog.content}}
      </article>
      <ul class="article-info">
        <li class="auther">
          <span class="txt">作者: </span>
          <span class="tag">{{blog.auther}}</span>
        </li>
        <li class="categories">
          <span class="txt">博客分类: </span>
          <span class="tag" v-for="(categorie, index) in blog.categories" :key='index'>
              {{categorie}}
            </span>
        </li>
      </ul>
      <div class="box-del">
        
        <router-link :to='"/edit/" + id' class="btn btn-sm btn-skyblue mr-1rem">编辑文章</router-link>
        <button class="btn btn-red" @click="deleteSingleBlog()">删除文章</button>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'SingleBlogs',
  // props:{
  //   editBlog: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data(){
      return {
          id: this.$route.params.id,
          blog: {},
          
      }
  },
  created() {
      // this.$http.get('https://zqwde2013.firebaseio.com/posts/' + this.id +'.json')
      //     .then(function(data){
      //         // this.blog = data.body
      //         // console.log(data)
      //         return data.json()
      //     })
      //     .then((data)=>{
      //       this.blog = data
      //     })

    axios.get('/posts/' + this.id +'.json')
      .then((data)=>{
        // this.blog = data.body
        // console.log(data.data)
        this.blog = data.data
      })
  },
  methods:{
    deleteSingleBlog(){
      axios.delete('/posts/' + this.id +'.json')
        .then(response =>{
          this.$router.push({path: '/'})
          // console.log(response)
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
.showblogs
  width 90%
  margin 0 auto
  font-size 1.2rem
  .single-blog
    background-color #fff
    padding 1rem 2rem
    margin-bottom 2rem
    border-radius .5rem
    text-align left
    line-height 2.6rem
    margin-top 1rem
    .title
      margin 0 0 1rem
      border-bottom 1px solid #ededed
      font-size 1.6rem
      text-align center
      line-height 6rem

    .article
      width 100%
      line-height 3rem
  .article-info
    width 100%
    display flex
    margin 2rem 0 1rem
    .auther
    .categories
      flex 1
      text-align left 
      margin 0
      font-size 1rem
    .auther
      width 40%
    .categories
      width 60%
      text-align right
    .tag
      padding .2rem 1rem
      margin-right .5rem
      font-size 1rem
      display inline-block
      border-radius .3rem
      background-color #f9f9f9
      color #666
      line-height 1.6rem
    .txt
      color #999
  .box-del
    padding-top 1rem
    text-align right
</style>
