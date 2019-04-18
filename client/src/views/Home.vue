<template>
  <div class="home wrap-form">
    <div class="form-group">
      <div class="form-inline">
        <input type="text"
          v-model="todo"
          @keydown="keydoAdd($event)"
          class="form-control mr-2" placeholder="添加人员">
        <button
          class="btn btn-info"
          @click="doAdd($event)"
        >添加</button>
        <span v-show="errTip" class="text-danger ml-2">{{errTipText}}</span>
      </div>
    </div>
    <div class="form-group">
      <h4>待确认人员</h4>
      <ul class="list-group list-group-flush">
        <li
          v-for="(item, index) in list"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center"
          v-if='!item.checked'
        >
            <input type="checkbox" class="mr-1"
              v-model="item.checked"
              @change="saveListDta()"
            >
            <span class="flex-grow-1">{{item.name}} </span>
            <button
            class="btn btn-light btn-sm "
            @click="removeListData()"><i class="fa fa-trash-o"></i> 删除</button>
        </li>
      </ul>
    </div>
    <div class="form-group">
      <h4>已确认人员</h4>
      <ul class="list-group list-group-flush">
        <li
          v-for="(item, index) in list"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center"
          v-if='item.checked'
        >
            <input type="checkbox"
              class="mr-1"
              v-model="item.checked"
              @change="saveListDta()"
            >
            <span class="flex-grow-1">{{item.name}} </span>
            <button class="btn btn-light btn-sm " @click="removeListData()">
              删除
            </button>
        </li>
      </ul>
    </div>
    <!-- <div class="form-group">
      <h4>已确认人员</h4>
      <ul>
        <li></li>
      </ul>
    </div> -->

  </div>
</template>

<script>
// @ is an alias to /src
// import Client from '@/components/Client.vue';
import storage from '../model/storage';
// import axios from 'axios';

export default {
  name: 'home',
  // components: {
  //   Client,
  // },
  data() {
    return {
      errTip: false,
      errTipText: '',
      todo: '',
      list: [
        {
          name: '22',
          checked: false,
        },
      ],
    };
  },
  methods: {
    doAdd() {
      // 1、获取文本框输入人员名
      // 2、添加到nameList里面 push() 方法
      if (this.todo !== '') {
        this.list.push({
          name: this.todo,
          checked: false,
        });
        this.todo = '';
        this.errTip = false;
        // console.log(this.list)
      } else {
        this.errTip = true;
        this.errTipText = '空内容不能添加';
        return false;
      }
      storage.set('list', this.list);
      return this.list;
    },
    keydoAdd(e) {
      // console.log(e);
      // key enter
      if (e.keyCode === 13) {
        if (this.todo !== '') {
          this.list.push({
            name: this.todo,
            checked: false,
          });
          this.todo = '';
          this.errTip = false;
          // console.log(this.list);
        } else {
          this.errTip = true;
          this.errTipText = '空内容不能添加';
          return false;
        }
        storage.set('list', this.list);
        // console.log(this.list);
      } else {
        return false;
      }
      return e;
    },
    removeListData(key) {
      // splice() 操作数组的方法
      this.list.splice(key, 1);
      // console.log(this.list);
      storage.set('list', this.list);
    },
    saveListDta() {
      storage.set('list', this.list);
      // axios.post('http://localhost:2000/messages',)
    },
  },
  mounted() {
    // console.log('mounted');
    const list = storage.get('list', this.list);
    if (list) {
      this.list = list;
    }
    // console.log(this.list);
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
.wrap-form{
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}
.wrap-form h4{
  margin-bottom: 10px;
  font-size: 14px
}
</style>
