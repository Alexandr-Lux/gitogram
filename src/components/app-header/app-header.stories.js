import { appHeader } from './'
import { headerTop } from '../header-top'
import { user } from '../user'

export default {
  title: 'Шапка (appHeader)',
  components: {
    appHeader,
    headerTop,
    user
  }
} 

const defaultView = () => {
  return {
    components: {
      appHeader,
      headerTop,
      user
    },
    template: `
      <app-header>
        <template #top>
          <header-top userAvatar="https://picsum.photos/300" />
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories__item" v-for="n in 5" :key="n">
              <user
                avatar="https://picsum.photos/300"
                username="User Name"
                type="story"
              />
            </li>
          </ul>
        </template>
      </app-header>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}