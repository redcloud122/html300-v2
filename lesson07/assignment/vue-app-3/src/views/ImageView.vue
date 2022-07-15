<template>
  <div class="image">
    <aside>
      <h5>Image</h5>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nihil. Tempora deleniti repudiandae quisquam dicta nemo aspernatur nisi iusto aliquid vero odio error atque minima quo necessitatibus dolorum deserunt dolor mollitia, ut nam nihil possimus dolore quis! Voluptatum, fugiat fugit?</p>
    </aside>

    <article>
      <h5>Image</h5>

      <div class="imgDiv">
        <img
          v-for="item in images"
          v-bind:key="item"
          :src="require('../assets/' + item + '.jpg')"
        />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["jack", "maximus", "piper", "poppy", "stella", "duffy"],
    };
  },
};
</script>

<style scoped>

  .imgDiv {
    text-align: center;
  }

  img {
    border-radius: 50%;
    padding: 40px;
  }
</style>