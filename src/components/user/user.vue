<template>
  <div :class="getClasses()" @click="$emit('thisReadme')">
    <div class="user__photo">
      <avatar
        :src="avatar"
        alt="Фото пользователя"
        :type="type"
      />
    </div>
    <div class="name">
      {{ username }}
    </div>
  </div>
</template>

<script>
import { avatar } from '../avatar'
export default {
  components: {
    avatar
  },
  emits: ['thisReadme'],
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    type: String
  },
  methods: {
    getClasses () {
      const classes = {
        story: this.type === 'story',
        feed: this.type === 'small'
      }

      return classes
    }
  }
}
</script>

<style src="./user.scss" lang="scss" scoped></style>
