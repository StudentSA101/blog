/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

/** 
 * Sets up vue
 */
window.Vue = require('vue');

const VueSession = require('vue-session');

import Vue from 'vue'

Vue.use(VueSession,{persist:true});

Vue.prototype.$eventHub = new Vue();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import home from './components/pages/home-component.vue';
import contact from './components/pages/contact-component.vue';
import landing from './components/landing-component.vue';
import nav from './components/partials/nav-component.vue';
import footer from './components/partials/footer-component.vue';
Vue.component('home', home);
Vue.component('contact', contact);
Vue.component('landing', landing);
Vue.component('nav-bar', nav);
Vue.component('footer-bar', footer);
const app = new Vue({
    el: '#app'
});