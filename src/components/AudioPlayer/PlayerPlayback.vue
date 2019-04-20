<template>
  <div class="player-playback" v-if="audioElement !== null && songDuration > 0">
    <div class="player-playback__time">{{Math.round(playback)}}</div>
    <div class="player-playback__progress-bar">
      <vue-slider
        v-model="playback"
        :max="songDuration"
        :process-style="{'background': '#264a75'}"
        :bg-style="{'background': '#737575'}"
        v-on:drag-start="onDragStart"
        v-on:drag-end="onDragEnd"
        v-on:callback="onProgressChanged"
      />
    </div>
    <div class="player-playback__time">{{songDuration}}</div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "player-player-playback",
  data() {
    return {
      dragStart: false
    };
  },
  components: {
    VueSlider
  },
  computed: {
    ...mapGetters([
      "playbackProgress",
      "audioElement",
      "songDuration",
      "isPlaying"
    ]),
    playback: {
      get: function() {
        return this.playbackProgress;
      },
      set: function(newValue) {
        this.changePlaybackProgress(newValue);
      }
    }
  },
  methods: {
    ...mapActions(["toggleIsPlaying", "changePlaybackProgress"]),
    //for some reason {currentValue} doesn't work
    onDragStart() {
      this.dragStart = true;
    },
    //same with this function
    onDragEnd() {
      this.dragStart = false;
    },
    onProgressChanged(currentValue) {
      if (!this.dragStart) {
        this.dragStart = true;
        this.changePlaybackProgress(currentValue);
      }
    }
  }
  // created() {
  //   this.updateProgress();
  // }
};
</script>

<style lang="scss" scoped>
.player-playback {
  display: flex;
  width: 100% &__time {
    min-width: 40px;
  }
  &__time {
    margin: 0 20px;
  }

  &__progress-bar {
    width: 100%;
  }
}
</style>