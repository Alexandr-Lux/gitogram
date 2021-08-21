import { appFeed } from './'
import { repContent } from '../rep-content'

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
    data () {
      return {
        issues: [
          {
            user: { login: 'User-name 1' },
            body: 'Issue content 1'
          },
          {
            user: { login: 'User-name 2' },
            body: 'Issue content 2'
          },
          {
            user: { login: 'User-name 3' },
            body: 'Issue content 3'
          }
        ]
      }
    },
    template: `
      <app-feed 
        username="User Name" 
        avatar="https://picsum.photos/300"
        :issues="issues"
        repDate="2021-08-19T12:57:24Z"
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