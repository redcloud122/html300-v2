<script>
import { toggleBorderMixin } from '@/mixins'

export default {
  props: {
    title: {
      type: String,
      default: 'Maple'
    },
    cost: {
      type: Number,
      default: 1000
    },
    description: {
      type: String,
      default: 'Default description: Best Dog!'
    }
  },
  data() {
    return {
      count: 0
    }
  },
  mixins: [toggleBorderMixin]
}
</script>

<template>
  <section :id="`${title}`" class="dog" v-on:click="toggleBorder($event)">
    <img :src="require(`../assets/${title}.jpg`)" :alt="`${title}'s picture'`" />
    <h3>{{ title[0].toUpperCase() + title.slice(1) }}</h3>
    <h6>Cost to Adopt: ${{ cost }}</h6>
    <p>{{ description }}</p>

    <button @click="count += 1">You liked me {{ count }}</button>
  </section>
</template>

<style lang="scss" scoped>
.dog {
  padding: 2rem;
  margin: 1.5rem auto;
  border: .1rem solid #2c3e50;

  h3 {
    margin-top: 1rem;
  }
}
</style>
