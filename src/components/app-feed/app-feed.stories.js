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
        <rep-content></rep-content>
      </app-feed>`
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}