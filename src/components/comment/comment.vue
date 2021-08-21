<template>
  <div class="comment">
    <p v-if="empty">
      <span class="red-text bold">{{ empty }}</span>
    </p>
    <p v-else>
      <span class="username">{{ login }}</span>
      <span v-if="body">{{ body }}</span>
      <span v-else class="red-text">There is no text for this issue</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    body: String,
    login: String,
    empty: String
  }
}
</script>

<style lang="scss" scoped src="./comment.scss"></style>
