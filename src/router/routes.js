import { root } from '../views/root'
import { stories } from '../views/stories'
import { auth } from '../views/auth'
import { user } from '../views/user'
import { error } from '../views/error'
import { repos } from '../views/repos'
import { following } from '../views/following'

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
    path: '/user',
    name: 'user',
    component: user,
    children: [
      {
        path: '',
        name: 'repos',
        component: repos
      },
      {
        path: 'following',
        name: 'following',
        component: following
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: error
  }
]
