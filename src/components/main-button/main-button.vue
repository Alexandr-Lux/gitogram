<template>
  <button :class="['btn', { green, grey }]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    green: Boolean,
    grey: Boolean
  }
}
</script>

<style src="./main-button.scss" lang="scss" scoped></style>
