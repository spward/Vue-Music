import Vuex from "vuex";
import Vue from "vue";
import player from "./modules/player";
import music from "./modules/music";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    player,
    music
  }
});
