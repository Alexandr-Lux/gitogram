import * as api from '../../api'

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
        item.following = false
        return item
      })
    },
    RENDER_README (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.readme
        }
        return repo
      })
    },
    RENDER_ISSUES (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.issues = payload.issues
        }
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = payload.following
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
        commit('RENDER_README', { id, readme: data })
      } catch (error) {
        console.log(error)
      }
    },
    async getIssues ({ commit }, { id, owner, repo }) {
      try {
        const { data } = await api.issues.getIssues({ owner, repo })
        commit('RENDER_ISSUES', { id, issues: data })
      } catch (error) {
        console.log(error)
      }
    },
    async starRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', { id, following: true })
      } catch (e) {
        console.log(e)
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', { id, following: false })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
