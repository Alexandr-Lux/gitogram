<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
        <slot name="top" />
      </div>
      <div class="header__content" v-if="$slots.content">
        <slot name="content" />
      </div>
    </div>
  </header>
</template>

<style scoped lang='scss' src="./app-header.scss"></style>
