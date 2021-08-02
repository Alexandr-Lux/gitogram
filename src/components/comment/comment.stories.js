import { comment } from './'

export default {
  title: 'Комментарий',
  components: {
    comment
  }
} 

const defaultView = () => {
  return {
    components: {
      comment
    },
    template: `
      <comment />
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}