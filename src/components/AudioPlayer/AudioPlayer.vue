<template>
  <div class="audio-player" v-if="audioElement !== null">
    <div class="audio-player__inner">
      <current-track class="audio-player__left"/>

      <div class="audio-player__center">
        <player-controls/>
        <player-playback/>
      </div>

      <div class="audio-player__right">
        <volume-bar/>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentTrack from "./CurrentTrack";
import PlayerControls from "./PlayerControls";
import PlayerPlayback from "./PlayerPlayback";
import VolumeBar from "./VolumeBar";
import { mapGetters } from "vuex";

export default {
  name: "audio-player",
  components: {
    CurrentTrack,
    PlayerControls,
    VolumeBar,
    PlayerPlayback
  },
  computed: {
    // Global Variables
    ...mapGetters(["song", "songDuration", "audioElement"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.audio-player {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  z-index: 2;
  background-color: $primary-d;

  &__inner {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__left {
    width: 30%;
    min-width: 180px;
  }

  &__right {
    display: flex;
    width: 30%;
    min-width: 180px;
  }

  &__center {
    width: 60%;
  }
}
</style>