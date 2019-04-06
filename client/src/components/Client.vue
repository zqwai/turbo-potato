<template>
  <div class="client">
    
    <div class="form-group">
      <div class="form-inline">
        <input type="text" v-model="names" class="form-control mr-2" placeholder="添加人员">
        <!-- <button class="btn btn-info" @click="addName">添加</button> -->
      </div>
    </div>
    <div class="form-group">
      <h4>待确认人员</h4>
      <ul>
        <!-- <li v-for="name in names" :key='name' ></li> -->
        <li>{{names}}</li>
      </ul>
    </div>
    <div class="form-group">
      <h4>已确认人员</h4>
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="form-group">
      <h4>已确认人员</h4>
      <ul>
        <li></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Client',
  props: {
    // msg: String,
  },
  data:() => {
    return {

      names:[]
    }
  },
  methods:{
    addName(){

    }
  }
};
</script>