<template>
  <div class="wrapper">
    <div class="app-header">
      <app-header>
        <template #top>
          <header-top v-if="user" :userAvatar="user.avatar_url"/>
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories__item" v-for="item in trendings" :key="item.id">
              <user
                :avatar="item.owner?.avatar_url"
                :username="item.owner?.login"
                type="story"
                @thisReadme="$router.push({
                  name: 'stories',
                  params: {
                    initialSlide: item.id
                  }
                })"
              />
            </li>
          </ul>
        </template>
      </app-header>
    </div>
    <div class="app-feed">
      <div class="container container_small">
        <ul class="feeds">
          <li class="feeds__item" v-for="item in starred" :key="item.id">
            <app-feed
              :username="item.owner.login"
              :avatar="item.owner.avatar_url"
              :issues="item.issues ? item.issues : []"
              :repDate="item.created_at"
              @getIssues="getIssues({
                id: item.id,
                owner: item.owner.login,
                repo: item.name })"
            >
              <template #repository>
                <rep-content v-bind="getFeedData(item)"/>
              </template>
            </app-feed>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { appHeader } from '../../components/app-header'
import { appFeed } from '../../components/app-feed'
import { headerTop } from '../../components/header-top'
import { user } from '../../components/user'
import { repContent } from '../../components/rep-content'

export default {
  name: 'root',
  components: {
    appHeader,
    appFeed,
    user,
    headerTop,
    repContent
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.trendings,
      user: state => state.auth.user,
      starred: state => state.starred.starred
    })
  },
  methods: {
    ...mapActions({
      getTrendings: 'trendings/getTrendings',
      getIssues: 'starred/getIssues',
      getUser: 'auth/getUser',
      getStarred: 'starred/getStarred'
    }),
    getFeedData (item) {
      return {
        title: item.name,
        description: item.description,
        stars: item.stargazers_count,
        forks: item.forks
      }
    }
  },
  async created () {
    if (this.user === null) {
      await this.getUser()
    }
  },
  async mounted () {
    if (this.starred === null) {
      await this.getStarred()
    }
    if (this.trendings.length === 0) {
      await this.getTrendings()
    }
  }
}
</script>

<style src="./root.scss" lang="scss" scoped></style>
