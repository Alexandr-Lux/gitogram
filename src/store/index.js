import { createStore } from 'vuex'
import * as api from '../api'

export default createStore({
  state: {
    data: []
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((item) => item.id === id)
  },
  mutations: {
    RENDER_TRENDINGS (state, payload) {
      state.data = payload
    },
    RENDER_README (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async getData ({ commit }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('RENDER_TRENDINGS', data.items)
      } catch (error) {
        alert(error)
      }
    },
    async getReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('RENDER_README', { id, content: data })
      } catch (error) {
        alert(error)
      }
    }
  }
})
