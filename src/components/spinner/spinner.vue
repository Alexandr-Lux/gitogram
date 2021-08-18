<template>
  <div :class="['spinner', { btn }]">
    <icon name="spinner" />
  </div>
</template>

<script>
import { icon } from '../../components/icons'
export default {
  components: { icon },
  props: {
    btn: Boolean
  }
}
</script>

<style lang="scss" scoped src="./spinner.scss"></style>
