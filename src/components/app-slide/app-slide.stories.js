import { appSlide } from './'

export default {
  title: 'Слайд (appSlide)',
  components: {
    appSlide
  }
}

const defaultView = () => {
  return {
    data () {
      return {
        sliderContent: {
          avatar: 'https://picsum.photos/300',
          username: 'Вася',
          src: 'https://picsum.photos/600/400',
          alt: 'Картинка слайдера',
          text: `
            <p><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
            <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
          `
        }
      }
    },
    components: {
      appSlide
    },
    template: `
      <app-slide :data="sliderContent">
      
      </app-slide>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}
