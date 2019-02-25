import Vue from 'vue'
import App from './App.vue'
//import Router from 'vue-router'
//import Header from './components/myHeader.vue'
//import About from './components/aboutMe.vue'
/*
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
     
    },
  ],
});
*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
