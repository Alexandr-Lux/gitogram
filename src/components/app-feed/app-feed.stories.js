import { appFeed } from './'
import { repContent } from '../rep-content/index'

export default {
  title: 'Репозиторий (appFeed)',
  components: {
    appFeed,
    repContent
  }
} 

const defaultView = () => {
  return {
    components: {
      appFeed,
      repContent
    },
    template: `
      <app-feed 
      username="Петя" 
      avatar="https://picsum.photos/300"
      >
        <template #repository>
          <rep-content 
            title="Название репозитория"
            description="Описание репозитория"
            stars=156
            forks=41
          />
        </template>
      </app-feed>`
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}