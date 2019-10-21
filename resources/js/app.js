import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './views/App.vue'
import axios from 'axios'
import router from './routers'
import vuetify  from './plugins/vuetify'
import store from './store/store'

axios.defaults.baseURL = 'api'
// axios.defaults.headers.common['Authorization'] = ''

Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-sotck-trader.firebaseio.com/'

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString()
});

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    render: h => h(App)
});
