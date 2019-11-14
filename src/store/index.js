import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    OpenAtividade: false,
    eventos: [],
    chat: [],
    quemSou: {}
  },
  mutations: {
    OpenAtividade: (state, userData) => {
      state.OpenAtividade = userData
    },
    eventos: (state, userData) => {
      state.eventos = userData
    },
    chat: (state, userData) => {
      state.chat = userData
    },
    quemSou: (state, userData) => {
      state.quemSou = userData
    }
  },
  actions: {
    getAtividades: ({commit}) => {
      axios.get('http://localhost:3000/eventos')
        .then(res => {
          commit('eventos', res.data)
        })
    },
    getChat: ({commit}) => {
      axios.get('http://localhost:3000/chat')
        .then(res => {
          commit('chat', res.data)
          var objDiv = document.getElementById("caixa_dialogo");
          objDiv.scrollTop = objDiv.scrollHeight;
        })
    }
  },
  getters: {
    OpenAtividade: state => {
      return state.OpenAtividade
    },
    eventos: state => {
      return state.eventos
    },
    chat: state => {
      return state.chat
    },
    quemSou: state => {
      return state.quemSou
    }
  },
  modules: {
  }
})
