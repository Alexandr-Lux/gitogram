import { appSlider } from './'

export default {
  title: 'Слайдер (appSlider)',
  components: {
    appSlider
  },
}

const defaultView = () => {
  return {
    components: {
      appSlider
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
