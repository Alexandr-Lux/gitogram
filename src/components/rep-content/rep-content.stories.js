import { repContent } from '.'

export default {
  title: 'Содержимое репозитория',
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
        data.title="Vue.js"
        data.description="JavaScript framework for building interactive web applications"
        data.stars="156"
        data.forks="41"
      />`
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}