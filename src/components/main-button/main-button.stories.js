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
      <main-button theme="green">Содержимое кнопки</main-button>
      `
  }
}

const greyView = () => {
  return {
    components: {
      mainButton
    },
    template: `
    <main-button theme="grey">Содержимое кнопки</main-button>
      `
  }
}

const smallView = () => {
  return {
    components: {
      mainButton
    },
    template: `
      <main-button theme="green" size="small">Содержимое кнопки</main-button>
      `
  }
}

export { greenView }
export { greyView }
export { smallView }

greenView.story = {
  name: 'Зеленая кнопка'
}

greyView.story = {
  name: 'Серая кнопка'
}

smallView.story = {
  name: 'Маленькая кнопка'
}
