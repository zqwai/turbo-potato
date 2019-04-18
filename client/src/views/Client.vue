<template>
  <div class="container">
    <form class="pt-5">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
        type="text"
        class="form-control"
        id="firstName"
        v-model="User.first_name"
        placeholder="Enter First Name">
        <span>{{User.first_name}}</span>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text"
        class="form-control"
        id="lastName"
        v-model="User.last_name"
        placeholder="Enter Last Name">
        <span>{{User.last_name}}</span>
      </div>
      <div class="form-group">
        <label for="Email">Email</label>
        <input type="email"
        class="form-control"
        id="Email"
        v-model="User.email"
        placeholder="Enter Email">
        <span>{{User.email}}</span>
      </div>
      <button type="submit"
      @click="addToAPI"
      class="btn btn-primary full-width btn-block btn-lg">提交</button>
      <button type="submit"
      class="btn btn-info full-width btn-block">Go User</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'client',
  data() {
    return {
      msg: 'Client page',
      User: { first_name: '', last_name: '', email: '' },
    };
  },
  methods:{
    addToAPI() {
      let newUser = {
        first_name: this.User.first_name,
        last_name: this.User.last_name,
        email: this.User.email
      };
      console.log(newUser);

      const userdbJsonUrl = 'http://localhost:3000/Userdb';
      
      axios.post(userdbJsonUrl, newUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
