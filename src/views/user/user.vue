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
import { mapActions, mapState } from 'vuex'

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
  computed: {
    ...mapState({
      user: state => state.auth.user,
      starred: state => state.starred.starred,
      repos: state => state.user.repos
    })
  },
  methods: {
    ...mapActions({
      getUser: 'auth/getUser',
      getStarred: 'starred/getStarred',
      getRepos: 'user/getRepos'
    })
  },
  async created () {
    if (this.user === null) {
      await this.getUser()
    }
    if (this.starred === null) {
      await this.getStarred()
    }
    if (this.repos === null) {
      await this.getRepos()
    }
  }
}
</script>

<style src="./user.scss" lang="scss" scoped></style>
