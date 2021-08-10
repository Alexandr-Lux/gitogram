import { placeholder } from './'

export default {
  title: 'Заглушка для контента (placeholder)',
  components: {
    placeholder
  }
} 

const defaultView = () => {
  return {
    components: {
      placeholder
    },
    template: `
      <div style="width: 300px">
        <placeholder 
          paragraphs=3 
        />
      </div>
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}