<template>
  <button :class="['toggler__btn', { 'active': isOpened }]" @click="changeVisability">
    <span class="toggler__text">{{ isOpened ? 'Hide' : 'Show' }} issues</span>
    <span class="toggler__icon">
      <icon name='triangle'/>
    </span>
  </button>
</template>

<script>
export default {
  emits: ['onToggle'],
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    changeVisability () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style src="./toggler.scss" lang="scss" scoped></style>
