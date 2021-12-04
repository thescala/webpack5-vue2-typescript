import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isCollapse: false
	},
	mutations: {
		setIsCollapse(state,isCollapse) {
			state.isCollapse = isCollapse
		}
	},
	getters:{
		getIsCollapse(state){
			return state.isCollapse
		}
	}
})

export default store
