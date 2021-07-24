<template>
  <button :class="['toggler__btn', { 'active': idOpened }]" @click="toggle">
    <span class="toggler__text">{{isOpened ? 'Hide' : 'Show'}} issues</span>
    <span class="toggler__icon">
      <icon name='triangle'/>
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  data () {
    return {
      idOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style src="./toggler.scss" lang="scss" scoped></style>
