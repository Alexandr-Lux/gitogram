<template>
  <div :class="['slide', { active }]">
    <div class="slide-wrapper">
      <div class="slide__header">
        <div class="slide__progress-bar">
          <progress-bar :active="active" :startProgress="startProgress" @onFinish="$emit('onProgressFinish')"/>
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
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="info" v-else>
          <div v-if="data.content" class="content" v-html="data.content"></div>
          <placeholder v-else :paragraphs="2" />
        </div>
      </div>
      <div class="slide__footer">
        <main-button
          :theme="data.following.status ? 'grey' : 'green'"
          @click="$emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)"
        >
          <template #default>
            <span v-if="data.following.loading">
              <spinner />
            </span>
            <span v-else>{{data.following.status ? 'Unfollow' : 'Follow'}}</span>
          </template>
        </main-button>
      </div>
      <template v-if="active">
        <button class="arrow arrow-prev" v-if="navBtns.includes('prev')" @click="$emit('clickPrev')">
          <span class="icon">
            <icon name="arrow" />
          </span>
        </button>
        <button class="arrow arrow-next" v-if="navBtns.includes('next')" @click="$emit('clickNext')">
          <span class="icon">
            <icon name="arrow" />
          </span>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { progressBar } from '../progress-bar'
import { user } from '../user'
import { mainButton } from '../main-button'
import { icon } from '../icons'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'
export default {
  components: {
    user,
    progressBar,
    mainButton,
    icon,
    placeholder,
    spinner
  },
  emits: ['clickPrev', 'clickNext', 'onProgressFinish', 'onFollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    startProgress: Boolean,
    navBtns: {
      type: Array,
      default: () => ['prev', 'next']
    },
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style src="./slide-item.scss" lang="scss" scoped></style>
