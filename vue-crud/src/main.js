//import Vue from .(H('
//import Vue from 'vue/dist/vue.esm'
import Vue from 'vue'
import Vuex from 'vuex'
import myrouter from './MyRouter'
import App from './App.vue'
import VueRouter from 'vue-router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import BootstrapVue from 'bootstrap-vue'

//import {TablePlugin} from 'bootstrap-vue'
//Vue.use(TablePlugin)


const store = {
    state: {
        myGlobalVar: 10, // The TV inventory
        tasks: [],
    },

    getters: {
        // Here we will create a getter
    },
    mutations: {
        // Here we will create Jenny
    },
    actions: {
        // Here we will create Larry
    }
}


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

window.restUrl = 'http://localhost:3000/'

new Vue({
    //el: '#app',
    router: myrouter,
    store: store,
    render: h => h(App)
}).$mount('#app')
