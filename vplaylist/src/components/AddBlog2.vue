<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form action="">
      <label>博客标题</label>
      <input type="text" required v-model="blog.title">
      <label>博客内容</label>
      <textarea cols="30" rows="10" v-model="blog.content"></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addblog',
  data () {
    return {
      blog:{
        title:'',
        content:'',
      }
    }
  },
  // methods:{    
  //   },
  // beforeCreate:function(){
  //   console.log('创建前:beforeCreate');
  // },
  // created:function(){
  //   console.log('创建:created');
  // },
  // beforeMount:function(){
  //   console.log('挂载前:beforeMount');
  // },
  // mounted:function(){
  //   console.log('挂载:mounted');
  // },
  // beforeUpdate:function(){
  //   console.log('更新前:beforeUpdate');
  //   // addUser()
  // },
  // updated:function(){
  //   console.log('更新:updated');
  //   console.log(this.users);
  // },
  // beforeDestory:function(){
  //   alert('删除前:beforeDestory');
  // },
  // destoryed:function(){
  //   alert('删除:destoryed');
  // },
}
</script>

<style scoped lang="stylus">
</style>
