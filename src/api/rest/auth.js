import { makeRequest } from '../requests'

export const getCode = () => {
  const githubApi = 'https://github.com/login/oauth/authorize'

  const params = new URLSearchParams()

  params.append('client_id', process.env.VUE_APP_CLIENT_ID)
  params.append('scope', 'repo,user')

  window.location.href = `${githubApi}?${params}`
}

export const getToken = (code) => {
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    method: 'post',
    data: {
      clientId: process.env.VUE_APP_CLIENT_ID,
      clientSecret: process.env.VUE_APP_CLIENT_SECRET,
      code
    }
  })
}

export const getUserData = () => makeRequest({
  url: '/user'
})
