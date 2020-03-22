require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';


Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    router,
    mode: 'history'
});

Vue.component('example-component', require('./components/ExampleComponent.vue'));
const app = new Vue({
    el: '#app',
    router
});