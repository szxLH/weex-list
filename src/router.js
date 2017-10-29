import Router from 'vue-router'
import ListView from './views/list.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/list', component: ListView},
    {path: '/', redirect: '/list'}
  ]
})