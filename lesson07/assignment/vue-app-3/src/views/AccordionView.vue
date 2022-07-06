<template>
  <div class="accordion">
    <aside>
      <h5>Accordion</h5>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nihil. Tempora deleniti repudiandae quisquam dicta nemo aspernatur nisi iusto aliquid vero odio error atque minima quo necessitatibus dolorum deserunt dolor mollitia, ut nam nihil possimus dolore quis! Voluptatum, fugiat fugit?</p>
    </aside>

    <article>
      <div :key="index" v-for="(item, index) in details" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle="'accordion-' + index" variant="link">{{ item.title }}</b-button>
          </b-card-header>

          <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ item.content }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
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
          content: 'Card 1 Anim pariatur cliche reprehenderit, enim eiusmod high 3 wolf.'
        },
        {
          title: 'Card Two',
          content: 'Card 2 Anim pariatur cliche  3 wolf moon officia aute, non cupidatat skateboard dolor eiusmod.'
        },
        {
          title: 'Card Three',
          content: 'Card 3 Anim pariatur cliche reprehenderit, enim eiusmod high lifeicia aute, non cupidatat skateboard dolor eiusmod.'
        }
      ]
    }
  }
}
</script>
