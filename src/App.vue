<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">What we do</router-link>
      <router-link to="/digital-divide">The digital divide</router-link>
      <router-link to="/get-involved">Get Involved</router-link>
      <router-link to="/our-network">Our Network</router-link>
      <router-link to="/insights">Insights</router-link>
    </nav>
  </div>

  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  width: 100%;
  height: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 5px 0 5px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
