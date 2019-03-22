<template>
  <div class="add-blog">
    
  </div>
</template>

<script>
export default {
  name: 'addblog',
  data () {
    return {
      users: [
        {
            name:'Herry',
            age:'18',
            sex: 'girl',
        },
        {
            name:'Tom',
            age:'24',
            sex: 'girl',
        },
        {
            name:'Summy',
            age:'22',
            sex: 'girl',
        },
        {
            name:'David',
            age:'22',
            sex: 'boy',
        },
      ],
      index:'/'
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
