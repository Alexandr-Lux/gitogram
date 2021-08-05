import { repContent } from '.'

export default {
  title: 'Содержимое репозитория (repContent)',
  components: {
    repContent
  }
} 

const defaultView = () => {
  return {
    components: {
      repContent
    },
    template: `
      <rep-content
        title="Название репозитория"
        description="Описание репозитория"
        stars=156
        forks=41
      />`
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}