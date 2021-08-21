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
        login="Имя пользователя" 
        body="Текст комментария"
      />
    `
  }
}

const noCommentTextView = () => {
  return {
    components: {
      comment
    },
    template: `
      <comment 
        login="Имя пользователя"
      />
    `
  }
}
const noCommentsView  = () => {
  return {
    components: {
      comment
    },
    template: `
      <comment 
        empty="Комментарий отсутствует"
      />
    `
  }
}

export { defaultView }
export { noCommentTextView }
export { noCommentsView  }

defaultView.story = {
  name: 'Есть комментарии'
}

noCommentTextView.story = {
  name: 'Без текста комментария'
}

noCommentsView .story = {
  name: 'Без комментариев'
}