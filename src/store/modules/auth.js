import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, payload) {
      payload.isFollowing = false
      state.user = payload
    }
  },
  actions: {
    checkUser () {
      api.auth.getCode()
    },
    async exchangeForToken (store, code) {
      const { data } = await api.auth.getToken(code)
      return data.token
    },
    async getUser ({ commit }) {
      try {
        const { data } = await api.auth.getUserData()
        commit('SET_USER', data)
        return data
      } catch (error) {
        if (error.response.status === 401) {
          console.log('Необходимо авторизоваться')
        }
      }
    }
  }
}
