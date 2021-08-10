<template>
  <div class="wrapper">
    <div class="app-header">
      <app-header>
        <template #top>
          <header-top />
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories__item" v-for="item in data" :key="item.id">
              <user
                :avatar="item.owner.avatar_url"
                :username="item.owner.login"
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
          <li class="feeds__item" v-for="item in data" :key="item.id">
            <app-feed :username="item.owner.login" :avatar="item.owner.avatar_url">
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
import { appHeader } from '../../components/app-header'
import { appFeed } from '../../components/app-feed'
import { headerTop } from '../../components/header-top'
import { user } from '../../components/user'
import { repContent } from '../../components/rep-content'
import { mapState, mapActions } from 'vuex'

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
    ...mapState(['data'])
  },
  methods: {
    ...mapActions(['getData']),
    getFeedData (item) {
      return {
        title: item.name,
        description: item.description,
        stars: item.stargazers_count,
        forks: item.forks
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style src="./root.scss" lang="scss" scoped></style>
