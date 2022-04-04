import { createStore } from "vuex";

const updateLocalStorage = (type, item) => {
  localStorage.setItem(type, JSON.stringify(item));
};

const getFromLocalStorage = (type) => {
  return localStorage.getItem(type);
};

const fromJson = (task) => {
  return JSON.parse(task);
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
        state.suffix = item;
      } else {
        throw new Error("the form has to filled");
      }
      updateLocalStorage("suffix", state.suffix);
    },

    updateOptionFromStorage(state) {
      const prefix = getFromLocalStorage("prefix");
      const suffix = getFromLocalStorage("suffix");

      if (prefix || suffix) {
        state.prefix = fromJson(prefix);
        state.suffix = fromJson(suffix);
      }
    },
  },
  actions: {},
  modules: {},
});
