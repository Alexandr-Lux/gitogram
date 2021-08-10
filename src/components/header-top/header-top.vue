<template>
  <div class="header-top">
    <button class="header__logo">
      <icon name="logo"/>
    </button>
    <nav class="header__nav">
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
  components: {
    avatar
  }
}
</script>

<style src="./header-top.scss" lang="scss" scoped></style>
