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
import { mapState, mapActions } from 'vuex'

import { repContent } from '../../components/rep-content'

export default {
  name: 'repos',
  components: { repContent },
  computed: {
    ...mapState({
      repos: state => state.user.repos
    })
  },
  methods: {
    ...mapActions({
      getRepos: 'user/getRepos'
    })
  },
  async created () {
    if (this.repos === null) {
      await this.getRepos()
    }
  }
}
</script>

<style src="./repos.scss" lang="scss" scoped></style>
