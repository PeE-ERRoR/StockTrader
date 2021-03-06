import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio,
        auth
    }
});