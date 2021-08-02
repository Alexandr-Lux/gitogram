import { progressBar } from './'

export default {
  title: 'Полоса прогресса',
  components: {
    progressBar
  },
  argTypes: {
    onFinish: {
      action: 'onFinish'
    }
  }
}

const defaultView = (args) => {
  return {
    components: {
      progressBar
    },
    data () {
      return { args }
    },
    template: `
      <progress-bar @onFinish="args.onFinish" />`
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}