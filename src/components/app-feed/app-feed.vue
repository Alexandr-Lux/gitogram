<template>
  <div class="user">
    <user :username="username" :avatar="avatar" type="small" />
  </div>
  <div class="content">
    <slot name="repository" />
  </div>
  <div class="issues">
    <toggler @on-toggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments__list">
        <li class="comments__item" v-for="item in 3" :key="item">
          <comment username="Vasya Pupkin" text="Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития." />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { user } from '../user'
import { toggler } from '../toggler'
import { comment } from '../comment'
export default {
  components: {
    user,
    toggler,
    comment
  },
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./app-feed.scss"></style>
