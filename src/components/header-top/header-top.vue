<template>
  <a href="#" class="header__logo">
    <logo />
  </a>
  <nav class="header__nav">
    <button class="header__btn">
      <icon name="home" />
    </button>
    <button class="header__btn header__btn_avatar">
      <div class="header__avatar"></div>
    </button>
    <button class="header__btn">
      <icon name="logout" />
    </button>
  </nav>
</template>

<script>
import { logo } from '../logo'
import { icon } from '../../icons'
export default {
  components: {
    logo,
    icon
  }
}
</script>

<style src="./header-top.scss" lang="scss" scoped></style>
