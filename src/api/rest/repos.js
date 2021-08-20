import { makeRequest } from '../requests'

export const getRepos = () => makeRequest({
  url: 'user/repos'
})
