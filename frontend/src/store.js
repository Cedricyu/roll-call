import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
  },
  actions: {
    login({ commit }) {
      // Perform your login logic here
      // Once logged in, commit the mutation to update the state
      commit("setLoggedIn", true);
    },
    logout({ commit }) {
      // Perform your logout logic here
      // Once logged out, commit the mutation to update the state
      commit("setLoggedIn", false);
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
  },
});

export default store;
