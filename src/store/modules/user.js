import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    repos: null
  },
  mutations: {
    SET_REPOS (state, payload) {
      state.repos = payload
    }
  },
  actions: {
    async getRepos ({ commit }) {
      try {
        const { data } = await api.repos.getRepos()
        commit('SET_REPOS', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
