// import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './app.vue'
import store from './store'
import router from './router'
// import './style/index.scss'
sync(store, router)
new Vue(Vue.util.extend({el: '#root', router, store}, App))

router.push('/')
