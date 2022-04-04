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
        <div
          class="drawer-background"
          :class="{ show: active.drawer }"
          @click="closeDrawer()"
        />
        <Logo />
        <i class="fa-solid fa-bars" @click="openDrawer()"></i>
        <nav :class="{ show: active.drawer }">
          <div class="drawer-close" @click="closeDrawer()">x</div>

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
  data() {
    return {
      active: {
        drawer: false,
      },
    };
  },

  // this initiates the getLocalStorage function on page load
  mounted() {
    this.$store.commit("updateOptionFromStorage");
  },

  methods: {
    openDrawer() {
      this.active.drawer = true;
    },

    closeDrawer() {
      this.active.drawer = false;
    },
  },
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
    border-left: 0px;
  }
  .learn {
    border-bottom: 2px solid rgb(58, 90, 6);
    border-right: 0px !important;
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

.fa-bars {
  display: none;
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

.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display 0.5s;

  &.show {
    display: block;
  }
}
.drawer-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid grey;
  color: grey;
  width: 80px;
  float: right;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-self: end;

  &:hover {
    background-color: lightgrey;
  }
}
@media (max-width: 1010px) {
  nav {
    width: 95vw;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: -105vw;
    padding: 15px;
    transition: left 0.5s;
    z-index: 101;
    overflow: scroll;
    display: flex;
    flex-direction: column;

    &.show {
      left: 0;
    }

    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      margin: 0 8px 0 8px;
      margin-bottom: 1rem;
      font-size: 20px;
      padding: 15px;

      &.router-link-exact-active {
        color: #fff;
        background-color: #316983;
      }
    }
  }

  .drawer-close {
    display: flex;
    margin-right: 7px;
    margin-bottom: 2rem;
  }

  .fa-bars {
    display: block;
    font-size: 33px;
  }
}
.align {
  text-align: left;
  margin-top: 2rem;
}
</style>
