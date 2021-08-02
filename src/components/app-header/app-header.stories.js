import { appHeader } from './'
import { headerTop } from '../header-top'

export default {
  title: 'Шапка',
  components: {
    appHeader,
    headerTop
  }
} 

const defaultView = () => {
  return {
    components: {
      appHeader,
      headerTop
    },
    template: `
      <app-header>
        <header-top></header-top>
      </app-header>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}