<template>
  <div class="volume-bar" v-if="audioElement != null && songDuration > 0">
    <i class="fas fa-volume-up"></i>
    <div class="slider">
      <vue-slider
        v-model="songVolume"
        :max="10"
        :dot-size="13"
        :process-style="{'background': '#264a75'}"
        :bg-style="{'background': '#737575', 'width': '3em'}"
      />
    </div>
    <span>{{songVolume}}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueSlider from "vue-slider-component";
export default {
  name: "volume-bar",
  components: {
    VueSlider
  },

  computed: {
    // Global Variables
    ...mapGetters(["audioElement", "songDuration", "volume"]),
    songVolume: {
      // Gets the songs current volume from 0 to 10 and multiplies it
      // by 10 to get the 0-10 numbers
      get: function() {
        return this.volume * 10;
      },
      // Sets the volume to the coresponding volume level.
      set: function(newVolume) {
        this.changeVolume(newVolume);
      }
    }
  },

  methods: {
    // Global Function
    ...mapActions(["changeVolume"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.volume-bar {
  display: flex;
  width: 8em;
  margin: 0 40px;
  .slider {
    margin: 0 3px;
    width: 90%;
  }
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
  i {
    margin-right: 7px;
  }
  span {
    margin-left: 7px;
  }
}
</style>
