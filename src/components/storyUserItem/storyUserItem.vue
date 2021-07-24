<template>
  <button class="story-user-item">
    <div class="avatar">
      <div class="avatar__wrapper">
        <img :src="avatar" class="img" alt="avatar" />
      </div>
    </div>
    <div class="username">
      {{ username }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./storyUserItem.scss" lang="scss" scoped></style>
