import { appHeader } from './'
import { headerTop } from '../header-top'

export default {
  title: 'Шапка (appHeader)',
  components: {
    appHeader,
    headerTop
  }
} 

const mainView = () => {
  return {
    components: {
      appHeader,
      headerTop
    },
    template: `
      <app-header>
        <template #top>
          <header-top theme="light" />
        </template>
      </app-header>
    `
  }
}

const storyView = () => {
  return {
    components: {
      appHeader,
      headerTop
    },
    template: `
      <app-header>
        <template #top>
          <header-top theme="dark" />
        </template>
      </app-header>
    `
  }
}

export { mainView }
export { storyView }

mainView.story = {
  name: 'Главный вид'
}

storyView.story = {
  name: 'Стори вид'
}