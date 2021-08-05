import { toggler } from './'
import { icon } from '../icons'

export default {
  title: 'Тоглер (toggler)',
  components: {
    toggler,
    icon
  }
} 

const defaultView = () => {
  return {
    components: {
      toggler,
      icon
    },
    template: `
      <toggler>
        <icon name="triangle">
      </toggler>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}