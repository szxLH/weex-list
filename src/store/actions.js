// import { testPromise } from '$utils/'
import { testPromise } from '../utils'
export function testAction ({commit}, payload) {
  commit('ADD')
  return testPromise().then(res => {
    console.log('res==', res)
    commit('ADD')
  })
}