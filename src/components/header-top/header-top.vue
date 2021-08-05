<template>
  <div class="header-top">
    <a href="#" class="header__logo" :style="getColor()">
      <icon name="logo"/>
    </a>
    <nav class="header__nav" v-if="theme==='light'">
      <button class="header__btn">
        <icon name="home" />
      </button>
      <button class="header__btn header__btn_avatar">
        <avatar src="https://picsum.photos/300" type="userIcon" alt="Фото пользователя" class="header__avatar"></avatar>
      </button>
      <button class="header__btn">
        <icon name="logout" />
      </button>
    </nav>
  </div>
</template>

<script>
import { avatar } from '../avatar'
export default {
  props: {
    theme: String
  },
  components: {
    avatar
  },
  methods: {
    getColor () {
      if (this.theme === 'light') {
        return 'color: #000'
      } else if (this.theme === 'dark') {
        return 'color: #fff'
      }
    }
  }
}
</script>

<style src="./header-top.scss" lang="scss" scoped></style>
