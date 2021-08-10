import { spinner } from './'

export default {
  title: 'Загрузка (spinner)',
  components: {
    spinner
  }
} 

const defaultView = () => {
  return {
    components: {
      spinner
    },
    template: `
      <spinner />
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}