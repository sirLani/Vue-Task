import { createStore } from "vuex";

const updateLocalStorage = (type, item) => {
  localStorage.setItem(type, JSON.stringify(item));
};

export default createStore({
  state: {
    prefix: "",
    suffix: "",
  },
  getters: {
    preffixItem: (state) => {
      return state.prefix;
    },
    suffixItem: (state) => {
      return state.suffix;
    },
  },
  mutations: {
    addPrefixToStorage(state, item) {
      if (item) {
        state.prefix = item;
      } else {
        throw new Error("the form has to filled");
      }
      updateLocalStorage("prefix", state.prefix);
    },
    addSuffixToStorage(state, item) {
      if (item) {
        state.prefix = item;
      } else {
        throw new Error("the form has to filled");
      }
      updateLocalStorage("suffix", state.prefix);
    },

    updateOptionFromStorage(state) {
      const prefix = localStorage.getItem("prefix");
      const suffix = localStorage.getItem("suffix");

      if (prefix || prefix) {
        state.prefix = JSON.parse(prefix);
        state.suffix = JSON.parse(suffix);
      }
    },
  },
  actions: {},
  modules: {},
});
