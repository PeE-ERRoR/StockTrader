import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './views/App.vue';

Vue.use(VueRouter);
import {routes} from './routers';
import vuetify  from './plugins/vuetify';

const router = new VueRouter({
    // mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
});
