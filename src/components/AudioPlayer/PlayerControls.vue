<template>
  <div id="player-controls">
    <!-- <i class="fas fa-step-backward control-btn" id="prev-btn"></i> -->
    <i
      class="fas fa-pause control-btn"
      v-if="isTrackPlaying"
      @click="toggleStatus()"
      id="pause-btn"
    ></i>
    <i class="fas fa-play control-btn" v-else id="play-btn" @click="toggleStatus()"></i>
    <!-- <i class="fas fa-step-forward control-btn" id="next-btn"></i> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "player-controls",
  computed: {
    // Global Variables
    ...mapGetters(["song", "audioElement", "isPlaying"]),
    // Checks to see if the audio has been loaded
    isTrackLoaded: function() {
      return this.song !== null && this.audioElement !== null;
    },
    isTrackPlaying: {
      // Checks if the current song is playing
      get: function() {
        return this.isPlaying;
      },
      // Sets the song to play or pause.
      set: function() {
        this.toggleIsPlaying();
      }
    }
  },
  methods: {
    // Global Functions
    ...mapActions(["loadTrack", "toggleIsPlaying"]),
    // Toggles audio play and pause
    toggleStatus: function() {
      this.toggleIsPlaying();

      // if Audio is not loaded load with the song selected.
      if (!this.isTrackLoaded) {
        this.loadTrack(this.song);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#player-controls {
  display: flex;
  justify-content: center;

  .control-btn {
    margin: auto 10px;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    color: rgb(211, 211, 211);
    &:hover {
      color: #fff;
    }
  }

  #play-btn,
  #pause-btn {
    font-size: 24px;
    padding: 9px;
    &:hover {
      color: #fff;
      transform: scale(1.1);
    }
  }
}
</style>