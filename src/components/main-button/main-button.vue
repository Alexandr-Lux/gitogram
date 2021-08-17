<template>
  <button :class="['btn', `${theme}`]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    theme: String
  }
}
</script>

<style src="./main-button.scss" lang="scss" scoped></style>
