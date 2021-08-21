import { subscriber } from './'

export default {
  title: 'Понравившийся репозиторий (subscriber)',
  components: {
    subscriber
  }
} 

const defaultView = () => {
  return {
    components: {
      subscriber
    },
    template: `
      <subscriber
        avatar="https://picsum.photos/300"
        title="User/Repository"
        type="type of account"
        id="54813456"
      />
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}