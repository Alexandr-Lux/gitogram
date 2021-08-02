import { appSlide } from './'

export default {
  title: 'Аватар',
  components: {
    appSlide
  }
} 

const defaultView = () => {
  return {
    components: {
      appSlide
    },
    template: `
      <app-slide
      />`
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}
