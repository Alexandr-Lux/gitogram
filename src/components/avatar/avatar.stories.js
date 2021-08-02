import { avatar } from './'

export default {
  title: 'Аватар',
  components: {
    avatar
  }
} 

const defaultView = () => {
  return {
    components: {
      avatar
    },
    template: `
      <avatar
        src="https://picsum.photos/300"
        alt="Аватар пользователя"
      />`
  }
}

const activeStoryView = () => {
  return {
    components: {
      avatar
    },
    template: `
      <avatar
        src="https://picsum.photos/300"
        alt="Аватар пользователя"
        type="story"
      />
    `
  }
}

const smallView = () => {
  return {
    components: {
      avatar
    },
    template: `
      <avatar
        src="https://picsum.photos/300"
        alt="Аватар пользователя"
        type="small"
      />
    `
  }
}

const userIconView = () => {
  return {
    components: {
      avatar
    },
    template: `
      <avatar
        src="https://picsum.photos/300"
        alt="Аватар пользователя"
        type="userIcon"
      />
    `
  }
}

export { defaultView }
export { activeStoryView }
export { smallView }
export { userIconView }

defaultView.story = {
  name: 'Стандартный вид'
}

activeStoryView.story = {
  name: 'С активной историей'
}

smallView.story = {
  name: 'Маленькая'
}

userIconView.story = {
  name: 'Иконка пользователя в шапке'
}
