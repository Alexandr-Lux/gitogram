import { appSlider } from './'
import { slideItem } from '../slide-item'

export default {
  title: 'Слайдер (appSlider)',
  components: {
    appSlider,
    slideItem
  }
} 

const defaultView = () => {
  return {
    components: {
      appSlider,
      slideItem
    },
    data () {
      return {
        state: {
          data: []
        }
      }
    },
    template: `
      <app-slider initialSlide="3"></app-slider>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}
