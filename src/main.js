import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// Turns off development tooltip in console.
Vue.config.productionTip = false

// Starts Vue Router
Vue.use(VueRouter);


new Vue({
  render: h => h(App),
}).$mount('#app')
