import Vue from 'vue'
import Vuex from 'vuex'
/**
 *attach vuex to Vue
 */
Vue.use(Vuex)

const state = {
    products : []
}

const mutations = {
    
     ADD_PRODUCT : async (state)=>{
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(
          proxyUrl +
            "https://analysisapi.herokuapp.com/highamtby/get=Description/orderby=Amount/sortresby=Amount/"
        );
        const data = await response.json();
        state.products = await data
    },
}

const getters = {
    getProducts:(state)=>{
        // state.commit('ADD_PRODUCT',null);
        // console.log(state.products)
        return state.products;
    },
}

const actions = {
    loadProducts: (state) => {
        state.commit('ADD_PRODUCT');
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })