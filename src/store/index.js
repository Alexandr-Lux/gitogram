import { createStore } from 'vuex'
import auth from './modules/auth'
import trendings from './modules/trendings'
import starred from './modules/starred'
import user from './modules/user'

export default createStore({
  modules: {
    auth,
    trendings,
    starred,
    user
  }
})
