import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSort: 0,
    // app tabBar 图标的显示与隐藏
    tabIconShow: false,
    kechengUrl: 'keCheng'
  },
  mutations: {
    updateCurr(state, val) {
      state.currentSort = val
    },
    kechengUrlUpd(state, val) {
      state.kechengUrl = val
    }
  },
  actions: {
  },
  modules: {
  }
})
