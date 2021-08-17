<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header-content">
          <button class="header__logo" @click="$router.push({ name: 'root' })">
            <icon name="logo" />
          </button>
          <button class="close" @click="$router.push({ name: 'root' })">
            <icon name="close" />
          </button>
        </div>
      </div>
    </header>
    <div class="app-slider">
      <app-slider :initialSlide="Number($route.params.initialSlide)" @noMoreSlides="$router.push('/')"/>
    </div>
  </div>
</template>

<script>
import { icon } from '../../components/icons'
import { appSlider } from '../../components/app-slider'
export default {
  components: {
    icon,
    appSlider
  }
}
</script>

<style lang="scss" scoped src="./stories.scss"></style>
