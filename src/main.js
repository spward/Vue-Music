import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";

// Turns off development tooltip in console.
Vue.config.productionTip = false;

// Starts Vue Router
Vue.use(VueRouter);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
