import { createStore } from 'vuex';
import modules from './modules';

export default createStore({
  strict: process.env.NODE_ENV === 'development',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules
});
