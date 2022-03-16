import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageSize: 20
  },
  getters: {
    pageSize: state => {
      return state.pageSize
    }
  },
  mutations: {
    setPageSize(state,ps){
      state.pageSize = ps
    }
  },
  actions: {
    setPageSize(ctx,ps){
      ctx.commit('setPageSize',ps)
    }
  },
  modules: {
  }
})
