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
        <li class="comments__item" v-for="issue in issues" :key="issue.id">
          <comment :issue="issue" />
        </li>
      </ul>
    </div>
  </div>
  <div class="rep-date">
    {{formatDate}}
  </div>
</template>

<script>
import { user } from '../user'
import { toggler } from '../toggler'
import { comment } from '../comment'
import { months } from '../../helpers/months'

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
  data () {
    return {
      shown: false
    }
  },
  emits: ['loadIssues'],
  methods: {
    toggle (isOpened) {
      this.shown = isOpened

      if (isOpened && this.issues.length === 0) {
        this.$emit('loadIssues')
      }
    }
  },
  computed: {
    formatDate () {
      const date = this.repDate.split(/-|T/).splice(0, 3).reverse()
      const formatDate = `${date[0]} ${months[date[1] - 1]}`
      return formatDate
    }
  }
}
</script>

<style lang="scss" scoped src="./app-feed.scss"></style>
