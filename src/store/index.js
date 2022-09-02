import Vue from 'vue';
import Vuex from 'vuex';
import { beerModule } from './beer';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dialog: false,
    loading: false,
  },
  getters: {},
  mutations: {
    setDialog(state, dialog) {
      state.dialog = dialog;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {},
  modules: { beerModule },
});
