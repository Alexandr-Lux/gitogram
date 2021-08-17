import { root } from '../pages/root'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { error } from '../pages/error'

export default [
  {
    path: '/',
    name: 'root',
    component: root
  },
  {
    path: '/stories',
    name: 'stories',
    component: stories
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: error
  }
]
