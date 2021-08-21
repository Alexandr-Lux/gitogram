<template>
  <div class="wrapper">
    <div class="app-header">
      <app-header>
        <template #top>
          <header-top v-if="user" :userAvatar="user.avatar_url"/>
        </template>
      </app-header>
    </div>
    <div class="container">
      <div class="user">
        <div class="my-profile">
          <h2 class="title">My profile</h2>
          <my-profile
            v-if="user && starred && repos"
            :avatar="user.avatar_url"
            :login="user.login"
            :username="user.name"
            :repos="repos.length"
            :starred="starred.length"
          />
        </div>
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

import { headerTop } from '../../components/header-top'
import { appHeader } from '../../components/app-header'
import { myProfile } from '../../components/my-profile'

export default {
  name: 'user',
  components: {
    headerTop,
    appHeader,
    myProfile
  },

  setup () {
    const { state, dispatch } = useStore()

    const user = computed(() => state.auth.user)
    const starred = computed(() => state.starred.starred)
    const repos = computed(() => state.user.repos)

    onMounted(() => {
      if (user.value === null) {
        dispatch('auth/getUser')
      }
      if (starred.value === null) {
        dispatch('starred/getStarred')
      }
      if (repos.value === null) {
        dispatch('user/getRepos')
      }
    })

    return {
      user,
      starred,
      repos
    }
  }
}
</script>

<style src="./user.scss" lang="scss" scoped></style>
