import { createStore } from 'vuex'
import auth from './modules/auth'
import trendings from './modules/trendings'

export default createStore({
  modules: {
    auth,
    trendings
  }
})
