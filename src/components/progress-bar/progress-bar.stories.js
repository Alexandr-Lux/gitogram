import { progressBar } from './'

export default {
  title: 'Полоса прогресса (progressBar)',
  components: {
    progressBar
  }
}

const activeView = () => {
  return {
    components: {
      progressBar
    },
    template: `
      <progress-bar 
        active
        startProgress
      />`
  }
}

const defaultView = () => {
  return {
    components: {
      progressBar
    },
    template: `
      <progress-bar />`
  }
}

export { defaultView }
export { activeView }

defaultView.story = {
  name: 'Стандартный вид'
}

activeView.story = {
  name: 'Активный вид'
}