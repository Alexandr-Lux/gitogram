<template>
  <div class="user">
    <div class="avatar">
      <img :src="src" alt="" />
    </div>
    <div class="name">
      {{ username }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
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

<style src="./user.scss" lang="scss" scoped></style>
