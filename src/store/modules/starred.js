import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    starred: null
  },
  getters: {
    getRepoById: (state) => (id) => state.starred.find((item) => item.id === id)
  },
  mutations: {
    RENDER_STARRED (state, payload) {
      state.starred = payload
    },
    RENDER_ISSUES (state, payload) {
      state.starred = state.starred.map(item => {
        if (payload.id === item.id) {
          item.issues = payload.issues
        }
        return item
      })
    },
    DELETE_STAR (state, payload) {
      const toDelete = state.starred.find(item => item.id === payload)
      const ndxToDelete = state.starred.indexOf(toDelete)
      state.starred.splice(ndxToDelete, 1)
    }
  },
  actions: {
    async getStarred ({ commit }) {
      try {
        const { data } = await api.starred.getStarred()
        commit('RENDER_STARRED', data)
      } catch (error) {
        console.log(error)
      }
    },
    async getIssues ({ commit }, { id, owner, repo }) {
      try {
        const { data } = await api.issues.getIssues({ owner, repo })
        if (data.length !== 0) {
          commit('RENDER_ISSUES', { id, issues: data })
        } else {
          commit('RENDER_ISSUES', { id, issues: [{ no_issue: 'Issues has not yet been written for this repository' }] })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async unFollow ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('DELETE_STAR', id)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
