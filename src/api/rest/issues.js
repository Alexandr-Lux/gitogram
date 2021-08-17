import { makeRequest } from '../requests'

export const getIssues = ({ owner, repo }) => {
  return makeRequest({
    url: `/repos/${owner}/${repo}/issues`
  })
}
