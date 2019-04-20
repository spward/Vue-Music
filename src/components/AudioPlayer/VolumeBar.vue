<template>
  <div class="volume-bar">
    <!-- <button></button>
    <vue-slider
      class="volume-bar__slider"
      v-model="volume"
      @change="changeVolume"
      :dot-size="15"
      :process-style="{'background': '#1db954'}"
      :bg-style="{'background': '#737575', 'width': '80px'}"
    />-->

    <input type="range" min="0" max="10" step="0.5" :value="volume" @change="changeVolume(volume)">
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "volume-bar",
  components: {},
  data() {
    return {
      tmpVolume: 0,
      dragStartVolume: 0
    };
  },

  computed: {
    ...mapGetters(["volume"])
  },

  methods: {
    ...mapActions(["changeVolume"])
  },

  watch: {},

  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.volume-bar {
  display: flex;
  width: 25%;
  margin: 0 40px;
  input {
    -webkit-appearance: none;
    width: 100%;
    height: 1px;
    border-radius: 5px;
    background-color: $secondary;
    outline: none;
    opacity: 0.8;
    transition: opacity 0.2s;
  }
}
</style>
