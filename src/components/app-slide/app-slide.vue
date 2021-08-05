<template>
  <div class="slide">
    <div class="slide__header">
      <div class="slide__progress-bar">
        <progress-bar />
      </div>
      <div class="slide__user">
        <user
          type="small"
          :avatar="data.avatar"
          :username="data.username"
        />
      </div>
    </div>
    <div class="slide__body">
      <div class="slide__pic">
        <img :src="data.src" :alt="data.alt">
      </div>
      <div class="slide__text" v-html="data.text"></div>
    </div>
    <div class="slide__footer">
      <main-button green>
        <template #default>
          {{ btnText }}
        </template>
      </main-button>
    </div>
  </div>
</template>

<script>
import { progressBar } from '../progress-bar'
import { user } from '../user'
import { mainButton } from '../main-button'
export default {
  data () {
    return {
      btnText: 'Follow'
    }
  },
  components: {
    user,
    progressBar,
    mainButton
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style src="./app-slide.scss" lang="scss" scoped></style>
