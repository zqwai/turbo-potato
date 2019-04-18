<template>
  <div class="container">
    <h1>Get User</h1>

    <div class="card"
    v-for="user_alias in User"
    :key="index">
      <div class="card-body">
        <h5 class="card-title">{{ user_alias.first_name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ user_alias.last_name}}</h6>
        <p class="card-text">{{ user_alias.email}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'client',
  data() {
    return {
      msg: 'Client page',
      User: [],
    };
  },
  mounted() {
    const userdbJsonUrl = 'http://localhost:3000/Userdb';
    axios.post(userdbJsonUrl)
    .then((response) => {
      console.log(response.data);
      this.User = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
};
</script>
