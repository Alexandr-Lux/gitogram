<template>
  <h2 class="title">{{ data.title }}</h2>
  <div class="info">
    <p>
      {{ data.description }}
    </p>
  </div>
  <div class="controls">
    <controls :stars="data.stars" :forks="data.forks" />
  </div>
</template>

<script>
import { controls } from '../controls'
export default {
  components: {
    controls
  },
  props: {
    data: {
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
}
</script>

<style src="./repContent.scss" lang="scss" scoped></style>
