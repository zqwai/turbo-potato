<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/"  class="navbar-brand">Client </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/client" class="navbar-brand">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/client" class="navbar-brand">info</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    
</template>
<script>
export default {
    // name: 'appheader',
    data: () => {
      return{
        anther: '气味',
        current: ''
      } 
    }
}
</script>
