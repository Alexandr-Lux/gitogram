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
    <div class="container">
      <ul class="feeds">
        <li class="feeds__item">
          <app-feed>
            <template #feed-content>
              контент новости
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
import stories from './data.json'

export default {
  name: 'root',
  components: {
    appHeader,
    appFeed,
    storyUserItem,
    headerTop
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style src="./root.scss" lang="scss" scoped></style>
