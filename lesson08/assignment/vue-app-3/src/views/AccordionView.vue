<template>
  <div class="accordion">
    <aside>
      <h5>Accordion</h5>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nihil. Tempora deleniti repudiandae quisquam dicta nemo aspernatur nisi iusto aliquid vero odio error atque minima quo necessitatibus dolorum deserunt dolor mollitia, ut nam nihil possimus dolore quis! Voluptatum, fugiat fugit?</p>
    </aside>

    <article>
      <b-row>
        <b-col cols="2">
          <b-button class="mr-2" variant="primary" @click="openAll">Open All</b-button>
        </b-col>

        <b-col cols="2">
          <b-button class="mr-2" variant="primary" @click="closeAll">Close All</b-button>
        </b-col>
      </b-row>

      <hr />

      <b-row v-for="(item, index) in details" :key="index">
        <b-col>
           <b-button @click="item.show = !item.show">{{ item.title }}</b-button>

           <b-collapse v-model="item.show" id="'collapse-inner-' + index">
              <b-card>{{ item.content }}</b-card>
           </b-collapse>
        </b-col>
      </b-row>
    </article>
  </div>
</template>

<script>

export default {
  data () {
    return {
      details:[
        {
          title: 'Card One',
          content: 'Card 1 Anim pariatur cliche reprehenderit, enim eiusmod high 3 wolf.',
          show: false
        },
        {
          title: 'Card Two',
          content: 'Card 2 Anim pariatur cliche  3 wolf moon officia aute, non cupidatat skateboard dolor eiusmod.',
          show: false
        },
        {
          title: 'Card Three',
          content: 'Card 3 Anim pariatur cliche reprehenderit, enim eiusmod high lifeicia aute, non cupidatat skateboard dolor eiusmod.',
          show: false
        }
      ]
    }
  },
  methods: {
    openAll() {
      this.details.forEach(item => {
        item.show = true;
      })
    },

    closeAll() {
      this.details.forEach(item => {
        item.show = false;
      })
    }
  }
}
</script>

<style scoped>
  .row {
    padding-bottom: 2rem;
  }

  button {
    width: 160px;
  }

  hr {
    margin-top: 0;
  }
</style>