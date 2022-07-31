<template>
  <div class="home">
    <aside>
      <h5>{{ message }}</h5>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nihil. Tempora deleniti repudiandae quisquam dicta nemo aspernatur nisi iusto aliquid vero odio error atque minima quo necessitatibus dolorum deserunt dolor mollitia, ut nam nihil possimus dolore quis! Voluptatum, fugiat fugit?</p>
    </aside>

    <article>
      <h5>{{ message }}</h5>

      <p>Main Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nihil. Tempora deleniti repudiandae quisquam dicta nemo aspernatur nisi iusto aliquid vero odio error atque minima quo necessitatibus dolorum deserunt dolor mollitia, ut nam nihil possimus dolore quis! Voluptatum, fugiat fugit?</p>

      <p>This is a tooltip <a href="javascript:void(0);" data-toggle="popover" data-placement="top" data-trigger="hover" title="Hover Popover" data-content="This popover appears on rollover">popover</a> on hover.</p>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  props: ['message']
}
</script>

