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
        @onUnFollow="unFollow(item)"
      />
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

import { subscriber } from '../../components/subscriber'

export default {
  name: 'following',
  components: { subscriber },

  setup () {
    const { state, dispatch, commit } = useStore()

    const starred = computed(() => state.starred.starred)

    onMounted(() => {
      dispatch('trendings/getTrendings')
    })

    const unFollow = async (repo) => {
      await dispatch('trendings/unStarRepo', repo.id)
      console.log(repo.id)
      commit('starred/DELETE_STAR', repo)
    }

    return {
      starred,
      unFollow
    }
  }
}
</script>

<style src="./following.scss" lang="scss" scoped></style>
