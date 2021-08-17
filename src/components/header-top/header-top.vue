<template>
  <div class="header-top">
    <button class="header__logo" @click="$router.push({ name: 'root' })">
      <icon name="logo"/>
    </button>
    <nav class="header__nav">
      <button class="header__btn" @click="$router.push({ name: 'root' })">
        <icon name="home" />
      </button>
      <button class="header__btn header__btn_avatar">
        <avatar :src="userAvatar" type="userIcon" class="header__avatar"></avatar>
      </button>
      <button class="header__btn">
        <icon name="logout" @click="exit" />
      </button>
    </nav>
  </div>
</template>

<script>
import { avatar } from '../avatar'

export default {
  components: {
    avatar
  },
  props: {
    userAvatar: {
      type: String,
      required: true
    }
  },
  methods: {
    exit () {
      localStorage.removeItem('token')
      this.$router.replace({ name: 'auth' })
      window.location.reload()
    }
  }
}
</script>

<style src="./header-top.scss" lang="scss" scoped></style>
