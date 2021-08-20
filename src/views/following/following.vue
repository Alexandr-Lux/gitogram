<template>
  <div class="head">
    <h2 class="title">Following</h2>
    <div class="count" v-if="starred">{{ starred.length }}</div>
  </div>
  <ul class="following-list">
    <li class="following-item" v-for="item in starred" :key="item.id">
      <subscriber
        :avatar="item.owner?.avatar_url"
        :title="item.full_name"
        :type="item.owner.type"
        :id="item.id"
        @onUnFollow="unFollow(item.id)"
      />
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { subscriber } from '../../components/subscriber'

export default {
  name: 'following',
  components: { subscriber },
  computed: {
    ...mapState({
      starred: state => state.starred.starred
    })
  },
  emits: ['go'],
  methods: {
    ...mapActions({
      getStarred: 'starred/getStarred',
      unFollow: 'starred/unFollow'
    })
  },
  async created () {
    await this.getStarred()
  }
}
</script>

<style src="./following.scss" lang="scss" scoped></style>
