<template>
  <div id="app">
    <header>
      <img src="./assets/ContosoCompanyLogo.jpg" alt="Logo" width="100" />
      <h1>The Contoso Company</h1>
    </header>

    <nav>
      <div>
        <router-link @click.native="incrementVisitStats" to="/">Home</router-link>
        <router-link @click.native="incrementVisitStats" to="/image">Image</router-link>
        <router-link @click.native="incrementVisitStats" to="/accordion">Accordion</router-link>
        <router-link @click.native="incrementVisitStats" to="/grid">Grid</router-link>
      </div>

      <div id="visit-stats">
        <button id="hide-show" @click="toggleShow">{{ button.text }}# of page visits:</button>
        <span><p v-if="show">{{ counter }}</p></span>
      </div>
    </nav>

    <main>
      <router-view :message="pageName"></router-view>
    </main>

    <footer><p>Footer</p></footer>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {

  },
  data() {
    return {
      pageName: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1),
      counter: 1,
      show: false,
      button: {
        text: 'Show '
      },
    }
  },
  methods: {
    incrementVisitStats() {
      this.counter++;
    },
    toggleShow() {
      this.show = !this.show;
      this.button.text = this.show ? 'Hide ' : 'Show ';
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
