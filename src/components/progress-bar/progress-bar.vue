<template>
  <div :class="{active: active && startProgress}" class="line">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    startProgress: Boolean
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style src="./progress-bar.scss" lang="scss" scoped></style>
