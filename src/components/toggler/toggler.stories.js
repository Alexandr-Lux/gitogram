import { toggler } from './'

export default {
  title: 'Тоглер',
  components: {
    toggler
  }
} 

const defaultView = () => {
  return {
    components: {
      toggler
    },
    template: `
      <toggler />
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}