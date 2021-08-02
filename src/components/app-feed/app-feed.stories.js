import { appFeed } from './'
import { repContent } from '../rep-content'

export default {
  title: 'Репозиторий',
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
        <rep-content 
          title="Название репозитория"
          description="Описание репозитория"
          stars=156
          forks=41
        />
      </app-feed>`
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}