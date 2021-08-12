import { createStore } from "vuex";

export default createStore({
  state: {
    personajes: [],
    personajesFiltered: [],
  },
  mutations: {
    setPersonajes(state,payload){
      state.personajes = payload
    },
    setPersonajesFiltered(state,payload){
      state.personajesFiltered = payload
    }
  },
  actions: {
    async getCharacter({ commit }) {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await res.json();
        console.log(data.results);
        commit("setPersonajes", data.results);
        commit("setPersonajesFiltered", data.results);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
