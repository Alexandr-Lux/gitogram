import * as api from '../../api'
import { noReadmeTemplate } from '../../helpers/noReadme'

export default {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((item) => item.id === id)
  },
  mutations: {
    RENDER_TRENDINGS (state, payload) {
      state.data = payload.map(item => {
        item.following = { status: false, loading: false, theme: 'green' }
        return item
      })
    },
    RENDER_README (state, payload) {
      state.data = state.data.map(item => {
        if (payload.id === item.id) {
          item.readme = payload.readme
        }
        return item
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map(item => {
        if (payload.id === item.id) {
          item.following = payload.following
        }
        return item
      })
    }
  },
  actions: {
    async getTrendings ({ commit }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('RENDER_TRENDINGS', data.items)
      } catch (error) {
        console.log(error)
      }
    },
    async getReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return

      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('RENDER_README', { id, readme: data })
      } catch (error) {
        if (error.response.status === 404) {
          commit('RENDER_README', { id, readme: noReadmeTemplate })
        }
      }
    },
    async starRepo ({ commit, getters }, id) {
      commit('SET_FOLLOWING', { id, following: { status: false, loading: true, theme: 'grey' } })
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', { id, following: { status: true, loading: false, theme: 'grey' } })
      } catch (e) {
        console.log(e)
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      commit('SET_FOLLOWING', { id, following: { status: true, loading: true, theme: 'green' } })
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', { id, following: { status: false, loading: false, theme: 'green' } })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
