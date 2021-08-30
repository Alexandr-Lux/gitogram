import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    starred: null
  },
  getters: {
    getStarredById: (state) => (id) => state.starred.find((item) => item.id === id)
  },
  mutations: {
    SET_STARRED (state, payload) {
      state.starred = payload
    },
    SET_ISSUES (state, payload) {
      state.starred = state.starred.map(item => {
        if (payload.id === item.id) {
          item.issues = payload.issues
        }
        return item
      })
    },
    ADD_STAR (state, payload) {
      state.starred.unshift(payload)
    },
    DELETE_STAR (state, payload) {
      const ndxToDelete = state.starred.indexOf(payload)
      state.starred.splice(ndxToDelete, 1)
    }
  },
  actions: {
    async getStarred ({ commit }) {
      try {
        const { data } = await api.starred.getStarred()
        commit('SET_STARRED', data)
      } catch (error) {
        console.log(error)
      }
    },
    async getIssues ({ commit }, { id, owner, repo }) {
      try {
        const { data } = await api.issues.getIssues({ owner, repo })
        if (data.length !== 0) {
          commit('SET_ISSUES', { id, issues: data })
        } else {
          commit('SET_ISSUES', { id, issues: [{ no_issue: 'Issues has not yet been written for this repository' }] })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async unFollow ({ commit, getters }, id) {
      const repo = getters.getStarredById(id)
      try {
        await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name })
        commit('DELETE_STAR', repo)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
