<template>
  <div class="image">
    <aside>
      <h5>Image Aside</h5>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nihil. Tempora deleniti repudiandae quisquam dicta nemo aspernatur nisi iusto aliquid vero odio error atque minima quo necessitatibus dolorum deserunt dolor mollitia, ut nam nihil possimus dolore quis! Voluptatum, fugiat fugit?</p>
    </aside>

    <article>
      <h5>Image Article</h5>

      <div>
        <!-- <p>Hello Image!!!</p> -->
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
  img {
    width: 350px;
    border-radius: 50%;
    padding: 20px 30px 20px 20px;
  }
</style>