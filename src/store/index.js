import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    all_em: [],
    deleted_em: []
  },
  getters : {
    ALL_EM (state) {
      return state.all_em;
    },
    DELETED_EM (state) {
      return state.deleted_em;
    }
  },
  mutations: {
    SET_EMOJI (state, payload) {
      state.all_em = payload;
    },
    SET_EM_DEL (state, payload) {
      state.deleted_em = payload;
    },

    ADD_DEL_EM (state, payload) {
      state.deleted_em.push(payload);
    },

    ADD_EM (state, payload) {
      state.all_em.push(payload);
    }

  },
  actions: {
    DELETE_EM (context , index){
      const item = context.state.all_em.splice(index, 1);
      context.commit('ADD_DEL_EM', item[0] )
    },
    RECOVERY_EM (context , index){
      const item = context.state.deleted_em.splice(index, 1);
      context.commit('ADD_EM', item[0] )
    },

    DOWNLOAD_EMOJI (context) {
      let masObjs = [];
       Axios.get('https://api.github.com/emojis')
         .then((response)=> {
           const obj = response.data;

            for (let key in obj ){
              masObjs.push( { name: key  ,url: obj[key], isFavorit: false  } )
            }
         })

      context.commit('SET_EMOJI', masObjs);
    }

  }
})
