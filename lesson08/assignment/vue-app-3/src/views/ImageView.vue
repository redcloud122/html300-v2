<template>
  <div class="image">
    <aside>
      <h5>Image</h5>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nihil. Tempora deleniti repudiandae quisquam dicta nemo aspernatur nisi iusto aliquid vero odio error atque minima quo necessitatibus dolorum deserunt dolor mollitia, ut nam nihil possimus dolore quis! Voluptatum, fugiat fugit?</p>
    </aside>

    <article>
      <h5>Here are all of our Dogs!</h5>

      <section v-if="dogs">
        <Dog
          v-for="dog in dogs"
          v-bind:key="dog.id"
          v-bind:title="dog.title"
          v-bind:cost="dog.cost"
          v-bind:description="dog.description"
        />
      </section>
    </article>
  </div>
</template>

<script>
import Dog from '../components/Dog.vue'

export default {
  components: {
    Dog
  },
  data () {
    return {
      dogs: [
        {id: 1, title: 'jack' },  // prop validation test case
        {id: 2, title: 'maximus', cost: 200, description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae' },
        {id: 3, title: "piper", cost: 300, description: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
        {id: 4, title: "poppy", cost: 400, description: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
        {id: 5, title: "stella", cost: 500, description: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"},
        {id: 6, title: "duffy", cost: 600, description: "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"}
      ]
    }
  }
};
</script>
