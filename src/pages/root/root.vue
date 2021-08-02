<template>
  <div class="app-header">
    <app-header>
      <template #top>
        <header-top />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="story in stories" :key="story.id">
            <user
              :avatar="story.avatar"
              :username="story.username"
              type="story"
            />
          </li>
        </ul>
      </template>
    </app-header>
  </div>
  <div class="app-feed">
    <div class="container container_small">
      <ul class="feeds">
        <li class="feeds__item" v-for="item in repositories" :key="item.id">
          <app-feed username="Петя" avatar="https://picsum.photos/300">
            <template #repository>
              <rep-content v-bind="getFeedData(item)"/>
            </template>
          </app-feed>
        </li>
      </ul>
    </div>
  </div>
  <div class="app-slide">
    <app-slide :data="slideContent" />
  </div>
</template>

<script>
import { appHeader } from '../../components/app-header'
import { appFeed } from '../../components/app-feed'
import { appSlide } from '../../components/app-slide'
import { headerTop } from '../../components/header-top'
import { user } from '../../components/user'
import { repContent } from '../../components/rep-content'
import stories from './data.json'
import * as api from '../../api'

export default {
  name: 'root',
  components: {
    appHeader,
    appFeed,
    appSlide,
    user,
    headerTop,
    repContent
  },
  data () {
    return {
      repositories: [],
      stories,
      slideContent: {
        avatar: 'https://picsum.photos/300',
        username: 'Вася',
        src: 'https://picsum.photos/600/400',
        alt: 'Картинка слайдера',
        text: `
          <p><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
          <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
          <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
          <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        `
      }
    }
  },
  methods: {
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
    try {
      const { data } = await api.trandings.getTrandings()
      this.repositories = data.items
    } catch (error) {
      alert(error)
    }
  }
}
</script>

<style src="./root.scss" lang="scss" scoped></style>
