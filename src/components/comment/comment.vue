<template>
  <div class="comment">
    <p v-if="issue.no_issue">
      <span class="red-text bold">{{ issue.no_issue }}</span>
    </p>
    <p v-else>
      <span class="username">{{ issue.user.login }}</span>
      <span v-if="issue.body">{{ issue.body }}</span>
      <span v-else class="red-text">There is no text for this issue</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    issue: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./comment.scss"></style>
