import { icon } from './'

export default {
  title: 'Иконки',
  components: {
    icon
  }
}

const whiteLogoView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 175px; color: #fff">
        <icon name="logo" />
      </div>    
    `
  }
}

const blackLogoView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 175px; color: #000">
        <icon name="logo" />
      </div>    
    `
  }
}

const forkView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 12px">
        <icon name="fork" />
      </div>    
    `
  }
}

const starView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 15px">
        <icon name="star" />
      </div>    
    `
  }
}

const homeView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 24px">
        <icon name="home" />
      </div>    
    `
  }
}

const logoutView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 25px">
        <icon name="logout" />
      </div>    
    `
  }
}

const triangleView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 10px">
        <icon name="triangle" />
      </div>    
    `
  }
}

const arrowsView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 20px">
        <icon name="arrow" />
      </div>        
    `
  }
}

const closeView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 15px">
        <icon name="close" />
      </div>        
    `
  }
}

const spinnerView = () => {
  return {
    components: {
      icon
    },
    template: `
      <div style="width: 45px; color: #31AE54">
        <icon name="spinner" />
      </div>        
    `
  }
}

export { whiteLogoView }
export { blackLogoView }
export { forkView }
export { starView }
export { homeView }
export { logoutView }
export { triangleView }
export { arrowsView }
export { closeView }
export { spinnerView }

whiteLogoView.story = {
  name: 'Логотип (белого цвета)'
}

blackLogoView.story = {
  name: 'Логотип (черного цвета)'
}

forkView.story = {
  name: 'Форк'
}

starView.story = {
  name: 'Стар'
}

homeView.story = {
  name: 'Домой'
}

logoutView.story = {
  name: 'Выйти'
}

triangleView.story = {
  name: 'Треугольник'
}

arrowsView.story = {
  name: 'Стрелка'
}

closeView.story = {
  name: 'Закрыть'
}

spinnerView.story = {
  name: 'Спиннер'
}


