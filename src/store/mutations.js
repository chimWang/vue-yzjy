/**
 * Created by Wangchenyan on 2018/1/26.
 */
import * as types from './mutation-types'
const mutations = {
  [types.SET_INSTITUTE](state, institute){
    state.institute = institute
  },
  [types.SET_STUDENT](state, student){
    state.student = student
  },
  [types.SET_AUTH](state, auth){
    state.auth = auth
  },
  [types.SET_USER](state, user){
    state.user = user
  },
  [types.ADD_COURSE](state, course){
    state.user.myCourse.push(course)
  },
}
export default mutations
