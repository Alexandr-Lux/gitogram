<template>
  <div class="feed__header">
    <user />
  </div>
  <div class="feed__content">
    <slot name="feed-content" />
  </div>
  <div class="issues">
    <toggler />
  </div>
</template>

<script>
import { user } from '../user'
import { toggler } from '../toggler'
export default {
  components: {
    user,
    toggler
  }
}
</script>

<style lang="scss" scoped src="./app-feed.scss"></style>
