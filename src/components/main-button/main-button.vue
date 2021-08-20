<template>
  <button :class="['btn', `${theme}`, `${size}`]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true
    },
    size: String
  }
}
</script>

<style src="./main-button.scss" lang="scss" scoped></style>
