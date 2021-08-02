import { controls } from './'
import { icon } from '../icons'

export default {
  title: 'Кнопки',
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
        stars="S"
        forks="F"
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