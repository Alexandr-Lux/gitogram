<template>
  <div class="subscriber">
    <div class="info">
      <avatar :src="avatar" type="following" class="user-avatar" v-if="isAvatar()" />
      <div class="rep-data">
        <div class="rep-title">{{ title }}</div>
        <div class="user-type">{{ type }}</div>
      </div>
    </div>
    <div class="follow-btn">
      <main-button size="small" theme="grey" @click="$emit('onUnFollow', id)">
        Unfollow
      </main-button>
    </div>
  </div>
</template>

<script>
import { avatar } from '../avatar'
import { mainButton } from '../main-button'

export default {
  name: 'subscriber',
  components: { avatar, mainButton },
  emits: ['onUnFollow'],
  props: {
    avatar: String,
    title: String,
    type: String,
    id: Number
  },
  methods: {
    isAvatar () {
      if (window.innerWidth > 480) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style src="./subscriber.scss" lang="scss" scoped></style>
