import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'
import $store from '../store'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')

  if (token === null && to.name !== 'auth') {
    next({ name: 'auth' })
    return
  }
  if (token !== null) {
    const response = await api.auth.getUserData()
    if (response.status === 200) {
      if (to.name === 'auth') {
        await $store.dispatch('auth/getUser')
        next({ name: 'root' })
        return
      }
    } else {
      localStorage.removeItem('token')
      next({ name: 'auth' })
      window.location.reload()
    }
  }

  next()
})

export default router
