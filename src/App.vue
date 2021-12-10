<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><span>00</span> Home</router-link> |
      <router-link 
      to="/destination"><span>01</span> Destination</router-link>
      <router-link to="/crew"><span>02</span>  Crew</router-link>
      <router-link to="/technology"><span>03</span> Technology</router-link>
    </div>
    <router-view />
  </div>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: url('./assets/home/background-home-desktop.jpg');
  height: 100vh;
}

#nav {
  padding: 30px;
  color: white;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: white;
    }
  }

}
#gens,
#tech,
#dest {
  height: 40vh;
}
</style>
