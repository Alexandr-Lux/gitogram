import { slideItem } from './'

export default {
  title: 'Слайд (slideItem)',
  components: {
    slideItem
  }
}

const activeView = () => {
  return {
    data () {
      return {
        sliderContent: {
          avatar: 'https://picsum.photos/300',
          username: 'User Name',
          following: {
            status: false,
            loading: false,
            theme: 'green'
          },
          content: `
            <img src="https://picsum.photos/600/400">
            <p><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
            <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
          `
        }
      }
    },
    components: {
      slideItem
    },
    template: `
      <slide-item 
        :data="sliderContent"
        active
        startProgress
        navBtns="['prev', 'next']"
      >
      </slide-item>
    `
  }
}

const placeholderView = () => {
  return {
    data () {
      return {
        sliderContent: {
          avatar: 'https://picsum.photos/300',
          username: 'User Name',
          following: {
            status: false,
            loading: false,
            theme: 'green'
          }
        }
      }
    },
    components: {
      slideItem
    },
    template: `
      <slide-item 
        :data="sliderContent"
        active
        startProgress
        navBtns="['prev', 'next']"
      >
      </slide-item>
    `
  }
}

const loadingView = () => {
  return {
    data () {
      return {
        sliderContent: {
          avatar: 'https://picsum.photos/300',
          username: 'User Name',
          following: {
            status: false,
            loading: false,
            theme: 'green'
          },
          content: `
            <img src="https://picsum.photos/600/400">
            <p><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
            <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
          `
        }
      }
    },
    components: {
      slideItem
    },
    template: `
      <slide-item 
        :data="sliderContent"
        active
        navBtns="[]"
        loading
      >
      </slide-item>
    `
  }
}

const defaultView = () => {
  return {
    data () {
      return {
        sliderContent: {
          avatar: 'https://picsum.photos/300',
          username: 'User Name'
        }
      }
    },
    components: {
      slideItem
    },
    template: `
      <slide-item 
        :data="sliderContent"
        navBtns="[]"
      >
      </slide-item>
    `
  }
}

export { activeView }
export { placeholderView }
export { loadingView }
export { defaultView }

activeView.story = {
  name: 'Активный слайд с содержимым'
}

placeholderView.story = {
  name: 'Активный слайд без содержимого'
}

loadingView.story = {
  name: 'Загрузка слайда'
}

defaultView.story = {
  name: 'Неактивный слайд'
}
