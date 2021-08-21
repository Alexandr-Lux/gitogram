<template>
  <div class="toggler">
    <toggler @toggle="toggle" />
  </div>
  <div class="comments" v-if="shown">
    <ul class="comments__list">
      <li class="comments__item" v-for="issue in issues" :key="issue.id">
        <comment
          :login="issue.user.login"
          :body="issue.body"
          :empty="issue.no_issue"
        />
      </li>
    </ul>
  </div>
</template>

<script>

import { toggler } from '../toggler'
import { comment } from '../comment'

export default {
  components: {
    toggler,
    comment
  },
  data () {
    return {
      shown: false
    }
  },
  props: {
    issues: Array
  },
  emits: ['loadIssues'],
  methods: {
    toggle (isOpened) {
      this.shown = isOpened

      if (isOpened && this.issues.length === 0) {
        this.$emit('loadIssues')
      }
    }
  }
}
</script>

<style src="./issues.scss" lang="scss" scoped></style>
