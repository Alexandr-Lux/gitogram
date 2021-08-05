import { comment } from './'

export default {
  title: 'Комментарий (comment)',
  components: {
    comment
  }
} 

const defaultView = () => {
  return {
    components: {
      comment
    },
    template: `
      <comment 
        username="Имя пользователя" 
        text="Текст комментария"
      />
    `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}