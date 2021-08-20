import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    repos: null
  },
  mutations: {
    RENDER_REPOS (state, payload) {
      state.repos = payload
    }
  },
  actions: {
    async getRepos ({ commit }) {
      try {
        const { data } = await api.repos.getRepos()
        commit('RENDER_REPOS', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
