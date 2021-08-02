<template>
  <div :class="['avatar', getClasses()]">
    <img v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  props: {
    type: String
  },
  methods: {
    getClasses () {
      const classes = {
        story: this.type === 'story',
        small: this.type === 'small',
        userIcon: this.type === 'userIcon'
      }

      return classes
    }
  }
}
</script>

<style src="./avatar.scss" lang="scss" scoped></style>
