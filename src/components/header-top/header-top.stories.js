import { headerTop } from './'

export default {
  title: 'Верх шапки',
  components: {
    headerTop
  }
} 

const defaultView = () => {
  return {
    components: {
      headerTop
    },
    template: `
      <header-top />
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}