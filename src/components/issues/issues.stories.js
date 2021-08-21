import { issues } from './'

export default {
  title: 'Ишьюз (Issues)',
  components: {
    issues
  }
} 

const defaultView = () => {
  return {
    components: {
      issues
    },
    data () {
      return {
        issues: [
          {
            user: { login: 'User-name 1' },
            body: 'Issue content 1'
          },
          {
            user: { login: 'User-name 2' }
          }
        ]
      }
    },
    template: `
      <issues :issues="issues" />
    `
  }
}

const noIssuesView = () => {
  return {
    components: {
      issues
    },
    data () {
      return {
        issues: [
          {
            no_issue: 'Issues has not yet been written for this repository',
          }
        ]
      }
    },
    template: `
      <issues :issues="issues" />
    `
  }
}

export { defaultView }
export { noIssuesView }

defaultView.story = {
  name: 'Стандартный вид'
}

noIssuesView.story = {
  name: 'Без issues'
}