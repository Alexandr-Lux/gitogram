<template>
  <button class="btn green">
    {{ text }}
  </button>
</template>

<script>
export default {
  data () {
    return {
      text: 'Follow'
    }
  }
}
</script>

<style src="./green-button.scss" lang="scss" scoped></style>
