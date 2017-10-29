import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  actions,
  mutations,
  state: {
    count: 0
  }
})

export default store
