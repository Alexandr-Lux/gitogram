import { headerTop } from './'

export default {
  title: 'Верх шапки (headerTop)',
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
      <header-top userAvatar="https://picsum.photos/300"/>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}