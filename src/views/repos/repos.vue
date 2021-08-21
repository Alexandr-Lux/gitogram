<template>
  <div class="head">
    <h2 class="title">Repositories</h2>
    <div class="count" v-if="repos">{{ repos.length }}</div>
  </div>
  <div class="body">
    <ul class="repos-list">
      <li class="repos-item" v-for="item in repos" :key="item.id">
        <rep-content
          :stars="item.stargazers_count"
          :forks="item.forks"
          :title="item.name"
          :description="item.description"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

import { repContent } from '../../components/rep-content'

export default {
  name: 'repos',
  components: { repContent },

  setup () {
    const { state, dispatch } = useStore()

    const repos = computed(() => state.user.repos)

    const getRepos = async () => {
      if (repos.value === null) {
        await dispatch('user/getRepos')
      }
    }

    return {
      getRepos,
      repos
    }
  }
}
</script>

<style src="./repos.scss" lang="scss" scoped></style>
