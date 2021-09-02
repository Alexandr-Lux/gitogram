import axios from 'axios'

const baseURL = 'https://api.github.com'

export const makeRequest = ({
  url, method = 'get', data = {}, headers = {}
}) => {
  const token = localStorage.getItem('token')
  return axios({
    url,
    method,
    data,
    baseURL,
    headers: {
      ...headers,
      Authorization: `token ${token}`,
      CacheControl: 'max-age=0'
    }
  })
}
