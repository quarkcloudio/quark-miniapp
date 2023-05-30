import { createStore } from 'vuex'
import * as getters from '@/store/getters'
import * as actions from '@/store/actions'
import * as mutations from '@/store/mutations'

const state = {
  selected: 0
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store