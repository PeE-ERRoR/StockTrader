import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';
import store from './store/store'

Vue.use(VueRouter);

const routes = [
    {   
        path: '/dashbord',
        component: Home,
        beforeEnter(to, from, next) {
            if (store.state.auth.idToken) {
                next()
            }else {
                next('/signin')
            }
        }
    },
    { path: '/portfolio', component: Portfolio },
    { path: '/', component: Stocks },
];

export default new VueRouter({
    // mode: 'history',
    routes
})