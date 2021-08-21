<template>
  <div class="profile">
    <avatar :src="avatar" type="profile" class="avatar" />
    <div class="info">
      <div class="login">{{ login }}</div>
      <div class="stats">
        <div class="repos">
          <span class="stats-num">{{ repos }}</span>
          <span class="stats-text">repositories</span>
        </div>
        <span class="stats-num">{{ starred }}</span>
        <router-link :to="{ name: 'following' }" class="link">
          <span class="stats-text">starred</span>
        </router-link>
      </div>
      <div class="name">{{ username }}</div>
    </div>
  </div>
</template>

<script>
import { avatar } from '../avatar'

export default {
  name: 'my-profile',
  components: { avatar },
  props: {
    avatar: String,
    login: String,
    username: String,
    repos: Number,
    starred: Number
  }
}
</script>

<style src="./my-profile.scss" lang="scss" scoped></style>
