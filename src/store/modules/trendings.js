import * as api from '../../api'
import { noReadmeTemplate } from '../../helpers/noReadme'

export default {
  namespaced: true,
  state: {
    trendings: []
  },
  getters: {
    getRepoById: (state) => (id) => state.trendings.find((item) => item.id === id)
  },
  mutations: {
    SET_TRENDINGS (state, payload) {
      if (payload.starred === null) {
        state.trendings = payload.trendings.map(item => {
          item.following = { status: false, loading: false, theme: 'green' }
          return item
        })
      } else {
        state.trendings = payload.trendings.map(tr => {
          const starredTrending = payload.starred.find(st => {
            return st.id === tr.id
          })
          if (starredTrending) {
            tr.following = { status: true, loading: false, theme: 'grey' }
          } else {
            tr.following = { status: false, loading: false, theme: 'green' }
          }
          return tr
        })
      }
    },
    SET_README (state, payload) {
      state.trendings = state.trendings.map(item => {
        if (payload.id === item.id) {
          item.readme = payload.readme
        }
        return item
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.trendings = state.trendings.map(item => {
        if (payload.id === item.id) {
          item.following = payload.following
        }
        return item
      })
    }
  },
  actions: {
    async getTrendings ({ commit, rootState }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', {
          starred: rootState.starred.starred,
          trendings: data.items
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return

      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, readme: data })
      } catch (error) {
        if (error.response.status === 404) {
          commit('SET_README', { id, readme: noReadmeTemplate })
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
    async unStarRepo ({ commit, getters, rootGetters }, id) {
      const repo = getters.getRepoById(id)
      if (repo) {
        commit('SET_FOLLOWING', { id, following: { status: true, loading: true, theme: 'green' } })
        try {
          await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name })
          commit('SET_FOLLOWING', { id, following: { status: false, loading: false, theme: 'green' } })
        } catch (e) {
          console.log(e)
        }
      } else {
        const getterFromStarred = rootGetters['starred/getStarredById']
        const repo = getterFromStarred(id)

        try {
          await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name })
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
