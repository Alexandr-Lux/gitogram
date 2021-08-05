import { mainButton } from './'

export default {
  title: 'Основная кнопка (mainButton)',
  components: {
    mainButton
  }
} 

const greenView = () => {
  return {
    components: {
      mainButton
    },
    template: `
      <main-button green>Содержимое кнопки</main-button>
      `
  }
}

const greyView = () => {
  return {
    components: {
      mainButton
    },
    template: `
    <main-button grey>Содержимое кнопки</main-button>
      `
  }
}

export { greenView }
export { greyView }

greenView.story = {
  name: 'Зеленая кнопка'
}

greyView.story = {
  name: 'Серая кнопка'
}
