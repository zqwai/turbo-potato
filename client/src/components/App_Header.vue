<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/"  class="navbar-brand">Client </router-link>
  <button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarColor02"
  aria-controls="navbarColor02"
  aria-expanded="false"
  aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/client"
          class="nav-link">
          client
          </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/user"
          class="nav-link">
          user
          </router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"
        href="#" id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

          <router-link to="/"
          class="dropdown-item">Home
          <span class="sr-only">(current)</span>
          </router-link>

          <router-link to="/client"
          class="dropdown-item">
          info
          </router-link>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>
<script>
export default {
  // name: 'appheader',
  data() {
    return {
      anther: '气味',
      // current: '',
    };
  },
};
</script>
