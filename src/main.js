import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vueSlider from "vue-slider-component";

// Turns off development tooltip in console.
Vue.config.productionTip = false

// Starts Vue Router
Vue.use(VueRouter);
Vue.component("vueSlider", vueSlider);

new Vue({
  render: h => h(App),
  data: {
    track: {
      name: "",
      artist: "",
      album: "",
      song: "",
      isPlaying: false,
      changeSong: false
    }
  }
}).$mount("#app");
