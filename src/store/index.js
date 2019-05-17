import Vue from 'vue';
import Vuex from 'vuex';
import view from './modules/view';
import user from './modules/user';
import report from './modules/report';
import actions from './actions';
import * as getters from './getters';


Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    view, user, report
  },
  actions,
  getters
});
