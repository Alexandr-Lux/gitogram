<template>
  <div class="rep-content">
    <h2 class="title">{{ title }}</h2>
    <div class="info">
      <p v-if="description">
        {{ description }}
      </p>
    </div>
    <div class="controls">
      <controls :stars="stars" :forks="forks" />
    </div>
  </div>
</template>

<script>
import { controls } from '../controls'
export default {
  name: 'repContent',
  components: {
    controls
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }
}
</script>

<style src="./rep-content.scss" lang="scss" scoped></style>
