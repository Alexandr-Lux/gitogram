<template>
  <div class="controls">
    <button class="btn btn_l">
      <div class="icon icon-star">
        <icon name="star" />
      </div>
      <span class="title">Star</span>
    </button>
    <div class="counter counter_l">{{ stars }}</div>
    <button class="btn">
      <div class="icon icon-fork">
        <icon name="fork" />
      </div>
      <span class="title"><b>Fork</b></span>
    </button>
    <div class="counter counter_r"><b>{{ forks }}</b></div>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>

<style src="./controls.scss" lang="scss" scoped></style>
