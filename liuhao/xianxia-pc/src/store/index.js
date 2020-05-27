import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  topNum: 1
  },
  mutations: {
	  topNumUpdate(state, val){
		  state.topNum = val
	  }
  },
  actions: {
  },
  modules: {
  }
})
