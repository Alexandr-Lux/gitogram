<template>
  <div class="app-header">
    <app-header>
      <template #top>
        <header-top />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
            ></story-user-item>
          </li>
        </ul>
      </template>
    </app-header>
  </div>
  <div class="app-feed">
    <div class="container container_small">
      <ul class="feeds">
        <li class="feeds__item">
          <app-feed username="Петя" src="https://picsum.photos/id/832/300">
            <template #repository>
              <rep-content :data="repositoryData"/>
            </template>
          </app-feed>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { appHeader } from '../../components/app-header'
import { appFeed } from '../../components/app-feed'
import { headerTop } from '../../components/header-top'
import { storyUserItem } from '../../components/storyUserItem'
import { repContent } from '../../components/repContent'
import stories from './data.json'

export default {
  name: 'root',
  components: {
    appHeader,
    appFeed,
    storyUserItem,
    headerTop,
    repContent
  },
  data () {
    return {
      stories,
      repositoryData: {
        title: 'Vue.js',
        description: 'JavaScript framework for building interactive web applications',
        stars: 156,
        forks: 41
      }
    }
  }
}
</script>

<style src="./root.scss" lang="scss" scoped></style>
