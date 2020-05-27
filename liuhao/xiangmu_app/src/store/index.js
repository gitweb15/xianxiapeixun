import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		boolshow1: true,
		boolshow2: true
	},
	mutations: {
		boolShowUpd(state, val){
			console.log(1)
			state.boolshow1=val,
			state.boolshow2=val
		}
	},
	actions: {},
	modules: {}
})
