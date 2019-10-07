import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './views/App.vue';

import {routes} from './routers';
import vuetify  from './plugins/vuetify';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-sotck-trader.firebaseio.com/';

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    // mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    render: h => h(App)
});
