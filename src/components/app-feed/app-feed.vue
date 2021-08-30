<template>
  <div class="user">
    <user :username="username" :avatar="avatar" type="small" />
  </div>
  <div class="content">
    <slot name="repository" />
  </div>
  <div class="issues">
    <issues :issues="issues" @loadIssues="$emit('getIssues')" />
  </div>
  <div class="rep-date">
    {{ formatDate }}
  </div>
</template>

<script>
import { user } from '../user'
import { issues } from '../issues'
import { months } from '../../helpers/months'

export default {
  components: {
    user,
    issues
  },
  emits: ['getIssues'],
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    issues: {
      type: Array,
      required: true
    },
    repDate: {
      type: String,
      required: true
    }
  },
  computed: {
    formatDate () {
      const date = this.repDate.split(/-|T/).splice(0, 3).reverse()
      const formatDate = `${date[0]} ${months[date[1] - 1]} ${date[2]}`
      return formatDate
    }
  }
}
</script>

<style lang="scss" scoped src="./app-feed.scss"></style>
