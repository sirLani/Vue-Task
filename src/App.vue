<template>
  <div class="container">
    <div class="header">
      <div class="top-header">
        <div class="inner-container">
          <div class="top-header-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>Search</p>
          </div>

          <div class="top-header-joined-btn">
            <div class="top-header-btn learn">
              <p>Learn</p>
            </div>
            <div class="top-header-btn donate">
              <p>Donate</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-header">
        <Logo />
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">What we do</router-link>
          <router-link to="/digital-divide">The digital divide</router-link>
          <router-link to="/get-involved">Get Involved</router-link>
          <router-link to="/our-network">Our Network</router-link>
          <router-link to="/insights">Insights</router-link>
        </nav>
      </div>
    </div>
  </div>

  <router-view />
</template>

<script>
import Logo from "./components/Logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>

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
  height: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 8px 0 8px;

    &.router-link-exact-active {
      color: #316983;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.header {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 10px;

  .bottom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0 15px 0;
  }
  .donate {
    color: white;
    background: rgb(170, 35, 35);
  }
  .learn {
    border-bottom: 2px solid rgb(58, 90, 6);
  }

  .top-header-btn {
    display: flex;
    align-items: center;
    border-left: 1px solid rgb(212, 210, 210);
    border-right: 1px solid rgb(212, 210, 210);
    padding: 5px 8px;
    width: 95px;
    justify-content: center;
    font-weight: bold;

    .fa-magnifying-glass {
      margin-right: 5px;
    }
  }
}

.top-header {
  border-bottom: 1px solid rgb(212, 210, 210);

  .inner-container {
    display: flex;
    justify-content: space-between;
  }
  .top-header-joined-btn {
    display: flex;
  }
}

.inner-container {
  width: 90%;
  margin: 0 auto;
}
</style>
