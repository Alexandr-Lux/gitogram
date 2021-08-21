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
import { useStore } from 'vuex'
import { computed } from 'vue'

import { subscriber } from '../../components/subscriber'

export default {
  name: 'following',
  components: { subscriber },

  setup () {
    const { state, dispatch } = useStore()

    const starred = computed(() => state.starred.starred)

    const unFollow = (id) => {
      dispatch('starred/unFollow', id)
    }
    const getStarred = async () => {
      await dispatch('starred/getStarred')
    }

    return {
      starred,
      unFollow,
      getStarred
    }
  }
}
</script>

<style src="./following.scss" lang="scss" scoped></style>
