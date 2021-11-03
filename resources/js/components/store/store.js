import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
   
    selectedLanguage:'en',
    cartDetails:[]
  },
  mutations: {
    
    // ------------------------set Selected Language---------------
    setSelectedLanguage(state,payload){
      state.selectedLanguage = payload;
      state.cartDetails = payload;
    },
  },
  getters: {
    selectedLanguage: state => state.selectedLanguage,
    cartDetails: state => state.cartDetails,
  }
});
