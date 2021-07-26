<template>
  <div class="comment">
    <p>
      <span class="username">{{username}}</span>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./comment.scss"></style>
