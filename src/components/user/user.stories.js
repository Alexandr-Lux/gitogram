import { user } from './'

export default {
  title: 'Пользователь (user)',
  components: {
    user
  }
} 

const storyView = () => {
  return {
    components: {
      user
    },
    template: `
      <user 
        avatar="https://picsum.photos/300"
        username="User Name"
        type="story"
      />`
  }
}

const feedView = () => {
  return {
    components: {
      user
    },
    template: `
      <user 
        avatar="https://picsum.photos/300"
        username="User Name"
        type="small"
      />`
  }
}

export { storyView }
export { feedView }

storyView.story = {
  name: 'В блоке сторис'
}

feedView.story = {
  name: 'В блоке с новостями'
}