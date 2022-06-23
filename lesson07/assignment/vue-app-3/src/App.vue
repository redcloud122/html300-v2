<template>
  <div id="app">
    <ComponentHeader />

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/image">Image</router-link>
      <router-link to="/accordion">Accordion</router-link>
      <router-link to="/grid">Grid</router-link>
    </nav>

    <main>
      <router-view />
    </main>

    <ComponentFooter />
  </div>
</template>

<script>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentFooter from "./components/ComponentFooter.vue";

export default {
  name: "App",
  components: {
    ComponentHeader,
    ComponentFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
