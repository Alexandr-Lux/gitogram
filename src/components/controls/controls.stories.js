import { controls } from './'
import { icon } from '../icons'

export default {
  title: 'Кнопки (controls)',
  components: {
    controls,
    icon
  }
} 

const defaultView = () => {
  return {
    components: {
      controls,
      icon
    },
    template: `
      <controls 
        stars=156
        forks=41
      >
        <icon name="star"></icon>
        <icon name="fork"></icon>
      </controls>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}