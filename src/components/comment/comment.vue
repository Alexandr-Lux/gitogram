<template>
  <div class="comment">
    <p>
      <span class="username">{{issueAuthor}}</span>
      {{ issueText }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    issueAuthor: {
      type: String,
      required: true
    },
    issueText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./comment.scss"></style>
