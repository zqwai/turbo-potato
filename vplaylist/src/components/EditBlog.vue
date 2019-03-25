<template>
  <div class="add-blog">
    <h5>编辑博客</h5>
    <div class="form">
      <form v-if="!submited">
        <div class="form-cont">
          <label>博客标题</label>
          <input type="text" required v-model="blog.title" class="form-input">
          <label>博客内容</label>
          <textarea cols="30" rows="10" v-model="blog.content" class="form-input"></textarea>
        </div>
        <div class="checkboxes">
          <b>博客分类：</b>
          <label><input type="checkbox" value="vue.js" v-model="blog.categories"> vue.js</label>
          <label><input type="checkbox" value="node.js" v-model="blog.categories"> node.js</label>
          <label><input type="checkbox" value="react.js" v-model="blog.categories"> react.js</label>
          <label><input type="checkbox" value="Angular.js" v-model="blog.categories"> Angular.js</label>
        </div>
        <div class="authorbox">
          <b>博客作者：</b>
          <select v-model="blog.auther">
            <option v-for="(author, index) in autheres" :key="index">
              {{author}}
            </option>
          </select>
        </div>
        <button class="sumbit" @click.prevent="post">修改博客</button>
      </form>
      <div v-if="submited">
        博客修改成功！！！
      </div>
    </div>
    <div class="preview">
      <ul>
        <li>
          <h5>博客预览</h5>
          <h1>{{blog.title}}</h1>
        </li>
        <li>
          <article>{{blog.content}}</article>
        </li>
        <li>
          <h5>博客分类</h5>
          <div class="tags">
            <span class="tag" v-for="(categorie, index) in blog.categories" :key='index'>
              {{categorie}}
            </span>
          </div>
        </li>
        <li>
          <h5>作者:</h5>
          <div class="tags">
             <span>{{blog.auther}}</span>
          </div>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'editblog',
  data () {
    return {
      submited: false,
      id: this.$route.params.id,
      blog:{
        // title:'',
        // content:'',
        // categories: [],
        // auther: '',
      },
      autheres: ['大山','菲菲','雯雯','丽丽',],
    }
  },
  methods:{
    fetchData(){
        let vm = this
        console.log(vm.id)
        axios.get('/posts/' + vm.id +'.json')
            .then(response => {
                vm.blog = response.data
            })
    },
    post:function(){
      let vm = this
      // http://jsonplaceholder.typicode.com/
      // http://jsonplaceholder.typicode.com/posts

      // vue-resoure
      // vm.$http.post('https://zqwde2013.firebaseio.com/posts.json',this.blog)

      // axios
      axios.put('/posts/' + vm.id +'.json',vm.blog)
      .then((data) => {
        console.log(data)
        vm.submited = true
      })
    },
  },
  created(){
      this.fetchData()
  }
}
</script>

<style scoped lang="stylus">
.form
  width 80%
  margin 2rem auto
  background-color #fff
  padding 1rem
  .form-cont
    width 100%
    label
      display block
      width 100%
      height 4rem
      line-height 4rem
      text-align left
      font-size 1.2rem
    .form-input
      display block
      width 100%
      border #f2f2f2 1px solid
      font-size 1.4rem
      padding .3rem
      line-height 2.4rem
    .form-input:focus
      border-color #ff5537
      box-shadow 0 .2rem .2rem rgba(0,0,0, .2)
      outline none
  .checkboxes
    padding 2rem 0 0
    text-align left
    label
      padding-right 1rem
  .authorbox
    padding 2rem 0 0
    text-align left
    select
      width 10rem
      line-height 2rem
      option
        font-size 1.2rem
        line-height 2rem
  .sumbit
    width 12rem
    height 3rem
    border 1px solid #ff6600
    background-color #ff6600
    opacity .9
    font-size 1.4rem
    color #ffffff
    border-radius .3rem
    margin 1rem 0
  .sumbit:focus
    outline none 
    opacity 1


.preview   
  width 80%
  margin 2rem auto
  background-color #fff
  padding 1rem
  ul
    width 100%
    li
      width 100%
      h5
        text-align left
        margin 0 0 1rem
        color #999
        font-size 1.1rem
        border-bottom 1px solid #ededed
        padding-bottom .5rem
        padding-top .5rem
      article
        font-size 1.4rem
        text-align left
        margin-bottom 1rem
      .tags
        padding 0
        text-align left
        .tag
          padding .5rem 1rem
          margin-right .5rem
          font-size 1rem
          display inline-block
          border-radius .3rem
          background-color #f9f9f9
          color #666
          border #ededed 1px solid
</style>
