//import Vue from 'vue/dist/vue'
//import Vue from 'vue/dist/vue.esm'
import Vue from 'vue'

import myrouter from './MyRouter'
import App from './App.vue'
import VueRouter from 'vue-router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import BootstrapVue from 'bootstrap-vue'

//import {TablePlugin} from 'bootstrap-vue'
//Vue.use(TablePlugin)

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

window.restUrl = 'http://localhost:3000/'

new Vue({
    router: myrouter,
    render: h => h(App)
}).$mount('#app')
