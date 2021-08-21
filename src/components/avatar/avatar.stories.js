import { avatar } from './'

export default {
  title: 'Аватар (avatar)',
  components: {
    avatar
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

const profileView = () => {
  return {
    components: {
      avatar
    },
    template: `
      <avatar
        src="https://picsum.photos/300"
        alt="Аватар пользователя"
        type="profile"
      />
    `
  }
}

const followingView = () => {
  return {
    components: {
      avatar
    },
    template: `
      <avatar
        src="https://picsum.photos/300"
        alt="Аватар пользователя"
        type="following"
      />
    `
  }
}

export { activeStoryView }
export { userIconView }
export { smallView }
export { followingView }
export { profileView }

activeStoryView.story = {
  name: 'С активной историей'
}

smallView.story = {
  name: 'Маленькая'
}

userIconView.story = {
  name: 'Иконка пользователя в шапке'
}

profileView.story = {
  name: 'На странице профиля'
}

followingView.story = {
  name: 'На странице following'
}
