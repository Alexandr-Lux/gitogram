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
      <header-top theme="light"/>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}